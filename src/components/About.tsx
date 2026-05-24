import { motion } from 'framer-motion';
import portrait2 from '../assets/portrait-2.jpeg';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const paragraphs = [
  'Comecei minha trajetória em 2018, em um call center, atendendo chamadas e aprendendo na prática como uma operação funciona por dentro — fluxos, gargalos, pessoas e processos. Aquele primeiro contato com o caos operacional virou o ponto de partida para tudo que construo hoje.',
  'Cresci de atendente a supervisor, passei por analista júnior, pleno, sênior e cheguei a Especialista em Operações. Em cada etapa, percebi que os problemas que mais doíam não eram resolvidos com mais esforço humano, e sim com sistemas, dados e automação.',
  'Hoje desenho e mantenho a espinha dorsal técnica de operações: APIs e microserviços em Go e Python, frontends em Next.js, infraestrutura em Linux com Docker, Nginx e deploys blue-green, dashboards em Grafana, automações em n8n e arquiteturas orientadas a domínio.',
  'Gosto da fronteira entre tecnologia e operação real — o lugar onde uma boa decisão de arquitetura economiza horas de trabalho repetitivo todo mês. É isso que tento entregar em cada projeto: clareza, performance e escala.',
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
            <span className="section-title-eyebrow">01 — Sobre mim</span>
            <h2 className="section-title mt-4">
              De um <span className="accent-gradient">headset</span> à arquitetura de sistemas.
            </h2>
            <p className="section-subtitle">
              Um percurso de oito anos entre operação, liderança e engenharia — sempre buscando
              o ponto onde tecnologia e processo se encontram.
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
