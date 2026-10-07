"use client";

import { useState } from "react";
import { restaurantData } from "@/data/restaurant";
import { getCategoriesWithProducts } from "@/data/menu";
import { Product } from "@/types/menu";
import { RestaurantHeader } from "@/components/header/RestaurantHeader";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { ProductSection } from "@/components/menu/ProductSection";
import { ProductDetailModal } from "@/components/menu/ProductDetailModal";
import { RestaurantFooter } from "@/components/footer/RestaurantFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export default function MenuPage() {
  const restaurant = restaurantData;
  const categoriesWithProducts = getCategoriesWithProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center">
      {/* Container Mobile First */}
      <div className="w-full max-w-xl min-h-screen flex flex-col bg-stone-950 shadow-2xl relative">
        {/* Cabeçalho do Restaurante */}
        <RestaurantHeader restaurant={restaurant} />

        {/* Navegação Sticky de Categorias */}
        <CategoryNav categories={categoriesWithProducts} />

        {/* Lista de Produtos por Categoria */}
        <main className="flex-1 px-4 space-y-4">
          {categoriesWithProducts.map((category) => (
            <ProductSection
              key={category.id}
              category={category}
              onSelectProduct={setSelectedProduct}
            />
          ))}
        </main>

        {/* Rodapé com Informações e Horários */}
        <RestaurantFooter restaurant={restaurant} />

        {/* Botão de Contato Rápido WhatsApp */}
        <WhatsAppButton whatsapp={restaurant.whatsapp} />

        {/* Modal com detalhes do produto selecionado */}
        <ProductDetailModal
          product={selectedProduct}
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  );
}
