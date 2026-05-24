export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-prose flex flex-col items-start justify-between gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center">
        <div>
          © {year} Lucas Braga Cavalcanti — Construído com React, Tailwind e Framer Motion.
        </div>
        <div className="font-mono">
          built with intent · v2026
        </div>
      </div>
    </footer>
  );
}
