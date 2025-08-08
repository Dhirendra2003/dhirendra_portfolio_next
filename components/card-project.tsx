import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface Card08Props {
  title?: string
  subtitle?: string
  image?: string
  project_link?: string
  orientation: 'left' | 'right'
  badge?: {
    text: string
    variant: "pink" | "indigo" | "orange"
  }
  href?: string
  project_detail: {
    languages: string
    tech_stack: string
    description: string
  }
}

const icons_array = {
  blender: "/lang_icons/blender.png",
  canva: "/lang_icons/canva.png",
  cloudinary: "/lang_icons/cloudinary.png",
  css3: "/lang_icons/CSS3.png",
  django: "/lang_icons/Django.png",
  docker: "/lang_icons/Docker.png",
  express: "/lang_icons/Express Js.png",
  figma: "/lang_icons/figma.png",
  framer: "/lang_icons/framer.png",
  html5: "/lang_icons/Html 5.png",
  javascript: "/lang_icons/JavaScript.png",
  jest: "/lang_icons/jest.png",
  mongodb: "/lang_icons/mongodb.png",
  mysql: "/lang_icons/MySQL Logo-1.png",
  neondb: "/lang_icons/neondb.png",
  nextjs: "/lang_icons/nextjs.png",
  nodejs: "/lang_icons/Node Js.png",
  postgresql: "/lang_icons/PostgreSQL.png",
  postman: "/lang_icons/postman.png",
  powerbi: "/lang_icons/powerbi.png",
  python: "/lang_icons/Python.png",
  react: "/lang_icons/React.png",
  shadcn: "/lang_icons/shadcn.png",
  stripe: "/lang_icons/Stripe.png",
  tableau: "/lang_icons/tableau.png",
  tailwind: "/lang_icons/tailwind.png",
  typescript: "/lang_icons/TypeScript.png",
  vercel: "/lang_icons/vercel.png"
};

export default function Card08({
  title = "Modern Design Systems",
  subtitle = "Explore the fundamentals of contemporary UI design",
  image = "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  badge = { text: "New", variant: "orange" },
  href = "https://linktr.ee/dhiru2003",
  orientation = 'left',
  project_detail = {
    languages: "TypeScript, JavaScript",
    tech_stack: "Next.js, Tailwind CSS",
    description: "A modern e-commerce platform built with the latest technologies.",
  },
}: Card08Props) {

  const stack_img_array=project_detail.tech_stack.split(",");
  console.log(stack_img_array);
  console.log(orientation)
  return (
    <div className={`w-full flex ${orientation === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center gap-10 justify-even`}>
    <Link href={href} target="_blank" className="block w-full max-w-[50%] group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-white/80 dark:bg-zinc-900/80",
          "backdrop-blur-xl",
          "border border-white border-[2px]",
          "shadow-xs",
          "transition-all duration-800",
          "hover:shadow-md",
          "hover:border-zinc-300/50 dark:hover:border-zinc-700/50",

        )}
      >
        <div className="relative   h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover    group-hover:scale-105 transition-all ease-in-out duration-800"
          />
        </div>

        <div className={cn("absolute inset-0", "bg-linear-to-t from-black/90 via-black/40 to-transparent")} />

        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-medium",
              "bg-white/90 text-zinc-800",
              "dark:bg-zinc-900/90 dark:text-zinc-200",
              "backdrop-blur-md",
              "shadow-xs",
              "border border-white/20 dark:border-zinc-800/50",
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug tracking-tighter">
                {title}
              </h3>
              <p className="text-sm text-zinc-200 dark:text-zinc-300 line-clamp-2 tracking-tight">{subtitle}</p>
            </div>
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-white/10 dark:bg-zinc-800/50",
                "group-hover:bg-white group-hover:scale-150",
                "backdrop-blur-md",
                " dark:group-hover:bg-zinc-700/50",
                "transition-all duration-800 group",
                "ease-in-out",

              )}
            >
              <ArrowUpRight className="w-4 h-4 text-white  group-hover:text-black  duration-800 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </Link>
    <div className="flex flex-col  gap-5 max-w-96 ">
      {/* project description : languages, techstack , description */}
      <p className={`text-2xl text-${orientation==="left" ? "left" : "right"}   text-zinc-200 dark:text-zinc-300  tracking-tight`}>
        <b>Languages:</b> {project_detail.languages}
      </p>
      <div className="flex flex-col">
      <p className={`text-2xl text-${orientation==="left" ? "left" : "right"}  text-zinc-200 dark:text-zinc-300  tracking-tight`}>
        <b>Tech Stack:</b> 
      </p>
      <div className={`flex flex-wrap gap-2 my-2 ml-${orientation === 'left' ? '0' : 'auto'}`}>
        {stack_img_array.map((tech) => (
          <div key={tech} className={`flex items-center mb-2`}>
            {icons_array[tech.trim()] && (
              <Image
                src={icons_array[tech.trim()]}
                alt={tech.trim()}
                width={50}
                height={50}
                className="mr-2 h-12 w-12 object-contain"
              />
            )}
          </div>
        ))}
      </div>
      </div>
      <p className={`text-2xl text-${orientation==="left" ? "left" : "right"}  text-zinc-200 dark:text-zinc-300  tracking-tight`}>
        <b>Description:</b> {project_detail.description}
      </p>
    </div>
    </div>
  )
}