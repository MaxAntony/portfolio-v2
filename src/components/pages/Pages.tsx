import { image } from '@root/data';
import { FC } from 'react';
import { About } from './About';
import { Home } from './Home';
import { Portfolio } from './Portfolio';

export const Pages: FC = ({ children }) => {
  return (
    <div className=' absolute left-0 right-0 top-14 bottom-0 lg:top-16 lg:bottom-16 lg:left-16 lg:right-16  overflow-hidden'>
      <div
        className='absolute top-0 bottom-0 left-0 w-2/5 bg-cover bg-center bg-no-repeat hidden lg:block grayscale'
        style={{
          backgroundImage: `url("${image}")`,
        }}></div>
      <div className='absolute top-0 bottom-0 right-0 w-full lg:w-3/5'>
        <Home />
        <About />
        <Portfolio />
      </div>
    </div>
  );
};
