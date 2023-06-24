import { CalendarIcon, HomeIcon } from "@heroicons/react/solid";

function ParishCard() {
  return (
    <div className="bg-white py-[2rem] w-[250px] text-center rounded-[50%] hover:-translate-y-1 transition-transform">
      <HomeIcon className="w-10 text-green mx-auto mb-4" />
      <h4 className="text-green font-extrabold">
        Catholic Church of Presentation,
      </h4>
      <p className="text-primary">Magodo</p>
      <div className="flex justify-center">
        <CalendarIcon className="w-4 text-green mr-2" />
        <span className="text-green "> First Sunday Monthly</span>
      </div>
      <h5 className="my-[1rem] font-bold text-green">1:00pm</h5>
    </div>
  );
}

export default ParishCard;
