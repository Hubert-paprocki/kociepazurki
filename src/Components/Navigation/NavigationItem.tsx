import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons";

interface Props {
	linkName: string;
	link: string;
}

const NavigationItem: React.FC<Props> = ({ linkName, link }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(link);
	};

	return (
		<div className="group flex flex-col items-center">
			<Button onClick={handleClick} type={"button"} menu>
				{linkName}
			</Button>
			<div className=" w-0 group-hover:w-full border-b border-slate-400 duration-500"></div>
		</div>
	);
};

export default NavigationItem;
