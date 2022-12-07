import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCX3LZsDgvy93G27Uo3FYnV_7HbvSb08NU",
  authDomain: "nbmain-193b6.firebaseapp.com",
  projectId: "nbmain-193b6",
  storageBucket: "nbmain-193b6.appspot.com",
  messagingSenderId: "793578226156",
  appId: "1:793578226156:web:5d409b6515fe019f0ec0c9",
  measurementId: "G-TETFBWH0H2"
};


const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export async function createFormFirestore(formData){
    const collectionRef = collection(DB, "consultas");
    const docRef = await addDoc(collectionRef, formData);
    return(docRef.id)
}
