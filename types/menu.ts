export interface Category {
  id: string;
  name: string;
  slug: string;
  order: number;
}

export interface Product {
  id: string;
  categoryId: string;
  restaurantId?: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  isAvailable: boolean;
}

export interface CategoryWithProducts extends Category {
  products: Product[];
}

export interface RestaurantMenu {
  restaurantId: string;
  categories: Category[];
  products: Product[];
}
