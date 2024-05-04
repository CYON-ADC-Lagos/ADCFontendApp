import React, { useState } from "react";
import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";

const CreateParish = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    hasPaid: "",
    location: "",
    deaneryId: "",
    meetingDay: "",
    time: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateParish = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };
  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"Parish"}
        />
      </div>

      <div>
        <form
          className="w-[97%] my-[2rem] px-[1rem] mx-auto"
          onSubmit={handleCreateParish}
        >
          <div className="flex flex-wrap justify-between">
            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Name </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="name"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.name}
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
                  value={signUpData.deaneryId}
                  placeholder="e.g Anthonysam@gmail.com"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Deanery</option>
                  <option>Maryland</option>
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
                  value={signUpData.hasPaid}
                  placeholder=""
                  onChange={(e) => handleChange(e)}
                >
                  <option>AYD Payment</option>
                  <option>True</option>
                  <option>False</option>
                </select>
              </div>
            </div>

            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Location </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="location"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.location}
                  placeholder="Enter address"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Meeting Day</label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="meetingDay"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.meetingDay}
                  placeholder="e.g 1st Sunday"
                  type="text"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Meeting Time </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="time"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.time}
                  placeholder="Time of Meeting"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="flex md:w-[400px] mx-auto justify-center items-center h-[48px] mt-[3rem] rounded-[5px] text-white bg-green">
            <button
              type="submit"
              className="border-none outline-none cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateParish;
