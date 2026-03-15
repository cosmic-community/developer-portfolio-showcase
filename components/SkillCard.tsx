import type { Skill } from "@/types";
import { getMetafieldValue } from "@/lib/cosmic";

export default function SkillCard({ skill }: { skill: Skill }) {
  const level = getMetafieldValue(skill.metadata?.level);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
        {level && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {level}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-slate-600">
        {skill.metadata?.description ?? "No description provided."}
      </p>
    </article>
  );
}