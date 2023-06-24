import { Layout } from "../../Components";
import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

function Contact() {
  return (
    <Layout>
      <div className="flex max-w-[90%] flex-wrap my-[5rem] lg:max-w-[85%] mx-auto ">
        <div className=" md:w-[50% mb-[2rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Contact Us.
          </h2>
          <p className="md:w-[80%]">
            {" "}
            For enquiries, sponsorship, feedback, kindly reach out to us. A team
            member will respond swiftly.
          </p>
        </div>
        <div>
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Get in touch with us
          </h2>
          <p>Fill the form below or visit us at our contact address</p>
          <div className="flex mb-3 mt-3">
            <LocationMarkerIcon className="w-5 mr-3 " />
            <p>Address</p>
          </div>
          <div className="flex mb-3">
            <PhoneIcon className="w-4 mr-3" />
            <p>0800000000</p>
          </div>
          <div className="flex mb-3">
            <MailIcon className="w-4 mr-3" />
            <p>DDDD@gmail.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
