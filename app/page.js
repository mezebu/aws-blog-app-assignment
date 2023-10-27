import BlogFeatureBanner from "@/components/BlogFeatureBanner";
import Card from "@/components/Card";

const getBlogPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export default async function Home() {
  const { posts } = await getBlogPosts();

  return (
    <div>
      <BlogFeatureBanner />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3 lg:mt-14 md:mt-8 sm:mt-8 my-5">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
