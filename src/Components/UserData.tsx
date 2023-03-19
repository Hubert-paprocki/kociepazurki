import React, { useState, useEffect } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

interface UserDataObject {
	name: string;
	email: string;
	phone: string;
}

const UserData: React.FC = () => {
	const collectionRef = collection(firestore, "Users");
	const userRef = doc(collectionRef, sessionStorage.currentUser);

	const [userData, setUserData] = useState<UserDataObject>({
		name: "",
		email: "",
		phone: "",
	});

	useEffect(() => {
		getDoc(userRef)
			.then((doc) => {
				if (doc.exists()) {
					const data = doc.data();
					setUserData({
						name: data.name,
						email: data.email,
						phone: data.phone,
					});
				} else {
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}, [userRef]);

	return (
		<>
			<p>Twoje Dane:</p>
			<p>Imię: {userData.name}</p>
			<p>Email: {userData.email}</p>
			<p>Telefon: {userData.phone}</p>
		</>
	);
};

export default UserData;
