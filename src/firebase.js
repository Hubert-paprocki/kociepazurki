// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAXFW2FWTIammhr50fwTm3iPegkax0Jym4",
	authDomain: "kocie-pazurki.firebaseapp.com",
	projectId: "kocie-pazurki",
	storageBucket: "kocie-pazurki.appspot.com",
	messagingSenderId: "668459474416",
	appId: "1:668459474416:web:7e51affbff23a8173c1135",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
