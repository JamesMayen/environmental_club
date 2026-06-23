// Central content store for UJEC. Sourced from the Club's Constitution
// (Vision, Mission, Core Values, Objectives, Executive Committee roles)
// plus illustrative sample data for projects, gallery, blog, and partners
// that the club can replace with real records over time.

export const siteInfo = {
  name: 'Environmental Club',
  fullName: 'Environmental Club – University of Juba',
  shortName: 'UJEC',
  motto: 'Eco Action for a Greener South',
  affiliation: 'Department of Environmental Studies, University of Juba',
  email: 'info@ujec.org',
  phone: '+211 923 238 712',
  whatsapp: '+211 923 238 712',
  address: 'Department of Environmental Studies, University of Juba, Juba, South Sudan',
  social: {
    facebook: 'https://facebook.com/ujec',
    instagram: 'https://instagram.com/ujec',
    twitter: 'https://twitter.com/ujec',
    linkedin: 'https://linkedin.com/company/ujec',
    whatsapp: 'https://wa.me/+211 923 238 712',
  },
}

export const vision =
  "To be the foremost student-driven environmental movement in South Sudan — cultivating a generation of scientifically grounded, ethically motivated, and action-oriented environmental leaders who champion the sustainable management of South Sudan's natural resources for present and future generations."

export const mission = [
  'Promote environmental awareness, education, and advocacy among university students, staff, and the wider public.',
  'Empower members through practical environmental activities, research, skill development, and leadership opportunities.',
  'Engage communities in conservation efforts, sustainable livelihoods, and environmental governance.',
  'Collaborate strategically with governmental bodies, civil society organizations, academic institutions, and international partners.',
  'Foster a culture of environmental responsibility, critical inquiry, and civic action within the University of Juba and beyond.',
]

export const coreValues = [
  { title: 'Environmental Stewardship', desc: 'Every individual has a duty to protect, preserve, and restore the natural environment.', icon: 'Leaf' },
  { title: 'Scientific Integrity', desc: 'Advocacy and programs are grounded in sound evidence and rigorous research.', icon: 'Microscope' },
  { title: 'Inclusivity & Diversity', desc: 'Members from every discipline, background, and walk of life are welcome.', icon: 'Users' },
  { title: 'Youth Leadership', desc: 'Young people are active agents of change, not merely stakeholders.', icon: 'Sprout' },
  { title: 'Transparency & Accountability', desc: 'Affairs are conducted with openness, honesty, and accountability.', icon: 'ShieldCheck' },
  { title: 'Collaboration', desc: 'Effective environmental action requires alliances across sectors.', icon: 'Handshake' },
  { title: 'Sustainability', desc: 'The Club models sustainable practice in everything it does.', icon: 'Recycle' },
  { title: 'Community Service', desc: "Knowledge and resources are translated into tangible benefit for South Sudan's people.", icon: 'HeartHandshake' },
]

export const objectives = [
  'Organize and participate in environmental awareness campaigns, conservation activities, and ecological restoration projects.',
  "Conduct environmental research, field studies, and collaborative projects to grow South Sudan's environmental knowledge.",
  'Provide environmental education through workshops, training, seminars, and field excursions.',
  'Advocate for sound environmental policy at university and national level.',
  'Develop partnerships with ministries, NGOs, research institutions, and the private sector.',
  'Represent student environmental interests in university governance.',
  'Participate in national, regional, and international environmental forums and competitions.',
  'Mobilize financial, technical, and human resources transparently to support Club programs.',
]

export const challenges = [
  { title: 'Deforestation', desc: 'Unsustainable logging and land clearing are eroding forest cover across South Sudan.', icon: 'TreeDeciduous' },
  { title: 'Flooding', desc: 'Seasonal flooding along the Nile basin displaces communities and damages farmland.', icon: 'Waves' },
  { title: 'Climate Change', desc: 'Shifting rainfall patterns threaten food security and rural livelihoods.', icon: 'CloudRain' },
  { title: 'Waste Management', desc: 'Rapid urban growth in Juba has outpaced safe waste collection and disposal.', icon: 'Trash2' },
  { title: 'Biodiversity Loss', desc: "Pressure on wetlands and wildlife habitats endangers South Sudan's rich biodiversity.", icon: 'PawPrint' },
  { title: 'Land Degradation', desc: 'Overgrazing and poor land-use practices are reducing soil fertility nationwide.', icon: 'Mountain' },
]

