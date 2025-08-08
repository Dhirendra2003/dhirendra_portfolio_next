"use client"

import React from "react"
import VanillaTilt from "vanilla-tilt"

type TiltProps = {
  children: React.ReactNode
  className?: string
  options?: Partial<VanillaTilt.VanillaTiltSettings>
}

export function Tilt({ children, className = "", options }: TiltProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (!ref.current) return
    const opts: VanillaTilt.VanillaTiltSettings = {
      max: 12,
      speed: 800,
      glare: false,
      "max-glare": 0.18,
      scale: 1.1,
      gyroscope: true,
      ...options,
    }
    VanillaTilt.init(ref.current, opts)
    return () => {
      ref.current?.vanillaTilt?.destroy()
    }
  }, [options])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

Tilt.defaultProps = {
  className: "",
  options: undefined,
}
