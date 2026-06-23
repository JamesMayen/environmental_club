import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Images } from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import MediaFrame from '../components/ui/MediaFrame'
import GrowthRings from '../components/ui/GrowthRings'
import { projects } from '../data/siteData'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <SEO
        title="Projects & Activities"
        description="Explore UJEC's tree planting, cleanups, research expeditions, school outreach, and mentorship programs across South Sudan."
        path="/projects"
      />

      <section className="relative pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen overflow-hidden">
        <GrowthRings originX="90%" originY="10%" tone="dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">In Action</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">
            Projects & Activities
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            From seedlings to street cleanups, here is how UJEC members put the Club's
            mission into practice every term.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  filter === c
                    ? 'bg-forest text-white border-forest'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-forest hover:text-forest'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visible.map((p, i) => (
              <motion.article
                key={p.slug}
                className="lift-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <MediaFrame category={p.category} className="sm:w-44 h-44 sm:h-auto shrink-0" />
                <div className="p-6 flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-forest mb-2">{p.category}</span>
                  <h3 className="font-heading font-bold text-lg text-deepgreen mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-auto">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {p.location}</span>
                    <span className="flex items-center gap-1"><Images className="w-3.5 h-3.5" /> Gallery available</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
