import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import HeroImg from "../../Assests/hero.png";
import { LightBulbIcon } from "@heroicons/react/solid";

function Hero() {
  return (
    <div className="w-full  mb-[4rem] z-100   relative">
      <Carousel
        className=" "
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        // centerMode={true}
        centerSlidePercentage={100}
        showArrows={true}
        interval={3000}
      >
        <div className="h-[500px]  w-full  ">
          <img
            src={HeroImg}
            alt="Hero view"
            className="w-full h-full object-cover "
          />
        </div>

        <div className=" h-[500px] w-full relative">
          <img
            src={HeroImg}
            alt="Hero view"
            className="w-full h-full object-cover "
          />
          {/* <div className="absolute right-[4rem] md:right-[9rem] bg-white w-[200px] md:w-[380px] -bottom-6 px-[1rem] text-center  pb-[2rem] rounded-[10px]">
            <div className="bg-green rounded-[50%] w-[70px] text-center h-[70px] mx-auto -mt-8 mb-[1rem] md:mb-[3rem]">
              <LightBulbIcon className="w-6 text-primary" />
            </div>
            <h4 className="mb-[.5rem] md:mb-[2rem]">QUOTE OF THE WEEK</h4>
            <span className="text-green ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              nulla dolor animi !
            </span>
            <h5 className="my-[1rem] font-bold text-primary-shade">
              Archbishop J. A.Adebisi
            </h5>
          </div> */}
        </div>
      </Carousel>
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
        <div className="w-[90%] md:w-[50%] mt-[6rem] absolute top-2">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-green">
            Archdiocesan Youth Vigil
          </h1>
          <p className="mt-[1rem]  text-[1rem] leading-7 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            similique sed. Voluptate consequuntur laudantium perspiciatis, amet
            magnam unde quis, sed quibusdam.
          </p>
          <div className="flex">
            <button className="bg-primary-shade mr-[2rem]  my-8 text-white font-bold  rounded-[25px] py-[.7rem] px-[3rem]">
              Register
            </button>
            <button className="bg-green my-8 text-white font-bold  rounded-[25px] py-[.7rem] px-[3rem]">
              View More
            </button>
          </div>
        </div>
        <div className="hidden md:block absolute  right-[4rem] md:right-[2rem] lg:right-[9rem] bg-white -bottom-7 shadow-lg  w-[200px] md:w-[380px] -bottom- px-[1rem] text-center  pb-[2rem] rounded-[10px]">
          <div className="bg-green rounded-[50%] w-[70px] flex h-[70px] mx-auto -mt-8 mb-[1rem] md:mb-[3rem]">
            <LightBulbIcon className="w-10 text-primary mx-auto" />
          </div>
          <h4 className="mb-[.5rem] md:mb-[2rem]">QUOTE OF THE WEEK</h4>
          <span className="text-green ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nulla
            dolor animi !
          </span>
          <h5 className="my-[1rem] font-bold text-primary-shade">
            Archbishop J. A.Adebisi
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
