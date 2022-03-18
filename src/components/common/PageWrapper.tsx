import { useGlobalContext } from '@root/App';
import { pages } from '@root/data';
import { FC } from 'react';

type props = { path: pages };
export const PageWrapper: FC<props> = ({ children, path }) => {
  const { page: activePage } = useGlobalContext();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll overflow-x-hidden transition-opacity ${
        activePage === path ? 'opacity-100 z-10' : 'opacity-0 -z-10'
      }`}>
      {children}
    </div>
  );
};
