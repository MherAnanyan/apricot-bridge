import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Experiences from "@/components/Experiences";
import HowItWorks from "@/components/HowItWorks";
import ApricotBoxSection from "@/components/ApricotBoxSection";
import Stories from "@/components/Stories";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Experiences />
      <HowItWorks />
      <ApricotBoxSection />
      <Stories />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
