import React from "react";
import AppRoutes from "./Routes";
import { UserProvider } from "./Context/CurrentUser";

function App() {
	return <UserProvider>{<AppRoutes />}</UserProvider>;
}

export default App;
