import Card08, { type Card08Props } from "./card-project"

interface CardGrid {
  items: Card08Props[]
  gridTitle?: string
}

const collections: Card08Props[] = [
  {
    title: "Summer Dress Collection",
    subtitle: "Fit with the latest trends",
    image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
    project_link: "https://portfolio-react-psi-lime.vercel.app/",
    orientation: "left",
    badge: {
      text: "New",
      variant: "orange"
    },
    href: "https://portfolio-react-psi-lime.vercel.app/",
    project_detail: {
      languages: "JavaScript, CSS",
      tech_stack: "react, tailwind, gsap, framer",
      description: "My personal portfolio built with React, animations using GSAP and Framer Motion, fully responsive design."
    }
  },
  {
    title: "Autumn Essentials",
    subtitle: "Warm and cozy for the colder months",
    image: "https://assets.lummi.ai/assets/QmXFtkNH6GJy581VwChHZeQF6qfQM9bkLhF2kDh1px5qKB?auto=format&w=1500",
    project_link: "https://job-portal-mern-omega.vercel.app/",
    orientation: "right",
    badge: {
      text: "New",
      variant: "orange"
    },
    href: "https://job-portal-mern-omega.vercel.app/",
    project_detail: {
      languages: "JavaScript",
      tech_stack: "react, nodejs, express, mongodb, shadcn, cloudinary",
      description: "End-to-end job portal with search, apply, dark mode, resume upload, and live chat features."
    }
  },
  {
    title: "Winter Collection",
    subtitle: "Colorful for the festive season",
    image: "https://www.lummi.ai/api/pro/image/a06ede0d-63fb-4d99-be4c-9ba0840cf779?asset=original&cb=1nK52A&auto=format&w=1500",
    project_link: "https://bidbazaar.onrender.com/",
    orientation: "left",
    badge: {
      text: "New",
      variant: "orange"
    },
    href: "https://bidbazaar.onrender.com/",
    project_detail: {
      languages: "JavaScript, SQL",
      tech_stack: "react, nodejs, express, aws, websocket",
      description: "Live bidding application with real-time updates and AWS integration."
    }
  },
  {
    title: "Spring Accessories",
    subtitle: "Hidden treasures for the spring season",
    image: "https://assets.lummi.ai/assets/QmPdy3qFqQF8gDQ6KuuUrRaqez3cbdeaYw3GMrxBynLfGd?auto=format&w=1500",
    project_link: "https://paper-trade-front-end.vercel.app/",
    orientation: "right",
    badge: {
      text: "New",
      variant: "orange"
    },
    href: "https://paper-trade-front-end.vercel.app/",
    project_detail: {
      languages: "JavaScript",
      tech_stack: "react, nodejs, express, mongodb, yahoo finance api",
      description: "Practice trading application with live financial data and stock simulation."
    }
  },
  {
    title: "Holiday Special",
    subtitle: "Simple.",
    image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
    project_link: "https://github.com/Dhirendra2003/mini-e-commerce-django",
    orientation: "left",
    badge: {
      text: "New",
      variant: "orange"
    },
    href: "https://github.com/Dhirendra2003/mini-e-commerce-django",
    project_detail: {
      languages: "Python",
      tech_stack: "django, stripe, docker, neondb, backblaze s3",
      description: "Micro e-commerce platform for digital assets, integrated with Stripe for payments and S3 for media storage."
    }
  }
]


export default function CardGrid({ items = collections, gridTitle = "Collections 2025 - Summer" }: CardGrid) {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-zinc-500 dark:text-zinc-400">No items to display.</p>
      </div>
    )
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex gap-4 flex-col place-items-center">
          {items.map((item, index) => (
  <Card08
    key={`${item.href}-${item.title}-${index}`}
    orientation={index % 2 === 0 ? "left" : "right"}
    title={item.title}
    subtitle={item.subtitle}
    image={item.image}
    badge={item.badge}
    href={item.href}
    project_detail={item.project_detail} // Add this line to pass the project_detail prop
  />
))}
        </div>
      </div>
    </section>
  )
}
