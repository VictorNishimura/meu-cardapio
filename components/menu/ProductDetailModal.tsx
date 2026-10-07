"use client";

import { useEffect, useRef } from "react";
import { Product } from "@/types/menu";
import { formatCurrency } from "@/lib/formatters";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Fecha ao pressionar a tecla ESC e trava o scroll do body quando aberto
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Foca no botão de fechar para acessibilidade via teclado
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4 transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Container do Modal / Bottom Sheet no celular e Caixa centralizada no desktop */}
      <div
        className="w-full sm:max-w-lg bg-stone-900 border-t sm:border border-stone-800 rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-stone-100 animate-in fade-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topo com Imagem e Botão Fechar Flutuante */}
        <div className="relative w-full h-56 sm:h-64 shrink-0 bg-stone-950">
          <ImageWithFallback
            src={product.imageUrl || ""}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover"
          />

          {/* Botão de Fechar no topo direito com área de toque confortável */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do produto"
            className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-stone-950/70 hover:bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center backdrop-blur-md border border-stone-700/60 transition-all duration-150 active:scale-95 cursor-pointer touch-manipulation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Conteúdo com Scroll interno se necessário */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <h2
              id="product-modal-title"
              className="text-xl sm:text-2xl font-black text-stone-100 leading-snug"
            >
              {product.name}
            </h2>

            <div className="mt-2.5">
              <span className="text-xl sm:text-2xl font-extrabold text-amber-400">
                {formatCurrency(product.price)}
              </span>
            </div>
          </div>

          {product.description && (
            <div className="pt-2 border-t border-stone-800/80">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                Descrição
              </h3>
              <p
                id="product-modal-description"
                className="text-sm sm:text-base text-stone-300 leading-relaxed"
              >
                {product.description}
              </p>
            </div>
          )}

          {/* Botão de ação para fechar / voltar ao cardápio */}
          <div className="pt-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-4 rounded-xl font-bold bg-stone-800 hover:bg-stone-700 active:scale-[0.98] text-stone-100 transition-all border border-stone-700/60 cursor-pointer touch-manipulation flex items-center justify-center text-sm sm:text-base"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
