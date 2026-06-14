export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-black/8 flex justify-between items-center flex-wrap gap-4">
      <div>
        <div className="font-serif text-lg font-normal">Ouedraogo Alycia.</div>
        <div className="text-xs text-mid mt-1">Développeuse Mobile</div>
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/Alycia-Ouedraogo" className="text-xs text-mid hover:text-black transition-colors">
          GitHub
        </a>
        <a href="mailto:odgimportant@gmail.com" className="text-xs text-mid hover:text-black transition-colors">
          Email
        </a>
      </div>

      <div className="text-xs text-black/30">© 2026 Ouedraogo Alycia. Tous droits réservés.</div>
    </footer>
  );
}
