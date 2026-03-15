export default function SectionHeading({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
    </div>
  );
}