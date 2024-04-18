import { motion } from "framer-motion";
import { isEmpty } from "../../helpers/utils";
import Controls from "./Controls";
import AYDLogo from "../../Assests/AYD1.png";

const PersonalInfo = ({ requestData, goBack, next, onChange, start, end }) => {
  const { firstName, lastName } = requestData;
  const disableBtn = isEmpty(lastName) || isEmpty(firstName);
  return (
    <motion.div
      whileInView={{ y: [-100, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="mx-auto w-[80%] h-screen flex flex-col justify-center items-center"
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
      <div className="w-full text-[#bcbcbc]">
        <h2 className="text-[#bcbcbc] text-xl font-base md:text-2xl mb-3 md:mb-6">
          Personal Information
        </h2>
        <div className="space-y-6 mb-8">
          <div>
            <h2 className="md:text-lg mb-1">First Name</h2>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="border focus:border-primary w-full px-2 py-3 md:p-4 rounded-md lowercase focus:outline-none"
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div>
            <h2 className="md:text-lg mb-1">Last Name</h2>
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="border focus:border-primary w-full px-2 py-3 md:p-4 rounded-md  lowercase focus:outline-none"
              placeholder=""
              onChange={onChange}
            />
          </div>
        </div>

        {/* <label className="block text-primary mt-2"> Full Name</label> */}
        <Controls
          goBack={goBack}
          next={next}
          start={start}
          end={end}
          disable={disableBtn}
        />
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
