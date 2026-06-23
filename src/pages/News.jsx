import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, ArrowRight } from 'lucide-react'
import SEO from '../components/ui/SEO'
import MediaFrame from '../components/ui/MediaFrame'
import Button from '../components/ui/Button'
import { blogCategories, blogPosts } from '../data/siteData'

const PAGE_SIZE = 4

export default function News() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)

  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  const filtered = useMemo(() => {
    return rest.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category, rest])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <>
      <SEO
        title="News & Blog"
        description="Read the latest environmental news, club updates, and success stories from UJEC."
        path="/news"
      />

      <section className="pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Stay Informed</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">News & Blog</h1>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <motion.article
              className="grid md:grid-cols-2 rounded-3xl overflow-hidden border border-gray-100 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MediaFrame category="World Environment Day" className="h-64 md:h-full" />
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-forest mb-2">Featured · {featured.category}</span>
                <h2 className="font-heading font-bold text-2xl text-deepgreen mb-3">{featured.title}</h2>
                <p className="text-gray-600 mb-4">{featured.excerpt}</p>
                <span className="flex items-center gap-1 text-xs text-gray-500 mb-5">
                  <Calendar className="w-3.5 h-3.5" /> {featured.date}
                </span>
                <Button variant="secondary" className="self-start text-sm px-5 py-2.5">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Search + filters + grid */}
      <section className="py-16 bg-warmgray">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1) }}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-forest outline-none text-sm"
                aria-label="Search articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCategory(c); setPage(1) }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                    category === c
                      ? 'bg-forest text-white border-forest'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-forest hover:text-forest'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {pageItems.length === 0 ? (
            <p className="text-center text-gray-500 py-16">No articles match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageItems.map((p, i) => (
                <motion.article
                  key={p.slug}
                  className="lift-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <MediaFrame category="default" className="h-36" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-forest mb-2">{p.category}</span>
                    <h3 className="font-heading font-bold text-base text-deepgreen mb-2 line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">{p.excerpt}</p>
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-9 h-9 rounded-full text-sm font-semibold ${
                    page === i + 1 ? 'bg-forest text-white' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                  aria-label={`Page ${i + 1}`}
                  aria-current={page === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
