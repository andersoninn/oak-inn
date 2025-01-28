'use client';

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function ServicesCarrosel() {
  const slides = [
    {
      flag: 'FDM',
      image: '/slider/image1.jpg',
      title: 'Pós-produção profissional',
      description:
        'A fotografia aérea é uma nova tendência dos últimos anos que permite aumentar a ...',
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
        'O processo de filmagem é apenas metade do sucesso futuro do seu vídeo. Nos ...',
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
        'A edição de áudio de alta qualidade é essencial para melhorar a experiência do ...',
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
        'Nosso time de consultores criativos pode ajudá-lo a criar campanhas incríveis e ...',
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

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: -1,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
        },
      },
    },
    initial: 2,
    // loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <section className="navigation-wrapper">
        <section ref={sliderRef} className="keen-slider !overflow-visible">
          {slides.map((e, i) => (
            <article
              className={`keen-slider__slide number-slide${i} ${
                i === 0 ? '-ml-4 md:-ml-0' : ''
              } relative p-2 flex flex-col gap-4 !bg-hoverMenu max-w-[375px] !overflow-visible ${
                i === slides.length - 1 ? 'z-99' : 'z-30'
              }`}
              key={i}
            >
              <article
                className={`hidden md:block	bg-hoverMenu text-bgMenu2 py-2 px-10 text-5xl  font-semibold shadow-md absolute -top-9 -left-8 overflow-visible ${
                  i === slides.length - 1 ? 'z-99' : 'z-30'
                }`}
              >
                {e.flag}
              </article>
              <Image
                src={e.image}
                alt={e.title}
                width={375}
                height={375}
                className="max-w-full w-[375px]"
              />
              <article
                className={`p-8 w-[375px] max-w-full h-[328px] max-h-[328px] flex flex-col gap-6 items-start ${
                  i % 2 === 0
                    ? 'bg-hoverMenu text-bgMenu2'
                    : 'bg-bgMenu2 text-white'
                }`}
              >
                <h3 className="text-4xl font-semibold">{e.title}</h3>
                <p className="text-lg font-light">{e.description}</p>
                <button className="uppercase font-semibold flex gap-2 items-center justify-center hover:text-gray-400 text-sm">
                  {e.callToAction}{' '}
                  <ArrowRightIcon className="w-3 h-3 font-semibold" />
                </button>
              </article>
            </article>
          ))}
        </section>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: React.MouseEvent<SVGElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e: React.MouseEvent<SVGElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </section>
    </>
  );

  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: React.MouseEvent<SVGElement>) => void;
  }) {
    const disabled = props.disabled ? ' arrow--disabled' : '';
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? 'arrow--left' : 'arrow--right'
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 17"
      >
        {props.left && (
          <path
            d="M3 16V2L14 9L3 16Z"
            fill="#c7c7c758"
            transform="scale(-1, 1) translate(-15, 0)"
          />
        )}
        {!props.left && <path d="M3 16V2L14 9L3 16Z" fill="#c7c7c758" />}
      </svg>
    );
  }
}
