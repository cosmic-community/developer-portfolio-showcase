import type { WorkExperience } from "@/types";
import { formatMonthYear } from "@/lib/date";

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const skills = experience.metadata?.key_skills ?? [];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            {experience.metadata?.role ?? experience.title}
          </h3>
          <p className="text-sm text-slate-600">{experience.metadata?.company}</p>
        </div>
        <span className="text-sm text-slate-500">
          {formatMonthYear(experience.metadata?.start_date)} -{" "}
          {formatMonthYear(experience.metadata?.end_date)}
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-600">
        {experience.metadata?.summary ?? "No summary available."}
      </p>
      {skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {skill.title}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}