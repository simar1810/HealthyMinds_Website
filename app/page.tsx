import { CommunitySection } from "@/components/home/CommunitySection";
import { FAQSection } from "@/components/home/FAQSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HeadChefSection } from "@/components/home/HeadChefSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { MealPlansSection } from "@/components/home/MealPlansSection";
import { MenuPreview } from "@/components/home/MenuPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MenuPreview />
      <FeaturesSection />
      <HowItWorks />
      <HeadChefSection />
      <CommunitySection />
      <MealPlansSection />
      <FAQSection />
      <InstagramFeed />
    </div>
  );
}
