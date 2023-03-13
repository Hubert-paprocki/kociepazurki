import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import SocialMediaItem from "./SocialMediaItem";
import { ReactNode } from "react";

interface ListedSocialMedia {
	id: number;
	name: string;
	icon: ReactNode;
	link: string;
}

const ListedSocialMedias: ListedSocialMedia[] = [
	{
		id: 1,
		name: `Facebook`,
		icon: <RiFacebookFill />,
		link: `https://www.facebook.com/jezuit344`,
	},
	{
		id: 2,
		name: `Instagram`,
		icon: <RiInstagramLine />,
		link: `https://www.instagram.com/kocie.pazurki_/`,
	},
];

function SocialMediaList() {
	const renderedSocialMediaList = ListedSocialMedias.map((socialMedia) => {
		return (
			<SocialMediaItem
				key={socialMedia.id}
				img={socialMedia.icon}
				link={socialMedia.link}
			></SocialMediaItem>
		);
	});
	return (
		<div className="flex flex-wrap justify-center items-center max-w-6xl  mx-auto  my-12 flex-row gap-x-5">
			{renderedSocialMediaList}
		</div>
	);
}

export default SocialMediaList;
