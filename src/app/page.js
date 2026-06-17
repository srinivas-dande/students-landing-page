import HeaderWithBanner from '@/components/landing/HeaderWithBanner';
import HeroSection from '@/components/landing/HeroSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import CurriculumSection from '@/components/landing/CurriculumSection';
import RealitySection from '@/components/landing/RealitySection';
import StatsBanner from '@/components/landing/StatsBanner';
import StudentOutcomesSection from '@/components/landing/StudentOutcomesSection';
import PlacementSupportSection from '@/components/landing/PlacementSupportSection';
import WhoThisIsForSection from '@/components/landing/WhoThisIsForSection';
import TimeCommitmentSection from '@/components/landing/TimeCommitmentSection';
import SelfCheckSection from '@/components/landing/SelfCheckSection';
import FAQSection from '@/components/landing/FAQSection';
import { InstructorSection } from "@/components/landing/instructor-section";
import FinalCTASection from '@/components/landing/FinalCTASection';


export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <HeaderWithBanner />
      <HeroSection />
      <PortfolioSection />
      <CurriculumSection />
      <RealitySection />
      <StatsBanner />
      <StudentOutcomesSection />
      <PlacementSupportSection />
      <WhoThisIsForSection />
      <TimeCommitmentSection />
      <SelfCheckSection />
      <FAQSection />
      <InstructorSection />
      <FinalCTASection />
      
    </main>
  );
}
