
import AmazonFavorites from '@/app/components/AmazonFavorites';
import HomeFindsAlt from '@/app/components/HomeFindsAlt';
import PostDetail from '@/app/components/PostDetail';
import ReelsSection from '@/app/components/ReelsSection';
import SubscribeAlt from '@/app/components/SubscribeAlt';
import { getPostDetails } from '@/app/services/graphql';

const PostPage = async ({params}) => {
    const { slug } = params;
    const post = await getPostDetails(slug)

  return (
    <main>
        <div className="max-w-7xl mx-auto w-full flex flex-wrap mt-20">
          <div className="w-full lg:w-3/4">
          {post && <PostDetail post={post}/> }
          </div>
          <div className="w-full lg:w-1/4 flex flex-col gap-10">
            <HomeFindsAlt/>
            <AmazonFavorites />
          </div>
        </div>
        <ReelsSection />
        <SubscribeAlt />
    </main>
  )
}

export default PostPage