function ContactForm() {
  return (
    <div className="w-full bg-green py-[4rem] md:mt-[3rem]">
      <h2 className="text-center   text-white font-extrabold text-[1.7rem]">
        SEND YOUR FEEDBACK
      </h2>
      <hr className="w-[90px] mx-auto border-b mt-3 border-primary-shade border-4 bg-primary"></hr>
      <form className="w-[80%] md:w-[500px] mt-8 mx-auto text-center flex-col flex ">
        <input
          name="email"
          type="email"
          className=" mb-6 rounded-t-lg py-[1rem] px-4 outline-0"
          placeholder="Enter email address"
        />
        <textarea
          className="rounded-b-lg h-[120px] px-4 py-3 outline-0"
          placeholder="Type a message"
        />
        <button className="bg-primary-shade w-[50%] mx-auto my-8 text-white font-bold  rounded-[25px] py-[.7rem] p">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
