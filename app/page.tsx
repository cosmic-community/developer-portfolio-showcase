import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ExperienceCard from "@/components/ExperienceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getProjects, getSkills, getTestimonials, getWorkExperience } from "@/lib/cosmic";

export default async function HomePage() {
  const [projects, skills, experience, testimonials] = await Promise.all([
    getProjects(),
    getSkills(),
    getWorkExperience(),
    getTestimonials()
  ]);

  return (
    <div>
      <Hero />
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Featured Projects"
            subtitle="A snapshot of recent work across SaaS, dashboards, and developer tooling."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {projects.length === 0 && (
              <p className="text-slate-600">No projects available.</p>
            )}
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Skills"
            subtitle="Core technologies and expertise levels."
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
      </section>

      <section id="experience" className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Work Experience"
            subtitle="Highlights from recent roles and engagements."
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
      </section>

      <section id="testimonials" className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Testimonials"
            subtitle="Feedback from product leaders and collaborators."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.length === 0 && (
              <p className="text-slate-600">No testimonials available.</p>
            )}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}