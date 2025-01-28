import Footer2 from '@/components/footer/Footer2';
import Form from '@/components/form/FormSection';
import Header from '@/components/header/Header';
import Banner from '@/components/home/Banner';
import FeaturedWorks from '@/components/services/FeaturedWorks';
import Partners from '@/components/services/Partners';

import ServicesMain from '@/components/services/ServicesMain';
// import HomeContacts from '@/main/HomeContacts';

export default function Home() {
  return (
    <>
      <section className="bg-green-500 h-screen relative ">
        <Header />
        <Banner />
        {/* <HomeContacts /> */}
        <ServicesMain />
        <section className="h-[70px] w-screen bg-white" />
        <article className="bg-works">
          <FeaturedWorks />
        </article>
        <section className="bg-gray-100 py-12">
          <Partners />
        </section>
        <Form />
        <Footer2 />
      </section>
    </>
  );
}
