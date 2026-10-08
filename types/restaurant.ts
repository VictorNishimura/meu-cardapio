export interface BusinessHours {
  days: string;
  hours: string;
}

export interface RestaurantTheme {
  primaryColor?: string; // Cor principal de destaque (ex: 'amber', 'emerald', etc.)
  accentColor?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  slogan: string;
  logoUrl?: string;
  coverUrl?: string;
  isOpen: boolean;
  businessHours: BusinessHours;
  address: string;
  whatsapp: {
    number: string; // formato internacional sem caracteres especiais, ex: '5511999999999'
    displayNumber: string; // formato amigável, ex: '(11) 99999-9999'
    defaultMessage?: string;
  };
  instagram?: string;
  theme?: RestaurantTheme;
}
