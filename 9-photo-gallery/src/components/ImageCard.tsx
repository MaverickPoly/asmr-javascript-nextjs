import {Image} from "@/images";
import Link from "next/link";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Gallery item",
    description: "Hello world"
}

export default function ImageCard({image, id}: {image: Image, id: number}) {
    return (
        <div className="w-80 h-80 relative overflow-hidden group rounded-md">
            <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover"/>
            <div className="absolute -top-full left-0 w-full h-full flex justify-center items-center bg-neutral-300 bg-opacity-80 group-hover:top-0 duration-300 flex-col">
                <h2 className="text-3xl mb-3">{image.title}</h2>
                <span className="text-md text-neutral-800">{image.createdAt}</span>
                <Link href={`/${id}`} className="mt-2 text-blue-700 text-xl hover:underline">View</Link>
            </div>
        </div>
    );
}