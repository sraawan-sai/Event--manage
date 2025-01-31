import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const EventList = () => {
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState(null);
    
    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axios.get('http://localhost:3000/event'); // Change to your API endpoint
            setEvents(response.data);
          } catch (error) {
            console.error('Error fetching events:', error);
          }
        };
    
        fetchEvents();
      }, []);
      const handleEventClick = (eventId) => {
        console.log(eventId,"eventId")
        setSelectedEventId(eventId);
      };
  return (
   
    <div className="container mx-auto p-4">
       <div className="relative flex flex-col items-center pt-28">
       <div className="absolute top-7 left-4">
          <Link to="/events">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className="text-blue-500"
            />
          </Link>
        </div>
       {
        events.map((event) => (
          <div
            key={event._id}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4 border border-gray-200 bg-white cursor-pointer"
            onClick={() => handleEventClick(event._id)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.eventName}</div>
              <p className="text-gray-700 text-base">
                Date: {event.eventDate} <br />
                Time: {event.eventTime} <br />
                Venue: {event.venue}
              </p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default EventList;
