import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
  Routes
} from "react-router-dom";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
const routes =[
  {
    path:"/events" ,element:<Events />
  },
  {
    path:"/events/:id", element:<EventDetails /> 
  }
]

const App = () => {
  const routers = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
