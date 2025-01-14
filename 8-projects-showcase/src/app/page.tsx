"use client";

import projects from "@/projects";
import ProjectCard from "@/components/ProjectCard";
import {useState} from "react";

export default function Home() {
    const [category, setCategory] = useState("All");
    const categories = ["Python", "JavaScript", "Java", "TypeScript", "C"];

    const filteredProjects = category === "All" ? projects : projects.filter((project) => {
        return project.language === category;
    })


  return (
      <div className="px-4">
          <h2 className="text-4xl font-bold pt-8 bg-gradient-to-r from-blue-900 to-blue-100 bg-clip-text text-transparent pb-5">Projects by AltairTech:</h2>
          <select onChange={(e) => setCategory(e.target.value)} className="bg-neutral-50 rounded-md p-2 border border-neutral-300">
              <option value="All">All</option>
              {categories.map((c) => (
                  <option value={c} key={c}>{c}</option>
              ))}
          </select>
          {
              filteredProjects.length === 0 ? (
                  <p className="text-3xl font-semibold text-center my-10">No projects for the selected category</p>
              ) : (
                  <div className="flex flex-wrap gap-4 w-full mb-8 justify-center pt-6">
                      {filteredProjects.map((project, index) => (
                          <ProjectCard key={index} project={project}/>
                      ))}
                  </div>
              )
          }

      </div>
  );
}
