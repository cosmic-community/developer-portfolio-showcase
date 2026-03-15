import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/cosmic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Projects"
          subtitle="Detailed looks at product builds and technical initiatives."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.length === 0 && (
            <p className="text-slate-600">No projects available.</p>
          )}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} showLinks />
          ))}
        </div>
      </div>
    </div>
  );
}