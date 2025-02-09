import Image from 'next/image';
import React from 'react';

export default function Partners() {
  const partners = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <section className="max-w-[1240px] w-[90%] m-auto relative">
      <div className="absolute -top-52" id="clients" />
      <section className="w-full flex flex-row flex-wrap ">
        {partners.map((item, index) => (
          <section
            key={index}
            className="flex flex-row flex-wrap w-1/3 md:w-1/6 justify-center items-center px-2 md:px-6"
          >
            <Image
              src={`/partners/${item}.png`}
              alt={item.toString()}
              width={180}
              height={180}
              className="object-cover opacity-40"
            />
          </section>
        ))}
      </section>
    </section>
  );
}
