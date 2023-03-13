import React from "react";
import Footer from "../Components/Footer";
import NavigationList from "../Components/Navigation/NavigationList";

const PortfolioPage: React.FC = () => {
	return (
		<div className="flex flex-col items-center bg-gray-200 min-h-screen  pt-10 w-full">
			<NavigationList />
			<Footer />
		</div>
	);
};

export default PortfolioPage;
