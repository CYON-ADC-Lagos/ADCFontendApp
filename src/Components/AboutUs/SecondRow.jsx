import About1 from "../../Assests/about1.png";

function SecondRow() {
  return (
    <div className="flex-reverse flex flex-wrap mb-[4rem] mt-[8rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
      <div className="mb-[4rem]  md:h-[400px] w-full  md:w-[52%]">
        <img src={About1} alt="" className="md:h-full w-full  object-cover" />
      </div>
      <div className="md:w-[40%] mb-[4rem] w-full  md:ml-[6rem] flex items-center">
        <div className="   ">
          <h4 className="text-[1.5rem] md:text-[2rem]  leading-8 font-extrabold text-green">
            WHO WE ARE.
          </h4>
          <p className="mt-[1rem]  text-[1rem] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            similique sed. Voluptate consequuntur laudantium perspiciatis, amet
            magnam unde quis, sed quibusdam, iure rerum doloribus illo! Veniam
            quia numquam non nulla? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, similique sed. Voluptate consequuntur
            laudantium perspiciatis, amet magnam unde quis, sed quibusdam, iure
            rerum doloribus illo! Veniam quia numquam non nulla?
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondRow;
