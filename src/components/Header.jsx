import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Logo from "../../src/assets/web-lympus-logo.png";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleOutsideClick = () => {
    setTimeout(() => {
      if (open) {
        setOpen(false);
      }
    }, 10);
  };

  return (
    <div>
      <header className="flex gap-4 fixed bg-primary drop-shadow-md mx-auto w-full sm:justify-between items-center px-2 sm:px-8 xl:px-20 py-3">
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div>
          <a href="/">
            <img
              src={Logo}
              width={120}
              height={58}
              className="w-48 sm:w-48"
              alt="logo"
            />
          </a>
        </div>

        <div className="sm:block hidden">
          <HeaderMenu mobile={false} />
        </div>

        <a href="#contact-us">
          <button className="bg-primary hidden sm:flex gap-3 items-center uppercase hover:scale-110 py-1.5 px-8 border border-white text-base font-bold text-white duration-300 ease-in-out">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 13.8639L13.864 7.49995M13.864 7.49995L7.5 1.13599M13.864 7.49995H1.13604"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </a>
      </header>
      <div className="sm:hidden block">
        {open && (
          <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <HeaderMenu
              mobile={true}
              open={open}
              close={() => setOpen(false)}
            />
          </OutsideClickHandler>
        )}
      </div>
    </div>
  );
};

export default Header;
