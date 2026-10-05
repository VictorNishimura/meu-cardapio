import { Category, Product, CategoryWithProducts } from "@/types/menu";

export const categories: Category[] = [
  { id: "cat-hamburgueres", name: "Hambúrgueres", slug: "hamburgueres", order: 1 },
  { id: "cat-porcoes", name: "Porções", slug: "porcoes", order: 2 },
  { id: "cat-bebidas", name: "Bebidas", slug: "bebidas", order: 3 },
  { id: "cat-sobremesas", name: "Sobremesas", slug: "sobremesas", order: 4 },
];

export const products: Product[] = [
  // Hambúrgueres
  {
    id: "prod-x-bacon",
    categoryId: "cat-hamburgueres",
    name: "X-Bacon",
    description: "Pão brioche, hambúrguer artesanal, queijo cheddar e bacon.",
    price: 32.9,
    imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "prod-x-salada",
    categoryId: "cat-hamburgueres",
    name: "X-Salada",
    description: "Pão brioche, hambúrguer, queijo, alface, tomate e molho especial.",
    price: 29.9,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "prod-brasa-especial",
    categoryId: "cat-hamburgueres",
    name: "Brasa Especial",
    description: "Hambúrguer artesanal 180g, cheddar, bacon, cebola caramelizada e molho da casa.",
    price: 38.9,
    imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },

  // Porções
  {
    id: "prod-batata-frita",
    categoryId: "cat-porcoes",
    name: "Batata Frita",
    description: "Porção generosa de batatas crocantes e sequinhas, temperadas com sal e ervas finas.",
    price: 19.9,
    imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "prod-batata-cheddar-bacon",
    categoryId: "cat-porcoes",
    name: "Batata com Cheddar e Bacon",
    description: "Batatas crocantes cobertas com creme de cheddar cremoso e cubos crocantes de bacon.",
    price: 27.9,
    imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },

  // Bebidas
  {
    id: "prod-coca-cola",
    categoryId: "cat-bebidas",
    name: "Coca-Cola 350ml",
    description: "Refrigerante em lata 350ml servido gelado.",
    price: 6.0,
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "prod-guarana",
    categoryId: "cat-bebidas",
    name: "Guaraná 350ml",
    description: "Refrigerante Guaraná Antarctica lata 350ml gelado.",
    price: 6.0,
    imageUrl: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "prod-agua",
    categoryId: "cat-bebidas",
    name: "Água Mineral 500ml",
    description: "Água mineral sem gás 500ml bem gelada.",
    price: 4.0,
    imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },

  // Sobremesas
  {
    id: "prod-brownie-sorvete",
    categoryId: "cat-sobremesas",
    name: "Brownie com sorvete",
    description: "Brownie de chocolate meio amargo quentinho acompanhado de uma bola de sorvete de baunilha e calda artesanal.",
    price: 18.9,
    imageUrl: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
];

export function getCategoriesWithProducts(): CategoryWithProducts[] {
  return categories
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      ...category,
      products: products.filter((p) => p.categoryId === category.id && p.isAvailable),
    }));
}
