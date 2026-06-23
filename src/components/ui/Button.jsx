import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-forest text-white hover:bg-forest-600 shadow-lg shadow-forest/20',
  secondary: 'bg-white text-forest border-2 border-forest hover:bg-forest-50',
  light: 'bg-white text-forest hover:bg-warmgray',
  outlineLight: 'bg-transparent text-white border-2 border-white hover:bg-white/15',
  leaf: 'bg-leaf text-deepgreen hover:brightness-95',
}

export default function Button({ to, href, onClick, type = 'button', variant = 'primary', className = '', children, ...rest }) {
  const base = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold font-body transition-all duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={base} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={base} {...rest}>
      {children}
    </button>
  )
}
