import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { User, Code, Briefcase, Image, Quote, Mail, Puzzle } from 'lucide-react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'experience', 'projects', 'gallery', 'quotes', 'footer']
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're near the bottom of the page (within 100px)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('footer')
        return
      }

      // Set home as active when at top
      if (window.scrollY < 100) {
        setActiveSection('home')
        return
      }

      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          console.log(section, 'offsetTop:', offsetTop, 'height:', offsetHeight)
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
      console.log('Active section:', activeSection, 'Scroll position:', scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', href: '#hero', label: 'Home', icon: User },
    { id: 'skills', href: '#skills', label: 'Skills', icon: Code },
    { id: 'experience', href: '#experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', href: '#projects', label: 'Projects', icon: Puzzle },
    { id: 'gallery', href: '#gallery', label: 'Gallery', icon: Image },
    { id: 'quotes', href: '#quotes', label: 'Quotes', icon: Quote },
    { id: 'footer', href: '#footer', label: 'Contact', icon: Mail }
  ]

  return (
    <nav className="fixed -right-2 top-1/2 -translate-y-1/2 z-50 group">
      <div className="flex flex-col gap-3 p-4 rounded-l-2xl bg-neutral-600/30 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500 ease-in-out hover:bg-white/15 group-hover:min-w-[200px] min-w-[56px] overflow-w-0">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <div key={item.id} className="relative">
              {item.id === 'home' ? (
                <Link
                  href={item.href}
                  className={`flex   items-center gap-3 p-3 rounded-xl  transition-width ease-in-out duration-500 group/item whitespace-nowrap ${
                    isActive 
                      ? 'bg-white/20 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} className="min-w-[20px] flex-shrink-0" />
                  <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-width ease-in-out duration-200 transform translate-x-2 group-hover:translate-x-0 text-sm font-medium">
                    Dhirendra Shinde
                  </span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`flex items-center  gap-3 p-3 rounded-xl transition-width ease-in-out duration-500 group/item whitespace-nowrap ${
                    isActive 
                      ? 'bg-white/20 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  >
                  <Icon size={20} className="min-w-[20px] flex-shrink-0" />
                  <span className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-auto transition-width ease-in-out duration-200 transform translate-x-2 group-hover:translate-x-0 text-sm font-medium ">
                    {item.label}
                  </span>
                </a>
              )}
              
              {/* Active indicator dot */}
              <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full transition-all ease-in-out duration-500 ${
                isActive ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
              }`} />
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar