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
            We are committed to promoting our core values of:
            <ul className="ml-[2rem] list-disc">
              <li> Youth Spirituality </li>
              <li>Profession and Vocation</li>
              <li>Social Communication</li>
              <li>The Youth and Socialization</li>
              <li> Empowerment</li>
            </ul>
          </p>
        </div>
        <div className="w-full md:w-[50%] mb-[4rem]">
          <img src={VisionIcon} alt="icon" className="w-[80px] mb-[1rem]" />

          <h4 className="text-[2rem] font-extrabold leading-8 text-white ">
            Our Mission
          </h4>
          <p className="mt-[1rem] md:w-[80%] text-[1rem] leading-7">
            Our vision at the Catholic Youth Organisation of Nigeria (CYON) is
            to empower and inspire young people to become active and engaged
            members of their communities, guided by the principles of faith,
            service, and leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
