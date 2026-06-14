export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-white/40 mb-3">
          Ce qui me motive
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4 text-white">
          Une conviction<br />
          qui vaut la peine de construire.
        </h2>
        <hr className="border-none border-t border-white/10 my-8" />

        <blockquote className="font-serif text-2xl md:text-3xl font-light leading-snug mb-8 max-w-2xl border-l-3 border-amber pl-6 text-white">
          « Je crois que la technologie doit résoudre de vrais problèmes et créer des opportunités pour les gens. »
        </blockquote>

        <p className="text-base text-white/55 leading-relaxed max-w-xl">
          Je m'intéresse particulièrement à la création de produits qui améliorent l'accessibilité, la participation économique et la transformation numérique dans les marchés émergents : des endroits où une technologie bien conçue peut véritablement changer la trajectoire des entreprises, des communautés et des vies.
        </p>
      </div>
    </section>
  );
}
