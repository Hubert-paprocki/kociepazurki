import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "./Buttons";
import { getAuth } from "firebase/auth";

interface AppointmentFormProps {
	setAppointment: () => void;
}
interface FormValues {
	date: string;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
	setAppointment,
}) => {
	const currentDate = new Date();
	const currentDateString = currentDate.toISOString().substring(0, 10);

	const validate = (values: FormValues) => {
		const errors: Partial<FormValues> = {};

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
				const { date, phone } = values;
				const auth = getAuth();
				const userData = auth.currentUser;
				if (userData !== null) {
					userData.providerData.forEach((profile) => {
						const userId = profile.uid;
						const userName = profile.displayName;
						const userEmail = profile.email;

						addDoc(collection(firestore, sessionStorage.currentUser), {
							date,
							phone,
							userId,
							userName,
							userEmail,
						});
					});
				}
				setAppointment();
				resetForm();
			}}
		>
			{() => (
				<Form className="flex flex-col gap-x-3 gap-y-4 md:gap-y-6 py-10 px-20">
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

					<div className="place-self-center">
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

					<div className="place-self-center">
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
