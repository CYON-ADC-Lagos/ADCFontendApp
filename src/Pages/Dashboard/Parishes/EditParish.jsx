import React, { useState } from "react";
import { useEffect } from "react";
import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import {
  fetchAllDeaneries,
  fetchParishById,
  updateParish,
} from "../../../Redux/Api";
import Loader from "../../../Components/Loader";
import { useParams } from "react-router-dom";

const EditParish = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [deaneries, setDeaneries] = useState([]);
  const [parishDetails, setParishDetails] = useState({});
  const [parishData, setParishData] = useState({
    name: "",
    email: "",
    hasPaid: 0,
    location: "",
    deaneryId: "",
  });

  useEffect(() => {
    setParishData({
      name: parishDetails?.name,
      email: parishDetails?.email,
      hasPaid: parishDetails?.hasPaid,
      location: parishDetails?.location,
      deaneryId: parishDetails?.deaneryId,
    });
  }, [parishDetails]);
  const { id } = useParams();
  const handleChange = (e) => {
    e.preventDefault();
    setParishData({
      ...parishData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setParishData({ ...parishData, deaneryId: event.target.value });
  };

  const handleEditParish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await updateParish({ parishId: id, parishData });
      if (data) {
        setLoading(false);
        setShow(true);
      }
    } catch (err) {
      if (err.response?.data?.msg) {
        setLoading(false);
        alert(err.response?.data?.msg);
        // Handle error
        console.error("Error fetching data:", err.response);
      }
    }
  };

  const fetchAllDeanery = async () => {
    try {
      const { data } = await fetchAllDeaneries();
      if (data) {
        setDeaneries(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getParishById = async () => {
    try {
      const { data } = await fetchParishById(id);
      if (data) {
        setParishDetails(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchAllDeanery();
  }, []);

  useEffect(() => {
    getParishById(id);
    // eslint-disable-next-line
  }, [id]);
  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"Edit Parish"}
          path={"/dashboard/parishes"}
        />
      </div>

      <div>
        {parishDetails === {} ? (
          "Loaing "
        ) : (
          <form
            className="w-[97%] my-[2rem] px-[1rem] mx-auto"
            onSubmit={handleEditParish}
          >
            <div className="flex flex-wrap justify-between">
              <div className="mt-[18px] w-full md:w-[49%]">
                <label className="mb-[15px] text-[.8rem]">Name </label>
                <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                  <input
                    name="name"
                    className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                    value={parishData.name}
                    placeholder="St. John Catholic Church, Ado"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="mt-[18px] w-full md:w-[49%]">
                <label className="mb-[15px] text-[.8rem]">Deanery </label>
                <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                  <select
                    name="deaneryId"
                    className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                    value={parishData.deaneryId}
                    placeholder="e.g Anthonysam@gmail.com"
                    onChange={handleSelectChange}
                  >
                    <option>Select Deanery</option>
                    {deaneries?.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="mt-[18px] w-full md:w-[49%]">
                <label className="mb-[15px] text-[.8rem]">AYD Payment </label>
                <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                  <select
                    name="hasPaid"
                    className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                    value={parishData.hasPaid ? "Yes" : "No"}
                    placeholder=""
                    onChange={(e) => handleChange(e)}
                  >
                    <option>AYD Payment</option>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                </div>
              </div>

              <div className="mt-[18px] w-full md:w-[49%]">
                <label className="mb-[15px] text-[.8rem]">Address </label>
                <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                  <input
                    name="location"
                    className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                    value={parishData.location}
                    placeholder="Enter address"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            {show && (
              <h4 className="mt-[2rem] text-green text-center">
                Parish Successfully Updated!
              </h4>
            )}

            <div className="flex md:w-[400px] mx-auto justify-center items-center h-[48px] mt-[3rem] rounded-[5px] text-white bg-green">
              <button
                type="submit"
                className="border-none outline-none cursor-pointer"
              >
                {loading ? <Loader /> : "UPDATE"}
              </button>
            </div>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EditParish;
