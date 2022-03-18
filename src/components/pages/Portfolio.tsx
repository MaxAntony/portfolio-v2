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
        <div className='col-start-1 col-end-[7] row-start-1 row-end-[-1] z-10 group-odd:text-right group-odd:col-start-7 group-odd:col-end-[-1]'>
          <h5 className='text-2xl font-bold mb-2'>{proyect.title}</h5>
          <div className='bg-white shadow-md hover:bg-gray-100 mb-8 cursor-pointer p-4 rounded'>
            <p>{proyect.description}</p>
          </div>
        </div>
        <div
          className='col-start-6 col-end-[-1] row-start-1 row-end-[-1] w-full h-96 grayscale bg-cover bg-center hover:grayscale-0 transition-all duration-500 border rounded shadow group-odd:col-start-1 group-odd:col-end-8'
          style={{ backgroundImage: `url(${proyect.image})` }}
        />
      </div>
    </div>
  );
};

export const Portfolio: VFC = () => {
  return (
    <div className='pt-24 px-24'>
      <Section title={pagesSpanish[2].name}>
        {proyects.map((proyect, i) => (
          <Proyect proyect={proyect} key={i} />
        ))}
      </Section>
    </div>
  );
};
