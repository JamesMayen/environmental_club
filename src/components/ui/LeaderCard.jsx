import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const fallbackAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="240" height="240" rx="120" fill="#e8f5e9"/><circle cx="120" cy="96" r="42" fill="#6b8f71"/><path d="M62 196c12-34 44-52 58-52s46 18 58 52" fill="#4b6f4f"/></svg>`)}`

function normalizeEmail(value) {
  if (!value) return null

  const mailtoMatch = value.match(/mailto:([^\s)]+)/i)
  if (mailtoMatch?.[1]) {
    return { href: `mailto:${mailtoMatch[1]}`, label: mailtoMatch[1] }
  }

  const markdownMatch = value.match(/\[([^\]]+)\]\(([^)]+)\)/)
  if (markdownMatch?.[2]?.startsWith('mailto:')) {
    return { href: markdownMatch[2], label: markdownMatch[1] }
  }

  if (typeof value === 'string' && value.includes('@')) {
    return { href: `mailto:${value}`, label: value }
  }

  return null
}

export default function LeaderCard({ leader }) {
  const { name, position, image, bio, quote, linkedin, email } = leader
  const [imageSrc, setImageSrc] = React.useState(image || fallbackAvatar)
  const hasQuote = Boolean(quote?.trim())
  const emailData = normalizeEmail(email)
  const hasEmail = Boolean(emailData?.href)
  const hasLinkedin = Boolean(linkedin?.trim())

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02, boxShadow: '0 25px 70px -20px rgba(15, 61, 33, 0.2)' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative flex h-full flex-col overflow-visible rounded-[1.75rem] border border-green-100 bg-white px-6 pb-8 pt-20 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:px-8"
    >
      <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center mt-8">
        <div className="relative h-[150px] w-[150px] rounded-full border-[6px] border-white bg-white shadow-[0_18px_45px_-15px_rgba(15,61,33,0.35)]">
          <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            className="h-full w-full rounded-full object-cover object-top"
            onError={() => setImageSrc(fallbackAvatar)}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col items-center text-center">
        <h4 className="font-heading text-2xl font-bold text-deepgreen">{name}</h4>
        <div className="mt-3 inline-flex items-center rounded-full bg-forest-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
          {position}
        </div>

        <p className="mt-5 text-center text-sm leading-relaxed text-gray-600 line-clamp-4">{bio}</p>

        {hasQuote && (
          <div className="mt-6 w-full rounded-2xl border border-green-100 bg-emerald-50/80 p-4 text-sm italic leading-relaxed text-forest-700">
            <div className="mb-2 flex items-center justify-center text-forest-600">
              <span className="text-lg leading-none">“</span>
            </div>
            <p>{quote}</p>
          </div>
        )}

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3">
          {hasEmail && (
            <a
              href={emailData.href}
              className="inline-flex items-center justify-center rounded-full border border-green-100 bg-white px-4 py-2.5 text-sm font-medium text-deepgreen transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          )}

          {hasLinkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-forest-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-deepgreen hover:shadow-md"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
