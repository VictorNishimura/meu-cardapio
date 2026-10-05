"use client";

import { Category } from "@/types/menu";
import { useEffect, useState } from "react";

interface CategoryNavProps {
  categories: Category[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const [activeSlug, setActiveSlug] = useState<string>(categories[0]?.slug || "");

  // Atualiza a categoria ativa conforme o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const cat of categories) {
        const element = document.getElementById(cat.slug);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSlug(cat.slug);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const handleCategoryClick = (slug: string) => {
    setActiveSlug(slug);
    const element = document.getElementById(slug);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-20 bg-stone-900/90 backdrop-blur-md border-b border-stone-800/80 py-2.5 px-4 shadow-sm">
      <div className="max-w-xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((category) => {
          const isActive = activeSlug === category.slug;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20"
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
