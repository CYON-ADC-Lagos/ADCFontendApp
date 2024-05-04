import Title from "../Common/Title";
import { executives } from "../../helpers/data";
import ExecutivesCard from "../Shared/ExecutiveCard";
import { NavLink } from "react-router-dom";

function ExecutivesRow() {
  return (
    <div>
      <div className="w-full mt-[2rem] md:mt-[1rem] mb-[3rem] py-[1rem]">
        <Title
          text="text-primary"
          title="MEET THE EXECUTIVES"
          bg="bg"
          border="border-green"
        />

        <div className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%] justify-center md:justify-between py-[2rem]">
          {window.location.pathname === "/executives"
            ? executives &&
              executives?.map((item) => <ExecutivesCard item={item} />)
            : executives &&
              executives &&
              executives
                ?.slice(0, 4)
                .map((item) => <ExecutivesCard item={item} />)}
        </div>
        {window.location.pathname === "/executives" ? (
          ""
        ) : (
          <div className="w-full text-center">
            <NavLink
              to="/executives"
              className="bg-primary-shade  mx-auto my-8 text-white font-bold  rounded-[25px] py-[.7rem] px-[3rem]"
            >
              View more..
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExecutivesRow;
