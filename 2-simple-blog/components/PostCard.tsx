import {BlogPost} from "@/app/blog_posts";
import Link from "next/link";

export default function PostCard({blog, index}: {blog: BlogPost, index: number}) {

    return (
        <div className="bg-neutral-50 shadow-lg rounded-lg mb-2 w-64 overflow-hidden h-80 md:w-72 md:h-96">
            <div className="relative w-full h-56 md:h-64">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover z-0 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-green-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-3 flex flex-col items-start">
                <h1>{blog.title}</h1>
                <Link
                    href={`/blog/${index}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg mt-3"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}