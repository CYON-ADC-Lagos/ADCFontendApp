import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Login() {
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignUpWithEmail = (e) => {
    e.preventDefault();
    if (
      signUpData.fullname === "" ||
      signUpData.email === "" ||
      signUpData.password === ""
    ) {
      //   toast.error("Please fill in all fields.");
    } else {
    }

    // handleSignUpStep(2);
  };

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {};

  return (
    <div className="w-[438px]  flex flex-col justify-center sm:w-[500px] px-[50px]">
      <div className=" mb-[37px] flex items-center  justify-between ">
        <div
          className={`  w-[30px] flex align-middle text-[#344054] items-center h-[30px] rounded-[50%] bg-[#F2F4F7] text-center cursor-pointer`}
          onClick={goBack}
        >
          <IoChevronBack
            size={18}
            color=""
            className={` mx-auto  text-center`}
          />
        </div>
        <div className="align-center text-center">
          <h4 className=" text-center text-kdark3 text-[24px]">Login</h4>
        </div>
        <div
          className=" w-[30px] flex align-middle items-center h-[30px] rounded-[50%] bg-[#F2F4F7] text-center cursor-pointer"
          onClick={goHome}
        >
          <HiX
            size={18}
            color=""
            className="text-[#344054] mx-auto  text-center"
          />
        </div>
      </div>
      <form className="w-full" onSubmit={handleSignUpWithEmail}>
        <div className="mt-[18px]">
          <label className="mb-[15px]">Email </label>
          <div className="w-full flex  mt-[.5rem] h-[54px] border border-[#CBD5E0] justify-between items-center ">
            <input
              name="email"
              className="w-full border-none outline-none h-full px-[22px]"
              value={signUpData.email}
              placeholder="e.g Anthonysam@gmail.com"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="mt-[18px]">
          <label className="mb-[15px]">Password</label>
          <div className=" mt-[.5rem] w-full flex h-[54px] border border-[#CBD5E0] justify-between items-center ">
            <input
              name="password"
              className="w-full border-none outline-none h-full px-[22px]"
              value={signUpData.password}
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-[48px] mt-[21px] rounded-[5px] text-white bg-green">
          <button
            type="submit"
            className="border-none outline-none cursor-pointer"
          >
            Continue
          </button>
        </div>
      </form>
      <div
        className={`flex text-[#718096] w-[100%] justify-center absolute bottom-[2rem] right-auto left-auto  mt-[50px] cursor-pointer text-[16px]`}
        // onClick={handleroute}
      >
        <p className="text-left ml-[5rem] w-full">
          {" "}
          Don't have an account?{" "}
          <span className="text-[#F04438]"> Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
