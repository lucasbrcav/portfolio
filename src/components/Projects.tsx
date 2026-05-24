import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
  status?: string;
};

const projects: Project[] = [
  {
    name: 'Ops Control Plane',
    description:
      'Painel interno que reúne métricas, alertas e ações de operação no mesmo lugar, reduzindo o tempo de resposta a incidentes.',
    stack: ['Go', 'Next.js', 'Grafana', 'Docker'],
    status: 'em produção',
    link: '#',
    repo: '#',
  },
  {
    name: 'Blue-Green Pipeline',
    description:
      'Pipeline de deploy sem downtime, com Nginx e health checks customizados para serviços críticos de telecom.',
    stack: ['Linux', 'Nginx', 'Docker', 'Bash'],
    status: 'open source',
    link: '#',
    repo: '#',
  },
  {
    name: 'Automation Hub (n8n)',
    description:
      'Fluxos em n8n para automatizar roteamento de chamados, reconciliação de dados e geração de relatórios diários.',
    stack: ['n8n', 'Python', 'PostgreSQL'],
    status: 'interno',
    link: '#',
  },
  {
    name: 'Telemetry Toolkit',
    description:
      'Biblioteca interna em Go para padronizar logs, métricas e tracing entre microserviços, seguindo princípios de DDD.',
    stack: ['Go', 'OpenTelemetry', 'DDD'],
    status: 'em evolução',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="container-prose">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.08)}
        >
          <motion.span variants={fadeUp} className="section-title-eyebrow">
            03 / Projetos
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Projetos que <span className="accent-gradient">tirei do papel</span> e rodam no dia a dia.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Uma seleção de projetos com problema real para resolver, operação 24/7 e metas claras
            de desempenho.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 shadow-card transition-colors hover:border-accent/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    {p.status && (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  {p.repo && (
                    <a
                      href={p.repo}
                      aria-label={`Repositório de ${p.name}`}
                      className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-white/25 hover:text-white"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      aria-label={`Abrir ${p.name}`}
                      className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-accent/40 hover:text-accent"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/[0.08] bg-ink-800/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
