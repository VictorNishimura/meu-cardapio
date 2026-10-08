import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRestaurantBySlug, getAllRestaurantSlugs } from "@/data/restaurants";
import { getMenuByRestaurantId } from "@/data/menus";
import { RestaurantMenuView } from "@/components/restaurant/RestaurantMenuView";

interface RestaurantPageProps {
  params: Promise<{
    restaurantSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: RestaurantPageProps): Promise<Metadata> {
  const { restaurantSlug } = await params;
  const restaurant = getRestaurantBySlug(restaurantSlug);

  if (!restaurant) {
    return {
      title: "Restaurante Não Encontrado | Meu Cardápio",
      description: "O cardápio do restaurante solicitado não foi encontrado.",
    };
  }

  return {
    title: `${restaurant.name} | Cardápio Digital`,
    description: restaurant.slogan,
  };
}

export function generateStaticParams() {
  return getAllRestaurantSlugs().map((restaurantSlug) => ({
    restaurantSlug,
  }));
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { restaurantSlug } = await params;
  const restaurant = getRestaurantBySlug(restaurantSlug);

  if (!restaurant) {
    notFound();
  }

  const categoriesWithProducts = getMenuByRestaurantId(restaurant.id);

  return (
    <RestaurantMenuView
      restaurant={restaurant}
      categoriesWithProducts={categoriesWithProducts}
    />
  );
}
