import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import AdminAuth from "../Components/LoginForm";
import Appointment from "../Components/Appointment";

const AdminPage: React.FC = () => {
	const [isAuthValid, setIsAuthValid] = useState(false);
	const [appointmentsData, setAppointmentsData] = useState<any[]>([]);

	function handleAuthSuccess() {
		setIsAuthValid(true);
	}

	useEffect(() => {
		if (isAuthValid) {
			const q = query(collection(firestore, "Appointments"));
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				const newData = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setAppointmentsData(newData);
			});
			console.log(appointmentsData);
			return () => unsubscribe();
		}
	});

	const renderedAppointmentsList = appointmentsData.map((data) => (
		<Appointment
			key={data.id}
			name={data.name}
			date={data.date}
			phone={data.phone}
			email={data.email}
			picked={data.picked}
		/>
	));

	return (
		<div className="flex flex-col items-center justify-center bg-gray-200 min-h-screen pt-10 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
			<div className=" bg-gray-100 overflow-hidden xl:rounded-xl max-w-7xl shadow-xl px-12 py-8 text-center">
				{!isAuthValid ? (
					<AdminAuth />
				) : (
					<>
						<h1 className="text-4xl text-stone-600 font-roboto font-extralight italic text-center">
							Najnowsze zgłoszenia:
						</h1>
						<ul className="">{renderedAppointmentsList}</ul>
					</>
				)}
			</div>
		</div>
	);
};

export default AdminPage;
