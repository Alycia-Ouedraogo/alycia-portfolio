export default function Experience() {
  const experiences = [
    {
      role: "Fondatrice & Développeuse mobile",
      org: "Ayak",
      items: [
        "Stratégie et vision produit",
        "Développement mobile avec React Native & Expo",
        "Architecture de bases de données avec Supabase & SQL",
        "Design UX et prototypage",
        "Lancement et tests de bout en bout",
      ],
    },
    {
      role: "Étudiante en CPGE",
      org: "Université",
      items: [
        "Principes du génie logiciel",
        "Systèmes et conception de bases de données",
        "Algorithmes et structures de données",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-amber mb-3">
          Carrière
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
          Expérience
        </h2>
        <hr className="border-none border-t border-black/10 my-8" />

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border border-black/10 rounded-lg p-8 hover:border-amber transition-colors"
            >
              <h3 className="font-serif text-xl md:text-2xl font-normal tracking-tighter mb-1">
                {exp.role}
              </h3>
              <p className="text-xs font-bold tracking-widest uppercase text-amber mb-5">
                {exp.org}
              </p>
              <ul className="space-y-2">
                {exp.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="text-sm text-mid flex items-start gap-2"
                  >
                    <span className="text-amber flex-shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
