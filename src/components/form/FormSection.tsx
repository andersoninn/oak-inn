import FormUI from './FormUI';

export default function Form() {
  return (
    <section className="bg-form relative min-h-full">
      <section className="max-w-[1240px] w-[90%] m-auto">
        <article className="bg-hoverMenu w-[90%] max-w-[465px] p-10 md:p-16 absolute -bottom-8 z-10">
          <h2 className="font-semibold text-2xl md:text-4xl pb-4 ">
            Interessado? <br />
            Entre em contato conosco agora mesmo
          </h2>
          <FormUI />
        </article>
      </section>
    </section>
  );
}
