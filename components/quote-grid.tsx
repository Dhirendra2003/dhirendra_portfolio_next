import Image  from 'next/image'
import { Button }  from './ui/button'
import { Download }  from 'lucide-react'
import { Poppins }  from 'next/font/google'

// Import a different font just for this component
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

function QuoteGrid() {
  return (
    <section id="quotes" className={` px-6 py-26 md:py-24 ${poppins.className} bg-black`}>
      <div className={` xs:py-44 flex flex-col place-content-center   text-left`}>
        <div className='w-[70%]  m-auto flex flex-col items-center   gap-4 rounded-2xl '>
          <div className='flex gap-4 xs:flex-wrap md:flex-nowrap xs:place-content-center  '>
            <div className='bg-star-blue text-rose-200 font-medium  p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl bg-gradient-to-br  from-rose-500 to-black rounded-tl-4xl overflow-hidden flex items-center justify-center'>
              <p className='md:text-2xl xs:text-xl p-4'>
                A passionate developer combining <br /> creativity and technical expertise <br /> to build dynamic and user-friendly digital experiences.
              </p>
            </div>
            <div className='flex flex-col '>
              {/* <Image alt='' width={240} height={60} src="/quotefont.webp" className='w-60 hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 ' /> */}
              <Image alt='' width={200} height={200} src="/swirl.png" className='w-48 mix-blend rotate-90 m-auto  hover:rotate-20 transition-all duration-500 ease-in-out hover:z-40 ' />
            </div>
            <div className='text-blue-200 bg-gradient-to-bl  from-blue-500 to-black  p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl rounded-tr-4xl overflow-hidden flex items-center justify-center'>
              <p className='text-xl  font-medium p-4'>  Developed web applications <br /> integrating dynamic content with REST APIs and MongoDB. <br />
                Creative Solutions: UI/UX prototyping, <br /> workflow automation, and cloud integrations
              </p>
            </div>
          </div>
          <div className='flex gap-4 xs:flex-wrap md:flex-nowrap '>
            <div className='bg-gradient-to-tr  from-purple-500 to to-black text-purple-200 md:text-2xl xs:text-xl p-3 font-medium hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl rounded-bl-4xl overflow-hidden flex items-center justify-center p-4'>
              "Coding isn't just solving problems; it's building solutions for tomorrow's challenges." <br />
              "Innovation thrives on curiosity and persistence."
              <br />
              Through design and code, I create experiences that connect people and ideas.
            </div>
            <div className='bg-gradient-to-br  from-black to-cyan-500 text-cyan-200 text-xl p-3 font-medium hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl rounded-br-4xl p-4' >
              <span className='md:text-2xl xs:text-xl '>#Interests</span> <br />
              Drawing <br />
              Calisthenics <br />
              Video Editing <br />

              <span className='md:text-2xl xs:text-xl'>#Achievements</span> <br />
              MIT Hackathon <br />
              Sports comp winner


            </div>
          </div>
        </div>


        <a href="https://drive.google.com/file/d/1TsxozR6M8wvBzsK5tNl6GVGsV1qafxTA/view?usp=drive_link" target='_blank' className="relative  items-center justify-start   font-bold   md:scale-100 xs:scale-75  group w-min text-nowrap m-auto mt-20">
          <Button asChild size="lg" className=" underline_hover bg-gradient-to-br  from-fuchsia-500 via-pink-500 to-amber-500 text-white shadow-lg hover:shadow-xl">
            <span>Download Resume <Download className='w-4 h-4 ml-2' /></span>
          </Button>
        </a>
      </div>
    </section>
  )
}

export default QuoteGrid
