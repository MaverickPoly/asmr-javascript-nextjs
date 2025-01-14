"use client";

import React, {useEffect, useState} from "react";
import blog_posts, {BlogPost} from "@/app/blog_posts";
import Link from "next/link";
import markdownit from "markdown-it";


export default function ReadBlog(context: {params: Promise<{blog_id: string}>}) {
    const {blog_id}: {blog_id: string} = React.use(context.params);
    const blogPost = blog_posts[parseInt(blog_id)];
    console.log(blogPost);

    const [contentMd, setContentMd] = useState("");

    useEffect(() => {
        const markdown = markdownit();
        setContentMd(markdown.render(blogPost.content));
    }, []);

    return (
        <div className="my-4 bg-neutral-50 rounded-lg p-6 flex flex-col items-start">
            <Link href="/">
                <div className="flex gap-4 justify-center group mb-4">
                    <span className="group-hover:-translate-x-1 duration-300">{"<-"}</span>
                    <h4 className="text-lg text-gray-600">Back</h4>
                </div>
            </Link>
            <div className="w-full">
                <img src={blogPost.image} alt={blogPost.title} className="w-[60%] h-80 object-cover rounded-lg mx-auto"/>
                <h2 className="text-4xl font-semibold mt-8">{blogPost.title}</h2>
                <h4 className="text-md text-neutral-500 font-normal mt-3 mb-4">{blogPost.date}</h4>
                <div className='prose mx-auto' dangerouslySetInnerHTML={{__html: contentMd}}/>
            </div>
        </div>
    )
}