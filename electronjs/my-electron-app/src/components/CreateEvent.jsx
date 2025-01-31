import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    venue: "",
    eventTime: "",
    isRegister: false,
  });

  console.log(formData, "form");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/event", formData);
      toast.success("Event Created Successfully!"); // Show success notification
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("Error creating event"); // Show error notification
    }
    console.log(formData, "submited form");
  };
  return (
    <div>
      <div className="relative flex flex-col items-center pt-28">
        <h1 className="font-bold  text-center text-2xl "> Create Event</h1>
        <div className="absolute top-7 left-4">
          <Link to="/events">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className="text-blue-500"
            />
          </Link>
        </div>
        <div className="flex w-full justify-center mt-14">
          <form className=" space-y-4 " onSubmit={handleSubmit}>
            <div className="flex items-center space-x-10">
              <div className="flex  items-center space-x-3 ">
                <label htmlFor="eventname">
                  Event Name:
                  <input
                    id="eventname"
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="border rounded-md p-1 pl-"
                  />
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <label htmlFor="eventdate">Event Date:</label>
                <input
                  id="eventdate"
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="border rounded-md p-1"
                />
              </div>
            </div>
            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-3">
                <label htmlFor="eventvenue">Venue:</label>
                <input
                  id="eventvenue"
                  type="text"
                  placeholder="Enter venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="border rounded-md p-1"
                />
              </div>
              <div className="flex items-center space-x-3 pl-7 p-5">
                <label htmlFor="eventtime">Time:</label>
                <input
                  id="eventtime"
                  type="time"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleChange}
                  className="border rounded-md p-1"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 pl-7 p-5">
              <input
                type="checkbox"
                name="isRegister"
                checked={formData.isRegister}
                onChange={handleChange}
                id="isRegiter"
              />
              <label htmlFor="isRegiter">Register</label>
            </div>
            <div className="flex items-center justify-center space-x-3 mt-10">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Create Event
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
