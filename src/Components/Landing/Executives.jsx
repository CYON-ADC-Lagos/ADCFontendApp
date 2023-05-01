import Title from "../Common/Title";
import { executives } from "../../helpers/data";
import ExecutivesCard from "../Shared/ExecutiveCard";

function Executives() {
  return (
    <div className="w-full  mb-[3rem] py-[1rem]">
      <Title
        text="text-primary"
        title="MEET THE EXECUTIVES"
        bg="bg"
        border="border-green"
      />

      <div className="flex mx-auto max-w-[90%] lg:max-w-[85%] justify-between py-[2rem]">
        {executives &&
          executives?.map((item) => <ExecutivesCard item={item} />)}
      </div>
    </div>
  );
}

export default Executives;
