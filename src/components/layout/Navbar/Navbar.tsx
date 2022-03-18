import { Copyright } from '@common/Copyright';
import { SocialLinks } from '@common/SocialLinks';
import { useGlobalContext } from '@root/App';
import { image, pages, pagesSpanish } from '@root/data';
import { Fragment, useState } from 'react';

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
      <div className='bg-white fixed flex items-center top-0 left-0 right-0 px-5 lg:px-16 h-14 lg:h-16 justify-end'>
        {/* <a href='/' className='flex items-center'>
          <img className='max-w-[100px] max-h-10' src={logoImg} alt='logo' />
        </a> */}
        <div className='relative'>
          <ul className='hidden lg:flex'>
            {pagesSpanish.map(({ name, path }) => (
              <li
                id={path}
                key={path}
                className={`cursor-pointer px-8 py-2 font-medium hover:text-white ${
                  activePage === path ? 'bg-black text-white' : 'hover:bg-gray-700'
                }`}
                onClick={changePage(path)}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <button
          className='lg:hidden cursor-pointer w-[30px] h-[24px] flex flex-col items-center'
          onClick={() => setMenuOpen((v) => !v)}>
          <div
            className={`w-[30px] h-[2px] mb-[8px] bg-black rounded transition-transform ${
              menuOpen && 'translate-y-[10px] rotate-45'
            }`}></div>
          <div
            className={`w-[30px] h-[2px] mb-[8px] bg-black rounded transition-all ${menuOpen && 'opacity-0'} `}></div>
          <div
            className={`w-[30px] h-[2px] bg-black rounded transition-transform ${
              menuOpen && '-translate-y-[10px] -rotate-45'
            }`}></div>
        </button>
      </div>
      {/* MOVIL */}
      <div
        className={`bg-white pt-20 px-5 flex flex-col items-end fixed w-48 top-14 lg:top-16 h-screen transition-all z-20 border-l ${
          menuOpen ? 'right-0' : '-right-48'
        }`}>
        <img src={image} alt='avatar' className='w-20 h-20 object-cover mb-14' />
        <ul className='mb-14'>
          {pagesSpanish.map(({ name, path }) => (
            <li key={path} className='mb-4 cursor-pointer' onClick={changePage(path)}>
              {name}
            </li>
          ))}
        </ul>
        <div className='flex w-full justify-between mb-2'>
          <SocialLinks />
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </Fragment>
  );
};
