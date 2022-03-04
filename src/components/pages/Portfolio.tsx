import { Section } from '@common/SectionLine';
import { useGlobalContext } from '@root/App';
import { pages, pagesSpanish } from '@root/data';
import pixel from '../../assets/images/1-1.jpg';
import { BsYoutube } from 'react-icons/bs';

export const Portfolio = () => {
  const { page: activePage } = useGlobalContext();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll overflow-x-hidden ${
        activePage === pages.portfolio ? 'visible' : 'invisible'
      }`}>
      <div className='pt-24 px-24'>
        <Section title={pagesSpanish[2].name}>
          <div className='columns-1 md:columns-2 lg:columns-3 gap-7'>
            {[...Array(5)].map((_) => (
              <div className='mb-7 relative group overflow-hidden'>
                <img className='min-w-full' src={pixel} alt='port' />
                <div
                  className=' absolute top-0 bottom-0 left-0 right-0 bg-center bg-cover group-hover:blur-[2px] transition-all duration-300'
                  style={{ backgroundImage: 'url("https://marketifythemes.net/html/cavoni/img/portfolio/1.jpg")' }}
                />
                <span className='absolute w-12 h-12 bg-white -top-14 left-5 rounded-full shadow group-hover:top-5 transition-all duration-300 flex justify-center items-center'>
                  <BsYoutube className='text-2xl' />
                </span>
                <div className='absolute bg-white shadow left-5 right-5 p-4 -bottom-24 group-hover:bottom-5 transition-all duration-300'>
                  <h3 className='font-semibold'>Ave brook</h3>
                  <span className='font-light'>youtube</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};
