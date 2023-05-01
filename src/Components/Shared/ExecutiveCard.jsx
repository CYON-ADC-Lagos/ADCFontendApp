function ExecutivesCard({ item: { lastName, names, photo, title, position } }) {
  return (
    <div className="text-center w-[22%]">
      <div>
        <img src={photo} alt="Archbishop of Lagos State" />
      </div>
      <p className="font-normal text-primary ">{title}</p>
      <p className=" text-green font-semibold">{names}</p>
      <p className=" text-primary-shade font-extrabold">{lastName}</p>
      <p className="text-[#A7A5A5] font-normal">{position}</p>
    </div>
  );
}

export default ExecutivesCard;
