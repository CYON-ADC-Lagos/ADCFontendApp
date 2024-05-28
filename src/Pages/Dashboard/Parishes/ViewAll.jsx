import React, { useEffect, useState } from "react";
import ExportButton from "../../../Components/Common/ExportButton";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries, fetchAllParish } from "../../../Redux/Api";

function ViewParishes() {
  const [parish, setParishes] = useState([]);
  const [deaneries, setDeaneries] = useState([]);
  const [newParishes, setNewParishes] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
    // eslint-disable-next-line
  }, []);

  const getDeaneryName = (id) => {
    const deanName = deaneries.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };

  useEffect(() => {
    alterArray();
    // eslint-disable-next-line
  }, [parish]);

  const alterArray = async () => {
    parish?.forEach((item, index, arr) => {
      const id = item?.id.substring(0, 5);
      const deaneryId = getDeaneryName(item?.deaneryId);
      arr[index] = {
        ...item,
        deaneryId: deaneryId,
        id: id,
      };

      setNewParishes(arr);
    });
  };

  // Sorting the array by the 'name' property
  newParishes.sort((a, b) => {
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
          pathname={"View Parishes"}
        />
      </div>
      <div className="flex justify-end w-[80%] mx-auto mt-[1rem]">
        <ExportButton data={newParishes} fileName={"AYD Registered Parishes"} />
      </div>
      <div>
        <table className="table-fixed border w-[80%] mx-auto my-[2.5rem] ">
          <thead>
            <tr className="border-b">
              <th className=" py-[.5rem]  w-[90px]">S/N</th>
              <th className=" py-[.5rem]">Name</th>
              <th className=" py-[.5rem] w-[120px]">Deanery</th>
              <th className=" py-[.5rem] w-[90px]">HasPaid</th>
              <th className=" py-[.5rem]">Action</th>
            </tr>
          </thead>
          <tbody>
            {newParishes &&
              newParishes?.map((item, index) => (
                <tr className="text-center" key={index}>
                  <td className="text-center border py-[.5rem] w-[90px]">
                    {index + 1}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.name}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.deaneryId}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.hasPaid === false ? "No" : "Yes"}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    <a
                      href={`/dashboard/parishes/${item?.id} `}
                      className="text-[green] hover:cursor-pointer"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default ViewParishes;
