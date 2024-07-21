import { motion } from "framer-motion";
import React from "react";
import AYDLogo from "../../Assests/AYD1.png";

const ClosedAYD = () => {
  return (
    <div className="parallax">
      <div className="modal">
        <div className="modal-box p-0  max-w-[100vw] w-[100vw] rounded-none max-h-[100vh] h-[100vh]">
          <section className="h-full">
            <div className="flex">
              <div className="w-[100%] md:w-[80%] mx-auto">
                <div className="w-full">
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
                        The Archdiocesan Youth Day registration is now
                        officially <strong>CLOSED</strong> .
                      </h2>
                      <h2 className="text-center text-xl text-white">
                        We appreciate the overwhelming response and are excited
                        to see you all there!.
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClosedAYD;
