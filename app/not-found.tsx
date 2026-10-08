import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-stone-900/80 border border-stone-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur-sm">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 text-3xl">
          🔍
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-stone-100 tracking-tight">
          Restaurante não encontrado
        </h1>

        <p className="text-sm text-stone-400 mt-2 leading-relaxed">
          O cardápio que você tentou acessar não existe ou o endereço digitado está incorreto.
        </p>

        <div className="mt-6 pt-6 border-t border-stone-800/80">
          <Link
            href="/brasa-burger"
            className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-black text-sm tracking-wide transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            Acessar BRASA BURGER
          </Link>
        </div>
      </div>
    </div>
  );
}
