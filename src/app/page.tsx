import HeroSection from "@/components/HeroSection";
import LatestStories from "@/components/LatestStories";
import TopDestinations from "@/components/TopDestinations";
import TrekkersHighlights from "@/components/TrekkersHighlights";
import Newsletter from "@/components/Newsletter";
import Ads from "@/components/Ads";

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* Banner ad after hero section */}
      <div className="flex justify-center my-6">
        <Ads format="banner" />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1">
          <LatestStories />
          <TopDestinations />
        </div>
        
        {/* Sidebar ad */}
        <div className="hidden lg:block sticky top-24 self-start">
          <Ads format="sidebar" className="mx-auto" />
        </div>
      </div>
      
      <TrekkersHighlights />
      
      {/* Another banner ad before newsletter */}
      <div className="flex justify-center my-6">
        <Ads format="banner" />
      </div>
      
      <Newsletter />
    </main>
  );
}
