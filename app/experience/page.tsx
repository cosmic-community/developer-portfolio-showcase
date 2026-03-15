import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import { getWorkExperience } from "@/lib/cosmic";

export default async function ExperiencePage() {
  const experience = await getWorkExperience();

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="Career highlights, roles, and impact summaries."
        />
        <div className="space-y-6">
          {experience.length === 0 && (
            <p className="text-slate-600">No experience entries available.</p>
          )}
          {experience.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </div>
  );
}