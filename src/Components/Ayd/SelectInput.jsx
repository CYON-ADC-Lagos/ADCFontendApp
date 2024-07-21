import React from "react";
import Controls from "./Controls";
import { motion } from "framer-motion";
import AYDLogo from "../../Assests/AYD1.png";

const SelectInput = ({
  requestData,
  name,
  label,
  placeholder,
  goBack,
  next,
  onChange,
  disable,
  start,
  end,
  activeStep,
  setStep,
  list,
  type,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (activeStep < 6 && !disable) return setStep(activeStep + 1);
    }
  };
  return (
    <motion.div
      whileInView={{ y: [-100, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="mx-auto w-[90%] md:w-[80%] h-screen mt-[10rem] md:mt-[1rem] md:justify-center flex-col flex "
    >
      <div className=" mb-[2rem] ">
        <a href="/">
          <img
            src={AYDLogo}
            alt="AYD log"
            className="object-contain w-[200px] mx-auto h-[100px]"
          />
        </a>
      </div>
      <div className="w-full">
        <h2 className="text-[#bcbcbc] text-xl font-base md:text-2xl">
          {label}
        </h2>
        {list && (
          <select
            name={name}
            value={requestData[name]}
            className="border focus:border-primary w-full py-4 px-[.5rem] h-[60px] rounded-md my-4 normal-case text-black focus:outline-none"
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={handleKeyPress}
          >
            <option>Select {type} name</option>
            {list.map((item) => (
              <option value={item?.id} key={item?.id}>
                {item?.name}
              </option>
            ))}
          </select>
        )}
        {/* <label className="block text-primary mt-2"> Full Name</label> */}
        <Controls
          goBack={goBack}
          next={next}
          start={start}
          end={end}
          disable={disable}
        />
      </div>
    </motion.div>
  );
};

export default SelectInput;
