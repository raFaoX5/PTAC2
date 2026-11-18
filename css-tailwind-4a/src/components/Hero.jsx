import ProductIllustration from "./ProductIllustration";

export default function Hero() {
  return (
    <section className="grid items-center gap-10 px-6 pb-20 pt-6 md:grid-cols-2 md:px-12">
      {/* coluna esquerda: texto + CTA */}
      <div className="max-w-sm">
        <h1 className="text-2xl font-semibold tracking-wide sm:text-3xl">
          <span className="text-neutral-400">/ </span>Sunglasses
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-neutral-600">
          French know-how with high-technology lenses in order to never be taken by
          surprise when there is a sharp bright sunny turn in the road.
        </p>
        <button className="mt-9 border border-blue-400 px-10 py-3 text-xs font-medium tracking-[0.25em] text-neutral-900 transition-colors hover:border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
          BUY 115 €
        </button>
        <div className="mt-16">
          <button className="text-xs tracking-wide text-neutral-500 transition-colors hover:text-neutral-900">
            ⌄ Product details
          </button>
        </div>
      </div>

      {/* coluna direita: produto + paginação 01/04 */}
      <div className="relative flex items-center justify-center py-6">
        <ProductIllustration type="sunglasses" className="w-full max-w-md" />
        <div className="absolute bottom-0 right-0 flex items-center gap-4 text-xs tracking-[0.2em]">
          <span className="font-semibold">01</span>
          <span className="h-px w-16 bg-neutral-300 sm:w-24" />
          <span className="text-neutral-400">04</span>
          <span className="text-lg leading-none text-neutral-700">→</span>
        </div>
      </div>
    </section>
  );
}