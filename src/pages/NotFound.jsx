import { Leaf } from 'lucide-react'
import SEO from '../components/ui/SEO'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
        <Leaf className="w-14 h-14 text-forest mb-6" />
        <h1 className="font-heading font-extrabold text-3xl text-deepgreen mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for has wandered off — like a seedling that needs replanting.
        </p>
        <Button to="/" variant="primary">Back to Home</Button>
      </section>
    </>
  )
}
