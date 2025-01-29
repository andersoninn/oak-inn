// import FeaturedWorks from './FeaturedWorks';

import Modeling3D from './Modeling3D';
import Services from './Services';

export default function ServicesMain() {
  return (
    <>
      <section className="bg-modeling3d pb-24 bg-red-500">
        <article className="max-w-[1240px] w-[90%] m-auto ">
          <Services />
          <Modeling3D />
        </article>
      </section>
    </>
  );
}
