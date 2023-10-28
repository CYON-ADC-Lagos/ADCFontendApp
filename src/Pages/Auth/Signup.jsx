import Header from "../../Components/Common/Header";

function Signup({ children }) {
  return (
    <div className="">
      <Header />
      <div className="bg-white shadow-md px-[2.5rem] py-[3rem] rounded-[10px] w-[90%] md:w-[500px] mx-auto my-[3rem]">
        <h3 className="text-green font-medium text-xl md:text-3xl">Sign Up</h3>
        <p>Create your account in a blink</p>
        <form>
          <div className="my-[1rem]">
            <label>First Name</label>
            <input
              className="w-full px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="text"
            />
          </div>
          <div className="my-[1rem]">
            <label>Last Name</label>
            <input
              className="w-full  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="text"
            />
          </div>
          <div className="my-[1rem]">
            <label>Username</label>
            <input
              className="w-full  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="text"
            />
          </div>
          <div className="my-[1rem]">
            <label>Email Address</label>
            <input
              className="w-full  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="email"
            />
          </div>

          <div className="my-[1rem]">
            <label>Phone Number</label>
            <input
              className="w-full  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="number"
            />
          </div>
          <div className="my-[1rem]">
            <label>Password</label>
            <input
              className="w-full  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="password"
            />
          </div>
          <div className="my-[1rem]">
            <label>Re-Password</label>
            <input
              className="w-full  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
              type="password"
            />
          </div>
          <div className="my-[1rem]">
            <button
              disabled={true}
              className="w-full text-white bg-green  px-[.5rem] border-green rounded-[5px] py-[.5rem] border- outline-none border"
            >
              {" "}
              Register
            </button>
          </div>
          <p className="text-center -mt-4">Already have an account?</p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
