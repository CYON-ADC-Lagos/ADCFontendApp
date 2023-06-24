import { CalendarIcon } from "@heroicons/react/outline";

function Hero({ deanery }) {
  return (
    <div
      className={`w-full h-[500px] relative mix-blend-multiply mb-[4rem] pt-[3rem] hero`}
      // style={{ backgroundImage: `url + ("../../Assests/Maryland.jpeg")` }}
    >
      <div className=" flex justify-between  mt-[2rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="bg-white pb-[1rem] absolute -bottom-[4rem] shadow-md w-[90%] md:w-[400px] md:right-[8rem] rounded-md ">
          <div className="bg-green rounded-[50%] w-[70px] flex h-[70px] mx-auto -mt-8 mb-[1rem] md:mb-[3rem]">
            <CalendarIcon className="w-10 text-primary mx-auto" />
          </div>
          <h4 className="text-center text-[1.2rem]  md:text-[1.5rem] font-extrabold text-green  p-2 ">
            Welcome to {deanery} Deanery!
          </h4>
          <h4 className=" text-center mb-[.5rem] font-bold text-primary-shade">
            MEETING DETAILS
          </h4>
          <div className=" text-center">
            <span className="text-green ">Every First Sunday of the Month</span>
            <h5 className="my-[1rem] font-bold text-green">1:00pm</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
