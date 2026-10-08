import { CategoryWithProducts } from "@/types/menu";
import { restaurantMenus, getMenuByRestaurantId } from "./menus";

const defaultMenu = restaurantMenus["brasa-burger-01"];

export const categories = defaultMenu.categories;
export const products = defaultMenu.products;

export function getCategoriesWithProducts(): CategoryWithProducts[] {
  return getMenuByRestaurantId("brasa-burger-01");
}
