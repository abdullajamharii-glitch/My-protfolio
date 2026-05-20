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
    key_features: 'Direct Beach Access Booking, Beachfront Infinity Pool Showcase, Premium Jacuzzi Room Details, Event and Wedding Hall Booking Info, Fully Responsive Layout, Smooth Transitions & Micro-interactions',
    image_url: '/assets/rajav_beach_resort.png',
    image_urls: ['/assets/rajav_beach_resort.png'],
  },
  {
    id: 'al-beraimi-cafeteria',
    title: 'Al Beraimi Cafeteria',
    description: 'The official web presence for Al Beraimi Cafeteria, Sharjah\'s beloved food destination serving the legendary OG Shawaya, shawarma, burgers, fresh juices, and authentic Arabic meals since 1994. The website allows users to browse their popular menu items, check operating hours (open daily 11 AM - 4 AM), find the nearest branches (Al Jubail and Al Qasimia), read customer reviews, and order directly via WhatsApp or delivery platforms.',
    live_url: 'https://albiraimi.netlify.app/',
    github_url: null,
    technologies: 'Next.js, React, Tailwind CSS, Framer Motion, Lucide Icons, WhatsApp Integration, SEO Optimization',
    key_features: 'Interactive Menu Showcase, Direct WhatsApp Order Integration, Multi-branch Locations Map, Delivery Platform Links (Talabat, Zomato, Deliveroo, Noon), Custom Reviews Section, Fast-loading and SEO-Optimized Pages',
    image_url: '/assets/al_beraimi_cafeteria.png',
    image_urls: ['/assets/al_beraimi_cafeteria.png'],
  }
]
