import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlatformOverview from './components/PlatformOverview';
import PowerfulTools from './components/PowerfulTools';
import ProcessSteps from './components/ProcessSteps';
import ScalabilitySection from './components/ScalabilitySection';
import MobilePreview from './components/MobilePreview';
import EnterpriseSolutions from './components/EnterpriseSolutions';
import TrustSecurity from './components/TrustSecurity';
import CTAAndContact from './components/CTAAndContact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <HeroSection />
      <PlatformOverview />
      <PowerfulTools />
      <ProcessSteps />
      <ScalabilitySection />
      <MobilePreview />
      <EnterpriseSolutions />
      <TrustSecurity />
      <CTAAndContact />
      <Footer />
    </main>
  );
}
