import { Restaurant } from "@/types/restaurant";

export const restaurantData: Restaurant = {
  id: "brasa-burger-01",
  name: "BRASA BURGER",
  slug: "brasa-burger",
  slogan: "Hambúrguer artesanal de verdade.",
  isOpen: true,
  businessHours: {
    days: "Terça a Domingo",
    hours: "18:00 às 23:30",
  },
  address: "Rua dos Burgers, 120 - Vila Gastronômica",
  whatsapp: {
    number: "5511999999999",
    displayNumber: "(11) 99999-9999",
    defaultMessage: "Olá! Estou na mesa e gostaria de tirar uma dúvida sobre o cardápio.",
  },
  instagram: "@brasaburger",
};
