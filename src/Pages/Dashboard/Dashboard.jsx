import React from "react";
import { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import ViewAYD from "./AYD/ViewAll";
import CreateDeanery from "./Deanery/Create";
import ViewDeanries from "./Deanery/ViewAll";
import Home from "./Home";
import CreateParish from "./Parishes/Create";
import EditParish from "./Parishes/EditParish";
import ViewParishes from "./Parishes/ViewAll";

function Dashboard() {
  const [isAuth] = useState(
    `${JSON.parse(localStorage.getItem("user"))?.token}`
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
    } else {
      navigate("/admin");
    }
    // eslint-disable-next-line
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route path="delegates" element={<ViewAYD />} />
        <Route exact path="parishes" element={<ViewParishes />} />
        <Route exact path="deaneries" element={<ViewDeanries />} />
        <Route path="create-deanery" element={<CreateDeanery />} />
        <Route path="create-parish" element={<CreateParish />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="parishes/:id" element={<EditParish />} />
      </Routes>
    </>
  );
}

export default Dashboard;
