import React from "react";
import Button from "../Buttons";

interface AppointmentsItemProps {
	keys: string;
	userName: string;
	AppointmentDate: Date;
}

const AppointmentsItem: React.FC<AppointmentsItemProps> = ({
	keys,
	userName,
	AppointmentDate,
}) => {
	const appointmentDate = new Date(AppointmentDate).toLocaleDateString();

	return (
		<li key={keys}>
			<p>{userName}</p>
			<p>Data Proponowana przez użytkownika:{appointmentDate}</p>
			<p>Data Proponowana:{appointmentDate}</p>
			<Button type="button" Primary>
				Potwierdź datę
			</Button>
		</li>
	);
};

export default AppointmentsItem;
