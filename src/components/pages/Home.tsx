import { useGlobalContext } from '@root/App';
import { pages } from '@root/data';
import { VFC } from 'react';

export const Home: VFC = () => {
  const { setPage } = useGlobalContext();

  return (
    <div className={`absolute top-0 bottom-0 pl-5 lg:pl-24 flex`}>
      <div className='flex items-center'>
        <div className='flex flex-col group'>
          <h3 className='text-4xl xl:text-7xl mb-6 font-bold'>Max Antony</h3>
          <span className='bg-gray-700 w-10 lg:w-16 h-1 mb-6 group-hover:w-full transition-[width] duration-500'></span>
          <p className='text-xl text-gray-600 mb-7'>
            Desarrollador <span className='font-bold'>Web</span>
          </p>
          <div className='uppercase '>
            <a
              className='inline-block text-gray-800 border border-gray-800 py-2 px-7 font-semibold hover:text-white hover:bg-gray-800 transition-all duration-500'
              href='/'
              onClick={(e) => {
                e.preventDefault();
                setPage(pages.contact);
              }}>
              contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
