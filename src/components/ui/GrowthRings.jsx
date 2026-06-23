import { motion } from 'framer-motion'

/**
 * GrowthRings — the site's recurring signature motif.
 * Concentric rings that read as both tree growth-rings and ripples of
 * community impact spreading outward. Purely decorative, aria-hidden.
 */
export default function GrowthRings({ originX = '80%', originY = '20%', tone = 'light' }) {
  const sizes = [120, 220, 320, 420, 520]
  const color = tone === 'light' ? 'rgba(74,222,128,0.35)' : 'rgba(11,107,58,0.18)'

  return (
    <div className="growth-rings" aria-hidden="true">
      {sizes.map((size, i) => (
        <motion.span
          key={size}
          style={{
            width: size,
            height: size,
            left: originX,
            top: originY,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            borderColor: color,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.12, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
