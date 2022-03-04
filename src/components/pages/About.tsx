import { Section } from '@common/SectionLine';
import { useGlobalContext } from '@root/App';
import { pages } from '@root/data';
import { AiFillCaretRight } from 'react-icons/ai';

const ServicesList = () => {
  const services = ['Desarrollo Web', 'Creacion de Tiendas Online', 'Creacion de Paginas Web', 'Creacion de Sistemas'];

  return (
    <ul className='text-fontsoft'>
      {services.map((service) => (
        <li className='flex items-center mb-2'>
          <AiFillCaretRight />
          <p className='ml-6 '>{service}</p>
        </li>
      ))}
    </ul>
  );
};

export const About = () => {
  const { page: activePage } = useGlobalContext();
  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll overflow-x-hidden ${
        activePage === pages.about ? 'visible' : 'invisible'
      }`}>
      <div className='flex flex-col px-5 pt-14 lg:px-24 lg:pt-24'>
        <Section title='Acerca de mi'>
          <p className='mb-4 leading-6 text-fontsoft'>
            Hola visitante! Mi nombre es <strong>Max Antony</strong>. Soy Desarrollador de software especializado en la
            creacion de Sistemas, Tiendas Virtuales y paginas web
          </p>
          <p className='leading-6 text-fontsoft'>
            Durante el tiempo que llevo trabajando he adquirido las habilidades y conocimientos para crear soluciones de
            alto impacto y hacer de tu projecto un exito.
          </p>
        </Section>
        <Section title='Servicios'>
          <ServicesList />
        </Section>
        {/* <Section title='Experiencia'>lorem</Section> */}
      </div>
    </div>
  );
};
