import React, { useState } from "react";
import { privateRoute } from "../../helpers/data";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../Assests/cyonlogo.png";

const DashboardMenu = ({ pathname }) => {
  const navigate = useNavigate();
  const [data] = useState([]);
  const [open] = useState(false);

  const handleDropDown = () => {};
  const handleLogout = () => {};
  const goTo = (item) => {
    navigate(item);
  };
  const user = {};
  return (
    <>
      <div
        className={` justify-between h-full relative py-6 overflow-y-auto bg-[#fff]"}`}
      >
        <div>
          <div className="flex justify-between items-center gap-2 p-3 mx-5 lg:mx-8">
            <Link href="/" className="flex items-center justify-center">
              <img src={Logo} alt="Arad" className="max-h-7 mx-auo" />
              {/* <h4 className={`ml-[7px]  text-[21px] sm:text-[24px]`}></h4> */}
            </Link>
          </div>

          <div className="flex flex-col justify-center mt-8  pl-3 ml-5 lg:ml-8">
            {privateRoute && (
              <>
                {privateRoute?.map(({ path, title, icon }, i) => (
                  <div
                    key={i}
                    // href={path}
                    onClick={() => goTo(path)}
                    className={` py-2 mb-2 md:mb-[1.5rem]   flex pr-[1.5rem] font-light  ${
                      pathname === path ? " text-green border-r-2  " : ""
                    } 
                     
         `}
                  >
                    <span className="">{icon}</span>
                    <span className="text-sm font-medium  ml-[1rem]">
                      {title}
                    </span>
                    {title === "Livestream" ? (
                      <span className="bg-red-400 text-white w-4 h-4 text-[.6rem] items-center flex justify-center text-center rounded-full">
                        {data?.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div
          className="flex bottom-[8rem] w-full md:bottom-[10px] absolute md:justify-between gap-2 mx-5 border-t border-[#efefef] pt-7 lg:mx-6 text-sm cursor-pointer dropdown dropdown-top"
          tabIndex="0"
        >
          <div className="flex gap-3 items-center">
            <div className="text-kdark3">
              <h2>
                {user?.username
                  ? `${user?.username.slice(0, 15)}${
                      user?.username?.length > 15 ? "..." : ""
                    }`
                  : "Name"}
              </h2>
              <h2
                className={`text-xs text-[#AAAAAA] text-kdark3
                }`}
              >
                {user?.email
                  ? `${user?.email?.slice(0, 22)}${
                      user?.email?.length > 22 ? "..." : ""
                    }`
                  : "Email"}
              </h2>
            </div>
          </div>
          {!open && (
            <IoChevronDown
              className={`text-xl float-right text-kdark3
              `}
              onClick={handleDropDown}
            />
          )}
          {open && (
            <IoChevronUp
              className={`text-xl float-righttext-kdark3
              `}
              onClick={handleDropDown}
            />
          )}
          {open && (
            <ul
              tabIndex="0"
              className={`absolute bottom-[90px] x menu w-[80%]  py-2 mx-auto shadow bg-[#fff] text-kdark3
              `}
            >
              <li
                className="px-2 py-[.8rem] border-t-[#ebe9e9] border-t-[1px]"
                onClick={handleLogout}
              >
                <span className="flex hover:text-red-500  ">
                  <FiLogOut className="w-6 h-4 " />
                  <p className="mr-4">Logout</p>
                </span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardMenu;
