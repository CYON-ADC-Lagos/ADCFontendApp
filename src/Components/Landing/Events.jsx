import Title from "../Common/Title";
import {
  CalendarIcon,
  LocationMarkerIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

function Events({ events, type }) {
  return (
    <div className="w-full bg-[#CFB471]  py-[4rem]">
      <Title title={type} text="text-white" bg="bg" border="border-green" />

      <Carousel
        className=" "
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        // centerMode={true}
        centerSlidePercentage={100}
        showArrows={true}
        interval={5000}
      >
        {events?.map(
          ({ eflier, title, description, deadline, date, url, host }, item) => (
            <div className="w-[80%] flex-wrap gap-[4rem] flex mx-auto mt-[2rem]">
              <div className=" w-[90%] md:w-[30%] ">
                {eflier ? (
                  <img
                    src={eflier}
                    alt="CYON  Event flier"
                    className="h-[200px] md:h-auto object-cover"
                  />
                ) : (
                  <div className="bg-green w-full h-[200px]  md:h-[400px]"></div>
                )}
              </div>
              <div className="items-center text-left flex w-full md:w-[55%] lg:w-[40%]">
                <div className=" text-white mb-[2.5rem]">
                  <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
                    {title}
                  </h2>
                  <p className=" mb-[.5rem] text-[1rem] md:text-[1.2rem]">
                    {description}
                  </p>
                  <div className="flex gap-2 font-bold mb-[.5rem]">
                    <CalendarIcon className="w-4 text-white" />
                    <h5>{date}</h5>
                  </div>
                  <div className="flex gap-2 font-bold  mb-[.5rem]">
                    <LocationMarkerIcon className="w-4 text-white" />
                    <h5 className="text-[.8rem] md:text-[1rem]">
                      St. Agnes Catholic Church, Maryland Lagos
                    </h5>
                  </div>
                  <div className="flex gap-2 font-bold  mb-[2rem]">
                    <XCircleIcon className="w-6 text-red-500" />
                    <h5>{deadline}</h5>
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green rounded-[25px] text-white px-[3rem] py-[.6rem] mt-[1rem] mb-[2rem]"
                    >
                      Register
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default Events;
