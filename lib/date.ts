export function formatMonthYear(dateString?: string): string {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Present";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
}