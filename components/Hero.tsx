export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 -rotate-90 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="font-serif text-8xl font-light text-black/5 whitespace-nowrap tracking-tightest">
          DÉVELOPPEUSE MOBILE
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-ultra uppercase text-amber mb-6">
          Étudiante en CPGE & Developpeuse mobile
        </p>

        <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight tracking-tightest mb-6">
          Construire la technologie<br />
          qui crée des <em className="italic text-amber">opportunités.</em>
        </h1>

        <p className="text-base md:text-lg text-mid max-w-2xl leading-relaxed mb-10">
          Je suis Alycia, étudiante en CPGE et développeuse mobile. Je conçois des produits pensés pour résoudre de vrais problèmes dans les marchés émergents.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-amber text-black px-7 py-3 rounded text-sm font-semibold tracking-tighter transition-all hover:bg-amber/90 hover:-translate-y-0.5"
          >
            Voir mes projets
          </a>
          <a
            href="https://drive.usercontent.google.com/u/1/uc?id=17idWYgHYrkwwtWTdLsPlkCVnnc5D5kFQ&export=download"
            className="border-2 border-black text-black px-7 py-3 rounded text-sm font-medium transition-all hover:bg-taupe"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
