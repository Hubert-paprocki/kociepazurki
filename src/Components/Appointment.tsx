import React from "react";
interface NewAppointmentsProps {
	name: string;
	date: string;
	phone: string;
	email: string;
	picked: string;
}

const Appointment: React.FC<NewAppointmentsProps> = ({
	name,
	date,
	phone,
	email,
	picked,
}) => {
	const dataClass = "font-medium text-rose-600 ml-2";
	return (
		<div className="text-2xl text-stone-600 font-roboto font-extralight text-left  border-b-2 py-8 leading-relaxed">
			<p>
				Imię i Nazwisko:
				<span className={dataClass}>{name}</span>
			</p>
			<p>
				Najbardziej odpowiadająca data spotkania:
				<span className={dataClass}>{date}</span>
			</p>
			{phone && (
				<p>
					Numer do kontaktu:
					<span className={dataClass}>{phone}</span>
				</p>
			)}
			{email && (
				<p>
					Email Do kontaktu:
					<span className={dataClass}>{email}</span>
				</p>
			)}
			<p>
				Preferowana forma kontaktu:<span className={dataClass}>{picked}</span>
			</p>
		</div>
	);
};

export default Appointment;
