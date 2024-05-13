import React from "react";
import { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import ViewAYD from "./AYD/ViewAll";
import CreateDeanery from "./Deanery/Create";
import ViewDeanries from "./Deanery/ViewAll";
import Home from "./Home";
import CreateParish from "./Parishes/Create";
import ViewParishes from "./Parishes/ViewAll";

function Dashboard() {
  const [isAuth, setAuth] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
    } else {
      navigate("/admin");
    }
  }, [isAuth]);

  useEffect(() => {
    setAuth(`${JSON.parse(localStorage.getItem("user"))?.token}`);
  }, []);
  return (
    <>
      <Routes>
        <Route path="delegates" element={<ViewAYD />} />
        <Route path="parishes" element={<ViewParishes />} />
        <Route path="deaneries" element={<ViewDeanries />} />
        <Route path="create-deanery" element={<CreateDeanery />} />
        <Route path="create-parish" element={<CreateParish />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default Dashboard;
