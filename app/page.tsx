import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedIn from "@/components/FeaturedIn";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import StorySection from "@/components/StorySection";
import MarqueeSection from "@/components/MarqueeSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import CycleSection from "@/components/CycleSection";
import FullWidthImage from "@/components/FullWidthImage";
import VisionSection from "@/components/VisionSection";
import CafeSection from "@/components/CafeSection";
import TimetableSection from "@/components/TimetableSection";
import PricingSection from "@/components/PricingSection";
import CoachesSection from "@/components/CoachesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SurpriseClassesSection from "@/components/SurpriseClassesSection";
import FAQSection from "@/components/FAQSection";
import MarqueeSection2 from "@/components/MarqueeSection2";
import NewsletterSection from "@/components/NewsletterSection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <AnnouncementBar />
      <HeroSection />
      <FeaturedIn />
      <AboutSection />
      <VisionMissionSection />
      <StorySection />
      <MarqueeSection />
      <GalleryCarousel />
      <CycleSection />
      
      <VisionSection />
      <CafeSection />
      <TimetableSection />
      <PricingSection />
      <CoachesSection />
      <TestimonialsSection />
      <SurpriseClassesSection />
      <FAQSection />
      <MarqueeSection2 />
      <NewsletterSection />
      <InstagramSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
