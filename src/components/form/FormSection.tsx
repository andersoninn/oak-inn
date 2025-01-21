import FormUI from './FormUI';

export default function Form() {
  return (
    <section className="bg-gray-500  relative min-h-full">
      <section className="max-w-[1240px] w-[90%] m-auto">
        <article className="bg-hoverMenu w-[90%] max-w-[641px]  p-8 absolute -bottom-8 z-10 ">
          <h2 className="font-semibold text-3xl ">
            Interessado? <br />
            Entre em contato conosco agora mesmo
          </h2>
          <FormUI />
        </article>
      </section>
    </section>
  );
}
