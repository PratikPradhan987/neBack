import { useEffect, useState } from "react";
import NavBar from "../../components/Seller/NavBar";
import { useAuth } from "../../src/contexts/AuthContext";

const Tour = () => {
  const { ReadData, currentUser } = useAuth();
  const [fireData, setFireData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const Data = ReadData("Melli")
      .then((response) => {
        // console.table(response[0])
        // console.table(response);
        // return response;
        setFireData(
          response.map((data) => {
            return { ...data, id: data.id };
          })
        );
      })
      .catch((error) => console.log(error.message));
  };
  console.table(fireData[0]);
  // console.log(fireData)

  // console.table(Data.value);
  // console.table(fireData);
  return (
    <>
      <NavBar />
      <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        Tour {currentUser && `the user :${currentUser.email}`}
      </h1>

      <div className="container px-5 py-8 mx-auto border mt-6 border-gray-300">
        {/* <h1 className="text-center sm:text-4xl  mb-2">
          There is only a form for now
        </h1> */}

        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div className="mt-8">
            <div className="flow-root">
              {currentUser && (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {fireData.map((product) => (
                    <li key={product.id} className="flex py-6">
                      {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"> */}
                      <div className="md:h-28 md:w-28 h-16 w-16 rounded-md border border-gray-200">
                        {/* <img
                      // src={data.ImageUrl}
                          // alt={product.imageAlt}
                          className="h-full w-full object-contain object-center"
                        /> */}
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              {/* <a href={product.href}> {data.id} </a> */}
                            </h3>
                            {/* <p className="ml-4 ">₹ {data.price}.00</p> */}
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* {data.CabType} */}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                          {/* <h3>Name: {data.uid}</h3> */}
                    {/* <h3>id: {data.id}</h3> */}
                   {/* <p>Email: {data.Location}</p> */}
                            {/* From {data.destination} To {data.destination2} */}
                          </p>

                          <div className="grid grid-cols-1 ">
                            <button
                              className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                              onClick={() => deleteDocument(data.id)}
                            >
                              Delete
                            </button>

                            <button
                              className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                              onClick={() => updateFields(data.id)}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
