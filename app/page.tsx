import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlatformOverview from './components/PlatformOverview';
import PowerfulTools from './components/PowerfulTools';
import ProcessSteps from './components/ProcessSteps';
import MobilePreview from './components/MobilePreview';
import EnterpriseSolutions from './components/EnterpriseSolutions';
import TrustSecurity from './components/TrustSecurity';
import CTAAndContact from './components/CTAAndContact';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <HeroSection />
      <PlatformOverview />
      <PowerfulTools />
      <ProcessSteps />
      <MobilePreview />
      <EnterpriseSolutions />
      <TrustSecurity />
      <CTAAndContact />
    </main>
  );
}
