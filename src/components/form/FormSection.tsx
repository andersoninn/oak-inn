import FormUI from './FormUI';

export default function Form() {
  return (
    <section className="bg-gray-500">
      <section className="max-w-[1240px] w-[90%] m-auto">
        <article className="bg-hoverMenu w-full h-full">
          <h2>Interessado? Entre em contato conosco agora mesmo</h2>
          <FormUI />
        </article>
      </section>
    </section>
  );
}
