import { motion } from "framer-motion";
import React, { useState } from "react";
import { isEmpty } from "../../helpers/utils";
import { ContactOptions, FormInput } from "../Ayd";
import AYDLogo from "../../Assests/AYD1.png";
import SelectInput from "../Ayd/SelectInput";
import { deaneryName } from "../../helpers/data";
import PersonalInfo from "../Ayd/PersonalInfo";

const AYDModal = () => {
  const initialState = {
    deanery: "",
    parish: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    gender: "",
    targetAudience: "",
    phoneNumber: "",
    preferredMode: "",
    preferredTime: "",
    contentMarketing: false,
    influencerMarketing: false,
    digitalAnalytics: false,
    socialMediaManagement: false,
    webAndAppDevelopment: false,
    uiUxDesign: false,
    productScope: false,
    dedicatedTeams: false,
  };
  const [requestData, setRequestData] = useState(initialState);
  const [activeStep, setStep] = useState(1);
  const { deanery, parish } = requestData;

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setRequestData({ ...requestData, [name]: val });
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
  const closeModal = () => {
    setStep(1);
    setRequestData(initialState);
  };

  return (
    <>
      {/* <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        onClick={closeModal}
      /> */}
      <div className="modal">
        <div className="modal-box p-0  relative max-w-[100vw] w-[100vw] rounded-none max-h-[100vh] h-[100vh] z-20">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm hover:bg-secondary btn-circle text-[#fff] absolute right-6 top-6"
            onClick={closeModal}
          >
            ✕
          </label>
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
                        name="deanery"
                        start
                        label="Select deanery name"
                        placeholder="Select your deanery name"
                        goBack={goBack}
                        next={next}
                        onChange={handleChange}
                        requestData={requestData}
                        disable={isEmpty(deanery)}
                        activeStep={activeStep}
                        setStep={setStep}
                        list={deaneryName}
                        type="Deanery"
                      />
                    )}
                    {activeStep === 2 && (
                      <SelectInput
                        name="parish"
                        start
                        label="Select your Parish name"
                        placeholder="Select your parish name"
                        goBack={goBack}
                        next={next}
                        onChange={handleChange}
                        requestData={requestData}
                        disable={isEmpty(parish)}
                        activeStep={activeStep}
                        setStep={setStep}
                        list={deaneryName}
                        type="Parish"
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
                        onChange={handleChange}
                      />
                    )}

                    {activeStep === 5 && (
                      <motion.div
                        whileInView={{ y: [-100, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mx-auto w-[80%] h-screen flex flex-col justify-center"
                      >
                        <div className=" text-black mb-[2rem]">
                          <a href="/">
                            <img
                              src={AYDLogo}
                              alt="AYD log"
                              className="object-contain w-[200px] mx-auto h-[100px]"
                            />
                          </a>
                        </div>
                        <div className="w-full">
                          <h2 className="text-center text-xl text-black">
                            Thank you.
                            <br />
                            Your Archdiocesan Youth Day registration was
                            successful.
                          </h2>
                          <h2 className="text-center text-xl text-black">
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

              {/* SideBar  start*/}
              <div className="p-8  hidden md:w-[30%] bg-white  md:block text-black  h-[90vh]">
                <div className="flex  h-full pt-[4rem]">
                  <div className="">
                    <div className=" ">
                      <a href="/">
                        <img
                          src={AYDLogo}
                          alt="AYD log"
                          className="object-contain w-[200px] mx-auto h-[200px]"
                        />
                      </a>
                    </div>
                    <h6 className="mt-[1rem] text-2xl text-green text-center">
                      Archdiocesan Youth Day.{" "}
                    </h6>

                    <h6 className="mt-[1rem] ">
                      Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem
                      Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem
                    </h6>
                  </div>
                </div>
              </div>
              {/* SideBar  end*/}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AYDModal;
