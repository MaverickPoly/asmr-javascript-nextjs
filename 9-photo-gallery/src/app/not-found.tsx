import Link from "next/link";

export default function My404() {
    return (
        <div className="flex items-center justify-center bg-neutral-50 w-full min-h-screen">
            <div className="p-8 border border-neutral-500 bg-white bg-red rounded-lg text-center flex flex-col">
                <h1 className="text-8xl font-bold mb-4">404</h1>
                <span className="text-neutral-700 font-normal text-base">This page cannot be found...</span>
                <Link href="/" className="mt-5 text-lg text-blue-700 font-semibold underline hover:no-underline">Back to Home Page</Link>
            </div>
        </div>
    )
}