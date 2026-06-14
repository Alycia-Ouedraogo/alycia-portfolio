export default function Projects() {
  const otherProjects = [
    {
      title: "Skill-Up",
      description:
        "Une plateforme éducative conçue pour accompagner les élèves dans l'apprentissage, en rendant les matières scientifiques accessibles.",
      tech: ["React Native", "Typescript", "Supabase"],
      role: "Développeuse principale",
      stage: "Stade prototype",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-amber mb-3">
          Travaux
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
          Projets phares
        </h2>
        <hr className="border-none border-t border-black/10 my-8" />

        {/* Flagship Project */}
        <div className="bg-black text-white rounded-lg p-12 mb-8">
          <span className="inline-block bg-amber text-black text-xs font-bold tracking-widest uppercase px-2 py-1 rounded mb-4">
            Projet Principal
          </span>
          <h3 className="font-serif text-4xl font-normal tracking-tighter text-white mb-2">
            Ayak
          </h3>
          <p className="text-white/65 text-base leading-relaxed mb-6 max-w-2xl">
            Une plateforme marketplace multi-vendeurs conçue pour aider les commerces locaux à vendre en ligne et à se connecter avec leurs clients via une expérience mobile moderne. Développée de bout en bout en tant que fondatrice, designer et développeuse.
          </p>

          <ul className="grid grid-cols-2 gap-2 mb-6 max-w-2xl text-xs text-white/75">
            <li className="flex items-center gap-2">
              <span className="text-amber">→</span> Gestion et onboarding des vendeurs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">→</span> Catalogue produit avec recherche et filtres
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">→</span> Système de gestion des commandes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">→</span> Authentification et profils utilisateurs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber">→</span> Flux marketplace complets
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React Native", "Expo", "Supabase", "SQL", "Javascript"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium tracking-wider px-3 py-1 border border-white/20 text-white/70 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              MVP - Tests en cours
            </div>
            <span className="text-xs text-white/40">
              Fondatrice · Designer · Développeuse Mobile Full-Stack
            </span>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div key={project.title} className="bg-taupe rounded-lg p-7 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="font-serif text-2xl font-normal tracking-tighter mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-mid leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2 py-1 bg-white text-mid rounded border border-black/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-mid">
                <span>{project.role}</span>
                <span className="italic">{project.stage}</span>
              </div>
            </div>
          ))}

          {/* Coming Soon */}
          <div className="bg-transparent border-2 border-dashed border-black/12 rounded-lg p-7">
            <h3 className="font-serif text-2xl font-normal tracking-tighter text-mid mb-2">
               Luma
            </h3>
            <p className="text-sm text-black/30">
              Luma est une plateforme prédictive de résilience énergétique urbaine basée sur l'experience communautaire.
            </p>
          </div>

          {/*<div className="bg-transparent border-2 border-dashed border-black/12 rounded-lg p-7">
            <h3 className="font-serif text-2xl font-normal tracking-tighter text-mid mb-2">
              À venir
            </h3>
            <p className="text-sm text-black/30">
              Toujours en train de construire. D'autres projets arrivent.
            </p>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
