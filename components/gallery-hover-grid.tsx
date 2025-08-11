"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Tilt } from "@/components/tilt"

export type GalleryItem = {
  id: number | string
  src: string
  alt: string
}

type Props = {
  items: GalleryItem[]
  defaultCols?: { base: number; md: number; lg: number }
}

export function GalleryHoverGrid({ items, defaultCols = { base: 2, md: 4, lg: 6 } }: Props) {
  const [hovered, setHovered] = React.useState<number | string | null>(null)
  const [cols, setCols] = React.useState(defaultCols.lg)

  // Responsive columns definition
  React.useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth
      if (w < 640) setCols(defaultCols.base)
      else if (w < 1024) setCols(defaultCols.md)
      else setCols(defaultCols.lg)
    }
    setByWidth()
    window.addEventListener("resize", setByWidth)
    return () => window.removeEventListener("resize", setByWidth)
  }, [defaultCols])

  const isNeighbor = React.useCallback(
    (i: number) => {
      if (hovered === null) return false
      const h = typeof hovered === "number" ? hovered : parseInt(String(hovered), 10)
      const up = h - cols
      const down = h + cols
      const left = h % cols !== 0 ? h - 1 : -1
      const right = (h + 1) % cols !== 0 ? h + 1 : -1
      return i === up || i === down || i === left || i === right
    },
    [hovered, cols]
  )

  return (
    <div
      className="grid gap-16"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
      role="grid"
      aria-label="Interactive Gallery Grid"
    >
      {items.map((it, idx) => {
        const isH = hovered === idx
        const neighbor = isNeighbor(idx)
        return (
          <div
            key={it.id}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative aspect-[4/2] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-800",
              isH && "z-10 scale-[1.08] shadow-2xl shadow-fuchsia-500/20",
              neighbor && "scale-[1.03]"
            )}
          >
            <Tilt options={{ max: 10, glare: true, "max-glare": 0.2, scale: 1.01, reverse: true, perspective: 600 }}  className="w-full h-full flex justify-center items-center parallax">
              <Image
                src={it.src || "/placeholder.svg"}
                alt={it.alt}
                fill
                className={cn(
                  "object-cover transition-transform duration-800 ",
                  isH ? "scale-110" : "scale-100"
                )}
                sizes="(max-width: 1024px) 33vw, 16vw"
              />
              <h1 className="absolute inner-element mt-[20%] text-white rounded-lg bg-black/70 px-2  text-xl font-medium">{it.desc || "Description"}</h1>
            </Tilt>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-white/[0.02]" />
          </div>
        )
      })}
    </div>
  )
}

GalleryHoverGrid.defaultProps = {
  defaultCols: { base: 2, md: 4, lg: 6 },
}
