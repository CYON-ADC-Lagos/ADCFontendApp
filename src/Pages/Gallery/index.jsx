import Event from "../../Assests/event.png";
import Event1 from "../../Assests/event1.png";
import Event2 from "../../Assests/event2.png";
import { Layout } from "../../Components";
import Event11 from "../../Assests/Adc.jpeg";
import Event12 from "../../Assests/Adc11.jpeg";
import Event13 from "../../Assests/adc23.jpeg";
import Event14 from "../../Assests/Ad.jpeg";
import Event15 from "../../Assests/Adc2.jpeg";
import Event16 from "../../Assests/visit.jpeg";

function Gallery() {
  return (
    <Layout>
      <div className="w-full  ">
        <h2 className="text-center mt-[3rem]  text-primary-shade font-extrabold text-[1.7rem]">
          PHOTO GALLERY
        </h2>
        <hr className="w-[90px] mx-auto border-b mt-3 border-green border-4 bg-primary"></hr>
        <div className=" flex flex-wrap  justify-between max-w-[90%] lg:max-w-[85%] py-[2rem] md:py-[6rem] mx-auto">
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event16}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[.5rem]">
              CYON Archdiocese of Lagos Executives on a warm visit to the
              Emeritus Archbishop of Lagos.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event15}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[1rem]">
              2023 Archdiocesan Youth Day (AYD).
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event14}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              2023 Archdiocesan Youth Day (AYD).
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[.5rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event1}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[1rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event2}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event11}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              Lagos Archdiocesan Laity Council 25th Annual General Meeting (AGM)
              hosted by Ikorodu Deanery.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event12}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              CYON LEP Leadership Seminar/Retreat 2023.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event13}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              2023 Archdiocesan Youth Day (AYD).
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
