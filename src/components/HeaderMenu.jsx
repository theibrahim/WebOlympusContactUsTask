/* eslint-disable react/prop-types */
const HeaderMenu = ({ open, close, mobile }) => {
  const onClose = () => {
    if (mobile) {
      close();
    }
  };

  const createMenuItem = (text, path) => (
    <li>
      <a
        className={`block py-2 pl-3 text-sm font-semibold uppercase pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white/90 md:p-0`}
        href={path}
        onClick={onClose}
      >
        {text}
      </a>
    </li>
  );

  return (
    <div
      className={`hidden sm:static fixed right-4 sm:drop-shadow-none drop-shadow-md left-4 top-14 z-50 md:block md:w-auto ${
        open ? "!block" : ""
      } `}
      id="navbar-default"
    >
      <ul className="bg-primary font-medium sm:w-auto w-full text-xl sm:text-2xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 sm:border-transparent rounded-lg sm:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary">
        {createMenuItem("Services", "#")}
        {createMenuItem("Portfolio", "#")}
        {createMenuItem("About Us", "#")}
        <a href="#contact-us">
          <button className="bg-primary flex sm:hidden mt-3 mx-3 gap-3 items-center uppercase hover:scale-110 py-1.5 px-8 border border-white text-base font-bold text-white duration-300 ease-in-out">
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
      </ul>
    </div>
  );
};

export default HeaderMenu;
