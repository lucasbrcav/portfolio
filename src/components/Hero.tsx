import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react';
import portrait from '../assets/portrait.jpeg';
import { fadeUp, stagger } from '../lib/motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container-prose">
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
        >
          <div>
            <motion.div variants={fadeUp} className="section-title-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponível para novos desafios
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              <span className="text-gradient">Lucas Braga</span>
              <br />
              <span className="text-gradient">Cavalcanti</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
            >
              <span className="text-white">Operations & Systems Specialist</span>
              <span className="mx-2 text-zinc-600">·</span>
              <span className="text-zinc-400">
                Data, Automation & Infrastructure Engineer
              </span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400"
            >
              Tecnologia, dados e automação transformando operações em{' '}
              <span className="text-white">sistemas inteligentes</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a
                href="#projetos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-ink-950 shadow-glow transition-shadow hover:shadow-[0_0_0_1px_rgba(124,255,107,0.4),0_12px_50px_-8px_rgba(124,255,107,0.45)]"
              >
                Ver projetos
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </motion.a>
              <motion.a
                href="#contato"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <Mail size={16} />
                Entrar em contato
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} /> Brasil · Remoto
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={13} className="text-accent/80" /> Wantel Tecnologia · Especialista em Operações
              </span>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-blue-500/10 blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card relative overflow-hidden rounded-[1.75rem] p-2"
              >
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/5">
                  <img
                    src={portrait}
                    alt="Retrato de Lucas Braga Cavalcanti"
                    className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-all duration-500 hover:grayscale-0"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                    <span className="font-mono">~ lucas.bc</span>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
                      v2026
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
