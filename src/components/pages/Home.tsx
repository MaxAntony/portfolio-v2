import { pages } from "@root/data";
import { useGlobalContext } from "@root/state/context/state.context";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  const { setPage } = useGlobalContext();

  return (
    <div className={`absolute top-0 bottom-0 flex pl-5 lg:pl-24`}>
      <div className="flex items-center">
        <div className="group flex flex-col">
          <h3 className="mb-6 text-4xl font-bold xl:text-7xl">Max Antony</h3>
          <span className="mb-6 h-1 w-10 bg-gray-700 transition-[width] duration-500 group-hover:w-full lg:w-16"></span>
          <p className="mb-7 text-xl text-gray-700">
            Desarrollador <span className="font-bold">Web</span>
          </p>
          <p className="mb-7 text-xl text-gray-700">
            y hago{" "}
            <span className="font-bold">
              <Typewriter
                words={[
                  "Tiendas virtuales",
                  "Sistemas",
                  "Paginas Web",
                  "Marketing digital",
                  "Publicidad en redes sociales",
                  "Diseño de posts",
                ]}
                typeSpeed={70}
                delaySpeed={1200}
                deleteSpeed={50}
                cursor={true}
                cursorStyle="|"
                loop
              />
            </span>
          </p>
          <div className="uppercase ">
            <a
              className="inline-block border border-gray-700 py-2 px-7 font-semibold text-gray-700 transition-all duration-500 hover:bg-gray-700 hover:text-white"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setPage(pages.contact);
              }}
            >
              contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
