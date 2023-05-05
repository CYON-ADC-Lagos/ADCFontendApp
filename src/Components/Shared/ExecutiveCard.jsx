function ExecutivesCard({ item: { lastName, names, photo, title, position } }) {
  return (
    <div className="text-center w-[80%] -200 mb-[1.5rem] mx-auto md:w-[22%]">
      <div className=" w-full flex justify-center  mx-auto rounded-[50%] md:w-[200px] h-[200px]">
        <img
          src={photo}
          alt={title}
          className="rounded-[50%] w-full h-full object-cover"
        />
      </div>
      <p className="font-normal text-primary ">{title}</p>
      <p className=" text-green font-semibold">{names}</p>
      <p className=" text-primary-shade font-extrabold">{lastName}</p>
      <p className="text-[#A7A5A5] font-normal">{position}</p>
    </div>
  );
}

export default ExecutivesCard;
