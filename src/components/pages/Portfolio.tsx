import { Section } from '@common/SectionLine';
import { pagesSpanish, projects } from '@root/data';
import { modalState } from '@root/state/recoil/state.recoil';
import { IProject } from '@ts/interfaces';
import { VFC } from 'react';
import { useRecoilState } from 'recoil';

type ProjectProps = { project: IProject };
const Project: VFC<ProjectProps> = ({ project }) => {
  // para mejorar https://jsfiddle.net/ch9ukp3v/
  const [, setModal] = useRecoilState(modalState);
  return (
    <div className='group mb-24'>
      <div className='grid grid-cols-11 items-center gap-2'>
        <img
          src={project.image}
          alt='project'
          className='col-start-1 col-end-12 w-full rounded border bg-white bg-contain bg-center bg-no-repeat shadow grayscale transition-all duration-500 hover:z-20 hover:grayscale-0 lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8'
          // style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className='z-10 col-start-1 col-end-12 lg:col-start-1 lg:col-end-[7] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-7 lg:group-odd:col-end-[-1] lg:group-odd:text-right'>
          <div className=' rounded bg-white p-4 shadow-xl'>
            <h5 className='rounded-t  pb-3 text-2xl font-bold text-gray-700'>{project.title}</h5>
            <div className='cursor-pointer rounded-b text-fontsoft hover:bg-gray-50'>
              <p>{project.shortDescription}</p>
            </div>
          </div>
          <button
            className='hidden border-2 border-gray-700 p-2 transition duration-300 hover:bg-gray-700 hover:text-white'
            onClick={() => setModal({ open: true, content: project.modal, title: project.title })}>
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
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </Section>
    </div>
  );
};
