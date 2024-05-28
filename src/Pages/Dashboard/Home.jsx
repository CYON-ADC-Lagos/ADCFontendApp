import React, { useState, useEffect } from "react";
import Card from "../../Components/Common/Card";
import { IoHome, IoPeople } from "react-icons/io5";

import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../Components/Dashboard/Title";
import {
  fetchAllDeaneries,
  fetchAllParish,
  getAllAydDelegates,
} from "../../Redux/Api";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [delegates, setDelegates] = useState([]);
  const [parish, setParishes] = useState([]);
  const [deaneries, setDeaneries] = useState([]);

  const fetchDelegates = async () => {
    try {
      const { data } = await getAllAydDelegates();
      if (data) {
        setDelegates(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchParishes = async () => {
    try {
      const { data } = await fetchAllParish();
      if (data) {
        setParishes(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchDeanery = async () => {
    try {
      const { data } = await fetchAllDeaneries();
      if (data) {
        setDeaneries(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDelegates();
  }, []);
  useEffect(() => {
    fetchParishes();
  }, []);

  useEffect(() => {
    fetchDeanery();
  }, []);

  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] ">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"Home Page"}
        />
        <div className="bg-transparent">
          <div className="flex gap-3 items-center h-full mx-auto mt-[2rem] flex-wrap w-[96%]">
            <Card
              text={deaneries?.length}
              title={"Deaneries"}
              icon={<IoHome className="w-[2rem] h-[2rem] text-green" />}
            />
            <Card
              text={parish?.length}
              title={"Registered Parish"}
              icon={<IoHome className="w-[2rem] h-[2rem] text-green" />}
            />
            <Card
              text={delegates?.length}
              title={"Registered Delegates"}
              icon={<IoPeople className="w-[2rem] h-[2rem] text-green" />}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
