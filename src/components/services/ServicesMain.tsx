import Modeling3D from './Modeling3D';
// import Printing3D from './Printing3D';
import Services from './Services';

import { IoCaretDownSharp } from 'react-icons/io5';

export default function ServicesMain() {
  return (
    <>
      <section className=" bg-gray-400 pb-24">
        <article className="max-w-[1240px] w-[90%] m-auto">
          <Services />
          <Modeling3D />
        </article>
        <section className="flex flex-col md:flex-row">
          <article className="bg-gray-500 md:w-1/2 h-72 md:h-[380px] relative">
            <aside className="w-full h-4 bg-hoverMenu absolute bottom-0" />
          </article>
          <article className="bg-green-500 md:w-1/2 h-[380px] md:h-[420px] relative">
            {/* <Printing3D /> */}
            <aside className="w-full h-[100px] bg-hoverMenu absolute bottom-0 uppercase flex justify-center items-center gap-2 font-bold text-2xl">
              impressão 3D{' '}
              <svg
                width="35"
                height="35"
                viewBox="2 2 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
              </svg>
            </aside>
          </article>
        </section>
      </section>
    </>
  );
}
