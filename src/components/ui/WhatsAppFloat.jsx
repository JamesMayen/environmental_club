import { MessageCircle } from 'lucide-react'
import { siteInfo } from '../../data/siteData'

export default function WhatsAppFloat() {
  return (
    <a
      href={siteInfo.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UJEC on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  )
}
