import { Restaurant } from "@/types/restaurant";

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <header className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 text-white pt-8 pb-6 px-4 border-b border-stone-800/80">
      {/* Detalhe de iluminação de fundo / atmosfera brasa */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Logo / Emblema */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 mb-3 border border-orange-400/30">
          <span className="text-2xl font-black tracking-wider text-white">🔥</span>
        </div>

        {/* Nome do Restaurante */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-100 uppercase">
          {restaurant.name}
        </h1>

        {/* Slogan */}
        <p className="text-sm text-stone-400 mt-1 font-medium">
          {restaurant.slogan}
        </p>

        {/* Badges de Status e Informações */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
          {/* Badge Aberto / Fechado */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Aberto agora</span>
          </div>

          {/* Horário */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-800/80 text-stone-300 border border-stone-700/60">
            <svg
              className="w-3.5 h-3.5 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{restaurant.businessHours.hours}</span>
          </div>
        </div>

        {/* Endereço */}
        <p className="text-xs text-stone-400 mt-3 flex items-center justify-center gap-1">
          <svg
            className="w-3.5 h-3.5 text-amber-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">{restaurant.address}</span>
        </p>
      </div>
    </header>
  );
}
