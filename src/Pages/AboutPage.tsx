import React from "react";
import Footer from "../Components/Footer";
import NavigationList from "../Components/Navigation/NavigationList";

const AboutPage: React.FC = () => {
	return (
		<div className="flex flex-col items-center bg-gray-200 min-h-screen  pt-10 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
			<NavigationList />
			<Footer />
		</div>
	);
};

export default AboutPage;
