import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { sliderData } from "../../helpers/data";

function Hero() {
  return (
    <div className="w-full  md:100vh  relative">
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
          <div className=" md:h-[500px] object-fill  md:flex justify-center  w-full ">
            <div className="w-full h-[300px]   md:h-full md:w-[30%] md:rounded-[50%]">
              <img
                src={item.img}
                alt="Hero view"
                className="w-full  h-full md:rounded-[50%] object-cover bg-no-repeat "
              />
            </div>

            <div className="w-full px-[1rem] md:w-[50%] mt-[2rem] md:mt-[7rem] md:ml-[2rem] text-left">
              <h1 className="text-[1.5rem] md:text-[3rem] font-extrabold text-green">
                {item.title}
              </h1>
              <p className="mt-[.5rem]  text-[1rem] leading-7 text-whi">
                {item?.description}
              </p>
              {item?.link !== null && (
                <div className="flex">
                  <button className="text-[.9rem] bg-primary-shade mr-[2rem]  my-8 text-white font-bold rounded-[20px]  md:rounded-[25px] py-[.5rem] md:py-[.7rem] px-[2rem] md:px-[3rem]">
                    <a href={item?.link}>Register</a>
                  </button>
                  <button className="bg-green my-8 text-white font-bold rounded-[20px]  md:rounded-[25px] py-[.5rem] md:py-[.7rem] px-[2rem] md:px-[3rem]">
                    View More
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
      {/* <div
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
      </div> */}
    </div>
  );
}

export default Hero;
