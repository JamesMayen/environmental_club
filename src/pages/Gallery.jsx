import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import MediaFrame from '../components/ui/MediaFrame'
import { galleryCategories, galleryItems } from '../data/siteData'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const visible = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)

  const openLightbox = (idx) => setActiveIndex(idx)
  const closeLightbox = () => setActiveIndex(null)
  const next = () => setActiveIndex((i) => (i + 1) % visible.length)
  const prev = () => setActiveIndex((i) => (i - 1 + visible.length) % visible.length)

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse photos from UJEC's tree planting drives, cleanups, workshops, school outreach, and World Environment Day celebrations."
        path="/gallery"
      />

      <section className="pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Moments</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">Gallery</h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            A visual record of UJEC members in action across South Sudan.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {galleryCategories.map((c) => (
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {visible.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="lift-card relative rounded-xl overflow-hidden aspect-square focus:outline-none"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
                aria-label={`Open photo: ${item.title}`}
              >
                <MediaFrame category={item.category} className="absolute inset-0" label={item.category} />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* World Environment Day showcase */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="Highlight"
            title="Recent World Environment Day Cleanup"
            description="Our most recent World Environment Day brought together members, volunteers, and partner organizations for a city-wide cleanup."
          />
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <MediaFrame category="World Environment Day" className="h-72 md:h-96" />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 md:left-10 text-white/80 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
            <motion.div
              className="w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <MediaFrame category={visible[activeIndex].category} className="w-full h-full" label={visible[activeIndex].title} />
            </motion.div>
            <button
              className="absolute right-4 md:right-10 text-white/80 hover:text-white"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
