import { motion } from "framer-motion";
import { isEmpty } from "../../helpers/utils";
import Controls from "./Controls";
import { useState } from "react";
import { aydDelegateRegistration } from "../../Redux/Api";

const ContactOptions = ({
  requestData,
  goBack,
  next,
  onChange,
  start,
  isValidNumber,
  isValid,
  end = true,
}) => {
  const { phoneNumber, email, gender } = requestData;
  const [, setLoading] = useState(false);
  const disableBtn =
    phoneNumber.length === 0 || isEmpty(email) || isEmpty(gender);

  const submitRequest = async () => {
    setLoading(true);
    try {
      const { data } = await aydDelegateRegistration(requestData);
      if (data) {
        next();
      }
    } catch (error) {
      alert(error?.response?.data?.msg);
      // Handle error
      console.error("Error fetching data:", error.response);
    }
  };

  return (
    <motion.div
      whileInView={{ y: [-100, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="mx-auto w-[80%] h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full text-[#bcbcbc]">
        <h2 className="text-[#bcbcbc] text-xl font-bold md:text-2xl mb-3 md:mb-6">
          Contact Information
        </h2>
        <div className="space-y-6 mb-8">
          <div>
            <div className="flex">
              <h2 className="md:text-lg mb-1  font-bold  mr-2">
                {" "}
                Phone Number
              </h2>
              <span className="text-[red]">*</span>
            </div>
            <input
              type="number"
              name="phoneNumber"
              value={phoneNumber}
              className="border focus:border-primary text-black w-full px-2 py-3 md:p-4 rounded-md  focus:outline-none"
              placeholder=""
              onChange={onChange}
            />
            {isValidNumber === false && (
              <span className="mt-[15px] text-[red] text-[14px]">
                Invalid phone Number
              </span>
            )}
          </div>
          <div>
            <div className="flex">
              <h2 className="md:text-lg mb-1 mr-2  font-bold "> Email</h2>
              <span className="text-[red]">*</span>
            </div>

            <input
              type="email"
              name="email"
              value={email}
              className="border focus:border-primary text-black w-full px-2 py-3 md:p-4 rounded-md  lowercase focus:outline-none"
              placeholder="Enter email address"
              onChange={onChange}
            />
            {isValid === false && (
              <span className="mt-[15px] text-[red] text-[14px]">
                Invalid email address
              </span>
            )}
          </div>
          <div>
            <div className="flex">
              <h2 className="md:text-lg mb-1 mr-2  font-bold "> Gender</h2>
              <span className="text-[red]">*</span>
            </div>

            <select
              name="gender"
              className="border focus:border-primary text-black w-full px-2 py-3 md:p-4  h-[60px] rounded-md lowercase focus:outline-none cursor-pointer"
              value={gender}
              onChange={onChange}
            >
              <option value="" disabled>
                Select Gender...
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
        </div>

        {/* <label className="block text-primary mt-2"> Full Name</label> */}
        <Controls
          goBack={goBack}
          next={next}
          start={start}
          end={true}
          handleSubmit={submitRequest}
          disable={disableBtn}
        />
      </div>
    </motion.div>
  );
};

export default ContactOptions;
