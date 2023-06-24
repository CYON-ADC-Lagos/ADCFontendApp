import { clientLogos } from "../../helpers/data";

function Sponsors() {
  return (
    <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-20">
      <h2 className="text-center   text-primary-shade font-extrabold text-[1.7rem]">
        SPONSORS
      </h2>
      <hr className="w-[90px] mx-auto border-b mt-3 border-green border-4 bg-green"></hr>
      <div className="flex flex-wrap items-center justify-evenly md:justify-between  mt-7 md:t-10 gap-6 w-full">
        {clientLogos?.slice(0, 7).map(({ name, source }, i) => (
          <img
            src={source}
            alt={name}
            key={i}
            className="md:w-fit max-h-16 cursor-pointer grayscale hover:grayscale-0 hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
