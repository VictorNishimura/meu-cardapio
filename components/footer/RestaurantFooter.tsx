import { Restaurant } from "@/types/restaurant";

interface RestaurantFooterProps {
  restaurant: Restaurant;
}

export function RestaurantFooter({ restaurant }: RestaurantFooterProps) {
  return (
    <footer className="mt-12 pt-8 pb-24 border-t border-stone-800 text-stone-400 text-xs">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center text-center space-y-4">
        {/* Nome do Restaurante */}
        <div className="font-bold text-stone-200 uppercase tracking-wider text-sm">
          {restaurant.name}
        </div>

        {/* Endereço e Horários */}
        <div className="space-y-1">
          <p>{restaurant.address}</p>
          <p>
            {restaurant.businessHours.days}: {restaurant.businessHours.hours}
          </p>
        </div>

        {/* Redes */}
        {restaurant.instagram && (
          <p className="text-amber-500 font-medium">
            Instagram: {restaurant.instagram}
          </p>
        )}

        {/* Branding do Cardápio Digital */}
        <div className="pt-4 border-t border-stone-800/60 w-full text-stone-500">
          <p>
            Cardápio Digital via NFC & QR Code •{" "}
            <span className="text-stone-400 font-semibold">Meu Cardápio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
