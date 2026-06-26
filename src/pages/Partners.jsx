import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import PartnerCard from '../components/ui/PartnerCard'
import { partners } from '../data/siteData'

export default function Partners() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async () => {
    // Wire this up to EmailJS the same way as the membership form in
    // src/pages/GetInvolved.jsx once your EmailJS credentials are ready.
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <SEO
        title="Partners"
        description="See UJEC's government, NGO, university, and UN agency partners, and submit a partnership inquiry."
        path="/partners"
      />

      <section className="pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Working Together</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">Our Partners</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership inquiry */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Partner with us" title="Partnership Inquiry" />
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Field label="Organization Name" error={errors.org}>
              <input className="form-input focus:ring-forest-500 focus:border-forest-500 focus:outline-none hover:border-forest-400 transition-all duration-300" {...register('org', { required: 'Organization name is required' })} />
            </Field>
            <Field label="Contact Person" error={errors.contact}>
              <input className="form-input focus:ring-forest-500 focus:border-forest-500 focus:outline-none hover:border-forest-400 transition-all duration-300" {...register('contact', { required: 'Contact person is required' })} />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" className="form-input focus:ring-forest-500 focus:border-forest-500 focus:outline-none hover:border-forest-400 transition-all duration-300" {...register('email', { required: 'Email is required' })} />
            </Field>
            <Field label="Partnership Interest" error={errors.message}>
              <textarea rows={4} className="form-input focus:ring-forest-500 focus:border-forest-500 focus:outline-none hover:border-forest-400 transition-all duration-300" placeholder="Tell us about your organization and proposed collaboration" {...register('message', { required: 'Please describe your interest' })} />
            </Field>

            {submitted && (
              <p className="text-forest text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Inquiry submitted — our partnerships team will be in touch.
              </p>
            )}
            <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Submit Inquiry'}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  )
}

function Field({ label, children, error }) {
  return (
    <label className="block text-sm font-semibold text-gray-700">
      {label}
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-red-600 font-normal mt-1 block">{error.message}</span>}
    </label>
  )
}
