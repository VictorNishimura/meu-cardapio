import { Restaurant } from "@/types/restaurant";

interface WhatsAppButtonProps {
  whatsapp: Restaurant["whatsapp"];
}

export function WhatsAppButton({ whatsapp }: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    whatsapp.defaultMessage || "Olá! Gostaria de informações sobre o cardápio."
  );
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${message}`;

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
      >
        {/* Ícone do WhatsApp */}
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.17 8.17 0 01-1.25-4.47c0-4.54 3.7-8.23 8.24-8.23h.05zm-3.56 3.7c-.2 0-.42.01-.6.08-.22.09-.57.34-.57.83 0 .49.37 1.34 1.25 2.53 1.29 1.75 3.03 2.76 4.3 3.32.72.31 1.13.3 1.54.25.48-.06 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.46-.29-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78z" />
        </svg>

        <span className="text-xs sm:text-sm font-bold tracking-wide">
          Chamar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
