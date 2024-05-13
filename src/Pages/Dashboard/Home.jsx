import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../Components/Dashboard/Title";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DashboardLayout>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"Home Page"}
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
