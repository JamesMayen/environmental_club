import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <motion.div
      className={`flex flex-col ${alignment} max-w-2xl ${align === 'left' ? '' : 'mx-auto'} mb-12`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span className={`uppercase tracking-[0.2em] text-xs font-semibold mb-3 ${light ? 'text-leaf' : 'text-forest'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight ${light ? 'text-white' : 'text-deepgreen'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${light ? 'text-white/85' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
