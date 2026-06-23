import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = `${title} | UJEC — Environmental Club, University of Juba`
  const url = `https://www.ujec.org${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Environmental Club – University of Juba" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NGO',
          name: 'Environmental Club – University of Juba',
          alternateName: 'UJEC',
          url: 'https://www.ujec.org',
          slogan: 'Eco Action for a Greener South',
          parentOrganization: {
            '@type': 'CollegeOrUniversity',
            name: 'University of Juba',
          },
        })}
      </script>
    </Helmet>
  )
}
