import { useState, useEffect } from "react";
import NavBar from "../../components/Seller/NavBar";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { storage, database } from "../../src/utils/init-firebase";
import { ref, uploadBytes, getDownloadURL,getStorage,  deleteObject } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { reload } from "firebase/auth";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "../../src/contexts/AuthContext";

function Bike() {
  const storage = getStorage();

  const elements = ["1"];
  // , "2", "3", "4", "5"];
  const { currentUser } = useAuth();

  const [dates, setDates] = useState([new Date()]);
  const [imageUpload, setImageUpload] = useState("");
  const [imageName, setimageName] = useState("");
  const [Location, setLocation] = useState("");
  const [url, seturl] = useState("");
  const [price, setprice] = useState(null);
  const [availabledate, setavailabledate] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [fireData, setFireData] = useState([]);
  const articles = [];
  const [isLoading, setisLoding] = useState(true);

  useEffect(() => {
    // getData();
  }, []);

  // console.table(dates);
  // console.log(dates.values);
  // console.log(currentUser.uid);

  function handlesetLocation(e) {
    setLocation(e.target.value);
    console.log(Location);
  }

  // const [imageUrls, setImageUrls] = useState([]);

  // console.log(imageUpload);
  // const uploadFile = () => {

  //   if (imageUpload == null) return;

  //   const imageRef = ref(storage, `Cabimages/${imageUpload.name + v4()}`);

  //   uploadBytes(imageRef, imageUpload).then(() => {
  //     alert("image uploaded");
  //     setImageUpload("");
  //   });
  // };
  // async function writeUserData(data) {
  //   const docRef = await setDoc(doc(database, "SellercabInfo",), data);
  // }
  async function writeUserData(data) {
    // const docRef = await setDoc(doc(database, "SellercabInfo",), data);
    const docRef = doc(collection(database, "SellerBikeInfo"));
    await setDoc(docRef, data)
      .then(() => {
        // console.log(url);

        toast("Data Sent");
        getData();
        // setCabtype("");
        // setLocation("");
        // window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const getData = async () => {
    const citiesRef = collection(database, "SellerBikeInfo");
    const q = query(citiesRef, where("uid", "==", currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      articles.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setFireData(
      articles.map((datas) => {
        return { ...datas, id: datas.id };
      })
    );
    setisLoding(false);

    console.table("hello ",fireData[0]);
  };

  const uploadFile = () => {
    if (!imageUpload || !Location || !price || !availabledate) {
      toast("Data missing");
      return;
    }
    const iname = imageUpload.name + v4();
    setimageName(iname)
    // console.log("image", imageName);
    const imageRef = ref(storage,`SellerBikeimages/${imageName}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // setImageUrls((prev) => [...prev, url]);
        var data = {
          imageName: imageName,
          uid: currentUser.uid,
          ImageUrl: url,
          Location: Location,
          Price: Number(price),
          Availabledate: Number(availabledate),
          // Date: dates,
          // email: response.user.email,
        };
        seturl(url);
        writeUserData(data);
        // console.table(imageUrls);
        console.table(url);
        // console.log(imageUrls);
        // alert("image uploaded");
      });
    });
  };

  // const updateImageFile = () => {
  //   const imageRef = ref(
  //     storage,
  //     `SellerBikeimages/${imageUpload.name + v4()}`
  //   );
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       console.log(url);
  //       return url;
  //       toast("image Updated");

  //     });
  //   });
  // }
  // var url = updateImageFile();
  // seturl(url);

  // console.log(url)

  const updateFields = (id) => {
    let fieldToEdit = doc(database, "SellerBikeInfo", id);
    if (imageUpload) {
      toast("Image Cannot Be updated");
    }
    // const url = updateImageFile();
    updateDoc(fieldToEdit, {
      // ImageUrl: url,
      Location: Location,
      Price: Number(price),
      Availabledate: Number(availabledate),
    })
      .then(() => {
        toast("Data Updated");
        getData();
        // setDates([new Date()]);
        // setImageUpload("");
        setLocation("");
        setprice(null);
        setavailabledate(null);
        setIsUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDocument = (id,imageName) => {
    const desertRef = ref(storage,`SellerBikeimages/${imageName}`);
    console.table(imageName);
    // console.log(fireData[0].imageName);
    // console.log(fireData.id);
    // console.log("id.imageName");
    // console.log(id.Location);
    deleteObject(desertRef).then((res) => {
      toast(res)
    }).catch((error) => {
      toast(error.message)
    });    
    let fieldToEdit = doc(database, "SellerBikeInfo", id);
    deleteDoc(fieldToEdit)
      .then(() => {
        toast("Data Deleted");
        getData();
      })
      .catch((err) => {
        toast("Cannot Delete that field..");
      });
  };

  return (
    <>
      <ToastContainer />
      <NavBar />
      {/* <div className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <p>Click the button to add a new element to the array.</p>
        <button onClick={myFunction}>Click</button>
      </div> */}
      <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        Bike Rental
      </h1>
      {/* {elements.map((value, index) => {
        return ( */}
      <>
        <section
          // key={index}
          className="text-gray-600 body-font overflow-hidden"
        >
          <div className="container px-5 py-8 mx-auto border mt-6 border-gray-300">
            <div className="-my-8 divide-y-2 divide-gray-100 ">
              {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Car Type
                      </span>
                    </div>
                    <div className="flex-grow">
                      <select
                        defaultValue={Cabtype}
                        onChange={handleAddrTypeChange}
                        id="cart-type"
                        name="cart-type"
                        // autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option selected value="4 Seater">
                          4 Seater
                        </option>
                        <option value="7 Seater">7 Seater</option>
                      </select>
                    </div>
                  </div> */}

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    Select your Location
                  </span>
                </div>
                <div className="flex-grow">
                  <select
                    defaultValue={Location}
                    onChange={handlesetLocation}
                    // id="countries"
                    className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option defaultValue value="">
                      Select your location
                    </option>
                    <option value="Gangtok">Gangtok</option>
                    <option value="Namchi">Namchi</option>
                    <option value="Bagdogra Airport">Bagdogra Airport</option>
                    <option value="Siliguri">Siliguri</option>
                    <option value="Melli">Melli</option>
                    <option value="Rangpo">Rangpo</option>
                    <option value="Singtam">Singtam</option>
                    <option value="32nd Mile">32nd Mile</option>
                    <option value="Chitrey">Chitrey</option>
                    <option value="Coronation Bridge">Coronation Bridge</option>
                  </select>
                </div>
              </div>

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    Choose Available Dates
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="grid grid-flow-row">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <DatePicker
                          minDate={new Date()}
                          value={dates}
                          selected={dates}
                          onChange={setDates}
                          format="DD MMMM YYYY"
                          multiple
                          plugins={[<DatePanel key={dates} />]}
                        />
                      </div>

                      <div className="flex-grow">
                        <input
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          // id="Money"
                          placeholder="No. of days"
                          type="number"
                          value={availabledate}
                          onChange={(event) =>
                            setavailabledate(event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    Price in Rs.
                  </span>
                </div>
                <div className="flex-grow">
                  <input
                    className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="Money"
                    type="number"
                    value={price}
                    onChange={(event) => setprice(event.target.value)}
                  />
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    Upload Bike image
                  </span>
                </div>
                <div className="flex-grow">
                  <input
                    className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    aria-describedby="user_avatar_help"
                    type="file"
                    onChange={(event) => {
                      setImageUpload(event.target.files[0]);
                    }}
                    // value={imageUpload}
                  />
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    Image
                  </div>
                </div>
              </div>
            </div>
            {isUpdate ? (
              <button
                onClick={updateFields}
                className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                UPDATE
              </button>
            ) : (
              <button
                onClick={uploadFile}
                className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            )}
          </div>

          {/* <button onClick={() => setShow(prev => !prev)}>Click</button>
      {show && <Serviceprovided />} */}
        </section>
      </>
      {/* );
      })} */}

      <div>
        <button
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          // onClick={updateImageFile}
          onClick={getData}
        >
          {" "}
          Click To preview{" "}
        </button>
        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {fireData.map((product) => (
              <li key={product.id} className="flex py-6">
                {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"> */}
                <div className="md:h-28 md:w-28 h-16 w-16 rounded-md border border-gray-200">
                  <img
                    src={product.ImageUrl}
                    // alt={product.imageAlt}
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{/* <a href={product.href}> {data.id} </a> */}</h3>
                      <p className="ml-4 ">₹ {product.Price}.00</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.CabType}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">
                      <h3>Your UniqueID: {product.uid}</h3>
                      <h3>Product ListId: {product.id}</h3>
                      <p>Loaction: {product.Location}</p>
                      {/* From {data.destination} To {data.destination2} */}
                    </p>

                    <div className="grid grid-cols-1 ">
                      <button
                        className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={() => deleteDocument(product.id,product.imageName)}
                      >
                        Delete
                      </button>

                      <button
                        className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={() => updateFields(product.id)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bike;
