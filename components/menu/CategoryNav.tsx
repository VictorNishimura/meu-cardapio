"use client";

import { Category } from "@/types/menu";
import { useEffect, useRef, useState } from "react";

interface CategoryNavProps {
  categories: Category[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || "");
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sincroniza categoria ativa conforme o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      // Se estiver bem no topo da página (ex: visualizando o header), ativa a primeira categoria
      if (window.scrollY < 120 && categories.length > 0) {
        setActiveId(categories[0].id);
        return;
      }

      // Se chegou ao final da página, ativa a última categoria
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (isAtBottom && categories.length > 0) {
        setActiveId(categories[categories.length - 1].id);
        return;
      }

      const navOffset = 90;
      for (const cat of categories) {
        const element = document.getElementById(cat.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navOffset + 50 && rect.bottom > navOffset) {
            setActiveId(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [categories]);

  // Mantém o botão da categoria ativa visível na barra de rolagem horizontal
  useEffect(() => {
    if (!activeId) return;
    const buttonElement = document.getElementById(`nav-btn-${activeId}`);
    if (buttonElement) {
      buttonElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "nearest",
      });
    }
  }, [activeId]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveId(categoryId);
    isClickScrolling.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    // Libera a detecção de scroll após a animação de rolagem suave finalizar
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 750);

    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      aria-label="Categorias do cardápio"
      className="sticky top-0 z-20 bg-stone-900/90 backdrop-blur-md border-b border-stone-800/80 py-2.5 px-4 shadow-sm"
    >
      <div className="max-w-xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((category) => {
          const isActive = activeId === category.id;
          return (
            <button
              key={category.id}
              id={`nav-btn-${category.id}`}
              type="button"
              onClick={() => handleCategoryClick(category.id)}
              aria-current={isActive ? "true" : undefined}
              className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer touch-manipulation select-none active:scale-95 ${
                isActive
                  ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold"
                  : "bg-stone-800/70 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
