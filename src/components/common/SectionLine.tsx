import { FC } from 'react';

export const Section: FC<{ title: string }> = ({ children, title }) => {
  return (
    <div className='mb-20'>
      <div className='w-full flex items-center'>
        <div className='font-bold uppercase tracking-[8px] whitespace-nowrap'>{title}</div>
        <div className='bg-gray-700 h-[1px] w-full top-0 left-0 ml-7 -translate-y-[50%]'></div>
      </div>
      <div className='mt-14'>{children}</div>
    </div>
  );
};
