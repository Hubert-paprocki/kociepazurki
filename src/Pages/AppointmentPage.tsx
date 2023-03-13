import React from "react";
import Footer from "../Components/Footer";
import SignupForm from "../Components/LoginForm";
import NavigationList from "../Components/Navigation/NavigationList";
import SocialMediaList from "../Components/SocialMedia/SocialMediaList";

const AppointmentPage: React.FC = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen  pt-11 w-full">
				<NavigationList />
				<section className=" bg-gray-100 overflow-hidden xl:rounded-xl max-w-7xl">
					<p className="text-2xl text-stone-600 font-roboto font-extralight mt-8 italic text-center px-12">
						Jeżeli chiałbyś / chciałabyś umówić się ze mną na manicure to
						skorzystaj z formularza.
					</p>
					<h2 className="text-4xl text-stone-600 font-roboto font-extralight mt-12 md:mt-16 italic text-center">
						Umów Spotkanie
					</h2>
					<SignupForm />
					<p className="text-2xl text-stone-600 font-roboto font-extralight md:mt-2 italic text-center px-12">
						Albo napisz do mnie prywatnie poprzez któryś z poniższych linków do
						moich social mediów:
					</p>
					<SocialMediaList />
				</section>
			</div>
			<Footer />
		</>
	);
};

export default AppointmentPage;
