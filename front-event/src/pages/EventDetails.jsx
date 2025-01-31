import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Register from "./Register";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [regData, setRegData] = useState({
    regName: "",
    regEmail: "",
    regPhone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegData({
      ...regData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/event/${id}`);
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching event details");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-20">
      {event && (
        <div className="flex flex-col justify-center md:flex-row items-center ">
          <div className="max-w-lg border border-gray-200 bg-white p-6 md:mr-8 ">
            <h3 className="font-bold text-xl mb-2">{event.eventName}</h3>
            <p>Date: {event.eventDate}</p>
            <p>Venue: {event.venue}</p>
            <p>Time: {event.eventTime}</p>
          </div>
          <div className="max-w-lg">
            <img src="" alt="event image" />
          </div>
        </div>
      )}
      {event?.isRegister && (
       <Register eventid ={event._id}/>
      )}
      {!event?.isRegister && (
        <p className="mt-8 text-red-500 font-bold  text-center">
          Registration Closed
        </p>
      )}
    </div>
  );
};

export default EventDetail;
