const getBlogPostById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    if (!res.ok) {
      new Error("Blog post was not found");
    }

    return res.json();
  } catch (error) {
    console.error("Error gettign blog post id", error);
  }
};

const BlogPost = async ({ params }) => {
  const { blogId } = params;
  const { post } = await getBlogPostById(blogId);
  console.log(post);

  return (
    <div className="my-5">
      <div className="my-5 flex">
        <p>{new Date(post.createdAt).toLocaleDateString()}</p> -
        <p>{post.category}</p>
      </div>
      <div className=" max-w-3xl">
        <h1 className="text-xl font-semibold my-7">{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
