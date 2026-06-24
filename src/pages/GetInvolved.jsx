import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle2, Sprout, Trash2, Megaphone, Microscope } from 'lucide-react'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { siteInfo } from '../data/siteData'

const benefits = [
  'Leadership opportunities',
  'Environmental training',
  'Research participation',
  'Networking',
  'Community service',
]

const volunteerOpportunities = [
  { title: 'Tree planting', icon: Sprout },
  { title: 'Cleanup campaigns', icon: Trash2 },
  { title: 'Awareness programs', icon: Megaphone },
  { title: 'Research support', icon: Microscope },
]

// EmailJS credentials — replace with your own Service ID, Template ID, and
// Public Key from https://dashboard.emailjs.com before deploying.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function GetInvolved() {
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
      setSubmitError('Something went wrong sending your application. Please try again or email us directly at ' + siteInfo.email + '.')
    }
  }

  return (
    <>
      <SEO
        title="Get Involved"
        description="Join UJEC, volunteer for environmental campaigns, or connect with our WhatsApp community across South Sudan."
        path="/get-involved"
      />

      <section className="pt-36 pb-16 bg-gradient-to-br from-forest-700 to-deepgreen">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-leaf uppercase tracking-widest text-xs font-semibold">Get Involved</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-4">
            Join South Sudan's Green Movement
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            Membership is open to all University of Juba students interested in environmental issues —
            regardless of faculty or department.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Why join" title="Member Benefits" />
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((b) => (
              <span key={b} className="flex items-center gap-2 bg-forest-50 text-forest font-semibold text-sm px-5 py-3 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Membership form */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Sign up" title="Membership Application" />
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Field label="Full Name" error={errors.fullName}>
              <input className="form-input" {...register('fullName', { required: 'Full name is required' })} />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" className="form-input" {...register('email', { required: 'Email is required' })} />
            </Field>
            <Field label="Phone Number" error={errors.phone}>
              <input className="form-input" {...register('phone', { required: 'Phone number is required' })} />
            </Field>
            <Field label="Faculty" error={errors.faculty}>
              <input className="form-input" {...register('faculty', { required: 'Faculty is required' })} />
            </Field>
            <Field label="Department" error={errors.department}>
              <input className="form-input" {...register('department', { required: 'Department is required' })} />
            </Field>
            <Field label="Year of Study" error={errors.year}>
              <select className="form-input" {...register('year', { required: 'Year of study is required' })}>
                <option value="">Select year</option>
                {[1, 2, 3, 4, 5].map((y) => <option key={y} value={y}>Year {y}</option>)}
              </select>
            </Field>
            <Field label="Interests" error={errors.interests} full>
              <input className="form-input" placeholder="e.g. Conservation, research, advocacy" {...register('interests')} />
            </Field>
            <Field label="Motivation" error={errors.motivation} full>
              <textarea rows={4} className="form-input" placeholder="Tell us why you want to join UJEC" {...register('motivation', { required: 'Please share your motivation' })} />
            </Field>

            <div className="sm:col-span-2">
              {submitted && (
                <p className="text-forest text-sm font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Application submitted! We'll be in touch soon.
                </p>
              )}
              {submitError && <p className="text-red-600 text-sm font-semibold mb-4">{submitError}</p>}
              <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit Application'}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Volunteer section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Give your time" title="Volunteer Opportunities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {volunteerOpportunities.map(({ title, icon: Icon }) => (
              <div key={title} className="text-center bg-forest-50 rounded-2xl p-8">
                <Icon className="w-9 h-9 text-forest mx-auto mb-4" />
                <p className="font-heading font-semibold text-deepgreen">{title}</p>
              </div>
            ))}
          </div>
            <div className="text-center">
            <Button href={siteInfo.social.whatsapp} variant="primary" aria-label="Join Volunteer Team on WhatsApp">Join Volunteer Team</Button>
            </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[#075E54]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-5" />
          <h2 className="font-heading font-extrabold text-3xl text-white mb-3">Join Our WhatsApp Community</h2>
          <p className="text-white/80 mb-8">Get real-time updates on events, volunteer calls, and Club news.</p>
          <Button href={siteInfo.social.whatsapp} variant="leaf" aria-label="Chat on WhatsApp"> 
            Chat on WhatsApp · {siteInfo.whatsapp}
          </Button>
        </div>
      </section>
    </>
  )
}

function Field({ label, children, error, full }) {
  return (
    <label className={`block text-sm font-semibold text-gray-700 ${full ? 'sm:col-span-2' : ''}`}>
      {label}
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-red-600 font-normal mt-1 block">{error.message}</span>}
    </label>
  )
}
