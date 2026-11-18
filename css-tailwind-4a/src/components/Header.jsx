export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 text-xs tracking-[0.18em]">
      {/* lado esquerdo: hamburger + back */}
      <div className="flex items-center gap-6">
        <button aria-label="Abrir menu" className="group flex flex-col gap-5 py-2">
          <span className="block h-2 w-5 bg-neutral-900 transition-all group-hover:w-6" />
          <span className="block h-2 w-5 bg-neutral-900 transition-all group-hover:w-3" />
        </button>
        <a href="#" className="hidden text-neutral-400 transition-colors hover:text-neutral-900 sm:inline">
          ‹ Back
        </a>
      </div>

      {/* centro: logo */}
      <a href="#" className="text-lg font-semibold tracking-[0.4em] sm:text-xl">
        ALPINE
      </a>

      {/* lado direito: cart + idioma */}
      <div className="flex items-center gap-6">
        <a href="#" className="transition-colors hover:text-neutral-500">
          Cart <span className="text-neutral-400">(2)</span>
        </a>
        <button className="flex items-center gap-1 transition-colors hover:text-neutral-500">
          EN <span className="text-neutral-400">⌄</span>
        </button>
      </div>
    </header>
  );
}