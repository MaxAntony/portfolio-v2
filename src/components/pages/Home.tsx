import { useGlobalContext } from '@root/App';
import { pages } from '@root/data';
import { FC } from 'react';

export const Home: FC = () => {
  const { page: activePage } = useGlobalContext();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center pl-5 lg:pl-24 ${
        activePage === pages.home ? 'visible' : 'invisible'
      }`}>
      <h3 className='text-4xl xl:text-7xl mb-6 font-bold'>Max Antony</h3>
      <span className='bg-gray-700 w-10 lg:w-16 h-1 mb-6'></span>
      <p className='text-xl text-gray-600 mb-7'>
        Desarrollador <span className='font-bold'>Web</span>
      </p>
      <div className='uppercase text-white'>
        <a
          className='inline-block bg-gray-800 py-2 px-7'
          href='/'
          onClick={(e) => {
            e.preventDefault();
          }}>
          contacto
        </a>
      </div>
    </div>
  );
};
