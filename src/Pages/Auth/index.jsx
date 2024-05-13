import SignUp from "../../Components/Auth/Signup";
import bg from "../../Assests/auth1.mp4";
import { useLocation } from "react-router-dom";
import Login from "../../Components/Auth/Login";

function Auth() {
  const location = useLocation();
  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:w-[50%]  relative lg:flex justify-center items-center text-center h-[100vh]">
        <h4 className="text-[3.5rem] absolute  leading-[4.5rem] text-left w-[445px]  text-white">
          Join us today <br /> and be a part of the CYON Lagos Archdiocese
          family.
        </h4>
        <div className="w-full h-full ">
          {bg && (
            <div className="w-full h-full">
              <video
                className=" h-[100vh] object-cover bg-blend-darken"
                loop
                muted
                playsInline
                autoPlay={true}
              >
                <source src={bg} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full lg:w-[50%] justify-center relative items-center h-screen">
        {location.pathname === "/admin" && <Login />}
        {location.pathname === "/signup" && <SignUp />}
      </div>
    </div>
  );
}

export default Auth;
