import { Copyright } from '@common/Copyright';
import { SocialLinks } from '@common/SocialLinks';

export const Footer = () => {
  return (
    <div className=' fixed h-16 bottom-0 right-0 left-0 hidden lg:flex lg:items-center lg:justify-between px-5 lg:px-16 '>
      <div>
        <Copyright />
      </div>
      <div className='flex w-32 justify-between'>
        <SocialLinks />
      </div>
    </div>
  );
};
