import React, { useEffect, useState } from "react";
import ExportButton from "../../../Components/Common/ExportButton";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import {
  fetchAllDeaneries,
  fetchAllParish,
  getAllAydDelegates,
} from "../../../Redux/Api";

function ViewAYD() {
  const [parish, setParishes] = useState([]);
  const [deaneries, setDeaneries] = useState([]);
  const [delegates, setDelegates] = useState([]);
  const [newDelegates, setNewDelegates] = useState([]);
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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchDeanery();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    alterArray();
    // eslint-disable-next-line
  }, [delegates]);

  useEffect(() => {
    fetchDelegates();
    // eslint-disable-next-line
  }, []);

  const getDeaneryName = (id) => {
    const deanName = deaneries.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };

  const getParishName = (id) => {
    const deanName = parish.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };

  const alterArray = async () => {
    delegates.forEach((item, index, arr) => {
      const id = item?.id.substring(0, 5);
      const aydId = 2024;
      const deaneryId = getDeaneryName(item?.deaneryId);
      const parishId = getParishName(item?.parishId);
      arr[index] = {
        ...item,
        deaneryId: deaneryId,
        parishId: parishId,
        aydId: aydId,
        id: id,
      };

      setNewDelegates(arr);
    });
  };

  // Sorting the array by the 'name' property
  newDelegates.sort((a, b) => {
    if (a.deaneryId < b.deaneryId) {
      return -1;
    }
    if (a.deaneryId > b.deaneryId) {
      return 1;
    }
    return 0;
  });

  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"View Delegates"}
        />
      </div>

      <div className="flex justify-end w-[80%] mx-auto mt-[1rem]">
        <ExportButton
          data={newDelegates}
          fileName={"AYD Registered Delegates"}
        />
      </div>
      <div>
        <table className="table-fixed border w-[80%] mx-auto mt-[2.5rem] mb-[3rem]">
          <thead>
            <tr className="border-b">
              <th className="text-[.6rem] md:text-[1rem] py-[.5rem]  w-[90px]">
                S/N
              </th>
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
            {newDelegates &&
              newDelegates?.map((item, index) => (
                <tr
                  className="text-center text-[.6rem] md:text-[1rem]"
                  key={index}
                >
                  <td className="text-center border py-[.5rem] w-[90px]">
                    {index + 1}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.firstName}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.lastName}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.parishId}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.deaneryId}
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
