import CategoryCarousel from "@/app/components/CategoryCarousel"
import CategoryFavorites from "@/app/components/CategoryFavorites"
import CategoryHero from "@/app/components/CategoryHero"
import PostList from "@/app/components/PostList"
import ReelsSection from "@/app/components/ReelsSection"
import SubscribeAlt from "@/app/components/SubscribeAlt"


const Category = async ({params}) => {
    const { slug } = await params
    
  return (
    <main>
      <CategoryHero title={slug} content='Un contenido'/>
      {/* <CategoryCarousel category={slug} />
      <CategoryFavorites category={slug} />
      <PostList category={slug} /> */}
      <ReelsSection />
      <SubscribeAlt />
    </main>
  )
}

export default Category