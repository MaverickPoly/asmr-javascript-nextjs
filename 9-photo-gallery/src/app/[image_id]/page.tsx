import React from "react";
import images from "@/images";
import Link from "next/link";
import Head from "next/head";


export default function ViewImage(context) {
    const {image_id}: {image_id: string} = React.use(context.params);
    const image = images[parseInt(image_id)];

    return (
        <>
            <Head>
                <title>{image.title} - Gallery</title>
                <meta name="description" content={`View details of ${image.title}`}/>
                <meta property="og:title" content={image.title}/>
            </Head>
            <div className="p-2 pt-6">
                <Link href="/" className="text-lg text-neutral-700">{"<- Back"}</Link>
                <img src={image.imageUrl} alt={image.title} className="rounded-lg mb-6 mt-10 w-full"/>
                <h1 className="text-4xl font-semibold mb-2">{image.title}</h1>
                <span className="text-neutral-700 text-md">Created at: {image.createdAt}</span>
            </div>
        </>
    )
}