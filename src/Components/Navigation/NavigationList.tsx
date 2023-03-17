import React from "react";
import NavigationItem from "./NavigationItem";
import { useLocation } from "react-router-dom";

interface ListedNavigation {
	id: number;
	name: string;
	link: string;
}

const navigationList: ListedNavigation[] = [
	{
		id: 1,
		name: `ICON`,
		link: `/`,
	},
	{
		id: 2,
		name: `Moje Prace`,
		link: `/moje-prace`,
	},
	{
		id: 3,
		name: `O Mnie`,
		link: `/o-mnie`,
	},
	{
		id: 4,
		name: `Umów spotkanie`,
		link: `/umow-sie`,
	},
	{
		id: 5,
		name: `Zaloguj się`,
		link: `/zaloguj-sie`,
	},
	{
		id: 6,
		name: `twoje konto`,
		link: `/twoje-konto`,
	},
];

const NavigationList: React.FC = () => {
	const currentUser = sessionStorage.currentUser;
	const location = useLocation();

	const renderedNavigationList = navigationList.map((navigation) => {
		if (navigation.name === "twoje konto" && !currentUser) {
			return null;
		}
		return (
			<NavigationItem
				key={navigation.id}
				linkName={navigation.name}
				link={navigation.link}
				active={location.pathname === navigation.link}
			/>
		);
	});

	return (
		<div className="fixed bg-slate-100 w-full top-0 flex justify-center flex-row gap-x-8 font-poppins text-stone-600 font-bold">
			{renderedNavigationList}
		</div>
	);
};

export default NavigationList;
