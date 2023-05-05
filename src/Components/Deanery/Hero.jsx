function Hero() {
  return (
    <div className="w-full h-[400px]  bg-[#F4EDDD]  mb-[4rem] pt-[3rem]">
      <div className=" flex justify-between  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-[60%]">
          <h4 className="text-[2rem] font-extrabold text-green">
            Welcome to Agege Deanery!
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
        <div className="">
          <div className=" shadow-lg bg-white w-[200px] md:w-[350px] px-[1rem] text-center  pb-[2rem] rounded-[10px] mt-[3rem]">
            <div className="bg-green  rounded-[50%] w-[70px] h-[70px] mx-auto -mt-[1rem] md:mb-[3rem]">
              88
            </div>
            <h4 className="mb-[.5rem] md:mb-[2rem] font-bold text-primary-shade">
              MEETING DETAILS
            </h4>
            <span className="text-green ">Every First Sunday of the Month</span>
            <h5 className="my-[1rem] font-bold text-green">1:00pm</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
