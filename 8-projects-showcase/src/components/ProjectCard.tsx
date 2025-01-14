import {Project} from "@/projects";
import Link from "next/link";

export default function ProjectCard({project}: {project: Project}) {
    return (
        <div className="bg-white border border-neutral-300 p-3 w-80 flex flex-col items-start rounded-lg shadow-sm">
            <h2 className="text-2xl text-neutral-900">{project.title}</h2>
            <p className="text-sm text-neutral-600 font-normal mt-3">{project.description}</p>
            <span className="py-1 px-2 rounded-full border border-blue-800 text-blue-800 text-md mt-2 bg-blue-50">{project.language}</span>
            <Link href={project.link} target="_blank" className="text-indigo-600 hover:underline mt-3 text-lg font-semibold">Visit</Link>
        </div>
    )
};