export const impactStats = [
  { value: 50, suffix: '+', label: 'Trees Planted' },
  { value: 5, suffix: '+', label: 'Community Cleanups' },
  { value: 300, suffix: '+', label: 'Active Members' },
  { value: 15, suffix: '+', label: 'Awareness Campaigns' },
]

export const missionSnapshot = [
  { title: 'Environmental Education', desc: 'Promoting environmental awareness and sustainability knowledge.', icon: 'GraduationCap' },
  { title: 'Community Action', desc: 'Organizing cleanups, conservation projects, and outreach activities.', icon: 'Users2' },
  { title: 'Youth Leadership', desc: 'Developing future environmental leaders for South Sudan.', icon: 'Sprout' },
]

export const featuredActivities = [
  {
    slug: 'tree-planting-initiative',
    title: 'Tree Planting Initiative',
    date: 'Mar 2026',
    location: 'University of Juba Campus',
    summary: 'Annual tree planting activities aimed at restoring ecosystems and increasing green spaces across campus and surrounding communities.',
    category: 'Tree Planting',
  },
  {
    slug: 'world-environment-day-cleanup',
    title: 'World Environment Day Cleanup',
    date: 'Jun 2026',
    location: 'Juba Town',
    summary: 'A city-wide cleanup campaign marking World Environment Day, bringing together students, residents, and partner organizations.',
    category: 'Cleanups',
  },
  {
    slug: 'environmental-awareness-week',
    title: 'Environmental Awareness Week',
    date: 'Apr 2026',
    location: 'University of Juba',
    summary: 'A week of workshops, exhibitions, debates, and campaigns raising environmental literacy across the student body.',
    category: 'Workshops',
  },
  {
    slug: 'school-outreach-program',
    title: 'School Outreach Programs',
    date: 'Ongoing',
    location: 'Juba Secondary Schools',
    summary: 'Environmental education sessions bringing climate and conservation lessons directly into secondary school classrooms.',
    category: 'School Outreach',
  },
]

export const projects = [
  {
    slug: 'tree-planting-initiative',
    title: 'Tree Planting Initiative',
    date: 'March 2026',
    location: 'University of Juba Campus & Surrounding Communities',
    category: 'Tree Planting',
    description: 'Annual tree planting activities aimed at restoring ecosystems and increasing green spaces. Members and volunteers plant indigenous seedlings across campus grounds and partner communities, with each tree tracked and maintained through its first growing season.',
  },
  {
    slug: 'community-cleanup-campaigns',
    title: 'Community Cleanup Campaigns',
    date: 'Monthly',
    location: 'Juba Town & Surrounding Neighborhoods',
    category: 'Cleanups',
    description: 'Regular cleanup activities across communities and public spaces in Juba, reducing plastic waste and building habits of civic responsibility among residents and students alike.',
  },
  {
    slug: 'environmental-awareness-week',
    title: 'Environmental Awareness Week',
    date: 'April 2026',
    location: 'University of Juba',
    category: 'Workshops',
    description: 'A flagship week of workshops, exhibitions, debates, and awareness campaigns that brings environmental issues to the center of campus life.',
  },
  {
    slug: 'school-outreach-program',
    title: 'School Outreach Program',
    date: 'Ongoing — Termly',
    location: 'Secondary Schools in Juba',
    category: 'School Outreach',
    description: 'Environmental education sessions in schools, building partnerships with secondary institutions to promote environmental literacy among the next generation.',
  },
  {
    slug: 'field-research-expeditions',
    title: 'Field Research Expeditions',
    date: 'Twice Yearly',
    location: 'Wetlands, Forests & Protected Ecosystems',
    category: 'Research Activities',
    description: "Research visits to wetlands, forests, and protected ecosystems, contributing to South Sudan's body of environmental knowledge through field studies and data collection.",
  },
  {
    slug: 'environmental-mentorship-program',
    title: 'Environmental Mentorship Program',
    date: 'Year-round',
    location: 'University of Juba',
    category: 'Mentorship',
    description: 'Connecting students with experienced environmental professionals and researchers for guidance, internships, and career development.',
  },
]

