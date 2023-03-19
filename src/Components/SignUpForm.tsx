import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Button from "./Buttons";
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";

interface SignUpFormValues {
	name: string;
	email: string;
	password: string;
	phone: string;
}

const SignUpForm: React.FC = () => {
	const [authError, setAuthError] = useState<string>("");

	const initialValues: SignUpFormValues = {
		email: "",
		password: "",
		name: "",
		phone: "",
	};

	const onSubmit = async (values: SignUpFormValues) => {
		const auth = getAuth();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);
			if (userCredential && userCredential.user) {
				const user = userCredential.user;
				console.log(user);
				const uId = user.uid;
				const userDocRef = doc(firestore, "Users", uId);
				await setDoc(userDocRef, values);
				await updateProfile(user, {
					displayName: values.name,
					photoURL: "https://example.com/jane-q-user/profile.jpg",
				});

				await sendEmailVerification(user);
			}
		} catch (error) {
			setAuthError("Użytkownik o tych danych już istnieje");
		}
	};

	const validate = (values: SignUpFormValues) => {
		const errors: Partial<SignUpFormValues> = {};
		if (!values.name) {
			errors.name = "Imię jest wymagane";
		}
		if (!values.password) {
			errors.password = "Password is required";
		}
		if (!values.email && !values.phone) {
			errors.email = "Email lub Numer telefonu jest wymagany";
			errors.phone = "Numer telefonu lub Email jest wymagany ";
		}
		if ((!values.email && values.phone) || (values.email && values.phone)) {
			if (!/^(?!0)\d{9}$/.test(values.phone)) {
				errors.phone = "Zły numer telefonu";
			}
		}
		if ((!values.phone && values.email) || (values.email && values.phone)) {
			if (!/\S+@\S+\.\S+/.test(values.email)) {
				errors.email = "Zły adres email";
			}
		}
		return errors;
	};

	const fieldClass =
		"w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-stone-300  py-2 px-4 outline-none placeholder-stone-500 text-stone-600 font-poppins caret-stone-500 font-semibold";
	const errorClass = "text-rose-400 text-sm font-semibold font-poppins p-1";
	const labelClass =
		"font-medium text-stone-600 p-1 font-poppins font-semibold";

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validate={validate}
		>
			<Form className="py-10 px-20 flex flex-col gap-6 rounded-sm">
				<div className="">
					<label htmlFor="name" className={labelClass}>
						Imię
					</label>
					<Field
						id="name"
						name="name"
						placeholder="Zofia Kowalska"
						className={fieldClass}
					/>
					<ErrorMessage
						name="name"
						component="p"
						className={errorClass}
					></ErrorMessage>
				</div>
				<div className="">
					<label htmlFor="password" className={labelClass}>
						Hasło
					</label>
					<Field
						name="password"
						type="password"
						placeholder="Hasło"
						className={fieldClass}
					/>
					<ErrorMessage
						name="password"
						component="p"
						className={errorClass}
					></ErrorMessage>
				</div>
				<div className="">
					<label htmlFor="email" className={labelClass}>
						Adres Email
					</label>
					<Field
						id="email"
						name="email"
						placeholder="Zofia.Kowalska@poczta.pl"
						type="email"
						className={fieldClass}
					/>
					<ErrorMessage
						name="email"
						component="p"
						className={errorClass}
					></ErrorMessage>
				</div>
				<div className="">
					<label htmlFor="phone" className={labelClass}>
						Numer Telefonu
					</label>
					<Field
						id="phone"
						name="phone"
						placeholder="123456789"
						className={fieldClass}
					/>
					<ErrorMessage
						name="phone"
						component="p"
						className={errorClass}
					></ErrorMessage>
				</div>
				<Button Primary type={"submit"}>
					Wyślij
				</Button>
				{authError && <p className={errorClass}>{authError}</p>}
			</Form>
		</Formik>
	);
};

export default SignUpForm;
