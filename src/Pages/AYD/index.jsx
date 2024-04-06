import { Layout } from "../../Components";
import AYDLogo from "../../Assests/AYD1.png";

function AYD() {
  return (
    <Layout className="relative">
      <div className=" mx-auto mt-[2rem]">
        <div className="w-[300px] h-[400px] mx-auto">
          <img
            src={AYDLogo}
            alt="AYD log"
            className="object-contain w-[100%] h-[100%]"
          />
        </div>
        <h3 className="mt-[4rem] text-center font-semibold text-[1rem] md:text-[2rem]">
          AYD Registration starting soon!
        </h3>
        <div className="text-center">
          <i className="fa fa-spinner fa-spin text-[4rem] my-[1rem] text-center text-primary"></i>
        </div>
      </div>
    </Layout>
  );
}

export default AYD;
