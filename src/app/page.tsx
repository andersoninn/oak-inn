import Footer2 from '@/components/footer/Footer2';
import Form from '@/components/form/FormSection';
import Header from '@/components/header/Header';
import Banner from '@/components/home/Banner';
import FeaturedWorks from '@/components/services/FeaturedWorks';
import Partners from '@/components/services/Partners';
import Print3D from '@/components/services/Print3D';
// import ServicesCarrosel from '@/components/services/ServicesCarrosel';
import ServicesImages from '@/components/services/ServicesImages';

import ServicesMain from '@/components/services/ServicesMain';
// import HomeContacts from '@/main/HomeContacts';

export default function Home() {
  return (
    <>
      <section className="min-h-screen relative">
        <Header />
        <Banner />
        {/* <HomeContacts /> */}
        <ServicesMain />
        <Print3D />
        <section className="relative z-0">
          <ServicesImages />
        </section>
        {/* <section className="overflow-x-hidden !overflow-visible z-30">
          <ServicesCarrosel />
        </section> */}
        <section className="h-[50px]  bg-white " />
        <article className="bg-works overflow-hidden">
          <FeaturedWorks />
        </article>
        <section className="bg-gray-100 py-12">
          <Partners />
        </section>
        <section className="h-[964px] md:h-[900px]">
          <Form />
        </section>
        <Footer2 />
      </section>
    </>
  );
}
