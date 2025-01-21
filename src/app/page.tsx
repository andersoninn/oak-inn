import Footer from '@/components/Footer/Footer';
import Form from '@/components/form/FormSection';
import Header from '@/components/header/Header';

import ServicesMain from '@/components/services/ServicesMain';
// import HomeContacts from '@/main/HomeContacts';

// import SliderMain from '@/main/SliderMain';

export default function Home() {
  return (
    <>
      <section className="bg-green-500 h-screen relative ">
        <Header />
        {/* <SliderMain /> */}
        <article className="relative w-full min-h-screen z-0">
          {/* Vídeo de fundo */}
          <video
            src="/movies/bannerMovie.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen object-cover"
          ></video>

          {/* Película cinzenta */}
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </article>
        {/* <HomeContacts /> */}
        <ServicesMain />
        <Form />
        <Footer />
      </section>
    </>
  );
}
