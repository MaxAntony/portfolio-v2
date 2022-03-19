import { Section } from '@common/SectionLine';
import { pagesSpanish, proyects } from '@root/data';
import { IProyect } from '@ts/interfaces';
import { VFC } from 'react';

type ProyectProps = { proyect: IProyect };
const Proyect: VFC<ProyectProps> = ({ proyect }) => {
  // para mejorar https://jsfiddle.net/ch9ukp3v/
  return (
    <div className='mb-24 group'>
      <div className='grid grid-cols-11 gap-2 items-center'>
        <div
          className='col-start-1 col-end-12 lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1] w-full h-96 grayscale bg-cover bg-center hover:grayscale-0 transition-all duration-500 border rounded shadow lg:group-odd:col-start-1 lg:group-odd:col-end-8'
          style={{ backgroundImage: `url(${proyect.image})` }}
        />
        <div className='col-start-1 col-end-12 lg:col-start-1 lg:col-end-[7] lg:row-start-1 lg:row-end-[-1] z-10 lg:group-odd:text-right lg:group-odd:col-start-7 lg:group-odd:col-end-[-1]'>
          <h5 className='text-gray-700 text-2xl font-bold mb-2'>{proyect.title}</h5>
          <div className='text-fontsoft bg-white shadow-md hover:bg-gray-50 mb-8 cursor-pointer p-4 rounded'>
            <p>{proyect.description}</p>
          </div>
          <button className='border-2 p-2 border-gray-700 transition duration-300 hover:text-white hover:bg-gray-700'>
            ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <div className='pt-14 px-5 lg:pt-24 lg:px-24'>
      <Section title={pagesSpanish[2].name}>
        {proyects.map((proyect, i) => (
          <Proyect proyect={proyect} key={i} />
        ))}
      </Section>
    </div>
  );
};
