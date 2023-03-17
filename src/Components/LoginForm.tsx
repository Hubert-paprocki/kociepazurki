import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";

interface FormValues {
	email: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const [authError, setAuthError] = useState<string>("");
	const navigate = useNavigate();
	const validate = (values: FormValues) => {
		const errors: Partial<FormValues> = {};
		if (!values.email) {
			errors.email = "Email lub Numer telefonu jest wymagany";
		}
		if (!values.password) {
			errors.password = "Hasło jest wymagane";
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
			initialValues={{
				email: "",
				password: "",
			}}
			validate={validate}
			onSubmit={async (values, { resetForm }) => {
				const auth = getAuth();
				try {
					const userCredential = await signInWithEmailAndPassword(
						auth,
						values.email,
						values.password
					);
					const { uid: currentUser } = userCredential.user;
					sessionStorage.setItem("currentUser", currentUser);
					console.log(`Logged in user: ${currentUser} `);
					const docRef = doc(firestore, "Users", currentUser);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						const userData = docSnap.data();
						console.log("Document data:", userData);
						const currentUserEmail = userData.email;
						const currentUserName = userData.name;
						const currentUserPhone = userData.phone;
						sessionStorage.setItem("currentUserEmail", currentUserEmail);
						sessionStorage.setItem("currentUserName", currentUserName);
						sessionStorage.setItem("currentUserPhone", currentUserPhone);
					} else {
						console.log("No such document!");
					}

					navigate("/");
				} catch (error) {
					setAuthError("Nieprawidłowy adres email lub hasło");
					resetForm();
					console.log(error);
				}
			}}
		>
			{() => (
				<Form className="py-10 px-20 flex flex-col gap-6 rounded-sm">
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
					</div>
					<div className="">
						<label htmlFor="email" className={labelClass}>
							Adres Email
						</label>
						<Field
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
						{authError && <p className={errorClass}>{authError}</p>}
					</div>
					<Button Primary type={"submit"}>
						Wyślij
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
