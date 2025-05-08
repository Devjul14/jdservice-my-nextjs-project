import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Footer />
      {/* Konten lainnya di sini */}
    </div>
  );
}
