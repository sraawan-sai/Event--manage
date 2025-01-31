import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
const Register = ({eventid}) => {
    const [isReady, setIsReady] = useState(false);
      const [error, setError] = useState(null);;
  const [regData, setRegData] = useState({
    regName: "",
    regEmail: "",
    regPhone: "",
    eventId:eventid || " "
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegData({
      ...regData,
      [name]: value,
    });
   
  };
  // hanfle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReady(true);
    console.log(regData, "regdata");
  };
  useEffect(() => {
    if(!isReady) return;
    const postReg = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/register`,regData);
        setRegData(response.data);
        console.log(response,"posted")
        
      } catch (error) {
        setError("Error fetching event details");
      
      }
    };

    postReg();
  }, [isReady]);

  return (
    <div>
      <div className="mt-8">
        <h2 className="font-bold text-xl mb-4">Register for Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="regName"
              value={regData.regName || ""}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="regEmail"
              value={regData.regEmail || ""}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              name="regPhone"
           
              value={regData.regPhone || ""}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
