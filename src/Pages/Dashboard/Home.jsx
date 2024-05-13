import React, { useState } from "react";

import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../Components/Dashboard/Title";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DashboardLayout>
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
