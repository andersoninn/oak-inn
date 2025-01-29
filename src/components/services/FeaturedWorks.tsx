import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function FeaturedWorks() {
  return (
    <>
      <section className="m-auto relative">
        <aside className="w-full h-[100px] bg-hoverMenu absolute -top-8 left-12 md:left-1/3 lg:left-1/2 flex justify-start pl-12 items-center gap-2 font-bold text-2xl lg:text-4xl">
          Trabalhos <span className="font-normal">em destaque</span>
        </aside>
        <section className="h-[200px] md:h-[300px]" />
      </section>
      <section className="max-w-[1240px] w-[90%] container m-auto relative  mt-54">
        <section className="flex flex-col gap-4 mx-auto md:flex-row md:gap-0">
          {/* fist article */}
          <article className="bg-hoverMenu p-7 -mt-14 md:-mt-0 flex flex-col gap-4 justify-between items-start md:min-h-[365px] lg:min-h-[416px] md:p-10 md:w-1/3 lg:p-20 ">
            <h2 className="font-montserrat font-bold text-2xl lg:text-4xl">
              Pós-produção a profissional
            </h2>
            <p className="font-light md:text-md lg:text-lg">
              O processo de filmagem é apenas metade do sucesso futuro do seu
              vídeo. Nos...
            </p>
            <p className="font-light md:text-md lg:text-lg">
              O processo de filmagem é apenas metade do sucesso futuro do seu
              vídeo. Nos...
            </p>
            <p className="font-light md:text-md lg:text-lg">
              O processo de filmagem é apenas metade do sucesso futuro do seu
              vídeo. Nos...
            </p>
            <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400">
              <span>Ler mais</span>{' '}
              <ArrowRightIcon className="w-3 h-3 font-semibold" />
            </button>
          </article>
          {/* second article */}
          <article className="bg-bgMenu text-white p-7 flex flex-col gap-4 justify-between items-start  md:min-h-[365px] lg:min-h-[416px] md:p-10 md:w-1/3 lg:p-20 ">
            <h2 className="font-montserrat font-bold text-2xl lg:text-4xl">
              Videografia e propaganda 4k
            </h2>
            <p className="font-light md:text-md lg:text-lg">
              Filmar com drones é uma ótima escolha tanto em cenários
              artificiais quanto naturais. Se...
            </p>
            <p className="font-light md:text-md lg:text-lg">
              Filmar com drones é uma ótima escolha tanto em cenários
              artificiais quanto naturais. Se...
            </p>
            <p className="font-light md:text-md lg:text-lg">
              Filmar com drones é uma ótima escolha tanto em cenários
              artificiais quanto naturais. Se...
            </p>
            <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400">
              <span>Ler mais</span>{' '}
              <ArrowRightIcon className="w-3 h-3 font-semibold" />
            </button>
          </article>{' '}
          {/* third article */}
          <article className="bg-hoverMenu p-7 flex flex-col gap-4 justify-between items-start  md:min-h-[365px] lg:min-h-[416px] md:p-10 md:w-1/3 lg:p-20 ">
            <h2 className="font-montserrat font-bold text-2xl lg:text-4xl">
              Pós-produção profissional
            </h2>
            <p className="font-light md:text-md lg:text-lg">
              O processo de filmagem é apenas metade do sucesso futuro do seu
              vídeo. Nós fornecemos pós...
            </p>
            <p className="font-light md:text-md lg:text-lg">
              O processo de filmagem é apenas metade do sucesso futuro do seu
              vídeo. Nós fornecemos pós...
            </p>
            <p className="font-light md:text-md lg:text-lg">
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
    </>
  );
}
