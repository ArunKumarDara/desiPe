import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Work from "./components/work/Work";

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />
      <Work />
      <Footer />
    </main>
  )
}
