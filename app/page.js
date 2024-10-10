import Hero from "./components/Hero";
import Featured from "./components/Featured";
import RecentPostsSection from "./components/RecentPostsSection";
import OutfitOfTheWeek from "./components/OutfitOfTheWeek";
import CTA from "./components/CTA";
import NewestVideos from "./components/NewestVideos";
import HomeFinds from "./components/HomeFinds";
import ReelsSection from "./components/ReelsSection";
import SubscribeSection from "./components/SubscribeSection";
import CategoriesSection from "./components/CategoriesSection";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Featured />
      <RecentPostsSection />
      <OutfitOfTheWeek />
      <CTA />
      <NewestVideos />
      <HomeFinds />
      <CategoriesSection />
      <SubscribeSection />
      <ReelsSection />
    </main>
  );
}
