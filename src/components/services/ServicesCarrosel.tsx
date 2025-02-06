'use client';

import React, { useRef, useState } from 'react';

import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function ServicesCarrosel() {
  const slides = [
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Pós-produção profissional',
      description:
        'A fotografia aérea é uma nova tendência dos últimos anos que permite aumentar a criatividade ...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'DLP',
      image: '/slider/image1.jpg',
      title: 'Vídeografia e propaganda 4k',
      description:
        'Filmar com drones é uma ótima escolha tanto em cenários artificiais quanto naturais. Se...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'ARTE',
      image: '/slider/image1.jpg',
      title: 'Pós-produção profissional',
      description:
        'O processo de filmagem é apenas metade do sucesso futuro do seu vídeo. Nos fornecemos pós...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'DLP',
      image: '/slider/image1.jpg',
      title: 'Vídeogradia e propaganda 4k',
      description:
        'Filmar com drones é uma ótima escolha tanto em cenários artificiais quanto naturais. ...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Edição de áudio profissional',
      description:
        'A edição de áudio de alta qualidade é essencial para melhorar a experiência do ouvinte ...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'DLP',
      image: '/slider/image1.jpg',
      title: 'Animações em 3D',
      description:
        'Oferecemos animações 3D criativas e imersivas, perfeitas para vídeos publicitários...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'ARTE',
      image: '/slider/image1.jpg',
      title: 'Consultoria criativa',
      description:
        'Nosso time de consultores criativos pode ajudá-lo a criar campanhas incríveis e tornar ...',
      callToAction: 'Ler mais',
    },
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Fotografia subaquática',
      description:
        "Capturamos imagens impressionantes debaixo d'água, ideais para campanhas...",
      callToAction: 'Ler mais',
    },
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Fotografia subaquática',
      description:
        "Capturamos imagens impressionantes debaixo d'água, ideais para campanhas...",
      callToAction: 'Ler mais',
    },
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Fotografia subaquática',
      description:
        "Capturamos imagens impressionantes debaixo d'água, ideais para campanhas...",
      callToAction: 'Ler mais',
    },
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Fotografia subaquática',
      description:
        "Capturamos imagens impressionantes debaixo d'água, ideais para campanhas...",
      callToAction: 'Ler mais',
    },
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Fotografia subaquática',
      description:
        "Capturamos imagens impressionantes debaixo d'água, ideais para campanhas...",
      callToAction: 'Ler mais',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
    }
  };
  return (
    <>
      {/* MOBILE */}
      <section className="md:hidden flex flex-row flex-wrap bg-red-300">
        {slides.map((e, i) => (
          <article
            key={i}
            className={`relative w-full min-h-[300px] bg-green-500 md:w-1/2 lg:w-1/3 flex items-center justify-center`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <video
              ref={(el: HTMLVideoElement | null) => {
                videoRefs.current[i] = el;
              }}
              src="/movies/bannerMovie2.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gray-800 opacity-80 z-20" />

            <article className="p-8 w-full max-w-full h-full flex flex-col items-start justify-end gap-6 absolute top-1/2 transform -translate-y-1/2 text-white z-40">
              <div className="hidden md:block bg-white/50 h-1 rounded-sm w-3/4" />
              <h3 className="text-2xl md:text-4xl font-semibold">
                {e.title} aaaaaaaaaaaaaaaaaaa
              </h3>
              <p className="text-lg font-light min-h-16">{e.description}</p>
              <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400 text-sm">
                {e.callToAction}{' '}
                <ArrowRightIcon className="w-3 h-3 font-semibold" />
              </button>
            </article>
          </article>
        ))}
      </section>

      {/* DESKTOP */}
      <section className="hidden md:flex flex-row flex-wrap">
        {slides.map((e, i) => (
          <article
            key={i}
            className={`relative w-full min-h-[300px] md:w-1/2 lg:w-1/3 flex items-center justify-center`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <video
              ref={(el: HTMLVideoElement | null) => {
                videoRefs.current[i] = el;
              }}
              src="/movies/bannerMovie2.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />

            <div className="absolute inset-0 bg-gray-800 opacity-80 z-20" />

            <article className="p-8 w-full max-w-full h-full flex flex-col items-start justify-end gap-6 absolute top-1/2 transform -translate-y-1/2 text-white z-40">
              <div className="hidden md:block bg-white/50 h-1 rounded-sm w-3/4" />
              <h3 className="text-2xl md:text-4xl font-semibold">{e.title}</h3>
              <p className="text-lg font-light min-h-16">{e.description}</p>
              <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400 text-sm">
                {e.callToAction}{' '}
                <ArrowRightIcon className="w-3 h-3 font-semibold" />
              </button>
            </article>
          </article>
        ))}
      </section>
    </>
  );
}
