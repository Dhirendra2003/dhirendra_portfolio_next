"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail, Phone, Globe, Instagram, Boxes, ExternalLink } from 'lucide-react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion"
import { Tilt } from "@/components/tilt"
import { ThreeScene } from "@/components/three-scene"
import { GalleryHoverGrid } from "@/components/gallery-hover-grid"
import "@/app/portfolio.css"
import { data } from "@/lib/data"
import Navbar from "@/components/navbar"
import Skills from "@/components/skills"
import CardGrid from "@/components/card-grid"
import WorkExperience from "@/components/exp"
import QuoteGrid from "@/components/quote-grid"
import Card08Props from "@/components/card-project"
import Footer from "@/components/footer"

const collections: Card08Props[] = [
  {
    title: "OLD -Personal Portfolio REACT JS",
    subtitle: "made with most fancy libraries",
    image: "/old_port.jpg",
    project_link: "https://portfolio-react-psi-violet.vercel.app/",
    orientation: "left",
    badge: {
      text: "Deployed",
      variant: "orange"
    },
    href: "https://portfolio-react-psi-violet.vercel.app/",
    project_detail: {
      languages: "JavaScript, CSS ,HTML ",
      tech_stack: "react, tailwind, gsap, framer ,vercel ,blender , canva",
      description: "My personal portfolio built with React, animations using GSAP and Framer Motion, fully responsive design Deployed with Vercel."
    }
  },
  {
    title: "Work Nest MERN",
    subtitle: "job portal with recruiter & applicant interfaces",
    image: "/jobPortal.webp",
    project_link: "https://job-portal-mern-omega.vercel.app/",
    orientation: "right",
    badge: {
      text: "Deployed",
      variant: "orange"
    },
    href: "https://job-portal-mern-omega.vercel.app/",
    project_detail: {
      languages: "JavaScript",
      tech_stack: "react, nodejs, express, mongodb,tailwind, shadcn, cloudinary,vercel",
      description: "End-to-end job portal with search, apply, dark mode, resume upload, and live chat features Deployed with Vercel."
    }
  },
  {
    title: "Bidbazaar ",
    subtitle: "Live Bidding application (accenture hackathon)",
    image: "/bidbazar.webp",
    project_link: "https://bidbazaar.onrender.com/",
    orientation: "left",
    badge: {
      text: "Deployed",
      variant: "orange"
    },
    href: "https://bidbazaar.onrender.com/",
    project_detail: {
      languages: "HTML, CSS, JavaScript, SQL",
      tech_stack: "react, nodejs, express, mysql, websocket ,shadcn , tailwind,vercel",
      description: "Live bidding application with real-time updates and AWS integration Deployed with Vercel."
    }
  },
  {
    title: "PaperTrade",
    subtitle: "Practice trading app made using MERN stack",
    image: "/paper trade.webp",
    project_link: "https://paper-trade-front-end.vercel.app/",
    orientation: "right",
    badge: {
      text: "Deployed ",
      variant: "orange"
    },
    href: "https://paper-trade-front-end.vercel.app/",
    project_detail: {
      languages: "HTML, CSS, JavaScript",
      tech_stack: "react, nodejs, express, mongodb,tailwind ,vercel ",
      description: "Practice trading application with live financial data and stock simulation."
    }
  },
  {
    title: "Micro E-commerce",
    subtitle: "A minimalistic e-commerce platform",
    image: "/mirco-ecom.jpg",
    project_link: "https://github.com/Dhirendra2003/mini-e-commerce-django",
    orientation: "left",
    badge: {
      text: "Github",
      variant: "orange"
    },
    href: "https://github.com/Dhirendra2003/mini-e-commerce-django",
    project_detail: {
      languages: "Python ,HTML, CSS",
      tech_stack: "python, django,html5 ,css3, stripe, docker, neondb, backblaze s3",
      description: "Micro e-commerce platform made with python-Django templates & NeonDB for digital assets, integrated with Stripe for payments, Backblaze S3 for media storage & Docker for containerization."
    }
  }
]

const descriptions = [
  'UI designs Collage', "wordpress website", "Classic 350 (Blender 3d)", "Chevrolet Camero (Blender 3d)", "Me in AI Ghibli style ", "Honda Civic Type-R (Blender 3d)", "Lykan Hypersport (Blender 3d)", "Ford Mustang 1967(Blender 3d)", "My Sketchfab Collection", "Low-poly Sunset Scene (Blender 3d)", "Volkswagen Van (Blender 3d)", "Yamaha R1 (Blender 3d)"
]

