import FAQs from "@/components/FAQs";
import Feature from "@/components/Feature";
import Feature2 from "@/components/Feature2";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="flex xl:w-[1300px] flex-col items-center  py-[84px]">
        <HeroSection />
        <LogoCloud />
        <Feature />
        <Feature2 />
        <Testimonials />
        <Pricing />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}
