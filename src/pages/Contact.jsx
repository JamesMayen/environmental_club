import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { siteInfo } from '../data/siteData'

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const onSubmit = async (data) => {
    setSubmitError('')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_PUBLIC_KEY)
      setSubmitted(true)
      reset()
    } catch (err) {
      setSubmitError('Could not send your message. Please email us directly at ' + siteInfo.email + '.')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the Environmental Club at the University of Juba — email, phone, WhatsApp, or visit the Department of Environmental Studies."
        path="/contact"
      />

      <section className="pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Reach Out</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12">
          {/* Info + map */}
          <div>
            <SectionHeading eyebrow="Get in touch" title="Contact Information" align="left" />
            <ul className="space-y-5 mb-10">
              <ContactRow icon={MapPin} label="Address">
                {siteInfo.address}
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${siteInfo.email}`} className="text-forest hover:underline">{siteInfo.email}</a>
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                {siteInfo.phone}
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a href={siteInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with UJEC on WhatsApp" className="text-forest hover:underline">{siteInfo.whatsapp}</a>
              </ContactRow>
            </ul>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
              <iframe
                title="University of Juba location map"
                src="https://maps.google.com/maps?q=University%20of%20Juba&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-warmgray rounded-3xl p-6 md:p-10 space-y-5 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Field label="Name" error={errors.name}>
              <input className="form-input" {...register('name', { required: 'Name is required' })} />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" className="form-input" {...register('email', { required: 'Email is required' })} />
            </Field>
            <Field label="Subject" error={errors.subject}>
              <input className="form-input" {...register('subject', { required: 'Subject is required' })} />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea rows={5} className="form-input" {...register('message', { required: 'Message is required' })} />
            </Field>

            {submitted && (
              <p className="text-forest text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Message sent! We'll respond as soon as we can.
              </p>
            )}
            {submitError && <p className="text-red-600 text-sm font-semibold">{submitError}</p>}
            <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  )
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4">
      <span className="w-11 h-11 rounded-full bg-forest-50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-forest" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide font-semibold text-gray-400">{label}</p>
        <p className="text-gray-700">{children}</p>
      </div>
    </li>
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
