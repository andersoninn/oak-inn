import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Modeling3D() {
  return (
    <section className="flex flex-col gap-5 text-white md:w-1/2 pb-20">
      <h2 className="uppercase text-4xl font-semibold md:text-6xl">
        Modelagem <span className="text-hoverMenu">3D</span>
      </h2>
      <p className="md:text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        sapiente unde tempore eaque, aut consectetur at ullam recusandae numquam
        optio eius delectus consequuntur repellendus consequatur exercitationem
        esse nam.
      </p>
      <button className="bg-hoverMenu p-4 w-44 md:w-[237px] uppercase font-semibold flex gap-2 items-center justify-center text-black">
        {' '}
        Saiba mais <ArrowRightIcon className="w-3 h-3 font-semibold" />
      </button>
    </section>
  );
}
