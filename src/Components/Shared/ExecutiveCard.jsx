function ExecutivesCard({ item: { lastName, names, photo, title, position } }) {
  return (
    <div className="text-center w-[80%] mb-[1.5rem] mx-auto md:w-[22%]">
      <div className=" w-[250px] h-[250px]  flex justify-center  mx-auto rounded-[50%] md:w-[250px] md:h-[250px]">
        {photo === "Nil" ? (
          <div className="rounded-[50%] hover:-translate-y-1 transition-transform w-full bg-green"></div>
        ) : (
          <img
            src={photo}
            alt={title}
            className="rounded-[50%] w-full object-cover hover:-translate-y-1 transition-transform"
          />
        )}
      </div>
      <p className="font-normal text-primary ">{title}</p>
      <p className=" text-green font-semibold">{names}</p>
      <p className=" text-primary-shade font-extrabold">{lastName}</p>
      <p className="text-[#A7A5A5] font-normal">{position}</p>
    </div>
  );
}

export default ExecutivesCard;
