import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestore } from "../../firebase";
import AppointmentsItem from "./AppointmentsItem";

const AppointmentsList: React.FC = () => {
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		const q = query(collection(firestore, sessionStorage.currentUser));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			console.log(newData);
			setData(newData);
		});

		return () => unsubscribe();
	}, []);
	const renderedAppointmentsList = data
		.slice()
		.sort(
			(a, b) =>
				new Date(b.taskDeadline).getTime() - new Date(a.taskDeadline).getTime()
		)
		.map((item) => (
			<AppointmentsItem
				keys={item.id}
				userName={item.name}
				AppointmentDate={item.date}
			/>
		));
	return (
		<div className="">
			<h2>Lista Spotkań:</h2> <ul>{renderedAppointmentsList}</ul>
		</div>
	);
};

export default AppointmentsList;
