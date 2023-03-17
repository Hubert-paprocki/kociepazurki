import React from "react";
import Footer from "../Components/Footer";
import NavigationList from "../Components/Navigation/NavigationList";
import PortfolioShowcaseList from "../Components/PortfolioShowcase/PortfolioShowcaseList";
import profilePic from "../Images/Gaba.jpg";
const HomePage: React.FC = () => {
	return (
		<>
			<div className="flex flex-col items-center bg-gray-200 min-h-screen  pt-10 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
				<NavigationList />
				<section className=" bg-gray-100 overflow-hidden rounded-sm  max-w-7xl">
					<div className="flex justify-between">
						<div className="px-12 flex flex-col justify-center">
							<h1 className="text-6xl font-roboto italic text-stone-700 font-bold leading-snug">
								Hej. Mam na imię <span className="text-rose-500">Gabriela</span>
								...
							</h1>
							<h2 className="text-4xl text-stone-600 font-roboto font-extralight  mt-8 italic text-right mr-2 ">
								...I jestem stylistką paznokci
							</h2>
						</div>
						<img
							className="p-8 w-1/4 h-1/4 object-cover rounded-full"
							src={profilePic}
							alt=""
						/>
					</div>
				</section>
				<section className=" bg-gray-100 overflow-hidden rounded-sm max-w-7xl">
					<div className="flex justify-between">
						<img className="p-2 w-2/5 object-cover" src={profilePic} alt="" />
						<div className="px-12 py-32">
							<h1 className="text-4xl font-roboto italic text-stone-700 font-bold leading-snug">
								Tematem paznokci zaczekam interesować się kilka lat temu.
							</h1>
							<h2 className="text-2xl text-stone-600 font-roboto font-extralight  mt-8 italic text-right mr-2 ">
								To była miłość od pierwszego zdobienia. Początki jak to zawsze
								były ciężkie, ale kiedy już znalazłam coś co pokochałam nie
								chciałam z tego rezygnować. Zaczęłam więc ćwiczyć i rozwijać się
								w branży paznokci. Ciągle się uczę licząc, że pewnego dnia dojdę
								do wymarzonej przeze mnie perfekcji. Jeśli podoba Ci się to co
								robię zapraszam na moją stronę oraz do kontaktu ze mną, jeśli
								chciałabyś przyjść do mnie na stylizację w roli modelki.
							</h2>
						</div>
					</div>
				</section>
				<section className=" bg-gray-100 overflow-hidden rounded-sm max-w-7xl">
					<h2 className="text-4xl text-stone-600 font-roboto font-extralight  mt-8 italic text-right p-8">
						Oto kilka moich kreacji:
					</h2>
					<PortfolioShowcaseList small />
				</section>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
