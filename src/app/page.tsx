import Header from '@/components/header/Header';
import Services from '@/components/services/Services';
import ServicesMain from '@/components/services/ServicesMain';
// import HomeContacts from '@/main/HomeContacts';

// import SliderMain from '@/main/SliderMain';

export default function Home() {
  return (
    <>
      <section className="bg-green-500 h-screen relative">
        <Header />
        {/* <SliderMain /> */}
        <article className=" w-full min-h-screen bg-gray-500">banner</article>
        {/* <HomeContacts /> */}
        <ServicesMain />
      </section>
    </>
  );
}
