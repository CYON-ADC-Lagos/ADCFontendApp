import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  isEmpty,
  isValidEmail,
  validatePhoneNumber,
} from "../../helpers/utils";
import { ContactOptions } from "../Ayd";
import AYDLogo from "../../Assests/AYD1.png";
import SelectInput from "../Ayd/SelectInput";
import PersonalInfo from "../Ayd/PersonalInfo";
import { getAllDeaneries } from "../../Api/axios";
import { fetchAllPaidParishByDeanery } from "../../Redux/Api";

const AYDModal = () => {
  const initialState = {
    deaneryId: "",
    parishId: "",
    firstName: "",
    lastName: "",
    email: "",
    aydId: "41d93bdd-5201-4c9f-992d-fc09f8f7b9b0",
    position: "",
    phoneNumber: 0,
    gender: "",
  };
  const [parishes, setParishes] = useState([]);

  const [requestData, setRequestData] = useState(initialState);
  const [activeStep, setStep] = useState(1);
  const [deaneries, setDeaneries] = useState([]);
  const { deaneryId, parishId, email, phoneNumber } = requestData;
  const [isValid, setIsValid] = useState(true);
  const [isValidNumber, setIsValidNumber] = useState(false);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setRequestData({ ...requestData, [name]: val });
    if (name === "email") {
      if (!isValidEmail(email)) {
        setIsValid(false);
        return;
      } else {
        setIsValid(true);
        return;
      }
    }
    if (name === "phoneNumber") {
      if (!validatePhoneNumber(phoneNumber)) {
        setIsValidNumber(false);
        return;
      } else {
        setIsValidNumber(true);
        return;
      }
    }
  };

  const fetchParishes = async () => {
    try {
      const { data } = await fetchAllPaidParishByDeanery(
        requestData?.deaneryId
      );
      if (data) {
        setParishes(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const next = () => {
    setStep(activeStep + 1);
  };
  const goBack = () => setStep(activeStep - 1);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const fetchDeaneries = async () => {
    try {
      const { data } = await getAllDeaneries();
      if (data) {
        setDeaneries(data);
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDeaneries();
  }, []);

  useEffect(() => {
    if (requestData?.deaneryId) {
      fetchParishes();
    }
    // eslint-disable-next-line
  }, [requestData?.deaneryId]);

  return (
    <div className="parallax">
      <div className="modal">
        <div className="modal-box p-0  max-w-[100vw] w-[100vw] rounded-none max-h-[100vh] h-[100vh]">
          <section className="h-full">
            <div className="flex">
              <div className="w-[100%] md:w-[80%]">
                <div className="w-full">
                  <form
                    className=" w-full md:w-100vh relative "
                    onSubmit={(e) => e.preventDefault()}
                    onKeyDown={handleKeyPress}
                  >
                    {activeStep === 1 && (
                      <SelectInput
                        name="deaneryId"
                        start
                        label="Select deanery name"
                        placeholder="Select your deanery name"
                        goBack={goBack}
                        next={next}
                        onChange={handleChange}
                        requestData={requestData}
                        disable={isEmpty(deaneryId)}
                        activeStep={activeStep}
                        setStep={setStep}
                        list={deaneries}
                        type="Deanery"
                      />
                    )}
                    {activeStep === 2 && (
                      <SelectInput
                        name="parishId"
                        label="Select your Parish name"
                        placeholder="Select your parish name"
                        goBack={goBack}
                        next={next}
                        onChange={handleChange}
                        requestData={requestData}
                        disable={isEmpty(parishId)}
                        activeStep={activeStep}
                        setStep={setStep}
                        list={parishes}
                        type="text"
                      />
                    )}
                    {activeStep === 3 && (
                      <PersonalInfo
                        requestData={requestData}
                        goBack={goBack}
                        next={next}
                        onChange={handleChange}
                      />
                    )}
                    {activeStep === 4 && (
                      <ContactOptions
                        requestData={requestData}
                        goBack={goBack}
                        next={next}
                        isValid={isValid}
                        isValidNumber={isValidNumber}
                        onChange={handleChange}
                      />
                    )}

                    {activeStep === 5 && (
                      <motion.div
                        whileInView={{ y: [-100, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mx-auto w-[80%] h-screen flex flex-col justify-center"
                      >
                        <div className=" text-white mb-[2rem]">
                          <a href="/">
                            <img
                              src={AYDLogo}
                              alt="AYD log"
                              className="object-contain w-[200px] mx-auto h-[100px]"
                            />
                          </a>
                        </div>
                        <div className="w-full">
                          <h2 className="text-center text-xl text-white">
                            Thank you.
                            <br />
                            Your Archdiocesan Youth Day registration was
                            successful.
                          </h2>
                          <h2 className="text-center text-xl text-white">
                            You can now <strong> proceed</strong> to make
                            payment.
                          </h2>
                          <div className="mx-auto w-[80%] mt-[3rem] text-center">
                            <a
                              href="/"
                              className="btn bg-green text-white rounded-[10px] px-[3rem] py-[.8rem]"
                            >
                              Close
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AYDModal;
