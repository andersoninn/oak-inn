export default function ServicesImages() {
  return (
    <>
      <section className="flex -mt-10 z-10 h-64">
        <article className="w-full md:w-2/6  md:aspect-[21/9] bg-gray-200">
          image1
        </article>
        <article className="hidden md:block w-1/6 md:aspect-[21/9] bg-gray-300">
          image2
        </article>
        <article className="hidden md:block w-1/6 md:aspect-[21/9] bg-gray-400">
          image3
        </article>
        <article className="w-full md:w-2/6  md:aspect-[21/9] bg-gray-200">
          image4
        </article>
      </section>
    </>
  );
}
