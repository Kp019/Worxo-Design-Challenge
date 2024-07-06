import Cards from "@/components/Cards";
import Contributions from "@/components/Contributions";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intersted from "@/components/Intersted";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:pt-20 pt-5 bg-black">
      <Navbar/>
      <Hero/>
      <Cards/>
      <Contributions/>
      <Intersted/>
      <Footer/>
    </main>
  );
}
