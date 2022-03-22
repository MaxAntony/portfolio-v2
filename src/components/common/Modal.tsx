import { FC, Fragment, useEffect } from 'react';
import { createPortal } from 'react-dom';

type props = { open: boolean; onClose: () => void };
export const Modal: FC<props> = ({ children, onClose, open }) => {
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

  const transition = 'transition-opacity duration-300 ease-in-out';

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
          className={`fixed right-0 h-full w-full max-w-screen-sm bg-white p-4 shadow-lg ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          } ${transition}`}>
          <div>
            <button onClick={onClose}>Click to close modal</button>
          </div>
          {children}
        </div>
      </div>,
      document.body,
    );
  } else {
    return <Fragment />;
  }
};