export default function Page() {
  // Track section in view to drive the cursor follower's morph/color
  const [activeSection, setActiveSection] = useState<string>("intro")

  useEffect(() => {
    const ids = ["intro", "skills", "experience", "gallery", "quotes", "footer"]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // // Scroll-driven background dark-to-light transition
  // const { scrollYProgress } = useScroll()
  // // Interpolate background lightness and text color
  // const bgLightness = useTransform(scrollYProgress, [0, 1], [6, 96]) // 6% -> 96% lightness
  // const textLightness = useTransform(scrollYProgress, [0, 1], [90, 10]) // text goes darker as bg lightens
  // const bgColor = useTransform(bgLightness, (l) => `hsl(240 10% ${l}%)`)
  // const textColor = useTransform(textLightness, (l) => `hsl(0 0% ${l}%)`)

  return (
    <>
      <main id="hero" className="relative min-h-[200vh] overflow-x-clip px-20 bg-gradient-to-b from-black to-black">
        {/* Scroll-reactive background layer */}
        <motion.div
          // style={{ backgroundColor: bgColor, color: textColor }}
          className="  text-white"
        />

        {/* Subtle gradient wash to create “section-wise getting lighter” feel
      <div className="fixed inset-0 -z-40 pointer-events-none portfolio-gradient-mask" aria-hidden="true" /> */}



        {/* NAV */}
        <Navbar />

        {/* HERO / INTRO */}
        <section id="intro" className=" text-white container mx-auto px-6 pt-6 md:pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs md:text-sm border bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
                <span className="size-2 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 animate-pulse" />
                Available for Full Time Roles
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
                Full-Stack Developer
                <br />
                <span className="text-gradient">UI Designer</span> crafting delight
              </h1>
              <p className="mt-4  md:text-xl text-white">
                I build dynamic and user-friendly digital experiences with MERN & Django  and expressive UI motion.
                <br /> Based in Pune, India.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className=" underline_hover bg-gradient-to-br from-fuchsia-600 via-pink-600 to-amber-500 text-white shadow-lg hover:shadow-xl">
                  <a href="/resume.pdf" download>Download Resume</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="  text-black underline_hover ">
                  <a href="https://linktr.ee/dhiru2003" target="_blank" rel="noreferrer">
                    Visit LinkTree  <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a href="https://github.com/Dhirendra2003" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="icon-link" />
                </a>
                <a href="https://www.linkedin.com/in/dhirendra-shinde-b9a826215" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="icon-link" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <Twitter className="icon-link" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram className="icon-link" />
                </a>
                <a href="https://sketchfab.com" target="_blank" rel="noreferrer" aria-label="Sketchfab">
                  <Boxes className="icon-link" />
                </a>
              </div>
            </div>

            {/* Portrait with Tilt and 3D backdrop */}
            <div className="relative h-[420px] md:h-[520px] lg:h-[600px]">
              <div className="absolute inset-0">
                <ThreeScene />
              </div>
              <div className="relative z-10 flex h-full items-end justify-center">
                <Tilt className="w-[70%] max-w-[360px]" options={{ reverse: true, perspective: 500 }}>
                  <div className="">
                    <Image
                      src="/snap emoji.webp"
                      alt="Dhirendra Shinde portrait placeholder"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    <div className="p-4">
                      <div className="font-semibold">Dhirendra Shinde</div>
                      <div className="text-sm text-neutral-300">Pune, India</div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <Skills data={data} />

        {/*WorkExperience   */}
        <section id="experience" className="container mx-auto px-6  md:py-4">
          <h3 className="text-2xl md:text-4xl text-white font-semibold mt-12">Hands-on Experience</h3>
          <WorkExperience />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="container mx-auto px-6  md:py-4">
          <h3 className="text-2xl md:text-4xl text-white font-semibold mt-12">Personal Projects</h3>
          <CardGrid items={collections} gridTitle="Collections 2025 - Summer" />
        </section>

        {/* INTERACTIVE GALLERY GRID */}
        <section id="gallery" className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Creations Gallery</h2>
            <p className="text-muted-foreground">Hover to see the magic</p>
          </div>
          <div className="mt-8">
            <GalleryHoverGrid
              items={Array.from({ length: 12 }).map((_, i) => ({
                id: i,
                src: `/gallery/${i + 1}.webp`,
                desc: descriptions[i],
                alt: `Showcase tile ${i + 1}`,
              }))}
              defaultCols={{ base: 2, md: 2, lg: 2 }}
            />
          </div>
        </section>
      </main>


      {/* QUOTES MOSAIC */}
     
        <QuoteGrid />
      


      {/* FOOTER */}
      <Footer />
    </>
  )
}

export function TechCard({ title, list }: { title: string; list: string[] }) {
  // Array of light pastel colors for badges
  const lightColors = [
    "border bg-neutral-800 border-blue-400 text-blue-400",
    "border bg-neutral-800 border-cyan-400 text-cyan-400",
    "border bg-neutral-800 border-green-400 text-green-400",
    "border bg-neutral-800 border-pink-400 text-pink-400",
    "border bg-neutral-800 border-purple-400 text-purple-400",
    "border bg-neutral-800 border-indigo-400 text-indigo-400",
    "border bg-neutral-800 border-teal-400 text-teal-400",
    "border bg-neutral-800 border-red-400 text-red-400",
    "border bg-neutral-800 border-sky-400 text-sky-400",
    "border bg-neutral-800 border-emerald-400 text-emerald-400",
    "border bg-neutral-800 border-violet-400 text-violet-400",
    "border bg-neutral-800 border-rose-400 text-rose-400",
    "border bg-neutral-800 border-fuchsia-400 text-fuchsia-400",
  ];

  return (
    <Card className="bg-white/[0.03] border-white/10 hover:bg-white/[0.05] transition-colors">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Selected items</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-4">
          {list.map((l, index) => (
            <li key={l}>
              <Badge variant="secondary" className={`${lightColors[index % lightColors.length]} border-1 hover:scale-110 transition-all ease-in-out duration-400 hover:px-3 cursor-pointer text-md`}>{l}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function FooterLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
      {icon}
      <span>{label}</span>
    </a>
  )
}
