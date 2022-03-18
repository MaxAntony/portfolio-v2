import { Layout } from '@layout/Layout';
import { Pages } from '@pages/Pages';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { pages } from './data';

const preloader = document.getElementById('preloader')!;
preloader.addEventListener('transitionend', (_) => {
  preloader.remove();
});

type GlobalContent = {
  page: pages;
  setPage: Dispatch<SetStateAction<pages>>;
};

const GlobalContext = createContext<GlobalContent>({ page: pages.home, setPage: () => {} });

export const useGlobalContext = () => useContext(GlobalContext);

export function App() {
  const [page, setPage] = useState(pages.home);

  useEffect(() => {
    setTimeout(() => {
      preloader.style.opacity = '0';
    }, 500);
  }, []);
  return (
    <GlobalContext.Provider value={{ page, setPage }}>
      <Layout>
        <Pages />
      </Layout>
    </GlobalContext.Provider>
  );
}
