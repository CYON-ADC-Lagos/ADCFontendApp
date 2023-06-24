import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import { deaneries, navLinks } from "../../helpers/data";
import Logo from "../../Assests/cyonlogo.png";

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  const [, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.reload(false);
  // };

  return (
    <aside className="flex flex-col gap-6 py-8 px-6  h-full">
      <div className="px-2 flex justify-between items-center  mt-2 mb-4">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[30px] mr-8"
            onClick={() => setMenuOpen(false)}
          />
        </Link>
        <XIcon
          className="w-5 text-red-500 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          {navLinks?.map(({ path, title, sub }, i) =>
            sub ? (
              <details key={i}>
                <summary
                  className="flex  items-center cursor-pointer"
                  key={title}
                >
                  <h2 className=" font-normal capitalize">{title}</h2>
                  {/* <ChevronDownIcon className="w-3 " /> */}
                </summary>
                <div className="flex flex-col gap-3 text-sm mt-2">
                  {deaneries?.map(({ title, value }) =>
                    sub ? (
                      <a href={`/deaneries/${title}`} key={i}>
                        <span
                          className="ml-2 text-sm flex justify-between items-center cursor-pointer"
                          key={title}
                        >
                          <h2 className=" font-normal capitalize">{title}</h2>
                        </span>
                      </a>
                    ) : (
                      <Link to={path} key={i}>
                        <span
                          className={`${
                            pageLink === path && "text-accent font-semibold"
                          } ml-2 text-sm text-white hover:text-accent capitalize`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {title}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </details>
            ) : (
              <Link
                to={path}
                key={i}
                className={`${
                  pageLink === path && "text-primary font-semibold"
                } text-black hover:text-accent capitalize`}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            )
          )}
        </ul>
      </nav>
      {/* <div onClick={handleLogout} className="self-baseline cursor-pointer">
        <p className="flex gap-2 items-center text-red-500">
          <LogoutIcon className="w-5" />
          <span>Log Out</span>
        </p>
      </div> */}
    </aside>
  );
};

export default MobileNavBar;
