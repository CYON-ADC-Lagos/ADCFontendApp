import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About, Home, Policy } from "./Pages";
import NotFound from "./Pages/NotFound";
import Deaneries from "./Pages/Deaneries";
import { Executives } from "./Components";
import Contact from "./Pages/ContactUs";
import News from "./Pages/News";
import Gallery from "./Pages/Gallery";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/deaneries/:name" element={<Deaneries />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
