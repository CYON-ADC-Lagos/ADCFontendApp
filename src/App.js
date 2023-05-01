import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About, Home, Policy } from "./Pages";
import NotFound from "./Pages/NotFound";
import Deaneries from "./Pages/Deaneries";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/deaneries" element={<Deaneries />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
