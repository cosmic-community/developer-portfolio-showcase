import ReactMarkdown from "react-markdown";

export default function MarkdownContent({ content }: { content: string }) {
  if (!content) {
    return <p className="text-slate-600">No project details available.</p>;
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
}