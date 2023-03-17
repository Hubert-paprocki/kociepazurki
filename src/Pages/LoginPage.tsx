import React, { useState } from "react";
import Button from "../Components/Buttons";
import SignUpForm from "../Components/SignUpForm";
import LoginForm from "../Components/LoginForm";
import NavigationList from "../Components/Navigation/NavigationList";
import Footer from "../Components/Footer";

const LoginPage: React.FC = () => {
	const [newAccount, setNewAccount] = useState<false | true>(false);

	return (
		<>
			<div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen  pt-11 w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-300/40 via-gray-200 to-indigo-500/10">
				<NavigationList />
				<section className=" bg-gray-100 overflow-hidden xl:rounded-xl max-w-7xl shadow-xl px-12 py-8 flex flex-col items-center gap-2">
					<h1 className="text-2xl text-stone-600 font-roboto font-extralight  italic text-center ">
						{newAccount ? "Zarejestruj się" : "Zaloguj się"}
					</h1>
					{newAccount ? <SignUpForm /> : <LoginForm />}
					<p className="text-xl text-stone-600 font-roboto font-extralight mt-4 italic text-center ">
						{newAccount ? "masz juz konto?" : "nie masz jeszcze konta?"}
					</p>
					<Button
						Secondary
						type="button"
						onClick={() => setNewAccount(!newAccount)}
					>
						{newAccount ? "zaloguj się" : "Załóż konto"}
					</Button>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default LoginPage;
