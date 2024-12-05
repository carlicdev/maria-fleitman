import Hero from "./components/Hero";
import Featured from "./components/Featured";
import RecentPostsSection from "./components/RecentPostsSection";
import OutfitOfTheWeek from "./components/OutfitOfTheWeek";
import CTA from "./components/CTA";
import NewestVideos from "./components/NewestVideos";
import HomeFinds from "./components/HomeFinds";
import ReelsSection from "./components/ReelsSection";
import CategoriesSection from "./components/CategoriesSection";
import LatestArticles from "./components/LatestArticles";
import HomeFindsAlt from "./components/HomeFindsAlt";
import AmazonFavorites from "./components/AmazonFavorites";
import SubscribeAlt from "./components/SubscribeAlt";

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
      <div className="max-w-7xl mx-auto flex flex-wrap mt-20">
        <div className="w-full lg:w-3/4">
          <LatestArticles />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-10">
          <HomeFindsAlt />
          <AmazonFavorites />
        </div>
      </div>
      <ReelsSection />
      <SubscribeAlt />
    </main>
  );
}
