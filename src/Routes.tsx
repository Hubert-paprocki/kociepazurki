import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AppointmentPage from "./Pages/AppointmentPage";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/o-mnie" element={<AboutPage />} />
				<Route path="/moje-prace" element={<PortfolioPage />} />
				<Route path="/umow-sie" element={<AppointmentPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
