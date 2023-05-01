function Title({ title, text, bg, border }) {
  return (
    <div className="w-full ">
      <h2 className={`text-center ${text} font-extrabold text-[1.7rem]`}>
        {title}
      </h2>
      <hr
        className={`w-[90px] mx-auto border-b mt-3  border-4 ${bg} ${border}`}
      ></hr>
    </div>
  );
}

export default Title;
