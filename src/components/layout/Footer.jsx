import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle, Mail, Phone, MapPin, Leaf } from 'lucide-react'
import { siteInfo, navLinks } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-deepgreen text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 font-heading font-extrabold text-lg mb-4" aria-hidden="true">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white/0 flex items-center justify-center">
              <img src="/images/hero/logo.jpeg" alt="UJEC logo" className="w-full h-full object-cover" loading="lazy" onError={(e)=>{e.currentTarget.src='/images/hero/logo.jpeg'}} />
            </div>
            <div className="text-sm">Environmental Club<br /><span className="text-xs font-normal">University of Juba</span></div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            {siteInfo.fullName} empowers young environmental leaders through education,
            conservation, research, and community action across South Sudan.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4 text-leaf">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(0, 6).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-leaf transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4 text-leaf">Contact</h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-leaf" /> {siteInfo.address}</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-leaf" /> {siteInfo.email}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-leaf" /> {siteInfo.phone}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4 text-leaf">Follow Us</h3>
          <div className="flex gap-3">
            {[
              [Facebook, siteInfo.social.facebook],
              [MessageCircle, siteInfo.social.whatsapp],
            ].map(([Icon, href], i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social media link"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-leaf hover:text-deepgreen transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60 px-5">
        © {new Date().getFullYear()} {siteInfo.fullName}. "{siteInfo.motto}"
      </div>
    </footer>
  )
}
