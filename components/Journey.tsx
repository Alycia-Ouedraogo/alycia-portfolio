export default function Journey() {
  const timelineItems = [
    {
      title: "Début des expériences en programmation",
      description:
        "Construction de bases solides en développement logiciel, algorithmes, bases de données et résolution de problèmes. Découverte d'une passion pour créer, pas seulement pour étudier.",
      future: false,
    },
    {
      title: "Création d'Ayak",
      description:
        "Conception et développement d'une marketplace multi-vendeurs pour le commerce local. Prise en charge complète du rôle produit : stratégie, design, développement et tests, en solo. Première vraie expérience de transformation d'une idée en prototype fonctionnel.",
      future: false,
    },
    {
      title: "Création de Skill-Up",
      description:
        "Développement d'une plateforme de technologie éducative axée sur l'apprentissage accessible. Première vraie expérience de travail en équipe.",
      future: false,
    },
    {
      title: "Vision future",
      description:
        "Continuer à construire des produits technologiques à fort impact. Faire grandir Ayak. Lancer de nouvelles ventures. Créer de vraies opportunités grâce au logiciel.",
      future: true,
    },
  ];

  return (
    <section id="journey" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-amber mb-3">
          Chronologie
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
          Mon parcours
        </h2>
        <hr className="border-none border-t border-black/10 my-8" />

        <div className="max-w-2xl">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full flex-shrink-0 mb-2 ${
                    item.future
                      ? "bg-taupe border-2 border-black/15"
                      : "bg-amber border-2 border-white shadow-sm"
                  }`}
                ></div>
                {idx < timelineItems.length - 1 && (
                  <div className="w-0.5 h-16 bg-black/10"></div>
                )}
              </div>
              <div className="pt-1">
                <h3
                  className={`font-serif text-xl font-normal tracking-tighter mb-1 ${
                    item.future ? "text-mid" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
