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
    <section id="quotes" className={`container mx-auto px-6 py-26 md:py-24 ${poppins.className}`}>
      <div className={` xs:py-44 flex flex-col place-content-center bg-white  text-left`}>
        <div className='w-[70%]  m-auto flex flex-col items-center   gap-4 rounded-2xl '>
          <div className='flex gap-4 xs:flex-wrap md:flex-nowrap xs:place-content-center  '>
            <div className='bg-star-blue text-rose-700 font-medium  p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl bg-gradient-to-br  from-rose-300 to-white rounded-tl-4xl overflow-hidden flex items-center justify-center'>
              <p className='md:text-2xl xs:text-xl p-4'>
                A passionate developer combining <br /> creativity and technical expertise <br /> to build dynamic and user-friendly digital experiences.
              </p>
            </div>
            <div className='flex flex-col '>
              {/* <Image alt='' width={240} height={60} src="/quotefont.webp" className='w-60 hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 ' /> */}
              <Image alt='' width={200} height={200} src="/swirl.png" className='w-48 mix-blend rotate-90 m-auto  hover:rotate-20 transition-all duration-500 ease-in-out hover:z-40 ' />
            </div>
            <div className='text-blue-600 bg-gradient-to-bl  from-blue-300 to-white  p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl rounded-tr-4xl overflow-hidden flex items-center justify-center'>
              <p className='text-xl  font-medium p-4'>  Developed web applications <br /> integrating dynamic content with REST APIs and MongoDB. <br />
                Creative Solutions: UI/UX prototyping, <br /> workflow automation, and cloud integrations
              </p>
            </div>
          </div>
          <div className='flex gap-4 xs:flex-wrap md:flex-nowrap '>
            <div className='bg-gradient-to-tr  from-purple-300 to to-white text-purple-600 md:text-2xl xs:text-xl p-3 font-medium hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl rounded-bl-4xl overflow-hidden flex items-center justify-center p-4'>
              "Coding isn't just solving problems; it's building solutions for tomorrow's challenges." <br />
              "Innovation thrives on curiosity and persistence."
              <br />
              Through design and code, I create experiences that connect people and ideas.
            </div>
            <div className='bg-gradient-to-br  from-white to-cyan-300 text-cyan-600 text-xl p-3 font-medium hover:scale-105 transition-all duration-500 ease-in-out hover:z-40 hover:shadow-xl rounded-br-4xl p-4' >
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


        <a href="https://drive.google.com/file/d/1Kagx7IFzGA2wNXmTzjtluhztTwBj_v56/view?usp=drive_link" target='blank' className="relative  items-center justify-start   font-bold   md:scale-100 xs:scale-75  group w-min text-nowrap m-auto mt-20">
          <Button asChild size="lg" className=" underline_hover bg-gradient-to-br  from-fuchsia-600 via-pink-600 to-amber-500 text-white shadow-lg hover:shadow-xl">
            <span>Download Resume <Download className='w-4 h-4 ml-2' /></span>
          </Button>
        </a>
      </div>
    </section>
  )
}

export default QuoteGrid
