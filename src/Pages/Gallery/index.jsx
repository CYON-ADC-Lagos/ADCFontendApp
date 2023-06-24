import Event from "../../Assests/event.png";
import Event1 from "../../Assests/event1.png";
import Event2 from "../../Assests/event2.png";
import { Layout } from "../../Components";

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
              src={Event2}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
