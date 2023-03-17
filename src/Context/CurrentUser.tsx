import React, { createContext, useState } from "react";

interface UserContextType {
	currentUser: null | string;
	setCurrentUser: React.Dispatch<React.SetStateAction<null | string>>;
}

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => {},
});

export const UserProvider: React.FC = () => {
	const [currentUser, setCurrentUser] = useState<null | string>(null);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};
