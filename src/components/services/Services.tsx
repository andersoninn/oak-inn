import { ArrowRightIcon } from '@radix-ui/react-icons';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Services() {
  return (
    <section className="max-w-[1240px] container m-auto pb-20">
      <section className="flex flex-col gap-4 mx-auto md:flex-row md:gap-0">
        {/* fist article */}
        <article className="bg-hoverMenu p-7 -mt-14 flex flex-col gap-4 justify-start items-start ">
          <h2 className="font-montserrat font-bold text-2xl">
            Pós-produção a profissional
          </h2>
          <p className="font-light">
            A fotografia aérea é uma nova tendência dos últimos anos que permite
            aumentar a critividade...
          </p>
          <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400">
            <span>Ler mais</span>{' '}
            <ArrowRightIcon className="w-3 h-3 font-semibold" />
          </button>
        </article>
        {/* second article */}
        <article className="bg-bgMenu text-white p-7 md:-mt-14 flex flex-col gap-4 justify-start items-start">
          <h2 className="font-montserrat font-bold text-2xl">
            Videografia e propaganda 4k
          </h2>
          <p className="font-light">
            Filmar com drones é uma ótima escolha tanto em cenários artificiais
            quanto naturais. Se...
          </p>
          <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400">
            <span>Ler mais</span>{' '}
            <ArrowRightIcon className="w-3 h-3 font-semibold" />
          </button>
        </article>{' '}
        {/* third article */}
        <article className="bg-hoverMenu p-7 md:-mt-14 flex flex-col gap-4 justify-start items-start">
          <h2 className="font-montserrat font-bold text-2xl">
            Pós-produção profissional
          </h2>
          <p className="font-light">
            O processo de filmagem é apenas metade do sucesso futuro do seu
            vídeo. Nós fornecemos pós...
          </p>
          <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400">
            <span>Ler mais</span>{' '}
            <ArrowRightIcon className="w-3 h-3 font-semibold" />
          </button>
        </article>
      </section>
    </section>
  );
}
