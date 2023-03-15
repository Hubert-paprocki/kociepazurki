import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	type: "button" | "submit" | "reset";
	Primary?: boolean;
	Secondary?: boolean;
	onClick?: () => void;
	menu?: boolean;
}

const Button: React.FC<Props> = ({
	children,
	Primary,
	Secondary,
	type,
	onClick,
	menu,
}) => {
	let classes = "";
	if (menu) {
		classes = "pb-2 pt-3 px-4 group-hover:text-rose-600 duration-500";
	}
	if (Primary) {
		classes =
			"py-1 px-4 shadow border-2 hover:bg-stone-200 border-stone-500 hover:shadow-lg hover:-translate-y-0.5 rounded-md font-poppins uppercase font-bold text-rose-400 hover:text-rose-500 text-lg tracking-wide duration-200 hover:scale-105 active:scale-100 active:translate-y-0";
	}
	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
};

export default Button;
