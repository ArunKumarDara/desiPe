import { Suspense, lazy } from "react";
import { Loader } from "@/components/ui/loader";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const HeroSection = lazy(() => import("./components/hero/HeroSection"));
const Features = lazy(() => import("./components/features/Features"));
const Work = lazy(() => import("./components/work/Work"));
const Footer = lazy(() => import("./components/footer/Footer"));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
    <div className="space-y-4 text-center">
      <Loader size={40} />
    </div>
  </div>
);

export default function App() {
  return (
    <main>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <HeroSection />
        <Features />
        <Work />
        <Footer />
      </Suspense>
    </main>
  );
}
