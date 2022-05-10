import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavDropdown from "./NavbarDropdown";
import Othersmenu from "./Othersdropdownmenu";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../src/contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const Userlogout = (e) => {
    e.preventDefault();
    logout();
  };
  // console.table(currentUser);
  // console.table(currentUser);

  return (
    <>
      <header className="text-gray-600 body-font bg-white sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                // width={40}
                // height={40}
                // alt="logo"
                src="https://sntonline.sikkim.gov.in/NewAssets/img/logo.png"
                className="w-10 h-10 rounded-full"
              />
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              <span className="font-bold ml-3 text-xl">Sikkim.co</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tour">
              <a className="mr-5 hover:text-gray-900">Tour</a>
            </Link>
            <Link href="/bike">
              <a className="mr-5 hover:text-gray-900">Bike</a>
            </Link>
            <Link href="/cab">
              <a className="mr-5 hover:text-gray-900">Cab</a>
            </Link>
            {/* <Link href="/other">
              <a className="mr-5 hover:text-gray-900">Others</a>
            </Link>             */}
            <Othersmenu />
            {!currentUser && (
              <Link passHref href="/user_login">
                <div>
                  <FaUserCircle className="cursor-pointer mr-5 w-8 h-8 rounded-full" />
                </div>
              </Link>
            )}
            {currentUser &&<NavDropdown />}
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
