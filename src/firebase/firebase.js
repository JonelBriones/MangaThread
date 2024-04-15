// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDoMbMfZ29wAJCiSHl9hanPzTkHXUJftPA",
  authDomain: "manga-thread.firebaseapp.com",
  projectId: "manga-thread",
  storageBucket: "manga-thread.appspot.com",
  messagingSenderId: "396545479177",
  appId: "1:396545479177:web:cd98be6be24319da1a5ed8",
  measurementId: "G-1RTZNL0CNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getMangas(db) {
  //   const mangasCol = collection(db, "mangas");
  //   const mangaSnapshot = await getDocs(mangasCol);
  //   const mangaList = mangaSnapshot.docs.map((doc) => doc.data());
  //   return mangaList;
}
// const mangasRef = collection(db, "mangas");

// get data

const docRef = doc(db, "mangas", "Dragonball");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Found manga", docSnap.data());
} else {
  console.log("Manga not found...");
}

export { getMangas, docSnap };
