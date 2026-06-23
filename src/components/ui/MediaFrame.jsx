import React, { useState } from 'react'
import { imageMap } from '../../data/imageMap'

/**
 * MediaFrame — renders a representative image for content categories.
 * Falls back to the original gradient placeholder when an image fails to load.
 */
export default function MediaFrame({ category = 'default', className = '', label }) {
  const [imgError, setImgError] = useState(false)
  const key = category || 'default'
  const src = imageMap[key] || imageMap.default

  if (imgError || !src) {
    // fallback: simple colored panel with label
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-300 ${className}`}>
        <div className="absolute inset-0 topo-dots opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10" />
        </div>
        {label && (
          <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-wide text-white/90 bg-black/20 px-2 py-1 rounded-full">
            {label}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={label || category}
        loading="lazy"
        className="w-full h-full object-cover rounded-xl transition-transform duration-500 transform group-hover:scale-105"
        onError={() => setImgError(true)}
      />
      {label && (
        <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-wide text-white/90 bg-black/20 px-2 py-1 rounded-full">
          {label}
        </span>
      )}
    </div>
  )
}
