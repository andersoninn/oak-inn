'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import React, { useEffect, useRef, useState } from 'react';

export default function ServicesMobileMovies() {
  const services = [
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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const index = videoRefs.current.findIndex(
          (video) => video === entry.target
        );
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        threshold: 1.0,
        rootMargin: '0px 0px -30% 0px',
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  useEffect(() => {
    // Quando o índice ativo mudar, controlar o play do vídeo
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  return (
    <>
      {/* MOBILE */}
      <section className="md:hidden flex flex-row flex-wrap">
        {services.map((e, i) => (
          <article
            key={i}
            className="relative w-full min-h-[300px] flex items-center justify-center"
          >
            <video
              ref={(el: HTMLVideoElement | null) => {
                videoRefs.current[i] = el;
              }}
              src="/movies/bannerMovie2.mp4"
              muted
              loop
              playsInline
              className={`w-full h-full object-cover absolute inset-0 ${
                activeIndex === i ? 'opacity-70' : 'opacity-100'
              } transition-opacity duration-300`}
            />
            <div
              className={`absolute inset-0 opacity-80 z-20 ${
                activeIndex === i ? 'bg-gray-950/95' : 'bg-gray-950'
              } `}
            />

            <article className="p-8 w-full max-w-full h-full flex flex-col items-start justify-end gap-6 absolute top-1/2 transform -translate-y-1/2 text-white z-40">
              {/* <div className="hidden md:block bg-white/50 h-1 rounded-sm w-3/4" /> */}
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
