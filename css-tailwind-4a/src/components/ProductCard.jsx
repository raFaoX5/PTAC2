import ProductIllustration from "./ProductIllustration";

export default function ProductCard({ product }) {
  return (
    <article className="group flex cursor-pointer flex-col bg-neutral-100 p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-neutral-200/80">
      <div className="flex flex-1 items-center justify-center py-10">
        <ProductIllustration
          type={product.type}
          className="h-36 w-36 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-baseline justify-between text-sm">
        <h3 className="font-medium text-neutral-900">{product.name}</h3>
        <span className="text-neutral-900">{product.price}</span>
      </div>
      <p className="mt-1 text-[10px] tracking-[0.2em] text-neutral-400">
        {product.category.toUpperCase()}
      </p>
    </article>
  );
}