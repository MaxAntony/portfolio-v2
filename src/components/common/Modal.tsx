import { FC, Fragment, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';

type props = { open: boolean; onClose: () => void; title: string };
export const Modal: FC<props> = ({ children, onClose, open, title }) => {
  function escHandler({ key }: KeyboardEvent) {
    if (key === 'Escape') onClose();
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', escHandler);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', escHandler);
      }
    };
  });

  const transition = 'transition-all duration-300 ease-in-out';

  if (typeof document !== 'undefined') {
    return createPortal(
      <div className={`fixed inset-0 z-30 ${open ? '' : 'pointer-events-none'}`}>
        {/* backdrop */}
        <div
          className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'} ${transition}`}
          onClick={onClose}
        />

        {/* content */}
        <div
          className={`fixed right-4 left-4 top-4 bottom-4 bg-white shadow-lg ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          } ${transition}`}>
          <div className='flex items-center justify-between border-b p-4 text-lg font-bold'>
            <div>{title}</div>
            <GrClose onClick={onClose} className='cursor-pointer text-2xl font-black' />
          </div>
          <div className='mx-4 flex h-full flex-col overflow-y-scroll py-4'>{children}</div>
        </div>
      </div>,
      document.body,
    );
  } else {
    return <Fragment />;
  }
};
