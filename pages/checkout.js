// import React from "react";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { useAuth } from "../src/contexts/AuthContext";

// const products = [
//   {
//     id: 1,
//     name: "Innova Crysta",
//     href: "#",
//     Vehicletype: "7 Seater",
//     price: "4000",
//     destination: "Ranipool",
//     destination2: "Siliguri",

//     imageSrc:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=75",
//     imageAlt: "Innova Crysta",
//   },
//   {
//     id: 2,
//     name: "Xylo",
//     href: "#",
//     Vehicletype: "7 Seater",
//     price: "3000",
//     destination: "Gangtok",
//     destination2: "Bagdogra",

//     imageSrc:
//       "https://imgd.aeplcdn.com/664x374/cw/ec/31432/Mahindra-Xylo-Exterior-109406.jpg?v=201711021421&q=75",
//     imageAlt: "Xylo",
//   },
//   // More products...
// ];

// const Checkout = () => {
//   const { currentUser } = useAuth();

//   return (
//     <>
//       <section className="w-screen">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
//               {currentUser && `Booking Cart`}
//               {!currentUser && `Login To Enjoy our Services`}
//             </h1>
//           </div>
//           <div className="w-full bg-white px-10 py-10">
//             <div className="-m-4">
//               <div className="p-4 ">
//                 <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
//                   <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
//                     <div className="mt-8">
//                       <div className="flow-root">
//                         {currentUser && (
//                           <ul
//                             role="list"
//                             className="-my-6 divide-y divide-gray-200"
//                           >
//                             {products.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"> */}
//                                 <div className="md:h-28 md:w-28 h-16 w-16 rounded-md border border-gray-200">
//                                   <img
//                                     src={product.imageSrc}
//                                     alt={product.imageAlt}
//                                     className="h-full w-full object-contain object-center"
//                                   />
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                       <h3>
//                                         <a href={product.href}>
//                                           {" "}
//                                           {product.name}{" "}
//                                         </a>
//                                       </h3>
//                                       <p className="ml-4 ">
//                                         ₹ {product.price}.00
//                                       </p>
//                                     </div>
//                                     <p className="mt-1 text-sm text-gray-500">
//                                       {product.Vehicletype}
//                                     </p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500">
//                                       From {product.destination} To{" "}
//                                       {product.destination2}
//                                     </p>

//                                     <div className="flex">
//                                       <button
//                                         type="button"
//                                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                                       >
//                                         Remove
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {currentUser && 

//                   <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                     <div className="flex justify-between text-base font-medium text-gray-900">
//                       <p>Subtotal</p>
//                       <p>₹ 7000.00</p>
//                     </div>
//                     <p className="mt-0.5 text-sm text-gray-500">
//                       Thank you for booking
//                     </p>
//                     {currentUser && (
//                       <div className="mt-6">
//                         <a
//                           href="#"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                           Checkout
//                         </a>
//                       </div>
//                     )}
//                   </div>}
//                 </div>
//                 {currentUser && (
//                   <button className="flex mt-6 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                     {" "}
//                     Clear Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Checkout;
