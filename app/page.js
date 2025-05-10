import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Card from "../components/Card";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Category />
      <Card />
      <Footer />
    </main>
  );
}
