import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type Step = {
  year: string;
  role: string;
  description: string;
};

const steps: Step[] = [
  {
    year: '2018-2020',
    role: 'Atendente de Call Center',
    description:
      'O começo. Primeiro contato com operação real, métricas duras e a importância de processos bem desenhados.',
  },
  {
    year: '2020-2021',
    role: 'Supervisor',
    description:
      'Liderança de equipe, gestão de SLAs e os primeiros experimentos com automação de planilhas e relatórios.',
  },
  {
    year: '2021-2022',
    role: 'Analista Pleno',
    description:
      'Automação ganhando escala. Integrações entre sistemas, scripts em Python e primeiros serviços em produção.',
  },
  {
    year: '2022-2024',
    role: 'Analista Sênior',
    description:
      'Arquitetura de soluções, automações, infraestrutura Linux com Docker.',
  },
  {
    year: '2024-Atual',
    role: 'Especialista em Operações | Wantel',
    description:
      'Hoje cuido de um sistema fullstack em Go, Python e Next.js (TypeScript), unificando CRM, CX, operação de campo e pontos de compras, trazendo mais agilidade e reduzindo o tempo dos processos e a rolagem de telas no dia a dia.',
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="trajetoria" className="relative py-24 sm:py-32">
      <div className="container-prose">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.08)}
        >
          <motion.span variants={fadeUp} className="section-title-eyebrow">
            04 / Trajetória
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Oito anos, <span className="accent-gradient">seis etapas</span> de aprendizado.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Cada fase trouxe uma visão nova do mesmo desafio: fazer operações funcionarem melhor,
            com menos atrito e mais clareza.
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative mt-16 pl-6 sm:pl-10">
          {/* Track */}
          <div className="absolute left-2 top-0 h-full w-px bg-white/[0.06] sm:left-4" />
          {/* Progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent/60 to-transparent sm:left-4"
          />

          <motion.ol
            variants={stagger(0, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-10"
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.role}
                variants={fadeUp}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-[1.4rem] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-ink-950 sm:-left-[2.2rem]"
                >
                  <span className="h-3 w-3 rounded-full border border-accent/50 bg-ink-900 shadow-[0_0_0_4px_rgba(124,255,107,0.08)]" />
                </span>

                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent/80">{s.year}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Cap. {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">
                  {s.role}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
