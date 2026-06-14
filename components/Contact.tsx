"use client";

export default function Contact() {
  const handleSubmit = () => {
    alert("Merci ! (Connectez un backend pour activer ce formulaire.)");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-taupe">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-ultra uppercase text-amber mb-3">
          Restons en contact
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
          Me contacter
        </h2>
        <hr className="border-none border-t border-black/10 my-8" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-base text-mid leading-relaxed mb-8">
              Je suis toujours ouverte à discuter de technologie, de startups, de projets innovants et d'opportunités de collaboration. Que vous soyez recruteur, développeur, ou simplement quelqu'un avec un problème intéressant à résoudre, contactez-moi.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:odgimportant@gmail.com"
                className="flex items-center gap-3 text-sm font-medium text-black p-3 bg-white rounded hover:bg-amber-light transition-colors"
              >
                <span className="text-base">✉</span>
                odgimportant@gmail.com
              </a>
              <a
                href="https://github.com/Alycia-Ouedraogo"
                className="flex items-center gap-3 text-sm font-medium text-black p-3 bg-white rounded hover:bg-amber-light transition-colors"
              >
                <span>⌥</span>
                GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-mid block mb-2">
                Nom
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 border border-black/12 rounded bg-white text-black placeholder-mid/40 focus:outline-none focus:border-amber transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-mid block mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border border-black/12 rounded bg-white text-black placeholder-mid/40 focus:outline-none focus:border-amber transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-mid block mb-2">
                Message
              </label>
              <textarea
                placeholder="De quoi souhaitez-vous discuter ?"
                rows={5}
                className="w-full px-4 py-3 border border-black/12 rounded bg-white text-black placeholder-mid/40 focus:outline-none focus:border-amber transition-colors resize-none"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-amber text-black px-8 py-3 rounded text-sm font-semibold tracking-tighter transition-all hover:bg-amber/90 hover:-translate-y-0.5 cursor-pointer"
            >
              Envoyer →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
