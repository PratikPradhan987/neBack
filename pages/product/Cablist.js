import { Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { database } from "../../src/utils/init-firebase";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { useAuth } from "../../src/contexts/AuthContext";


function Index() {
  const { fireDatas, currentUser } = useAuth();
  const [fireData, setFireData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const Data = readData()
    //   .then((response) => {
    //     // setFireData(
    //     //   response.map((data) => {
    //     //     return { ...data, id: data.id };
    //     //   })
    //     // );
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error.message));
    // console.log(Data);
    console.log(fireDatas);
  };

  // const [article, setArticle] = useState(null);
  // useEffect(() => {
  //   const q = collection(database, "SellercabInfo");
  //   const docRef = query(q);
  //   onSnapshot(docRef, (snapshot) => {
  //     const article = snapshot.docs.map((doc) => ({
  //       ...snapshot.data(),
  //       id: snapshot.id,
  //     }));
  //     setArticle(article);
  //     console.log(article);
  //   });
  // }, []);
  return (
    <div className="m-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium"></h3>
        <span className="mt-3 text-sm text-gray-500">Products</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {currentUser && (
            <>
              {fireDatas.map((product) => (
                <li key={product.id} className="flex">
                <Link href={`/product/${product.id}`}>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <div className="flex items-end justify-end h-56 w-full bg-cover">
                        <img
                          src={product.ImageUrl}
                          alt={product.imageAlt}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {product.CabType}
                        </h3>
                        <span className="text-gray-500 mt-2">
                          ₹ {product.Price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          )}

          {!currentUser && (
            <>
              {fireDatas.map((product) => (
                <li key={product.id} className="flex">
                  <Link href={`/user_login`}>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <div className="flex items-end justify-end h-56 w-full bg-cover">
                        <img
                          src={product.ImageUrl}
                          alt={product.imageAlt}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {product.CabType}
                        </h3>
                        <span className="text-gray-500 mt-2">
                          ₹ {product.Price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center">
          <div className="flex rounded-md mt-8">
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
            >
              <span>Previous</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>1</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>2</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>3</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
