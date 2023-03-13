import React from "react";
import PortfolioShowcaseItem from "./PortfolioShowcaseItem";

interface ShowcaseList {
	id: number;
	name: string;
	imgLink: string;
}

const PortfolioShowcaseListArr: ShowcaseList[] = [
	{
		id: 1,
		name: "w1",
		imgLink: "w1",
	},
	{
		id: 2,
		name: "w2",
		imgLink: "w2",
	},
	{
		id: 3,
		name: "w3",
		imgLink: "w3",
	},
	{
		id: 4,
		name: "w4",
		imgLink: "w4",
	},
];

const PortfolioShowcaseList: React.FC = () => {
	const renderedPortfolioShowcaseList = PortfolioShowcaseListArr.map(
		(navigation) => {
			return (
				<PortfolioShowcaseItem
					key={navigation.id}
					name={navigation.name}
					imgLink={navigation.imgLink}
				/>
			);
		}
	);
	return (
		<div className=" bg-slate-100 flex justify-center mx-auto flex-row gap-x-5 h-10 font-poppins text-stone-600 font-bold ">
			{renderedPortfolioShowcaseList}
		</div>
	);
};

export default PortfolioShowcaseList;
