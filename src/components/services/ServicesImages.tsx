export default function ServicesImages() {
  return (
    <>
      <section className="flex -mt-10 z-10 h-72">
        <article className="service-image1 w-full md:w-1/2 hidden md:block md:aspect-[21/9] mt-12 md:mt-0 lg:w-2/6"/>

        <article className="service-image2 w-1/2 mt-12 md:hidden md:mt-0 md:w-2/6 md:aspect-[21/9] lg:block lg:w-1/6"/>

        <article className="service-image3 w-1/2 mt-12 lg:mt-8 md:hidden md:aspect-[21/9] lg:block lg:w-1/6"/>

        <article className="service-image4 w-full md:w-1/2 hidden md:block md:mt-16 md:aspect-[21/9] mt-12 lg:w-2/6"/>
      </section>
    </>
  );
}
