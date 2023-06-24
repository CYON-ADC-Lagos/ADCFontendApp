import Title from "../Common/Title";
import ExecutivesCard from "../Shared/ExecutiveCard";

function DeanExecutives() {
  const deanExco = [
    {
      lastName: "Exco ",
      names: "Exco",
      photo: "Nil",
      title: "Very Rev. Fr.",
      position: "Chaplain",
    },
    {
      lastName: "Exco ",
      names: "Exco",
      photo: "Nil",
      position: "Coordinator",
    },
    {
      lastName: "Exco ",
      names: "Exco",
      photo: "Nil",
      position: "Vice-Coordinator",
    },
    {
      lastName: "Exco ",
      names: "Exco",
      photo: "Nil",
      position: "Secretary",
    },
  ];
  return (
    <div>
      <div className="w-full  mb-[3rem] py-[1rem]">
        <Title
          text="text-primary"
          title="MEET THE EXECUTIVES"
          bg="bg"
          border="border-green"
        />

        <div className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%]  py-[2rem]">
          {deanExco?.map((item) => (
            <ExecutivesCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeanExecutives;
