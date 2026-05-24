import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import portrait3 from '../assets/portrait-3.jpeg';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@lucasbc.dev',
    href: 'mailto:contato@lucasbc.dev',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Conversar agora',
    href: 'https://wa.me/5500000000000',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/lucasbc',
    href: 'https://github.com/',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucasbc',
    href: 'https://linkedin.com/',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="container-prose">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.08)}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-8 shadow-card sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <motion.span variants={fadeUp} className="section-title-eyebrow">
                05 — Contato
              </motion.span>
              <motion.h2 variants={fadeUp} className="section-title mt-4">
                Tem um problema interessante <br />
                <span className="accent-gradient">para resolver?</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="section-subtitle">
                Se você lidera uma operação que precisa escalar com dados, automação e
                infraestrutura sólida — vamos conversar.
              </motion.p>

              <motion.ul
                variants={stagger(0.1, 0.08)}
                className="mt-10 grid gap-3 sm:grid-cols-2"
              >
                {channels.map((c) => (
                  <motion.li key={c.label} variants={fadeUp}>
                    <motion.a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-ink-900/60 px-4 py-3.5 transition-colors hover:border-accent/40"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                          <c.icon size={15} />
                        </span>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                            {c.label}
                          </div>
                          <div className="text-sm font-medium text-white">{c.value}</div>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                <img
                  src={portrait3}
                  alt="Lucas Braga Cavalcanti"
                  className="aspect-[4/5] w-full object-cover grayscale-[10%]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-accent/80">
                    Lucas Braga Cavalcanti
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold text-white">
                    Operations & Systems Specialist
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
