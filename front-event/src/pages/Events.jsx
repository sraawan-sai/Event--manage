import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Events = () => {
  const [eventData, setEventData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get("http://localhost:3000/event");
        console.log(response, "response data");
        setEventData(response.data);
      } catch (error) {
        console.error("Error Fectching Event:", error);
      }
    };
    fetchEvent();
  }, []);
  const handleEventClick = (event) => {
    navigate(`/events/${event._id}`);
  }
  return (
    <div>
      <div className=" flex flex-col justify-center items-center mt-11">
        <div className="font-bold text-2xl mb-20">Events</div>
        <div className=" flex  px-4 py-6 ">
          <div className="container mx-auto flex flex-wrap justify-center  p-4">
            {eventData.map((event) => (
              <div
                key={event.eventId}
                className="w-full sm:w-1/2 md:w-1/3  flex-grow max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-200 bg-white"
                onClick={() => handleEventClick(event)}>
                <h3 className="font-bold text-lg m-4">{event.eventName}</h3>
                <p className="m-4">Venue: {event.venue}</p>
                <p className="m-4">Time: {event.eventTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
