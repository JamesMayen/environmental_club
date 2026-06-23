import { motion } from 'framer-motion'
import { Sprout, Wrench, Megaphone, Users, Smartphone, Landmark, Globe2 } from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import GrowthRings from '../components/ui/GrowthRings'
import { donationImpact } from '../data/siteData'

const reasons = [
  { title: 'Buy seedlings', icon: Sprout },
  { title: 'Purchase cleanup tools', icon: Wrench },
  { title: 'Support awareness campaigns', icon: Megaphone },
  { title: 'Fund community outreach', icon: Users },
  { title: 'Support student environmental projects', icon: Globe2 },
]

export default function Donate() {
  return (
    <>
      <SEO
        title="Donate & Support"
        description="Support UJEC's tree planting, cleanup, and education programs through mobile money, bank transfer, or international donation."
        path="/donate"
      />

      <section className="relative pt-36 pb-20 bg-gradient-to-br from-deepgreen to-forest-700 overflow-hidden">
        <GrowthRings originX="15%" originY="20%" tone="dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Support Our Mission</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">
            Fuel South Sudan's Green Future
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            Every contribution — large or small — funds real conservation work on the ground in Juba.
          </p>
        </div>
      </section>

      {/* Why support us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Why support us" title="Where your donation goes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {reasons.map(({ title, icon: Icon }) => (
              <div key={title} className="text-center bg-forest-50 rounded-2xl p-6">
                <Icon className="w-8 h-8 text-forest mx-auto mb-3" />
                <p className="text-sm font-semibold text-deepgreen">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation methods */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="How to give" title="Donation Methods" />
          <div className="grid md:grid-cols-3 gap-6">
            <MethodCard icon={Smartphone} title="Mobile Money">
              <p>MTN MoMo: <span className="font-semibold">+211XXXXXXXXX</span></p>
              <p>Zain Cash: <span className="font-semibold">+211XXXXXXXXX</span></p>
            </MethodCard>
            <MethodCard icon={Landmark} title="Bank Transfer">
              <p>Bank Name: <span className="font-semibold">[Bank Name]</span></p>
              <p>Account Name: <span className="font-semibold">UJEC</span></p>
              <p>Account Number: <span className="font-semibold">[Account Number]</span></p>
            </MethodCard>
            <MethodCard icon={Globe2} title="International Donations">
              <p>Swift Code: <span className="font-semibold">[Swift Code]</span></p>
              <p>PayPal: <span className="font-semibold">paypal.me/ujec</span></p>
            </MethodCard>
          </div>
        </div>
      </section>

      {/* Donation impact */}
      <section className="py-20 bg-forest-600">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Your impact" title="What Your Donation Achieves" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {donationImpact.map((d, i) => (
              <motion.div
                key={d.amount}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="font-heading font-extrabold text-3xl text-leaf mb-2">{d.amount}</p>
                <p className="text-white/85 text-sm">{d.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function MethodCard({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <Icon className="w-9 h-9 text-forest mb-4" />
      <h3 className="font-heading font-bold text-lg text-deepgreen mb-3">{title}</h3>
      <div className="text-sm text-gray-600 space-y-1.5">{children}</div>
    </div>
  )
}
