import Title from "../Common/Title";
import Yen from "../../Assests/YEN.png";
import Avy from "../../Assests/AYV.jpeg";
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
          <img src={Avy} alt="CYON Event flier" />
        </div>
        <div className="items-center flex w-[90%] md:w-[55%] lg:w-[40%]">
          <div className=" text-white">
            <h2 className="font-bold text-[2rem]">Archdiocesan Youth Vigil</h2>
            <p className=" mb-[.5rem] text-[1.2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem
              ipsum dolor sit amet consectetur adipisicing elit..
            </p>
            <div className="flex gap-2 font-bold mb-[.5rem]">
              <CalendarIcon className="w-4 text-white" />
              <h5>June 2, 2023</h5>
            </div>
            <div className="flex gap-2 font-bold  mb-[.5rem]">
              <LocationMarkerIcon className="w-4 text-white" />
              <h5 className="">St. Agnes Catholic Church, Maryland Lagos</h5>
            </div>
            <div className="flex gap-2 font-bold  mb-[.5rem]">
              <ClockIcon className="w-4 text-white" />
              <h5>6:00am</h5>
            </div>
            <button className="bg-green rounded-[25px] text-white px-[3rem] py-[.6rem] mt-[1rem]">
              View Others
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
