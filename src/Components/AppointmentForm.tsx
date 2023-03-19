import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "./Buttons";
interface AppointmentFormProps {
	setAppointment: () => void;
}
interface FormValues {
	name: string;
	email: string;
	date: string;
	phone: string;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
	setAppointment,
}) => {
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
	const checkboxClass =
		"font-medium text-stone-600 p-1 font-poppins font-semibold flex items-center";

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				date: currentDateString,
				phone: "",
			}}
			validate={validate}
			onSubmit={(values, { resetForm }) => {
				addDoc(collection(firestore, "Appointments"), values);
				setAppointment();
				resetForm();
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
						<label htmlFor="date" className={labelClass}>
							Data Spotkania
						</label>
						<Field
							id="date"
							name="date"
							type="datetime-local"
							className={fieldClass}
						/>
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
					<div className=" md:col-span-full place-self-center">
						<p className="text-xl text-stone-600 font-roboto font-extralight mt-4 italic text-center">
							Preferowana forma kontaku:
						</p>
						<div className="flex gap-4">
							<label className={checkboxClass}>
								<Field type="radio" name="picked" value="SMS" />
								SMS
							</label>
							<label className={checkboxClass}>
								<Field type="radio" name="picked" value="Telefon" />
								Telefon
							</label>
							<label className={checkboxClass}>
								<Field type="radio" name="picked" value="Email" />
								Email
							</label>
						</div>
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

export default AppointmentForm;
