import Title from "../Common/Title";
import ParishCard from "./ParishCards";

function Parishes() {
  return (
    <div className="bg-green py-[2rem]">
      <Title text="text-white" title="PARISHES" bg="bg" border="border-white" />
      <div className="flex gap-4 my-[2rem] flex-wrap mx-auto max-w-[90%] justify-center lg:max-w-[85%]">
        <ParishCard />
        <ParishCard />
        <ParishCard />
        <ParishCard />
        <ParishCard />
        <ParishCard />
        <ParishCard />
      </div>
    </div>
  );
}

export default Parishes;