export const galleryCategories = [
  'All',
  'Tree Planting',
  'Cleanups',
  'Workshops',
  'School Outreach',
  'Research Activities',
  'World Environment Day',
]

// Each gallery item references a category; image rendering uses an
// illustrative SVG placeholder component (see GalleryTile) until real
// photos are supplied by the Club.
export const galleryItems = Array.from({ length: 18 }).map((_, i) => {
  const cats = galleryCategories.slice(1)
  const category = cats[i % cats.length]
  return {
    id: i + 1,
    category,
    title: `${category} — Session ${Math.ceil((i + 1) / cats.length)}`,
  }
})

export const blogCategories = [
  'All',
  'Environmental News',
  'Club Updates',
  'Climate Change',
  'Conservation',
  'Success Stories',
]

export const blogPosts = [
  {
    slug: 'celebrating-world-environment-day',
    title: 'Celebrating World Environment Day in Juba',
    category: 'Club Updates',
    date: 'June 5, 2026',
    excerpt: 'Members and community partners came together for a city-wide cleanup and tree planting drive to mark World Environment Day.',
    featured: true,
  },
  {
    slug: 'why-tree-planting-matters',
    title: 'Why Tree Planting Matters in South Sudan',
    category: 'Conservation',
    date: 'May 18, 2026',
    excerpt: 'Forest cover loss is accelerating across the region — here is why every seedling planted by our members counts.',
  },
  {
    slug: 'student-leadership-for-environmental-change',
    title: 'Student Leadership for Environmental Change',
    category: 'Success Stories',
    date: 'April 30, 2026',
    excerpt: 'Meet the UJEC members turning classroom knowledge into real conservation outcomes across Juba.',
  },
  {
    slug: 'reducing-plastic-waste-in-juba',
    title: 'Reducing Plastic Waste in Juba',
    category: 'Environmental News',
    date: 'April 12, 2026',
    excerpt: 'A look at the growing plastic waste challenge in the capital, and what community-led cleanups can achieve.',
  },
  {
    slug: 'understanding-climate-impacts-on-the-nile-basin',
    title: 'Understanding Climate Impacts on the Nile Basin',
    category: 'Climate Change',
    date: 'March 22, 2026',
    excerpt: 'Shifting rainfall patterns are reshaping life along the Nile — our research team explains what the data shows.',
  },
  {
    slug: 'school-outreach-expands-to-three-new-campuses',
    title: 'School Outreach Expands to Three New Campuses',
    category: 'Club Updates',
    date: 'March 2, 2026',
    excerpt: 'Our school outreach program is growing, bringing environmental education to hundreds more secondary students.',
  },
]

export const leadership = [
{
id: 1,
name: 'Dongrin Ghum Majak',
position: 'President',
bio: 'Provides overall leadership and strategic direction for the Club. Represents the Club in official engagements, chairs Executive Committee meetings, and ensures the implementation of the Club’s vision, mission, and objectives.',
quote: 'Environmental protection begins with individual responsibility and collective action.',
image: '/images/leadership/president.jpeg',
email: '[president@ujec.org](mailto:president@ujec.org)',
linkedin: 'https://linkedin.com',
whatapp: 'https://whatsapp.com',
},

{
id: 2,
name: 'Position Open',
position: 'Vice President',
bio: 'Supports the President in overseeing Club operations and assumes presidential responsibilities when necessary. Coordinates internal leadership activities and strengthens member engagement.',
quote: 'A greener South Sudan starts with empowered young environmental leaders.',
image: '/images/leadership/vice-president.jpg',
email: '',
linkedin: '#',
},

{
id: 3,
name: 'Martin Guya Morris',
position: 'Secretary General',
bio: 'Responsible for maintaining Club records, preparing meeting minutes, managing correspondence, and ensuring proper administrative coordination.',
quote: 'Knowledge and action must work together to create lasting environmental impact.',
image: '/images/leadership/secretary.jpeg',
email: '',
linkedin: '#',
},

{
id: 4,
name: 'Position Open',
position: 'Assistant Secretary',
bio: 'Assists the Secretary General in administrative functions, documentation, communication, and record management.',
quote: 'Strong institutions are built on effective communication and organization.',
image: '/images/leadership/assistant-secretary.jpeg',
email: '',
linkedin: '#',
},

{
id: 5,
name: 'Position Open',
position: 'Treasurer',
bio: 'Manages Club finances, prepares budgets, maintains financial records, and ensures accountability in all financial transactions.',
quote: 'Transparency and accountability are essential for sustainable impact.',
image: '/images/leadership/treasurer.jpeg',
email: '',
linkedin: '#',
},

{
id: 6,
name: 'Position Open',
position: 'Director of Programs & Events',
bio: 'Leads the planning, coordination, and implementation of environmental programs, campaigns, events, and field activities.',
quote: 'Every successful environmental action begins with a well-planned initiative.',
image: '/images/leadership/programs-director.jpeg',
email: '',
linkedin: '#',
},

{
id: 7,
name: 'Position Open',
position: 'Director of Research & Publications',
bio: 'Coordinates environmental research activities, publications, reports, newsletters, and knowledge-sharing initiatives.',
quote: 'Research transforms environmental concerns into actionable solutions.',
image: '/images/leadership/research-director.jpeg',
email: '',
linkedin: '#',
},

{
id: 8,
name: 'Position Open',
position: 'Director of Publicity & Communications',
bio: 'Manages the Club’s public image, social media channels, media relations, and communication strategies.',
quote: 'Awareness is the first step toward environmental action.',
image: '/images/leadership/publicity-director.jpeg',
email: '',
linkedin: '#',
},

{
id: 9,
name: 'Position Open',
position: 'Director of Community Outreach & Partnerships',
bio: 'Builds partnerships with institutions, communities, NGOs, and stakeholders while leading outreach initiatives.',
quote: 'Collaboration multiplies environmental impact.',
image: '/images/leadership/outreach-director.jpeg',
email: '',
linkedin: '#',
},

{
id: 10,
name: 'Position Open',
position: 'Director of Membership & Welfare',
bio: 'Oversees member recruitment, engagement, welfare, retention, and capacity-building initiatives.',
quote: 'Strong communities are built through active participation and shared purpose.',
image: '/images/leadership/membership-director.jpeg',
email: '',
linkedin: '#',
},

{
id: 11,
name: 'Position Open',
position: 'Director of Gender & Inclusion',
bio: 'Promotes diversity, equity, inclusion, and equal participation in all Club activities and leadership opportunities.',
quote: 'Environmental sustainability requires inclusive leadership and diverse voices.',
image: '/images/leadership/gender-director.jpeg',
email: '',
linkedin: '#',
},
]


export const partners = [
  {
    name: 'University of Juba',
    logo: '/images/partners/uoj.png',
    category: 'Academic Institution',
    link: '#',
  },
  {
    name: 'Ministry of Environment and Forestry',
    logo: '/images/partners/ministry-environment.png',
    category: 'Government Partner',
    link: '#',
  },
  {
    name: 'South Sudan Wildlife Service',
    logo: '/images/partners/wildlife-service.png',
    category: 'Conservation Agency',
    link: '#',
  },
  {
    name: 'UNEP',
    logo: '/images/partners/unep.png',
    category: 'United Nations Agency',
    link: '#',
  },
  {
    name: 'UNDP',
    logo: '/images/partners/undp.png',
    category: 'Development Partner',
    link: '#',
  },
  {
    name: 'FAO',
    logo: '/images/partners/fao.png',
    category: 'UN Agency',
    link: '#',
  },
  {
    name: 'UNESCO',
    logo: '/images/partners/unesco.png',
    category: 'Education & Science Partner',
    link: '#',
  },
  {
    name: 'Local Environmental NGOs',
    logo: '/images/partners/ngo-placeholder.png',
    category: 'Community Partner',
    link: '#',
  },
]

export const donationImpact = [
  { amount: '$10', impact: '5 seedlings planted' },
  { amount: '$50', impact: 'Cleanup materials for one campaign' },
  { amount: '$100', impact: 'A full school outreach event' },
  { amount: '$500', impact: 'A community tree planting project' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/partners', label: 'Partners' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]
