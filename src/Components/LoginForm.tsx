import React from "react";
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

		if (!values.email && values.phone) {
			if (!/^(?!0)\d{9}$/.test(values.phone)) {
				errors.phone = "Zły numer telefonu";
			}
		}
		if (!values.phone && values.email) {
			if (!/\S+@\S+\.\S+/.test(values.email)) {
				errors.email = "Zły adres email";
			}
		}
		return errors;
	};

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
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ errors, touched }) => (
				<Form className="flex flex-col md:flex-row gap-3 py-10 px-20">
					<div className="">
						<label htmlFor="name" className=" font-medium mb-1">
							Imię
						</label>
						<Field
							id="name"
							name="name"
							placeholder="Zofia Kowalska"
							className={`w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 ${
								errors.name && touched.name
									? "border-rose-500"
									: "border-gray-300"
							}`}
						/>
						<ErrorMessage name="name">
							{(msg) => <div className="text-rose-500 text-sm mt-1">{msg}</div>}
						</ErrorMessage>
					</div>

					<div className="">
						<label htmlFor="email" className=" font-medium mb-1 mt-4">
							Adres Email
						</label>
						<Field
							id="email"
							name="email"
							placeholder="Zofia.Kowalska@op.pl"
							type="email"
							className={`w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 ${
								errors.email && touched.email
									? "border-rose-500"
									: "border-gray-300"
							}`}
						/>
						<ErrorMessage name="email">
							{(msg) => <div className="text-rose-500 text-sm mt-1">{msg}</div>}
						</ErrorMessage>
					</div>
					<div className="">
						<label htmlFor="date" className=" font-medium mb-1 mt-4">
							Data Spotkania
						</label>
						<Field
							id="date"
							name="date"
							type="date"
							className={`w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 ${
								errors.date && touched.date
									? "border-rose-500"
									: "border-gray-300"
							}`}
						/>
						<ErrorMessage name="date">
							{(msg) => <div className="text-rose-500 text-sm mt-1">{msg}</div>}
						</ErrorMessage>
					</div>

					<div className="">
						<label htmlFor="phone" className=" font-medium mb-1 mt-4">
							Numer Telefonu
						</label>
						<Field
							id="phone"
							name="phone"
							placeholder="123-456-789"
							className={`w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 ${
								errors.phone && touched.phone
									? "border-rose-500"
									: "border-gray-300"
							}`}
						/>
						<ErrorMessage name="phone">
							{(msg) => <div className="text-rose-500 text-sm mt-1">{msg}</div>}
						</ErrorMessage>
					</div>

					<Button type={"submit"}> Wyślij</Button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
