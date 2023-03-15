import React from "react";
import Footer from "../Components/Footer";
import AppointmentForm from "../Components/AppointmentForm";
import NavigationList from "../Components/Navigation/NavigationList";
import SocialMediaList from "../Components/SocialMedia/SocialMediaList";

const AppointmentPage: React.FC = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen  pt-11 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
				<NavigationList />
				<section className=" bg-gray-100 overflow-hidden xl:rounded-xl max-w-7xl shadow-xl">
					<h2 className="text-2xl text-stone-600 font-roboto font-extralight mt-8 italic text-center px-12">
						Jeżeli chiałbyś / chciałabyś umówić się ze mną na manicure to
						skorzystaj z formularza.
					</h2>
					<p className="text-xl text-stone-600 font-roboto font-extralight mt-4 italic text-center px-12">
						Niestety nie mogę zagwarantować Ci mojej dostępności w konkretnym
						dniu, ale z pewnością znajdziemy dogodny dla nas termin.
					</p>
					<h1 className="text-4xl text-stone-600 font-roboto font-extralight mt-12 md:mt-16 italic text-center">
						Umów Spotkanie
					</h1>
					<AppointmentForm />
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
