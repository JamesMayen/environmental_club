/**
 * WaveDivider — a Nile/wetland-inspired wave used to transition between
 * sections of contrasting background color. flip mirrors it vertically.
 */
export default function WaveDivider({ fill = '#F8FAFC', flip = false }) {
  return (
    <div className="wave-divider" aria-hidden="true" style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,32 C180,80 360,0 540,24 C720,48 900,80 1080,48 C1260,16 1350,8 1440,24 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
