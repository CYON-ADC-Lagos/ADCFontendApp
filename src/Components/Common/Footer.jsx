import { Link } from "react-router-dom";
import Logo from "../../Assests/cyonlogo.png";
import { mediaLinks } from "../../helpers/data";

function Footer() {
  return (
    <footer className="bg-primary w-full py-10 ">
      <div className="flex flex-row flex-wrap max-w-[90%] lg:max-w-[85%] mx-auto">
        <div className="flex w-full   md:w-[50%] mb-5 ">
          <img src={Logo} alt="Rasmin" className="object-contain w-[100px] " />
          <div>
            <p className="text-[1rem] md:text-[1.3rem] leading-5 md:leading-7 ml-4 font-extrabold al text-white ">
              Catholic Youth <br></br>
              Organisation of Nigeria [CYON]<br></br>
              <span className="text-green font-normal">
                Archdiocese of Lagos
              </span>
              <br></br>
              <span className="font-normal">Address</span>
            </p>
            <div className="flex gap-2 ml-4 mt-4">
              {mediaLinks?.map(({ path, title, icon }, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={path}
                  className="cursor-pointer "
                  rel="noreferrer"
                >
                  <img
                    src={icon}
                    alt={`CYON ${title}`}
                    className="w-7 h-7 md:w-10 md:h-10  p-1 md:p-2 bg-white  rounded-full grayscale hover:grayscale-0 hover:scale-110  hover:-translate-y-1 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col   text-left md:flex-row w-full md:w-[40%] justify-between">
          <div className="flex flex-col font-normal text-white text-[1.2rem] mb-4">
            <Link to="/" className="mb-3">
              Home
            </Link>
            <Link to="/policy" className="mb-3">
              Policy
            </Link>
            <Link to="/about-us" className="mb-3">
              About Us
            </Link>
            <Link to="/deaneries" className="mb-3">
              Deaneries
            </Link>
            <Link to="/contact" className="mb-3">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col text-white font-normal text-[1.2rem]">
            <Link to="/" className="mb-3">
              Meet the Executives
            </Link>
            <Link to="/" className="mb-3">
              Upcoming Events
            </Link>
            <Link to="/" className="mb-3">
              Photo Gallery
            </Link>
            <Link to="/" className="mb-3">
              Feedback
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] lg:max-w-[80%] mt-9 mx-auto  p-4 border-t flex justify-center">
        <p className="text-[#ffffffd0] text-sm text-center">
          &copy; CYON - 2023 | All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
