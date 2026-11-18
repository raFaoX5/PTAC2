export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-neutral-100 px-6 py-8 text-[11px] tracking-[0.2em] text-neutral-500 sm:flex-row md:px-12">
      <button className="flex items-center gap-1 transition-colors hover:text-neutral-900">
        EN <span className="text-neutral-400">⌄</span>
      </button>

      <nav className="flex flex-wrap items-center justify-center gap-2">
        {["CONTAC", "MEDIA", "LEGAL", "COOKIES"].map((link, i) => (
          <span key={link} className="flex items-center gap-2">
            <a href="#" className="text-blue-400 transition-colors hover:text-blue-600">{link}</a>
            {i < 3 && <span className="text-neutral-300">/</span>}
          </span>
        ))}
      </nav>

      <div className="flex gap-4">
        {["Fb", "Tw", "Ye", "In", "Ln"].map((s) => (
          <a key={s} href="#" className="transition-colors hover:text-neutral-900">{s}</a>
        ))}
      </div>
    </footer>
  );
}