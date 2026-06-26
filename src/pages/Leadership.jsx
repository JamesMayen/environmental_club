import { motion } from 'framer-motion'
import SEO from '../components/ui/SEO'
import LeaderCard from '../components/ui/LeaderCard'
import { leadership } from '../data/siteData'

export default function Leadership() {
  return (
    <>
      <SEO title="Leadership" description="Meet the dedicated student leaders driving environmental sustainability at the University of Juba." path="/leadership" />

      <section className="pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center text-white">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Leadership</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mt-4">Leadership Team</h1>
          <p className="text-white/90 mt-4 max-w-2xl mx-auto">Meet the dedicated student leaders driving environmental sustainability, conservation, research, and community action at the University of Juba.</p>
        </div>
      </section>

      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div className="grid gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {leadership.map((leader, i) => (
                <motion.div key={leader.id || i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.03 }}>
                  <LeaderCard leader={leader} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}