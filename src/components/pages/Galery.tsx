import { Section } from '@common/SectionLine';
import { pagesSpanish } from '@root/data';
import pixel from '../../assets/images/1-1.jpg';
import { BsYoutube } from 'react-icons/bs';

export const Galery = () => {
  return (
    <div className='px-24 pt-24'>
      <Section title={pagesSpanish[2].name}>
        <div className='columns-1 gap-7 md:columns-2 lg:columns-3'>
          {[...Array(5)].map((_, i) => (
            <div className='group relative mb-7 overflow-hidden' key={i}>
              <img className='min-w-full' src={pixel} alt='port' />
              <div
                className=' absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center transition-all duration-300 group-hover:blur-[2px]'
                style={{ backgroundImage: 'url("https://marketifythemes.net/html/cavoni/img/portfolio/1.jpg")' }}
              />
              <span className='absolute -top-14 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow transition-all duration-300 group-hover:top-5'>
                <BsYoutube className='text-2xl' />
              </span>
              <div className='absolute left-5 right-5 -bottom-24 bg-white p-4 shadow transition-all duration-300 group-hover:bottom-5'>
                <h3 className='font-semibold'>Ave brook</h3>
                <span className='font-light'>youtube</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
