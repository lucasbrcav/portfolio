import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Server,
  LineChart,
  Network,
  type LucideIcon,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type Category = {
  icon: LucideIcon;
  title: string;
  hint: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: Code2,
    title: 'Linguagens',
    hint: 'Onde a lógica nasce',
    items: ['Python', 'Go', 'TypeScript'],
  },
  {
    icon: Layers,
    title: 'Frontend / Backend',
    hint: 'Interfaces e serviços',
    items: ['Next.js', 'Node.js'],
  },
  {
    icon: Server,
    title: 'Infra / DevOps',
    hint: 'Onde o sistema vive',
    items: ['Linux', 'Docker', 'Nginx', 'Blue-Green Deploy'],
  },
  {
    icon: LineChart,
    title: 'Dados & Automação',
    hint: 'Visibilidade e escala',
    items: ['Grafana', 'Excel avançado', 'n8n'],
  },
  {
    icon: Network,
    title: 'Arquitetura',
    hint: 'Como tudo se conecta',
    items: ['Microserviços', 'DDD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-prose">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.08)}
        >
          <motion.span variants={fadeUp} className="section-title-eyebrow">
            02 / Stack
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Ferramentas que uso para <span className="accent-gradient">construir e sustentar</span> operações.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Da linha de comando ao dashboard executivo, uma stack pragmática escolhida pelo que
            resolve na prática.
          </motion.p>

          <motion.div
            variants={stagger(0.1, 0.08)}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 shadow-card transition-colors hover:border-accent/30"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                    <cat.icon size={16} />
                  </span>
                  <div>
                    <div className="font-display text-sm font-semibold text-white">
                      {cat.title}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-zinc-500">
                      {cat.hint}
                    </div>
                  </div>
                </div>

                <motion.ul
                  variants={stagger(0.1, 0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {cat.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeUp}
                      className="rounded-full border border-white/[0.08] bg-ink-800/60 px-3 py-1 text-xs text-zinc-300 transition-colors group-hover:border-white/15"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
