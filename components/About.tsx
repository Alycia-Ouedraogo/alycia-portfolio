export default function About() {
  const interests = [
    "Développement mobile",
    "Design produit",
    "Bases de données",
    "Génie logiciel"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-taupe">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-amber mb-3">
          Parcours
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
          À propos de moi
        </h2>
        <hr className="border-none border-t border-black/10 my-8" />

        <div className="space-y-5">
          <p className="text-base text-mid leading-relaxed max-w-2xl">
            Je suis étudiante en CPGE avec la volonté d'aller au-delà de la salle de cours : concevoir, construire et lancer des produits qui ont un vrai impact. Pour moi, la technologie prend tout son sens quand elle résout de vrais problèmes pour de vraies personnes.
          </p>
          <p className="text-base text-mid leading-relaxed max-w-2xl">
            Mon chemin vers l'informatique a commencé par une observation simple : il existe d'immenses opportunités inexploitées pour améliorer la digitalisation au Burkina Faso. Je ne veux pas étudier ces opportunités de loin. Je veux construire les solutions.
          </p>
          <p className="text-base text-mid leading-relaxed max-w-2xl">
            Que ce soit en architecturant une base de données, en designant un parcours utilisateur ou en écrivant des composants mobiles à minuit, je trouve de l'énergie dans chaque étape du processus de création produit. Je crois que les meilleurs fondateurs comprennent leur produit en profondeur à chaque niveau; et c'est le type de fondatrice que je m'entraîne à devenir.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {interests.map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 bg-white px-4 py-3 rounded text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0"></span>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
