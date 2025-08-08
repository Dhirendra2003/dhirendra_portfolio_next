import React from 'react'
import { Badge } from "@/components/ui/badge"
import { TechCard } from '@/app/page'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
// import { data } from "@/lib/data"

const Skills = ({data}) => {
  return (
    <section id="skills" className="container text-white mx-auto px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Skills & Tools</h2>
            <p className="text-white">I love expressive UIs, robust APIs, and clean architecture.</p>
          </div>
          <Badge variant="secondary" className="h-12 w-64 text-rose-500 text-lg bg-white font-black uppercase">
            <b>8+ months experience</b></Badge>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechCard title="Languages / Core" list={data.skills.languages} />
          <TechCard title="Full‑Stack" list={data.skills.fullstack} />
          <TechCard title="Tools / Libraries" list={data.skills.tools} />
          <TechCard title="Databases" list={data.skills.databases} />
          <TechCard title="Familiar With" list={data.skills.familiar} />
          <Card className="bg-white/[0.03] border-white/10">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-medium">M.C.A., Sinhagad Institutes</div>
                <div className="text-sm text-white">7.81 CGPA • 2023–2025</div>
              </div>
              <div>
                <div className="font-medium">B.Sc.(CS), MMCC Pune</div>
                <div className="text-sm text-white">8.02 CGPA • 2020–2023</div>
              </div>
              <Separator className="my-2 opacity-20" />
              <div className="text-sm">Certifications: Google UI/UX Fundamentals, SQL & RDBMS, Data Viz, MS-Excel</div>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs mt-3 ">UI cards implemented with shadcn/ui Card for consistent styling and accessibility [^1].</p>
      </section>
  )
}

export default Skills