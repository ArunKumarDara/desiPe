import { Suspense, lazy } from "react";
import { Loader } from "@/components/ui/loader";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
// const Work = lazy(() => import("./components/work/Work"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Vision = lazy(() => import("./components/vision/Vision"))
const Faq = lazy(() => import("./components/faq/Faq"))
// const Testimonials = lazy(() => import("./components/testimonials/Testimonials"))
const Security = lazy(() => import("./components/security/Security"))
const About = lazy(() => import("./components/about/About"))
const Benefits = lazy(() => import("./components/benefits/Benefits"))
const Blog = lazy(() => import("./components/blog/Blog"))
const Features = lazy(() => import("./components/features/Features"))
const HowItWorks = lazy(() => import("./components/howItWorks/HowItWorks"));
const Hero = lazy(() => import("./components/hero/Hero"));

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
        <Hero />
        <About />
        <Benefits />
        <Blog />
        <Features />
        <HowItWorks />
        {/* <Features /> */}
        <Vision />
        {/* <Work /> */}
        <Security />
        {/* <Testimonials /> */}
        <Faq />
        <Footer />
      </Suspense>
    </main>
  );
}
