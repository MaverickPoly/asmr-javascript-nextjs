import blog_posts from "@/app/blog_posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="w-full flex flex-wrap space-x-4 justify-center my-3">
      {blog_posts.map((blog, id) => (
          <PostCard key={id} blog={blog} index={id}/>
      ))}
    </div>
  );
}
