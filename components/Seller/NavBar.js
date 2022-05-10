import React from "react";
import Link from "next/link";
import { useAuth } from "../../src/contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const Userlogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {!currentUser && (
            <>
              <Link href={"/Seller/seller"}>
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <span className="font-bold ml-3 text-xl">SELLER PAGE</span>
                </a>
              </Link>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href={"/Seller/SellerLogin"}>
                  <a className="mr-5 hover:text-gray-900">Tour</a>
                </Link>
                <Link href={"/Seller/SellerLogin"}>
                  <a className="mr-5 hover:text-gray-900">Bike</a>
                </Link>
                <Link href={"/Seller/SellerLogin"}>
                  <a className="mr-5 hover:text-gray-900">Cab</a>
                </Link>
                <Link passHref href="/Seller/SellerLogin">
                  <div>
                    <FaUserCircle className="cursor-pointer mr-5 w-8 h-8 rounded-full" />
                  </div>
                </Link>
              </nav>
            </>
          )}

          {currentUser && (
            <>
              <Link href={"/Seller/seller"}>
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <span className="font-bold ml-3 text-xl">SELLER PAGE</span>
                </a>
              </Link>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href={"/Seller/Tour"}>
                  <a className="mr-5 hover:text-gray-900">Tour</a>
                </Link>
                <Link href={"/Seller/bike"}>
                  <a className="mr-5 hover:text-gray-900">Bike</a>
                </Link>
                <Link href={"/Seller/Cab"}>
                  <a className="mr-5 hover:text-gray-900">Cab</a>
                </Link>
                <button
                  onClick={Userlogout}
                  className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200  text-base "
                >
                  LogOut
                </button>
              </nav>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
