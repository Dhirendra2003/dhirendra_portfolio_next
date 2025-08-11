import React from 'react'

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "ANALYSED.IN",
      position: "React Native Developer Intern",
      duration: "MAR, 2024 - MAY, 2024 (3 Months)",
      description: "Developed React Native app- SEVAHUB (Available on the Play Store with 10,000+ downloads) at ANALYSED, integrating web platforms, enhancing UI/UX with Figma , FAST(python) API integration & collaborating via GitHub . ",
      icon: "/av.jpeg",
      iconLink: "https://www.linkedin.com/company/analysed-in/"
    },
    {
      id: 2,
      company: "Webwide IT solutions",
      position: "Full stack MERN developer & UI designer",
      duration: "NOV, 2024 - APR, 2025 (5 Months)",
      description: "Worked as a Full Stack MERN Developer Intern at Webwide IT Solutions, developing Web applications with React, Node JS, Express, MongoDB/SQL . Contributed to UI/UX design using Figma , built React Native apps , and managed code collaboration with GitHub and implementing REST APIs .",
      icon: "/ww.png",
      iconLink: "https://www.linkedin.com/company/webwide-it-solutions/"
    },
    
  ]

  return (
    <section id="experience" className="py-16 text-white">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-6 group hover:bg-gradient-to-br from-neutral-700 to-black border-[2px] border-black hover:border-t-white/50 hover:border-l-white/50 p-4 rounded-2xl transition-all duration-800 ease-in-out ">
              {/* Icon */}
              <div>
                <a href={exp.iconLink} target="_blank">
              <div className={`bg-white w-20 h-20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 `}>
                <img src={exp.icon} alt={exp.company} className="w-full h-full rounded-xl p-1" />
              </div>
              </a>
              <div className='w-[1px] h-3/4 bg-gradient-to-b from-white to-black shadow-[0px_0px_35px_rgba(255,255,255,1)] mx-auto my-2'></div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-3">
                  <a href={exp.iconLink} target="_blank">
                  <h3 className="text-xl font-bold text-violet-400 underline underline-offset-4 mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {exp.company}
                  </h3>
                  </a>
                  <p className="text-white font-medium  mb-2">
                    {exp.position}
                  </p>
                  <p className="text-md text-gray-400 uppercase tracking-wider">
                    {exp.duration}
                  </p>
                </div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience