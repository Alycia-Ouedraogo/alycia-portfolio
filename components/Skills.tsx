export default function Skills() {
  const skillGroups = [
    {
      label: "Programmation",
      skills: ["JavaScript", "TypeScript", "SQL"],
    },
    {
      label: "Développement Mobile",
      skills: ["React Native", "Expo"],
    },
    {
      label: "Backend & Base de données",
      skills: ["Supabase", "PostgreSQL"],
    },
    {
      label: "Compétences Produit",
      skills: ["UI/UX Design", "Planification produit"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-taupe">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-amber mb-3">
          Savoir-faire
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
          Compétences techniques
        </h2>
        <hr className="border-none border-t border-black/10 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-white rounded p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-amber mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-2 bg-taupe text-black rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
