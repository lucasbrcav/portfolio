import { motion } from 'framer-motion';
import portrait2 from '../assets/portrait-2.jpeg';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const paragraphs = [
  'Comecei em 2018, em um call center, atendendo clientes e entendendo de perto como uma operação funciona: fluxo, gargalo, pessoas e processo.',
  'Saí do atendimento para supervisão, depois passei por analista júnior, pleno e sênior, até chegar ao papel de Especialista em Operações. Esse caminho me mostrou que esforço sem sistema só apaga incêndio.',
  'Hoje construo a base técnica das operações com APIs e microserviços em Go e Python, frontend em Next.js, infraestrutura Linux com Docker e Nginx, além de observabilidade e automações no dia a dia.',
  'Meu foco é simples: usar tecnologia para reduzir trabalho repetitivo, dar previsibilidade para a operação e criar espaço para decisões melhores.',
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="container-prose">
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          <motion.div variants={fadeUp} className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-title-eyebrow">01 / Sobre mim</span>
            <h2 className="section-title mt-4">
              Do <span className="accent-gradient">headset</span> para arquitetura de sistemas.
            </h2>
            <p className="section-subtitle">
              Em oito anos, passei por operação, liderança e engenharia, sempre com o mesmo foco:
              melhorar processo com tecnologia.
            </p>

            <div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/[0.06] lg:block">
              <img
                src={portrait2}
                alt="Lucas Braga Cavalcanti"
                className="aspect-[4/5] w-full object-cover grayscale-[20%]"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6 text-[1.02rem] leading-relaxed text-zinc-300">
            {paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp}>
                {p}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-4"
            >
              {[
                { k: '8+', v: 'anos em operações' },
                { k: '6', v: 'níveis de evolução' },
                { k: '24/7', v: 'mentalidade de uptime' },
                { k: '∞', v: 'curiosidade técnica' },
              ].map((s) => (
                <div key={s.v} className="bg-ink-900 p-5">
                  <div className="font-display text-2xl font-semibold text-white">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
