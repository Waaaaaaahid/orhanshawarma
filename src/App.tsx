import { useSEO } from '@/hooks/useSEO';
import { Navbar } from '@/components/Navbar';
import { MobileCTABar } from '@/components/MobileCTABar';
import { Hero } from '@/components/Hero';
import { SignatureProduct } from '@/components/SignatureProduct';
import { MenuSection } from '@/components/MenuSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { LocationsSection } from '@/components/LocationsSection';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';

function App() {
  useSEO();

  return (
    <div className="min-h-screen bg-ink-950 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <SignatureProduct />
        <MenuSection />
        <AboutSection />
        <ExperienceSection />
        <Gallery />
        <Reviews />
        <LocationsSection />
        <ContactCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

export default App;
