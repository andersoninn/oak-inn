import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import { IoLogoFacebook } from 'react-icons/io';

export default function Banner() {
  return (
    <>
      <article className="relative w-full min-h-screen z-0">
        <video
          src="/movies/bannerMovie2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10  w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-gray-800 opacity-50 z-20"></div>

        <section className="max-w-[1240px] w-[90%] h-full text-white absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start justify-center">
          <section className="flex justify-between items-center w-full md:w-[90%] m-auto">
            <article className="flex flex-col gap-4 md:gap-8">
              <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
                Alcance novas alturas
              </h1>
              <h2 className="text-3xl font-bold -mt-5 md:text-5xl md:-mt-4 lg:text-6xl">
                <span className="font-light">em</span>
                <span className="text-hoverMenu ml-2">fotografia</span>
              </h2>
              <h2 className="md:text-xl">
                Fotografia aérea externa e arte em vídeo para <br /> estilo de
                vida, ação e comércio
              </h2>
              <button className="max-w-[237px] bg-hoverMenu text-black uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400 text-sm p-4 mt-">
                <span>Solicite um orçamento</span>
                <ArrowRightIcon className="w-3 h-3 font-semibold" />
              </button>
            </article>
            <article className="hidden flex-col gap-4 sm-custom:flex">
              <Link
                href="#"
                target="_blank"
                className="bg-hoverMenu text-black flex items-center justify-center gap-4 w-8 h-8"
              >
                <Image
                  src={'/homeIcons/facebook.png'}
                  alt="Facebook logo"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="#"
                className="bg-hoverMenu text-black flex items-center justify-center gap-4 w-8 h-8"
              >
                <Image
                  src={'/homeIcons/instagram.png'}
                  alt="Instagram logo"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="bg-hoverMenu text-black flex items-center justify-center gap-4 w-8 h-8"
              >
                <Image
                  src={'/homeIcons/twitter.png'}
                  alt="X logo"
                  width={14}
                  height={14}
                />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="bg-hoverMenu text-black flex items-center justify-center gap-4 w-8 h-8"
              >
                <Image
                  src={'/homeIcons/youtube.png'}
                  alt="Youtube logo"
                  width={18}
                  height={18}
                />
              </Link>
            </article>
          </section>
          {/* <section className="hidden absolute z-20 bottom-10 md:flex justify-center items-center bg-black/60 rounded-full p-1 w-[90%] md:max-w-[976px]">
              
              </section> */}
        </section>
      </article>
    </>
  );
}
