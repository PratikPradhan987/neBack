import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../utils/init-firebase";

import {
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [fireDatas, setFireData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  function reset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  const articles = [];
  function readData() {
    router.push("/product/Cablist");

    console.log("fireData");
    // return fireData;
  }

  // console.table(data[0]);

  // return ShowData(data);
  // async function ShowData(data) {
  //   router.push("/product/Cablist");
  //   // console.table(data[0]);

  //   return data;
  // }
  async function GetData(data) {
    // console.log(data.Location);

    const citiesRef = collection(database, "SellercabInfo");
    const q = query(
      citiesRef,
      where("Location", "==", data.Location),
      where("CabType", "==", data.CabType)
      // where("StartDate", "<=", data.StartDate),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // setFireData(
      //   .map((data) => {
      //     return { ...data.data(), id: data.id };
      //   })
      // );
      articles.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    // console.table(articles);
    setFireData(
      articles.map((datas) => {
        return { ...datas, id: datas.id };
      })
    );
    readData();
    // console.log(articles);

    // if (q.exists()) {
    //   // Convert to City object
    //   const city = q.data();
    //   // Use a City instance method
    //   console.log(city.toString());
    // } else {
    //   console.log("No such document!");
    // }
  }
  async function GetBikeData(data) {
    // console.log(data.Location);

    const citiesRef = collection(database, "SellerBikeInfo");
    const q = query(
      citiesRef,
      where("Location", "==", data.Location),
      // where("StartDate", "<=", data.StartDate),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // setFireData(
      //   .map((data) => {
      //     return { ...data.data(), id: data.id };
      //   })
      // );
      articles.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    // console.table(articles);
    setFireData(
      articles.map((datas) => {
        return { ...datas, id: datas.id };
      })
    );
    readData();
    // console.log(articles);

    // if (q.exists()) {
    //   // Convert to City object
    //   const city = q.data();
    //   // Use a City instance method
    //   console.log(city.toString());
    // } else {
    //   console.log("No such document!");
    // }
  }

  async function ReadData(data) {
    const citiesRef = collection(database, "SellerBikeInfo");
    const q = query(citiesRef, where("Location", "==", data));

    const querySnapshot = await getDocs(q);

    // await getDocs(q)
    querySnapshot.forEach((doc) => {
      // setFireData(
      //   .map((data) => {
      //     return { ...data.data(), id: data.id };
      //   })
      // );

      articles.push({
        id: doc.id,
        ...doc.data(),
      });

      // console.table(articles);
    });

    return articles;
  }

  const value = {
    currentUser,
    fireDatas,
    register,
    login,
    logout,
    signInWithGoogle,
    reset,
    ReadData,
    GetData,
    GetBikeData,
    readData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
