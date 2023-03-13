import React from "react";

interface Props {
	name: string;
	imgLink: string;
}

const PortfolioShowcaseItem: React.FC<Props> = ({ name, imgLink }) => {
	return (
		<figure className="border-2 rounded-sm w-1/4 flex flex-col items-center">
			<img src={imgLink} alt={name} />
			<figcaption className="p-2">{name}</figcaption>
		</figure>
	);
};

export default PortfolioShowcaseItem;
