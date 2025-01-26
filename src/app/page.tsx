import Footer from '@/components/Footer/Footer';
import Form from '@/components/form/FormSection';
import Header from '@/components/header/Header';
import Banner from '@/components/home/Banner';

import ServicesMain from '@/components/services/ServicesMain';
// import HomeContacts from '@/main/HomeContacts';

// import SliderMain from '@/main/SliderMain';

export default function Home() {
  return (
    <>
      <section className="bg-green-500 h-screen relative ">
        <Header />
        {/* <SliderMain /> */}
        <Banner />
        {/* <HomeContacts /> */}
        <ServicesMain />
        <Form />
        <Footer />
      </section>
    </>
  );
}
