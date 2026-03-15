export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container mx-auto px-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Developer Portfolio. Built with Cosmic.</p>
      </div>
    </footer>
  );
}