import { Section } from '@common/SectionLine';
import { pagesSpanish, proyects } from '@root/data';
import { modalState } from '@root/state/recoil/state.recoil';
import { IProyect } from '@ts/interfaces';
import { VFC } from 'react';
import { useRecoilState } from 'recoil';

type ProyectProps = { proyect: IProyect };
const Proyect: VFC<ProyectProps> = ({ proyect }) => {
  // para mejorar https://jsfiddle.net/ch9ukp3v/
  const [, setModal] = useRecoilState(modalState);
  return (
    <div className='group mb-24'>
      <div className='grid grid-cols-11 items-center gap-2'>
        <div
          className='col-start-1 col-end-12 h-96 w-full rounded border bg-cover bg-center shadow grayscale transition-all duration-500 hover:grayscale-0 lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8'
          style={{ backgroundImage: `url(${proyect.image})` }}
        />
        <div className='z-10 col-start-1 col-end-12 lg:col-start-1 lg:col-end-[7] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-7 lg:group-odd:col-end-[-1] lg:group-odd:text-right'>
          <h5 className='mb-2 rounded bg-background text-2xl font-bold text-gray-700'>{proyect.title}</h5>
          <div className='mb-8 cursor-pointer rounded bg-white p-4 text-fontsoft shadow-md hover:bg-gray-50'>
            <p>{proyect.shortDescription}</p>
          </div>
          <button
            className='hidden border-2 border-gray-700 p-2 transition duration-300 hover:bg-gray-700 hover:text-white'
            onClick={() => setModal({ open: true, content: proyect.modal, title: proyect.title })}>
            ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <div className='px-5 pt-14 lg:px-24 lg:pt-24'>
      <Section title={pagesSpanish[2].name}>
        {proyects.map((proyect, i) => (
          <Proyect proyect={proyect} key={i} />
        ))}
      </Section>
    </div>
  );
};
