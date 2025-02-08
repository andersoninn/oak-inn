import FloatingButton from '@/components/FloatingButton';
import Footer2 from '@/components/footer/Footer2';
import Form from '@/components/form/FormSection';
import Header from '@/components/header/Header';
import Banner from '@/components/home/Banner';
import FeaturedWorks from '@/components/services/FeaturedWorks';
import Partners from '@/components/partners/Partners';
import Print3D from '@/components/services/Print3D';
import ServicesCarrosel from '@/components/services/ServicesCarrosel';
import ServicesImages from '@/components/services/ServicesImages';
import ServicesMain from '@/components/services/ServicesMain';

export default function Home() {
  return (
    <>
      <section className="min-h-screen relative">
        <Header />
        <Banner />
        <ServicesMain />
        <Print3D />
        <section className="relative z-0">
          <ServicesImages />
        </section>
        <section className="overflow-x-hidden !overflow-visible z-30">
          <ServicesCarrosel />
        </section>
        <article className="bg-works overflow-hidden">
          <section className="h-[50px] bg-white" />
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

      {/* Adicionando o botão flutuante */}
      <FloatingButton />
    </>
  );
}
