import { Suspense, lazy } from "react";
import { Wallet } from "lucide-react";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const HeroSection = lazy(() => import("./components/hero/HeroSection"));
const Features = lazy(() => import("./components/features/Features"));
const Work = lazy(() => import("./components/work/Work"));
const Footer = lazy(() => import("./components/footer/Footer"));

export default function App() {
  return (
    <main>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><Wallet className="h-10 w-10 text-primary animate-spin" /></div>}>
        <Navbar />
        <HeroSection />
        <Features />
        <Work />
        <Footer />
      </Suspense>
    </main>
  );
}
