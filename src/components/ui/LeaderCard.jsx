import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

export default function LeaderCard({ leader }) {
  const {
  name,
  position,
  image,
  bio,
  quote,
  linkedin,
  email,
} = leader

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.src='/images/gallery/hero.jpeg'}} />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="font-heading font-bold text-lg text-deepgreen">{name}</h4>
        <p className="text-sm text-gray-500 mb-3">{position}</p>
        {quote && <p className="text-gray-600 flex-1 mb-4">“{quote}”</p>}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-forest hover:text-deepgreen">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-gray-500 hover:text-gray-700">
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-forest-600 text-white text-sm shadow-sm">Contact</a>
        </div>
      </div>
    </motion.article>
  )
}
