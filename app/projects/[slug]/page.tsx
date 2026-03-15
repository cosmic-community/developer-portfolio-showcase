// app/projects/[slug]/page.tsx
import MarkdownContent from "@/components/MarkdownContent";
import SectionHeading from "@/components/SectionHeading";
import { getProjectBySlug } from "@/lib/cosmic";

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="text-slate-600">Please return to the projects page.</p>
      </div>
    );
  }

  const image = project.metadata?.featured_image;
  const skills = project.metadata?.skills_used ?? [];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title={project.title}
          subtitle={project.metadata?.short_description ?? "Project overview"}
        />
        {image && (
          <img
            src={`${image.imgix_url}?w=1400&h=700&fit=crop&auto=format,compress`}
            alt={project.title}
            width={700}
            height={350}
            className="mb-8 w-full rounded-2xl object-cover"
          />
        )}
        <div className="prose max-w-none">
          <MarkdownContent content={project.metadata?.project_details ?? ""} />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold">Skills Used</h3>
          {skills.length === 0 && (
            <p className="mt-2 text-slate-600">No skills listed.</p>
          )}
          {skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                >
                  {skill.title}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-4">
            {project.metadata?.live_url && (
              <a
                href={project.metadata.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
              >
                View Live
              </a>
            )}
            {project.metadata?.repository_url && (
              <a
                href={project.metadata.repository_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                View Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}