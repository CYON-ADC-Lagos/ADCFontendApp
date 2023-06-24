import VisionIcon from "../../Assests/vision.png";
import Target from "../../Assests/target.png";

function Vision() {
  return (
    <div className="w-full  bg-[#ABDBB7] pt-[3rem] pb-[3rem]">
      <div className="flex justify-between flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[50%] mb-[4rem]">
          <img src={Target} alt="icon" className="w-[80px] mb-[1rem]" />
          <h4 className="text-[2rem] font-extrabold leading-8 text-white ">
            Our Vision
          </h4>
          <p className="mt-[1rem] md:w-[80%] text-[1rem] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            similique sed. Voluptate consequuntur laudantium perspiciatis, amet
            magnam unde quis, sed quibusdam, iure rerum doloribus illo! Veniam
            quia numquam non nulla? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, similique sed.sed quibusdam, iure rerum
            doloribus illo! Veniam quia numquam non nulla? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facilis, similique sed.
          </p>
        </div>
        <div className="w-full md:w-[50%] mb-[4rem]">
          <img src={VisionIcon} alt="icon" className="w-[80px] mb-[1rem]" />

          <h4 className="text-[2rem] font-extrabold leading-8 text-white ">
            Our Mission
          </h4>
          <p className="mt-[1rem] md:w-[80%] text-[1rem] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            similique sed. Voluptate consequuntur laudantium perspiciatis, amet
            magnam unde quis, sed quibusdam, iure rerum doloribus illo! Veniam
            quia numquam non nulla? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, similique sed.sed quibusdam, iure rerum
            doloribus illo! Veniam quia numquam non nulla? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facilis, similique sed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
