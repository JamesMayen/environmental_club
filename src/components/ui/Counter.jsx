import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Counter({ value, suffix = '', label, light = true }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <div ref={ref} className="text-center">
      <div className={`font-heading font-extrabold text-4xl md:text-5xl ${light ? 'text-white' : 'text-forest'}`}>
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </div>
      <p className={`mt-2 text-sm md:text-base font-medium uppercase tracking-wide ${light ? 'text-white/80' : 'text-gray-500'}`}>
        {label}
      </p>
    </div>
  )
}
