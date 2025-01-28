import React from 'react';

export default function Partners() {
  return (
    <section className="max-w-[1240px] w-[90%] m-auto">
      <section className="flex flex-row flex-wrap">
        {/*  */}
        <section className="w-full flex flex-row md:w-1/3 justify-center items-center">
          <article className="bg-blue-100 w-1/2 h-52 flex items-center justify-center aspect-square">
            Walt Studio
          </article>
          <article className="bg-blue-500 w-1/2 h-52 flex items-center justify-center aspect-square">
            Volo for man
          </article>
        </section>
        {/*  */}
        <section className="w-full flex flex-row md:w-1/3 justify-center items-center">
          <article className="bg-green-100 w-1/2 h-52 flex items-center justify-center aspect-square">
            Montreal Team
          </article>
          <article className="bg-green-500 w-1/2 h-52 flex items-center justify-center aspect-square">
            Style
          </article>
        </section>
        {/*  */}
        <section className="w-full flex flex-row md:w-1/3 justify-center items-center">
          <article className="bg-red-100 w-1/2 h-52 flex items-center justify-center aspect-square">
            Metro Brand
          </article>
          <article className="bg-red-500 w-1/2 h-52 flex items-center justify-center aspect-square">
            SERT stozlo
          </article>
        </section>
      </section>
    </section>
  );
}
