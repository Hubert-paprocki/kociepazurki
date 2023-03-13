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
	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
};

export default Button;
