import { Section } from '@common/SectionLine';
import { AiFillCaretRight } from 'react-icons/ai';

const ServicesList = () => {
  const services = ['Desarrollo Web', 'Creacion de Tiendas Online', 'Creacion de Paginas Web', 'Creacion de Sistemas'];

  return (
    <ul className='text-fontsoft'>
      {services.map((service) => (
        <li key={service} className='mb-2 flex items-center'>
          <AiFillCaretRight />
          <p className='ml-6 '>{service}</p>
        </li>
      ))}
    </ul>
  );
};

export const About = () => {
  return (
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
  );
};
