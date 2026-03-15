import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { getTestimonials } from "@/lib/cosmic";

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Testimonials"
          subtitle="What teams and partners say about working together."
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
    </div>
  );
}