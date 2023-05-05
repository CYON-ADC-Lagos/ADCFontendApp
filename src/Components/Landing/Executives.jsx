import Title from "../Common/Title";
import { executives } from "../../helpers/data";
import ExecutivesCard from "../Shared/ExecutiveCard";
import { NavLink } from "react-router-dom";

function Executives() {
  return (
    <div className="w-full  mb-[3rem] py-[1rem]">
      <Title
        text="text-primary"
        title="MEET THE EXECUTIVES"
        bg="bg"
        border="border-green"
      />

      <div className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%] justify-center md:justify-between py-[2rem]">
        {executives &&
          executives?.map((item) => <ExecutivesCard item={item} />)}
      </div>
      {window.location.pathname === "/executives" ? (
        ""
      ) : (
        <div className="w-full text-center">
          <NavLink
            to="/executives"
            className="bg-primary-shade  mx-auto my-8 text-white font-bold  rounded-[25px] py-[.5rem] px-[2rem]"
          >
            View more..
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Executives;
