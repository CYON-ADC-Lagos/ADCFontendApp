import { NavLink } from "react-router-dom";
import Event from "../../Assests/Adc.jpeg";
import Event1 from "../../Assests/Adc11.jpeg";
import Event2 from "../../Assests/adc23.jpeg";

function Gallery() {
  return (
    <div className="w-full  ">
      <h2 className="text-center mt-[3rem]  text-primary-shade font-extrabold text-[1.7rem]">
        PHOTO GALLERY
      </h2>
      <hr className="w-[90px] mx-auto border-b mt-3 border-green border-4 bg-primary"></hr>
      <div className=" flex flex-wrap  justify-between max-w-[90%] lg:max-w-[85%] py-[2rem] md:py-[6rem] mx-auto">
        <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
          <img
            src={Event1}
            alt="Hero view"
            className="w-full h-full object-cover"
          />
          <h4 className="text-center font-light text-primary-shade  mt-[.5rem]">
            CYON LEP Leadership Seminar/Retreat 2023.
          </h4>
        </div>
        <div className="w-full md:w-[30%] mb-[5rem] md:-my-[4rem]">
          <img
            src={Event}
            alt="Hero view"
            className="w-full h-full object-cover"
          />
          <h4 className="text-center font-light text-primary-shade  mt-[1rem]">
            Lagos Archdiocesan Laity Council 25th Annual General Meeting (AGM)
            hosted by Ikorodu Deanery.
          </h4>
        </div>
        <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
          <img
            src={Event2}
            alt="Hero view"
            className="w-full h-full object-cover"
          />
          <h4 className="text-center font-light text-primary-shade mt-[1rem]">
            Deaneries Thanksgiving AYD 2023
          </h4>
        </div>
      </div>
      <div className="w-full text-center mb-[4rem] md:mb-0 md:mt-[5rem]">
        <NavLink
          to="/gallery"
          className="bg-primary-shade  mx-auto my-8 text-white font-bold  rounded-[25px] py-[.7rem] px-[3rem]"
        >
          View more..
        </NavLink>
      </div>
    </div>
  );
}

export default Gallery;
