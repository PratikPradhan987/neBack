import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../src/contexts/AuthContext";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sellermain() {
  const router = useRouter();
  const { login, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Userlogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast("Credentials not valid.");
      // alert("Credentials not valid.");
    }
    // else if(email || password){
    //   const q = query(
    //     collection(database, "users"),
    //     where("email", "==", email)
    //   );
    // }
    login(email, password)
      .then((response) => {
        router.push("/Seller/seller");
        console.table(response);
      })
      .catch((error) => {
        toast(error.message);
        toast("Some Error");
        router.push("/Seller/SellerSignup");
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-grey-lighter  my-48">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              Sign in to your account
            </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />

            <input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-black-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              onClick={Userlogin}
              type="submit"
              className="border-4 border-black w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-grey-dark mt-6">
              <a className="no-underline border-b border-blue text-blue">
                Create an account first!
                <Link href="/Seller/SellerSignup"> Sign Up</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex-shrink-0  mt-2 border-t-2 border-black">
        <Link passHref href="/">
          <h2 className="h-16 w-full flex justify-center py-2 px-4 font-medium  text-white bg-pink-600 hover:bg-pink-700">
            Go Back to Home Page
          </h2>
        </Link>
      </footer>
    </>
  );
}

export default Sellermain;
