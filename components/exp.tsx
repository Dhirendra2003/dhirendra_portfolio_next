import React from 'react'

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Optimus AI Lab",
      position: "Mid-level Frontend Engineer",
      duration: "NOV 25, 2024 - JAN 8, 2025",
      description: "At Optimus, my work involves developing and maintaining dynamic user-centric applications and interfaces for top organizations and government agencies",
      icon: "🔗",
      iconBg: "bg-gray-700"
    },
    {
      id: 2,
      company: "Paydestal",
      position: "Frontend Developer",
      duration: "SEP 11, 2024 - PRESENT",
      durationColor: "text-green-400",
      description: "At Paydestal, my primary roles involve collaborating with a cross-functional team to develop new fintech products and interactive dashboards using React.js, integrating APIs to display business data and transactions analytics, as well as optimizing existing applications to improve user experience and ensure product compliance",
      icon: "💰",
      iconBg: "bg-yellow-600"
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
              <div className={`${exp.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-red-100`}>
                {exp.icon}
              </div>
              <div className='w-[1px] h-3/4 bg-gradient-to-b from-white to-black shadow-[0px_0px_35px_rgba(255,255,255,1)] mx-auto my-2'></div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <p className="text-gray-300 font-medium mb-2">
                    {exp.position}
                  </p>
                  <p className={`text-sm  ${exp.durationColor || 'text-gray-400'} uppercase tracking-wider`}>
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