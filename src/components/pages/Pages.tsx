import { PageWrapper } from '@common/PageWrapper';
import { image, pages } from '@root/data';
import { VFC } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Portfolio } from './Portfolio';

export const Pages: VFC = () => {
  const pageElements = [
    { element: <Home />, path: pages.home },
    { element: <About />, path: pages.about },
    { element: <Portfolio />, path: pages.portfolio },
    { element: <Contact />, path: pages.contact },
  ];

  return (
    <div className=' absolute left-0 right-0 top-14 bottom-0 lg:top-16 lg:bottom-16 lg:left-16 lg:right-16  overflow-hidden'>
      <div
        className='absolute top-0 bottom-0 left-0 w-2/5 bg-cover bg-center bg-no-repeat hidden lg:block grayscale hover:grayscale-0 transition duration-500'
        style={{
          backgroundImage: `url("${image}")`,
        }}></div>
      <div className='absolute top-0 bottom-0 right-0 w-full lg:w-3/5'>
        {pageElements.map(({ element, path }) => (
          <PageWrapper key={path} path={path}>
            {element}
          </PageWrapper>
        ))}
      </div>
    </div>
  );
};
