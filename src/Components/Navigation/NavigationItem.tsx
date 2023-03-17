import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Buttons";

interface Props {
	linkName: string;
	link: string;
	active?: boolean;
}

const NavigationItem: React.FC<Props> = ({ linkName, link, active }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = () => {
		navigate(link);
	};

	const isActive = location.pathname === link;

	return (
		<div className="group flex flex-col items-center">
			<Button onClick={handleClick} type="button" menu>
				{linkName}
			</Button>
			<div
				className={`w-0 ${
					isActive ? "w-full" : ""
				} w-0 group-hover:w-full border-b border-slate-400 duration-500`}
			></div>
		</div>
	);
};

export default NavigationItem;
