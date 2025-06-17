import React, { useEffect, useState } from "react";
import ExportButton from "../../../Components/Common/ExportButton";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import {
  fetchAllAyds,
  fetchAllDeaneries,
  fetchAllParish,
  getAllAydDelegates,
} from "../../../Redux/Api";

function ViewAYD() {
  const [parish, setParishes] = useState([]);
  const [ayd, setAyd] = useState([]);
  const [selectedAyd, setSelectedAyd] = useState({});
  const [aydLoading, setAydLoading] = useState(false);
  const [filterLoading, setFilterAydLoading] = useState(false);

  const [deaneries, setDeaneries] = useState([]);
  const [newDelegates, setNewDelegates] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchDelegates = async () => {
    try {
      setAydLoading(true);
      const { data } = await getAllAydDelegates(selectedAyd);
      if (data) {
        data.forEach((item, index, arr) => {
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
          setFilterAydLoading(false);
          setAydLoading(false);
        });
      }
    } catch (error) {
      setAydLoading(false);
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

  const fetchAyd = async () => {
    try {
      const { data } = await fetchAllAyds();
      if (data) {
        setAyd(data);
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
    fetchAyd();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    fetchDeanery();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchDelegates();
    // eslint-disable-next-line
  }, [selectedAyd]);

  const getDeaneryName = (id) => {
    const deanName = deaneries.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };

  const getParishName = (id) => {
    const deanName = parish.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
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

  const handleChange = (event) => {
    setSelectedAyd(event.target.value);
  };

  const selectedItem = ayd?.find((item) => item?.id.toString() === selectedAyd);

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
        <select
          onChange={handleChange}
          className="bg-primary text-white border-none hover:bg-primary px-[2rem] py-[.5rem] rounded-md"
        >
          <option>Year</option>
          {ayd?.length !== 0 &&
            ayd?.map((item) => (
              <option value={item?.id}>
                {new Date(item?.createdAt)?.getFullYear()}
              </option>
            ))}
        </select>
      </div>
      <div className="flex justify-end w-[80%] mx-auto mt-[1rem]">
        <ExportButton
          data={newDelegates}
          fileName={"AYD Registered Delegates"}
        />
      </div>
      {selectedItem && (
        <div className=" w-[80%] mx-auto mt-[1rem]">
          <div className="flex gap-[8px]">
            {" "}
            <h4 className="font-[700]">Theme : </h4>
            {"  "}
            <span> {selectedItem?.theme}</span>
          </div>
          <div className="flex gap-[8px]">
            {" "}
            <h4 className="font-[700]">Deanery: </h4>
            {"  "}
            <span>{selectedItem?.venue}</span>
          </div>
          <div className="flex gap-[8px]">
            {" "}
            <h4 className="font-[700]">Registered Delegates : </h4>
            {"  "}
            <span> {selectedItem?.totalDelegates}</span>
          </div>
          <div className="flex gap-[8px]">
            {" "}
            <h4 className="font-[700]"> Registered Parish : </h4>
            {"  "}
            <span> {selectedItem?.totalPaidParish}</span>
          </div>
        </div>
      )}
      <div>
        {aydLoading || filterLoading ? (
          <h4 className="text-center my-[3rem] text-[700]">LOADING...</h4>
        ) : newDelegates?.length === 0 ? (
          <h4 className="text-center my-[2rem] text-[700]">
            No delegate registered.
          </h4>
        ) : (
          <table className="table-fixed border w-[80%] mx-auto mt-[2.5rem] mb-[3rem]">
            <thead>
              <tr className="border-b">
                <th className="text-[.6rem] md:text-[1rem] py-[.5rem]  w-[40px]">
                  S/N
                </th>
                <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">
                  First Name
                </th>
                <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">
                  Last Name
                </th>
                <th className="text-[.6rem] md:text-[1rem] py-[.5rem]">
                  Parish
                </th>
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
                    <td className="text-center border py-[.5rem] w-[40px]">
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
                    <td className="text-center text-[.6rem] md:text-[1rem] border py-[.5rem]">
                      {item?.deaneryId}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default ViewAYD;
