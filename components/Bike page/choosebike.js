import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useAuth } from "../../src/contexts/AuthContext";

import "react-datepicker/dist/react-datepicker.css";

function Choosebike() {
  const { currentUser, GetBikeData } = useAuth();

  const [startDate, setStartDate] = useState(new Date());
  const [Location, setLocation] = useState("");
  const [No_ofDays, setNo_ofDays] = useState(null);
  const [Time, setTime] = useState(null);

  const uploadFile = () => {
    var data = {
      No_ofDays: No_ofDays,
      Location: Location,
      StartDate: startDate,
    };
    // alert("submited");
    // console.log(data);
    GetBikeData(data);
  };

  // console.log(Cabtype);
  function handlesetLocation(e) {
    setLocation(e.target.value);
    // console.log(Location);
  }
  function handlesetTime(e) {
    setTime(e.target.value);
    // console.log(Time);
  }

  return (
    <>
      <div className="mx-10 mt-5 md:col-span-2">
        {/* <form onSubmit={uploadFile} action="#" method="POST"> */}

        <div className="sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="mt-10 grid">
              <div className="grid grid-flow-row">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pick-up Location
                      </label>
                      <select
                        defaultValue={Location}
                        onChange={handlesetLocation}
                        // id="countries"
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option defaultValue value="">
                          From
                        </option>
                        <option value="Gangtok">Gangtok</option>
                        <option value="Namchi">Namchi</option>
                        <option value="Bagdogra Airport">
                          Bagdogra Airport
                        </option>
                        <option value="Siliguri">Siliguri</option>
                        <option value="Melli">Melli</option>
                        <option value="Rangpo">Rangpo</option>
                        <option value="Singtam">Singtam</option>
                        <option value="32nd Mile">32nd Mile</option>
                        <option value="Chitrey">Chitrey</option>
                        <option value="Coronation Bridge">
                          Coronation Bridge
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        No of Days
                      </label>
                      <input
                        type="number"
                        value={No_ofDays}
                        onChange={(event) => setNo_ofDays(event.target.value)}
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></input>
                    </div>{" "}
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pick-up Time
                      </label>
                      <select
                        defaultValue={Time}
                        onChange={handlesetTime}
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="00:00">00:00 </option>
                        <option value="01:00">01:00 </option>
                        <option value="02:00 ">02:00 </option>
                        <option value="03:00 ">03:00 </option>
                        <option value="04:00">04:00 </option>
                        <option value="05:00">05:00 </option>
                        <option value="06:00">06:00 </option>
                        <option value="07:00 ">07:00 </option>
                        <option value="08:00">08:00 </option>
                        <option value="09:00">09:00 </option>
                        <option value="10:00">10:00 </option>
                        <option value="11:00">11:00 </option>
                        <option value="12:00">12:00 </option>
                        <option value="13:00">13:00 </option>
                        <option value="14:00 ">14:00 </option>
                        <option value="15:00">15:00 </option>
                        <option value="16:00">16:00 </option>
                        <option value="17:00 ">17:00 </option>
                        <option value="18:00">18:00 </option>
                        <option value="19:00">19:00 </option>
                        <option value="20:00">20:00 </option>
                        <option value="21:00 ">21:00 </option>
                        <option value="22:00">22:00 </option>
                        <option value="23:00">23:00 </option>
                        <option value="24:00">24:00 </option>
                      </select>
                    </div>
                  </div>

                  <div className="relative z-0 mb-6 w-full group">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pick-up Date
                      </label>
                      {/*
                        for submitting 
                        https://www.javatpoint.com/react-date-picker */}
                      <DatePicker
                        minDate={new Date()}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3  text-right sm:px-6">
            <button
              onClick={uploadFile}
              className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Continue Booking
            </button>
            {/* {!currentUser && (
                <Link passHref href="/user_login">

                <button
                  className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 rounded text-lg"
                >
                  Login to Continue
                </button>
                </Link>
              )} */}
          </div>
        </div>
        {/* </form> */}
      </div>
    </>
  );
}

export default Choosebike;
