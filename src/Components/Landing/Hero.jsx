import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { LightBulbIcon } from "@heroicons/react/solid";
import { sliderData } from "../../helpers/data";

function Hero() {
  return (
    <div className="w-full mb-[4rem] z-100  md:100vh  relative">
      <Carousel
        className=" "
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        // centerMode={true}
        centerSlidePercentage={100}
        showArrows={false}
        interval={3000}
      >
        {sliderData?.map((item) => (
          <div className="h-[500px] object-cover   w-full ">
            <img
              src={item.img}
              alt="Hero view"
              className="w-full h-full object-cover bg-no-repeat "
            />

            {/* <div className="max-w-[90%] lg:max-w-[85%] z-40  mx-auto">
              <div className="w-[90%] md:w-[50%] mt-[7rem] absolute top-2 text-left">
                <h1 className="text-[1.5rem] md:text-[3rem] font-extrabold text-white">
                  {item.title}
                </h1>
                <p className="mt-[.5rem]  text-[1rem] leading-7 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, similique sed. Voluptate consequuntur laudantium
                  perspiciatis, amet magnam unde quis, sed quibusdam.
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
            </div> */}
          </div>
        ))}
      </Carousel>
      <div
        className="  absolute right-[4%] sm:left-[4%]  md:right-[2rem]
                lg:right-[7rem] lg:left-auto bg-white -bottom-[9rem] md:-bottom-[6rem] shadow-lg w-[90%]
                 md:w-[400px]
                px-[1rem] text-center pb-[3rem] rounded-[10px]"
      >
        <div className="bg-green rounded-[50%] w-[70px] flex h-[70px] mx-auto -mt-8 mb-[1rem] md:mb-[3rem]">
          <LightBulbIcon className="w-10 text-primary mx-auto" />
        </div>
        <h4 className="mb-[.5rem] md:mb-[2rem] font-bold text-[1rem]  md:text-[1.5rem] text-primary-shade">
          QUOTE OF THE WEEK
        </h4>
        <span className="text-green ">
          A church is a hospital for sinners, not a museum for saints.
        </span>
        <h5 className="my-[2rem] font-bold text-primary-shade">
          Pauline Phillips
        </h5>
      </div>
    </div>
  );
}

export default Hero;
