export default function Print3D() {
  return (
    <>
      <section className="flex flex-col md:flex-row" id="3d">
        <article className="bg-print3d-left md:w-1/2 h-72 md:h-[380px] relative">
          <aside className="w-full h-4 bg-hoverMenu absolute bottom-0" />
        </article>
        <article className="bg-print3d-right  md:w-1/2 h-[380px] md:h-[420px] relative">
          <aside className="w-full h-[100px] bg-hoverMenu absolute -bottom-8 uppercase flex justify-center items-center gap-2 font-bold text-2xl z-30">
            <h2>impressão 3D </h2>
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
    </>
  );
}
