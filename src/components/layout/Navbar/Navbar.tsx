import { Copyright } from "@common/Copyright";
import { SocialLinks } from "@common/SocialLinks";
import { image, pages, pagesSpanish } from "@root/data";
import { useGlobalContext } from "@root/state/context/state.context";
import { Fragment, useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { setPage, page: activePage } = useGlobalContext();

  const changePage = (page: pages) => {
    return () => {
      setMenuOpen(false);
      setPage(page);
    };
  };

  return (
    <Fragment>
      <div className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center justify-end bg-white px-5 lg:h-16 lg:px-16">
        {/* <a href='/' className='flex items-center'>
          <img className='max-w-[100px] max-h-10' src={logoImg} alt='logo' />
        </a> */}
        <div className="relative">
          <ul className="hidden lg:flex">
            {pagesSpanish.map(({ name, path }) => (
              <li
                id={path}
                key={path}
                className={`cursor-pointer px-8 py-2 font-medium hover:text-white ${
                  activePage === path
                    ? "bg-black text-white"
                    : "hover:bg-gray-700"
                }`}
                onClick={changePage(path)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="flex h-[24px] w-[30px] cursor-pointer flex-col items-center lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div
            className={`mb-[8px] h-[2px] w-[30px] rounded bg-black transition-transform ${
              menuOpen && "translate-y-[10px] rotate-45"
            }`}
          ></div>
          <div
            className={`mb-[8px] h-[2px] w-[30px] rounded bg-black transition-all ${menuOpen && "opacity-0"} `}
          ></div>
          <div
            className={`h-[2px] w-[30px] rounded bg-black transition-transform ${
              menuOpen && "-translate-y-[10px] -rotate-45"
            }`}
          ></div>
        </button>
      </div>
      {/* MOVIL */}
      <div
        className={`fixed inset-0 z-20 bg-black transition-opacity duration-300 ease-in-out ${
          menuOpen ? "opacity-50" : " pointer-events-none opacity-0"
        } `}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-14 z-20 flex h-screen w-48 flex-col items-end border-l bg-white px-5 pt-20 transition-all lg:top-16 ${
          menuOpen ? "right-0" : "-right-48"
        }`}
      >
        <img
          src={image}
          alt="avatar"
          className="mb-14 h-20 w-20 object-cover"
        />
        <ul className="mb-14">
          {pagesSpanish.map(({ name, path }) => (
            <li
              key={path}
              className="mb-4 cursor-pointer"
              onClick={changePage(path)}
            >
              {name}
            </li>
          ))}
        </ul>
        <div className="mb-2 flex w-full justify-between">
          <SocialLinks />
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </Fragment>
  );
};
