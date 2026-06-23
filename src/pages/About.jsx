import { motion } from 'framer-motion'
import {
  Leaf, Microscope, Users, Sprout, ShieldCheck, Handshake, Recycle, HeartHandshake,
  TreeDeciduous, Waves, CloudRain, Trash2, PawPrint, Mountain,
} from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import GrowthRings from '../components/ui/GrowthRings'
import { vision, mission, coreValues, challenges, siteInfo } from '../data/siteData'

const valueIcons = { Leaf, Microscope, Users, Sprout, ShieldCheck, Handshake, Recycle, HeartHandshake }
const challengeIcons = { TreeDeciduous, Waves, CloudRain, Trash2, PawPrint, Mountain }

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about UJEC's story, vision, mission, and core values as the student-driven environmental movement of the University of Juba."
        path="/about"
      />

      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-forest-700 to-deepgreen overflow-hidden">
        <GrowthRings originX="10%" originY="80%" tone="dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">About UJEC</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">
            Our Story, Vision & Values
          </h1>
        </div>
      </section>

      {/* CLUB STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-gray-700 leading-relaxed space-y-5">
          <p>
            We are the students of the Department of Environmental Studies at the
            University of Juba, gathered in the spirit of environmental stewardship,
            academic excellence, and civic responsibility. South Sudan is blessed with
            abundant biodiversity, wetlands, forests, and wildlife — yet it faces
            significant environmental challenges, from deforestation and land
            degradation to water pollution, biodiversity loss, and climate change.
          </p>
          <p>
            We believe the youth and student community bear a particular responsibility,
            and possess the energy, creativity, and knowledge necessary to drive
            meaningful environmental change. As the premier institution of higher
            learning in South Sudan, the University of Juba has a duty to nurture
            environmentally literate, responsible, and active citizens — and {siteInfo.shortName}{' '}
            exists to channel that duty into action.
          </p>
          <p>
            We are convinced that collective student action, rooted in scientific
            understanding and guided by principled values, can generate lasting positive
            impact for the environment and communities of South Sudan — for present and
            future generations.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-forest uppercase tracking-widest text-xs font-semibold">Our Vision</span>
          <p className="font-heading font-semibold text-2xl md:text-3xl text-deepgreen mt-4 leading-snug">
            "{vision}"
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Our Mission" title="What guides everything we do" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mission.map((m, i) => (
              <motion.div
                key={i}
                className="lift-card bg-warmgray rounded-2xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center font-heading font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{m}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-deepgreen relative overflow-hidden">
        <GrowthRings originX="90%" originY="90%" tone="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="What we stand for" title="Our Core Values" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[v.icon]
              return (
                <motion.div
                  key={v.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Icon className="w-7 h-7 text-leaf mb-4" />
                  <h3 className="font-heading font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY SOUTH SUDAN NEEDS ENVIRONMENTAL ACTION */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Why it matters"
            title="Why South Sudan Needs Environmental Action"
            description="Our work responds directly to the environmental pressures facing our country today."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => {
              const Icon = challengeIcons[c.icon]
              return (
                <motion.div
                  key={c.title}
                  className="lift-card bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <Icon className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading font-bold text-lg text-deepgreen mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
