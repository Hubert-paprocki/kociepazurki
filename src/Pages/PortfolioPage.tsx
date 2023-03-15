import React from "react";
import Footer from "../Components/Footer";
import NavigationList from "../Components/Navigation/NavigationList";
import PortfolioShowcaseList from "../Components/PortfolioShowcase/PortfolioShowcaseList";

const PortfolioPage: React.FC = () => {
	return (
		<>
			<div className="flex flex-col items-center bg-gray-200 min-h-screen  pt-10 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
				<NavigationList />
				<div className=" bg-gray-100 overflow-hidden rounded-sm  max-w-7xl">
					<h1 className="text-3xl font-roboto italic text-stone-700 font-bold leading-snug">
						Znajdziesz tu zdjęcia trendów w świecie stylizacji paznokci,
						wykonane przeze mnie na różnorodnych klientkach.
					</h1>
					<h2 className="text-xl text-stone-600 font-roboto font-extralight  mt-8 itali mr-2 ">
						W mojej pracy stawiam przede wszystkim na precyzję i dbałość o
						detale, co w przypadku manicure jest szczególnie ważne. Zdjęcia w
						portfolio prezentują moje umiejętności w zakresie stylizacji
						paznokci w różnych stylach - od minimalistycznych i eleganckich po
						odważne i kolorowe. Nieustannie rozwijam swoje umiejętności i śledzę
						najnowsze trendy w dziedzinie stylizacji paznokci, co pozwala mi
						oferować klientkom najwyższej jakości usługi. W moim portfolio
						manicure znajdziesz zatem wiele inspiracji, które pomogą Ci wybrać
						odpowiedni styl dla siebie i pozwolą na poznanie mojego podejścia do
						pracy.
					</h2>
					<PortfolioShowcaseList />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PortfolioPage;
