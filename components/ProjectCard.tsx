import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  showLinks?: boolean;
}

export default function ProjectCard({ project, showLinks = true }: ProjectCardProps) {
  const image = project.metadata?.featured_image;
  const description = project.metadata?.short_description ?? "Project overview";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {image && (
        <img
          src={`${image.imgix_url}?w=1200&h=700&fit=crop&auto=format,compress`}
          alt={project.title}
          width={600}
          height={350}
          className="mb-4 w-full rounded-xl object-cover"
        />
      )}
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {showLinks && (
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-slate-900 px-4 py-2 text-white"
          >
            View details
          </Link>
          {project.metadata?.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 text-slate-700"
            >
              Live site
            </a>
          )}
        </div>
      )}
    </article>
  );
}