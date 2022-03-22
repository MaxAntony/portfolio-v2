import { Modal } from '@common/Modal';
import { Layout } from '@layout/Layout';
import { Pages } from '@pages/Pages';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { pages } from './data';
import { GlobalContext } from './state/context/state.context';
import { modalState } from './state/recoil/state.recoil';

const preloader = document.getElementById('preloader')!;
preloader.addEventListener('transitionend', (_) => {
  preloader.remove();
});

function removeLoader() {
  preloader.style.opacity = '0';
}

export function App() {
  const [page, setPage] = useState(pages.home);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  useEffect(() => {
    removeLoader();
  });

  return (
    <GlobalContext.Provider value={{ page, setPage }}>
      <div className='font-poppins'>
        <Layout>
          <Pages />
        </Layout>
        <Modal
          title='tutolo de ejemplo'
          onClose={() => {
            setIsModalOpen(false);
          }}
          open={isModalOpen}>
          hola
        </Modal>
      </div>
    </GlobalContext.Provider>
  );
}
