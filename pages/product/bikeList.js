import { Link } from "@material-ui/core";
import React from "react";
import { useAuth } from "../../src/contexts/AuthContext";

const products = [
  {
    id: 1,
    slug: 1,
    name: " Himalayan",
    href: "#",
    Vehicletype: "7 Seater",
    price: "1500",
    destination: "Ranipool",
    destination2: "Siliguri",
    date: "22/02/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/49739/himalayan-left-front-three-quarter.jpeg?q=80",
    imageAlt: "Innova Crysta",
  },
  {
    id: 2,
    slug: 2,
    name: "Pulsar",
    href: "#",
    Vehicletype: "7 Seater",
    price: "800",
    destination: "Gangtok",
    destination2: "Bagdogra",
    date: "22/08/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/bw/ec/29133/Bajaj-Pulsar-150-Front-threequarter-97089.jpg?v=201711021421&wm=2&q=80",
    imageAlt: "Xylo",
  },
  {
    id: 3,
    slug: 3,
    name: "Avenger",
    href: "#",
    Vehicletype: "7 Seater",
    price: "700",
    destination: "Gangtok",
    destination2: "Bagdogra",
    date: "22/08/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/bw/ec/40512/Bajaj-Avenger-Street-160--159847.jpg?wm=2&q=80",
    imageAlt: "Sumo",
  },
  {
    id: 4,
    slug: 4,
    name: "tvs Raider",
    href: "#",
    Vehicletype: "4 Seater",
    price: "850",
    destination: "Gangtok",
    destination2: "Bagdogra",
    date: "22/08/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/103183/raider-125-right-front-three-quarter.jpeg?isig=0&q=80",
    imageAlt: "Thar",
  },
  // More products...
];

const Index = () => {
  const { currentUser } = useAuth();

  return (
    <div className="m-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Bike</h3>
        <span className="mt-3 text-sm text-gray-500">Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {!currentUser && (
            <>
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <Link href="/user_login">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <div className="flex items-end justify-end h-56 w-full bg-cover">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {product.name}
                        </h3>
                        <span className="text-gray-500 mt-2">
                          ₹ {product.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          )}
          {currentUser && (
            <>
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <Link href={`/product/${product.slug}`}>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <div className="flex items-end justify-end h-56 w-full bg-cover">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">
                          {product.name}
                        </h3>
                        <span className="text-gray-500 mt-2">
                          ₹ {product.price}
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
};

export default Index;
