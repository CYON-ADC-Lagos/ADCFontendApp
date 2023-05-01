import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../Assests/cyonlogo.png";
import { navLinks } from "../../helpers/data";
import MobileNavbar from "./MobileNavbar";
// import { LogoutIcon } from "@heroicons/react/outline";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setHover] = useState(false);
  const pageLink = window.location.pathname;

  return (
    <header className="uppercase bg-white text-primary">
      <div className="flex justify-between bg-white items-center py-8 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center w-full">
          <Link to="/" className="flex ">
            <img src={Logo} alt="Rasmin" className="max-h-7" />
            <p className="text-[.6rem] leading-3 ml-4 font-extrabold text-green  w-[250px]">
              Catholic Youth <br></br>
              Organisation of Nigeria [CYON]<br></br>
              <span className="text-primary font-light">
                Archdiocese of Lagos
              </span>
            </p>
          </Link>

          <nav className="hidden lg:block w-[90%]  ">
            <ul className="flex gap-6 justify-end items-center w-full">
              {navLinks?.map(({ path, title }, i) => (
                <li className="" key={i}>
                  <Link
                    to={path}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <label
                      tabIndex="0"
                      className={`${
                        pageLink === path &&
                        "text-primary font-extrabold border-b-4 border-green pb-2"
                      } cursor-pointer hover:text-primary  text-primary text-[1rem] font-medium`}
                    >
                      {title}
                    </label>
                  </Link>
                </li>
              ))}
              {/* <li className="cursor-pointer">
                <p className="flex gap-2 items-center text-red-500">
                  <LogoutIcon className="w-5" />
                  <span>Log Out</span>
                </p>
              </li> */}
            </ul>
          </nav>
        </div>

        {/* mobile menu start */}
        <MenuAlt3Icon
          className="lg:hidden w-8 text-primary cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 bg-[#f9f9f9] h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {/* mobile menu end */}
      </div>
    </header>
  );
}

export default Header;
