import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./Layouts.jsx/MainLayout";
import EventLayout from "./Layouts.jsx/EventLayout";
import CreateEvent from "./components/CreateEvent";
import EventList from "./components/EventList";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />}>
      <Route path="events" element={<EventLayout />}>
       <Route path="create" element={<CreateEvent />} />
       <Route path="lists" element={<EventList />} />
      </Route> 
      
      </Route>
      </>
  )
);

function App() {
  return (
    <>
    <Header />
    <RouterProvider router={routes}></RouterProvider>
    <div className="fixed bottom-0 left-0 w-full mb-7 font-bold text-center text-opacity-50">
          Nagarjuna Managemnet Center
        </div>
    </>
  );
}

export default App;
