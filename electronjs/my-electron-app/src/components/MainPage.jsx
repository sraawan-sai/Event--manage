import React from "react";
import Button from "../utilits/Button";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex  h-screen  flex-col items-center pt-28">
      <div className="flex justify-between items-center w-1/2 ">
        <Link to="/events">
          <Button variant="primary" size="lg">
            EVENTS
          </Button>
        </Link>
        <Button variant="primary" size="lg">
          Reacording
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
