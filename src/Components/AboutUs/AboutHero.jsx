import About1 from "../../Assests/about1.png";

function AboutHero() {
  return (
    <div className="w-full md:h-[450px]  bg-[#F4EDDD]  mb-[4rem] pt-[3rem]">
      <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[52%]   md:mr-[6rem] mb-[2rem]">
          <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-green ">
            CYON Lagos Archdiocese is the hub of over 1 million Catholic Youths.
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
        <div className="md:h-[400px] md:w-[38%] w-full -mb-[4rem] md:mb-0">
          <img src={About1} alt="" className="h-full object-cover w-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
