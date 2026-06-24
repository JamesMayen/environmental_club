import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, GraduationCap, Users2, Sprout, Calendar, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import PartnerCard from '../components/ui/PartnerCard'
import SEO from '../components/ui/SEO'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Counter from '../components/ui/Counter'
import GrowthRings from '../components/ui/GrowthRings'
import WaveDivider from '../components/ui/WaveDivider'
import MediaFrame from '../components/ui/MediaFrame'
import { impactStats, missionSnapshot, featuredActivities, partners, siteInfo, leadership } from '../data/siteData'

const snapshotIcons = { GraduationCap, Users2, Sprout }

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="UJEC empowers young environmental leaders through education, conservation, research, and community action across South Sudan."
        path="/"
      />

      {/* HERO */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero/hero.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <GrowthRings originX="85%" originY="15%" tone="dark" />
        <div className="absolute inset-0 topo-dots opacity-20" />
        <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-leaf/15 text-leaf text-xs font-semibold uppercase tracking-wider mb-6">
              {siteInfo.affiliation}
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              Eco Action for a <span className="text-leaf">Greener South</span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
              The Environmental Club of the University of Juba is empowering young environmental
              leaders through education, conservation, research, advocacy, and community action
              across South Sudan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/get-involved" variant="leaf">
                Join Us <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/donate" variant="outlineLight">
                Support Our Mission
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl animate-floaty">
              <img src="/images/hero/hero.jpeg" alt="Hero banner" className="w-full h-full object-cover" loading="lazy" onError={(e)=>{e.currentTarget.src='/images/gallery/hero.jpeg'}} />
            </div>
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-5 w-56">
              <p className="font-heading font-extrabold text-2xl text-forest">500+</p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Trees planted by members</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          aria-hidden="true"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="bg-forest-600 py-16 relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {impactStats.map((stat) => (
            <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      {/* MISSION SNAPSHOT */}
      <section className="py-24 bg-warmgray topo-dots">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Three pillars of our work"
            description="Everything UJEC does flows from a simple belief: educated, organized young people are South Sudan's strongest environmental asset."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {missionSnapshot.map((item, i) => {
              const Icon = snapshotIcons[item.icon]
              return (
                <motion.div
                  key={item.title}
                  className="lift-card bg-white rounded-2xl p-8 shadow-sm border border-forest-100"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-forest-50 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-deepgreen mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED ACTIVITIES */}

      {/* LEADERSHIP — Featured President only on homepage */}
      {/* LEADERSHIP — Featured President only on homepage */}
      <section className="py-20 bg-white topo-dots">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-8 text-center">
            <p className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-3">Meet Our Environmental Leaders</p>
            <h2 className="font-heading font-extrabold text-3xl text-deepgreen mb-3">Meet Our Environmental Leaders</h2>
            <p className="max-w-3xl mx-auto text-gray-600">Dedicated student leaders working together to promote environmental sustainability, conservation, research, and community action across South Sudan.</p>
          </div>

          {/* Grab the first item from the array (The President) */}
          {leadership && leadership.length > 0 && (() => {
            const president = leadership[0];
            // Sanitizes the email in case it contains markdown formatting
            const cleanEmail = president?.email?.includes('(') 
              ? president.email.match(/\((.*?)\)/)?.[1]?.replace('mailto:', '') || 'president@ujec.org'
              : president?.email;

            return (
              <motion.div 
                className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto" 
                initial={{ opacity: 0, y: 16 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
              >
                <div>
                  <img 
                    src={president?.image || '/images/gallery/president.jpeg'} 
                    alt={president?.name} 
                    className="w-full h-72 object-cover object-top rounded-2xl shadow-2xl" 
                    loading="lazy" 
                    onError={(e)=>{e.currentTarget.src='/images/gallery/president.jpeg'}} 
                  />
                </div>
                <div>
                  <p className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2">{president?.position}</p>
                  <h3 className="font-heading font-extrabold text-2xl text-deepgreen mb-3">{president?.name}</h3>
                  <p className="text-gray-700 mb-4">"{president?.quote}"</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {cleanEmail && (
                      <a href={`mailto:${cleanEmail}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition text-sm text-gray-600">
                        Email
                      </a>
                    )}
                    {president?.linkedin && president.linkedin !== '#' && (
                      <a href={president?.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition text-sm text-gray-600">
                        LinkedIn
                      </a>
                    )}
                    {/* WhatsApp contact button */}
                    <a href={siteInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with UJEC on WhatsApp" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white hover:brightness-95 transition text-sm">
                      <FaWhatsapp className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div>
                    <Button to="/leadership" variant="leaf">
                      See Other Leaders <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            eyebrow="On the ground"
            title="Featured Activities"
            description="A sample of the recurring programs that keep UJEC members active across Juba and beyond."
            align="left"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.map((a, i) => (
              <motion.article
                key={a.slug}
                className="lift-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <MediaFrame category={a.category} className="h-40" label={a.category} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {a.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {a.location}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-deepgreen mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">{a.summary}</p>
                  <Button to="/projects" variant="secondary" className="text-sm px-4 py-2 self-start">
                    Read More
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-warmgray border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-3">Trusted Partners & Collaborators</p>
            <h2 className="font-heading font-extrabold text-3xl text-deepgreen mb-3">Trusted Partners & Collaborators</h2>
            <p className="max-w-3xl mx-auto text-gray-600">We work with government institutions, international organizations, universities, and environmental stakeholders to drive sustainable environmental action across South Sudan.</p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } }
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.03 }} className="h-full">
                  <PartnerCard partner={p} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 max-w-3xl mx-auto text-center">
            <h3 className="font-heading font-bold text-xl text-deepgreen mb-2">Interested in Partnering With Us?</h3>
            <p className="text-gray-600 mb-6">We welcome collaborations with organizations committed to environmental sustainability, climate action, conservation, and youth empowerment.</p>
            <div className="flex justify-center">
              <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-forest-600 to-leaf text-white font-semibold shadow-md hover:scale-105 transform transition">Become a Partner
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-deepgreen overflow-hidden">
        <WaveDivider fill="#14532D" flip />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 py-20 text-center">
          <GrowthRings originX="50%" originY="50%" tone="dark" />
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4 relative z-10">
            Become Part of South Sudan's Green Future
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">
            Whether you join as a member, volunteer your time, or support us financially —
            every contribution moves South Sudan toward a more sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Button to="/get-involved" variant="leaf">Join Today</Button>
            <Button to="/get-involved" variant="outlineLight">Volunteer</Button>
          </div>
        </div>
      </section>
    </>
  )
}
