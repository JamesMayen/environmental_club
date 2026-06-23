import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function PartnerCard({ partner }) {
  const { name, logo, category, link } = partner

  const CardInner = (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-between h-full focus:outline-none">
      <div className="absolute left-0 top-0 w-full h-1 overflow-hidden">
        <div className="bg-gradient-to-r from-forest-600 via-leaf to-emerald-500 h-1 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </div>

      <span className="absolute left-4 top-4 inline-block text-xs font-semibold uppercase px-3 py-1 rounded-full bg-forest-50 text-forest border border-forest-100">{category}</span>

      <div className="flex-1 flex items-center justify-center p-4">
        <img src={logo} alt={`${name} logo`} className="max-h-20 object-contain mx-auto" />
      </div>

      <div className="w-full mt-4 text-center">
        <h4 className="font-heading font-semibold text-deepgreen text-sm">{name}</h4>
      </div>

      {link && (
        <span className="sr-only">External link to {name}</span>
      )}
    </div>
  )

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="block h-full"
        aria-label={`Visit ${name}`}
      >
        {CardInner}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }} className="h-full">
      {CardInner}
    </motion.div>
  )
}
