import { CommunitySection } from "@/components/home/CommunitySection";
import { FAQSection } from "@/components/home/FAQSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HeadChefSection } from "@/components/home/HeadChefSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { MealPlansSection } from "@/components/home/MealPlansSection";
import { MenuPreview } from "@/components/home/MenuPreview";
import { OurCustomersSection } from "@/components/home/OurCustomersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      <HeroSection />
      <MenuPreview />
      <FeaturesSection />
      <HowItWorks />
      <HeadChefSection />
      <TestimonialsSection />
      <OurCustomersSection />
      <CommunitySection />
      <MealPlansSection />
      <FAQSection />
      <InstagramFeed />
    </div>
  );
}
