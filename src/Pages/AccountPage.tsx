import React from "react";
import NavigationList from "../Components/Navigation/NavigationList";
import Footer from "../Components/Footer";
import UserData from "../Components/UserData";
import AppointmentsList from "../Components/AppointmentsList/AppointmentsList";

const AccountPage: React.FC = () => {
	return (
		<>
			<NavigationList />
			<div className="flex flex-col items-center justify-center bg-gray-200 min-h-screen  pt-10 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
				<NavigationList />
				<section className=" bg-gray-100 overflow-hidden rounded-sm  max-w-7xl p-10">
					<UserData />
					<AppointmentsList />
				</section>
			</div>
			<Footer />
		</>
	);
};

export default AccountPage;
