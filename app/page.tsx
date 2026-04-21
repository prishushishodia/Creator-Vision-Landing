import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Metrics } from "@/components/Metrics";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { DemoFormProvider } from "@/lib/demo-form-context";

export default function Home() {
  return (
    <DemoFormProvider>
      <div className="min-h-screen selection:bg-brand-400/30 selection:text-brand-900">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Metrics />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </DemoFormProvider>
  );
}
