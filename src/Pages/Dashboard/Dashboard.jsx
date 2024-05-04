import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreateParish from "./Parishes/Create";

function Dashboard() {
  return (
    <>
      <Routes>
        <Route path="create-parish" element={<CreateParish />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default Dashboard;
