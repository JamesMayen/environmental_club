import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/siteData'
import Button from '../ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20" aria-label="Primary">
        <div className="flex items-center gap-3 font-heading font-extrabold text-lg" aria-hidden="true">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white flex-shrink-0 shadow-sm transform transition">
            <img src="/images/hero/logo.jpeg" alt="UJEC logo" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="leading-tight">
            <div className="text-deepgreen text-sm font-semibold">Environmental Club</div>
            <div className="text-gray-600 text-xs">University of Juba</div>
          </div>
        </div>

        <button
          className="p-2 rounded-md text-deepgreen"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-base font-semibold border-b border-gray-100 ${isActive ? 'text-forest' : 'text-gray-700'}`
                    }
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <Button to="/donate" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                  Donate
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
