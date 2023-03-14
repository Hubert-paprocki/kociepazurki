import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "./Buttons";

interface FormValues {
	name: string;
	email: string;
	date: string;
	phone: string;
}

const LoginForm: React.FC = () => {
	const currentDate = new Date();
	const currentDateString = currentDate.toISOString().substring(0, 10);

	const validate = (values: FormValues) => {
		const errors: Partial<FormValues> = {};
		if (!values.name) {
			errors.name = "Imię jest wymagane";
		}
		if (!values.email && !values.phone) {
			errors.email = "Email lub Numer telefonu jest wymagany";
			errors.phone = "Numer telefonu lub Email jest wymagany ";
		}
		if (!values.date) {
			errors.date = "Wybranie daty jest wymagane";
		} else if (
			currentDate.setHours(0, 0, 0, 0) >
			new Date(values.date).setHours(0, 0, 0, 0)
		) {
			errors.date = "Nie potrafię cofać się w przeszłość :)";
			console.log(
				currentDate.setHours(0, 0, 0, 0),
				new Date(values.date).setHours(0, 0, 0, 0)
			);
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
			initialValues={{
				name: "",
				email: "",
				date: currentDateString,
				phone: "",
			}}
			validate={validate}
			onSubmit={(values) => {
				addDoc(collection(firestore, "Appointments"), values);
			}}
		>
			{() => (
				<Form className="flex flex-col md:grid md:grid-cols-4 gap-x-3 gap-y-4 md:gap-y-6 py-10 px-20">
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
						<label htmlFor="email" className={labelClass}>
							Adres Email
						</label>
						<Field
							id="email"
							name="email"
							placeholder="Zofia.Kowalska@op.pl"
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
						<label htmlFor="date" className={labelClass}>
							Data Spotkania
						</label>
						<Field id="date" name="date" type="date" className={fieldClass} />
						<ErrorMessage
							name="date"
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
							placeholder="123-456-789"
							className={fieldClass}
						/>
						<ErrorMessage
							name="phone"
							component="p"
							className={errorClass}
						></ErrorMessage>
					</div>

					<div className="md:col-span-full place-self-center">
						<Button Primary type={"submit"}>
							Wyślij
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
