import { CategoryWithProducts, Product } from "@/types/menu";
import { ProductCard } from "./ProductCard";

interface ProductSectionProps {
  category: CategoryWithProducts;
  onSelectProduct?: (product: Product) => void;
}

export function ProductSection({
  category,
  onSelectProduct,
}: ProductSectionProps) {
  if (category.products.length === 0) return null;

  return (
    <section id={category.id} className="pt-6 pb-2 scroll-mt-20">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-stone-100 tracking-tight">
          {category.name}
        </h2>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700/50">
          {category.products.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {category.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
}
