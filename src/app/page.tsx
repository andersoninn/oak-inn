import Footer2 from '@/components/footer/Footer2';
import Form from '@/components/form/FormSection';
import Header from '@/components/header/Header';
import Banner from '@/components/home/Banner';
import ServicesCarrosel from '@/components/services/ServicesCarrosel';

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
        {/* <ServicesCarrosel /> */}
        <Form />
        <Footer2 />
      </section>
    </>
  );
}
