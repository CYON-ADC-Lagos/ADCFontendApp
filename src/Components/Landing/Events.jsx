import Title from "../Common/Title";
import Yen from "../../Assests/YEN.png";
import {
  CalendarIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/solid";

function Events() {
  return (
    <div className="w-full bg-primary-shade mb-[3rem] py-[4rem]">
      <Title
        title="UPCOMING EVENTS"
        text="text-white"
        bg="bg"
        border="border-green"
      />
      <div className="w-[80%] flex-wrap gap-[4rem] flex mx-auto my-[2rem]">
        <div className=" w-[90%] md:w-[30%] ">
          <img src={Yen} alt="CYON Event flier" />
        </div>
        <div className="items-center flex w-[90%] md:w-[55%] lg:w-[40%]">
          <div className=" text-white">
            <h2 className="font-bold text-[2rem]">Y.E.N WEEKEND</h2>
            <p className=" mb-[.5rem] text-[1.2rem]">
              An extension of the CYON Leadership Seminar. This event was
              created to increase the scope of what the leadership seminar
              currently covers.
            </p>
            <div className="flex gap-2 font-bold mb-[.5rem]">
              <CalendarIcon className="w-4 text-white" />
              <h5>April 22, 2023</h5>
            </div>
            <div className="flex gap-2 font-bold  mb-[.5rem]">
              <LocationMarkerIcon className="w-4 text-white" />
              <h5 className="">Landmark Event Center</h5>
            </div>
            <div className="flex gap-2 font-bold  mb-[.5rem]">
              <ClockIcon className="w-4 text-white" />
              <h5>10:00am</h5>
            </div>
            <button className="bg-green rounded-[25px] text-white px-[3rem] py-[.6rem] mt-[1rem]">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
