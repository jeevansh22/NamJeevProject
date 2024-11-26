import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Download from "./Download/Download.jsx";
import MachineList from "./Machinery/MachineList.jsx";
import Machinery from "./Machinery/MachineryDetails"
import Details from "./Machinery/Details.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="machinery" element={<Details />} />
      <Route path="downloadcatalogue" element={<Download />} />
      <Route path="machine/:id" element={<Machinery />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
