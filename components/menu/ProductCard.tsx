import { Product } from "@/types/menu";
import { formatCurrency } from "@/lib/formatters";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-stone-900/60 hover:bg-stone-900 border border-stone-800/80 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 shadow-sm flex items-start gap-3.5">
      {/* Informações de texto */}
      <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch">
        <div>
          <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors leading-snug">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Preço */}
        <div className="mt-3 pt-2">
          <span className="text-sm sm:text-base font-extrabold text-amber-400">
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>

      {/* Imagem do Produto */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-stone-800 border border-stone-700/50 shadow-inner">
        <ImageWithFallback
          src={product.imageUrl || ""}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 96px, 112px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </article>
  );
}
