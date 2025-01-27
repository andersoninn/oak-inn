import { ArrowRightIcon, MobileIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer2() {
  return (
    <section className="pt-20 bg-bgMenu text-white z-0">
      <section className="max-w-[1240px] w-[90%] m-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <article className="flex flex-col gap-4 md:w-1/3">
          <Image src="/logo.png" alt="Logo" width={130} height={130} />
          <p className="font-light text-gray-400">
            Somos uma empresa de produção visual, especializada em videografia e
            fotografia aérea com drones. Criando os melhores produtos para você.
          </p>
        </article>

        <article className="md:w-1/3 flex flex-col gap-2">
          <h3 className="text-2xl font-semibold pb-4">
            Informações e serviços
          </h3>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Multimídia
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Visitas guiadas
            à propriedade
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Personalização
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Cobertura de
            eventos
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> Video 4k
          </Link>
          <Link
            href="#"
            className="hover:text-gray-300 flex gap-2 items-center justify-start"
          >
            <ArrowRightIcon className="w-3 h-3 font-semibold" /> A vista aérea
          </Link>
        </article>

        <article className="md:w-1/3 flex flex-col gap-2">
          <h3 className="text-2xl font-semibold pb-4">Contatos</h3>
          <p className="flex gap-2 items-center justify-start text-sky-300 font-semibold">
            <MobileIcon className="w-4 h-4" />
            <span>+55 (21) 99999-9999</span>{' '}
            <span className="text-gray-400 font-light">/cooperação e loja</span>
          </p>
          <p className="flex gap-2 items-center justify-start font-semibold">
            <span>@</span>
            tulio.oak@gmail.com
          </p>
        </article>
      </section>
      <aside className="bg-bgMenu2 mt-20 py-6 font-light text-gray-400">
        <article className="max-w-[1240px] w-[90%] m-auto flex flex-col items-center justify-center">
          <p>© Copyright Todos os direitos reservados a OAK</p>
          <h3>
            Produzido por{' '}
            <Link
              href="https://github.com/luanmacedo"
              className="hover:text-gray-100"
            >
              Anderson Carvalho.
            </Link>
          </h3>
        </article>
      </aside>
    </section>
  );
}
