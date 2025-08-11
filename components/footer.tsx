import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import { FooterLink } from '@/app/page'
import { Boxes, Github, Globe, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="footer" className=" px-6 py-16 md:py-12 bg-gradient-to-b from-white to-black ">
        <div className="rounded-2xl border border-white/10 p-6 md:p-10  text-black bg-spline ">
          <div className="text-2xl md:text-2xl font-semibold">Social Media:</div>
          <Separator className="my-4 opacity-30" />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <FooterLink icon={<Instagram className="size-5" />} label="Instagram" href="https://instagram.com" />
            <FooterLink icon={<Linkedin className="size-5" />} label="LinkedIn" href="https://www.linkedin.com/in/dhirendra-shinde-b9a826215" />
            <FooterLink icon={<Github className="size-5" />} label="Github" href="https://github.com/Dhirendra2003" />
            <FooterLink icon={<Twitter className="size-5" />} label="Twitter" href="https://x.com" />
            <FooterLink icon={<Boxes className="size-5" />} label="SketchFab" href="https://sketchfab.com" />
          </div>

          <div className="mt-10 text-2xl  font-semibold">Contact Me:</div>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-3 text-md ">
            <div className="inline-flex items-center gap-2">
              <Mail className="size-5" />
              <a href="mailto:shindedhirendra780@gmail.com" className="hover:underline text-lg">shindedhirendra780@gmail.com</a>
            </div>
            <div className="inline-flex items-center gap-2">
              <Phone className="size-5" />
              <a href="tel:+917507366162" className="hover:underline text-lg">+91 7507366162</a>
            </div>
            <div className="inline-flex items-center gap-2">
              <Globe className="size-5" />
              <a href="https://portfolio-react-psi-violet.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline text-lg">
                portfolio-react-psi-violet.vercel.app
              </a>
            </div>
          </div>

          <div className="mt-10 text-sm opacity-60">
            © {new Date().getFullYear()} Dhirendra Shinde. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer