export interface Project {
  id: string
  title: string
  description: string
  live_url: string | null
  github_url: string | null
  technologies: string
  key_features: string
  image_url: string
  image_urls: string[]
  g_business_rating?: string
  g_business_address?: string
  g_business_phone?: string
  g_business_map_url?: string
  g_business_desc?: string
  created_at?: string
  updated_at?: string
}

export const staticProjects: Project[] = [
  {
    id: 'rajav-beach-resort',
    title: 'Rajav Beach Resort',
    description: 'A premium, luxury beachfront resort website located at Cherai Beach in Kochi, Kerala. The website showcases the resort\'s direct beach access, stunning beachfront infinity pool, signature room categories (Jacuzzi Rooms, Premium Beach View Rooms), and event bookings. It features a modern, elegant design with smooth scrolling, beautiful animations, and full responsiveness to reflect the luxury experience of the destination.',
    live_url: 'https://www.rajavbeachresort.com',
    github_url: null,
    technologies: 'React, Next.js, Tailwind CSS, Framer Motion, TypeScript, Smooth Scroll',
    key_features: 'Premium Full Resort Website, Completely SEO Friendly & Optimized, Strong Backend Service for Bookings, Luxury Jacuzzi & Beachfront Infinity Pool Showcase, Seamless Event & Party Hall Reservation, Fully Responsive Modern UX Design',
    image_url: '/assets/rajav_beach_resort.png',
    image_urls: ['/assets/rajav_beach_resort.png'],
    g_business_rating: '4.5/5',
    g_business_address: '45RH+FF7, Cherai Beach - Munambam Rd, Cherai, Kochi, Kerala 683514, India',
    g_business_phone: '+91 80155 62576',
    g_business_map_url: 'https://maps.google.com/?q=Rajav+Beach+Resort+Cherai',
    g_business_desc: 'Popular beachfront resort in Cherai known for its infinity pool, luxury jacuzzi rooms, and direct access to Cherai Beach.'
  },
  {
    id: 'al-beraimi-cafeteria',
    title: 'Al Beraimi Cafeteria',
    description: 'The official web presence for Al Beraimi Cafeteria, Sharjah\'s beloved food destination serving the legendary OG Shawaya, shawarma, burgers, fresh juices, and authentic Arabic meals since 1994. The website allows users to browse their popular menu items, check operating hours (open daily 11 AM - 4 AM), find the nearest branches (Al Jubail and Al Qasimia), read customer reviews, and order directly via WhatsApp or delivery platforms.',
    live_url: 'https://albiraimi.netlify.app/',
    github_url: null,
    technologies: 'Next.js, React, Tailwind CSS, Framer Motion, Lucide Icons, WhatsApp Integration, SEO Optimization',
    key_features: 'Multi-Branch Restaurant Web Presence, Completely SEO Friendly & Locally Optimized, Direct WhatsApp Ordering API Integration, Seamless Talabat & Zomato Delivery Integrations, Late Night Operating Hours Status Checker (11 AM - 4 AM), Dynamic Food Menu Navigation & Category Filters',
    image_url: '/assets/al_beraimi_cafeteria.png',
    image_urls: ['/assets/al_beraimi_cafeteria.png'],
    g_business_rating: '4.3/5',
    g_business_address: '28, Qais Bin Abi Sa\'Asa\'Ah Street, Al Jubail, Al Qasimiah, Sharjah, United Arab Emirates',
    g_business_phone: '+971 6 569 1925',
    g_business_map_url: 'https://maps.google.com/?q=Al+Beraimi+Cafeteria+Sharjah',
    g_business_desc: 'Sharjah\'s famous late-night cafeteria serving authentic Arabic grilled chicken, shawarma, and fresh juices since 1994.'
  }
]
