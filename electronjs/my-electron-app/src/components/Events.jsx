import React from "react";
import { Link } from "react-router-dom";
import Button from "../utilits/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Events = () => {
  
  return (
    <div className="relative flex flex-col items-center pt-28">
      <div className="absolute top-4 left-4">
      <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-blue-500" />
        </Link>
      </div>
      <div className="flex items-center justify-between w-1/2 space-x-8">
      <Link to="create">
        <Button variant="primary" size="lg" >
          Create Event
        </Button>
      </Link>
      <Link to="lists">
      <Button variant="primary" size="lg">
        See Events
      </Button>
      </Link>
      </div>
    </div>
  );
};

export default Events;
