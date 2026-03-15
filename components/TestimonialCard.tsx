import type { Testimonial } from "@/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const avatar = testimonial.metadata?.avatar;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {avatar && (
          <img
            src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={testimonial.title}
            width={80}
            height={80}
            className="h-14 w-14 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {testimonial.metadata?.name ?? testimonial.title}
          </h3>
          <p className="text-sm text-slate-500">
            {testimonial.metadata?.title_company}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">
        “{testimonial.metadata?.quote ?? "No quote provided."}”
      </p>
    </article>
  );
}