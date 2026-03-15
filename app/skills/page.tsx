import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { getSkills } from "@/lib/cosmic";

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Skills"
          subtitle="A full list of technologies and proficiencies."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.length === 0 && (
            <p className="text-slate-600">No skills available.</p>
          )}
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}