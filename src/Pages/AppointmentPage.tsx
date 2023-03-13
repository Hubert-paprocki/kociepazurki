import React from "react";
import Footer from "../Components/Footer";
import SignupForm from "../Components/LoginForm";
import NavigationList from "../Components/Navigation/NavigationList";
import SocialMediaList from "../Components/SocialMedia/SocialMediaList";

const AppointmentPage: React.FC = () => {
	return (
		<div className="flex flex-col items-center bg-gray-200 min-h-screen  pt-10 w-full">
			<NavigationList />
			<section className=" bg-gray-100 overflow-hidden rounded-sm  max-w-7xl min-h-screen ">
				<p className="text-2xl text-stone-600 font-roboto font-extralight mt-8 italic text-center px-12">
					Jeżeli chiałbyś / chciałabyś umówić się ze mną na manicure to
					skorzystaj z formularza albo napisz do mnie prywatnie poprzez któryś z
					poniższych linków do moich social mediów:
				</p>
				<SocialMediaList />
				<h2 className="text-4xl text-stone-600 font-roboto font-extralight mt-24 italic text-center">
					Umów Spotkanie
				</h2>
				<SignupForm />
			</section>
			<Footer />
		</div>
	);
};

export default AppointmentPage;
