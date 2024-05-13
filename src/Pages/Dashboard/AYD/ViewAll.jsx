import React, { useEffect, useState } from "react";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import {
  fetchAllDeaneries,
  fetchAllParish,
  getAllAydDelegates,
} from "../../../Redux/Api";

function ViewAYD() {
  const [parish, setParishes] = useState([]);
  const [delegates, setDelegates] = useState([]);
  const [deaneries, setDeaneries] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
    fetchParishes();
  }, []);

  useEffect(() => {
    fetchDeanery();
  }, []);

  useEffect(() => {
    fetchDelegates();
  }, []);
  const getDeaneryName = (id) => {
    const deanName = deaneries.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };

  const getParishName = (id) => {
    const deanName = parish.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };
  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"View Delegates"}
        />
      </div>
      <div>
        <table class="table-fixed border w-[80%] mx-auto mt-[2.5rem]">
          <thead>
            <tr className="border-b">
              <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">
                First Name
              </th>
              <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">
                Last Name
              </th>
              <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">Parish</th>
              <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">
                Deanery
              </th>
            </tr>
          </thead>
          <tbody>
            {delegates &&
              delegates?.map((item) => (
                <tr className="text-center text-[.6rem] md:text-[1rem]">
                  <td className="text-center border py-[.5rem]">
                    {item?.firstName}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.lastName}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {getParishName(item?.parishId)}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {getDeaneryName(item?.deaneryId)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default ViewAYD;
