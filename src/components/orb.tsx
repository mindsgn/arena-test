import type React from "react"
import { cn } from "@/lib/utils"

interface OrbitingOrbProps {
  position: string
  size: string
  color: string
  icon?: React.ReactNode
  opacity?: string
}

export function OrbitingOrb({ position, size, color, icon, opacity = "opacity-80" }: OrbitingOrbProps) {
  return (
    <div
      className={cn(
        `absolute ${position} ${size} rounded-full ${opacity} flex items-center justify-center z-10`,
        color,
      )}
    >
      {icon && <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">{icon}</div>}
    </div>
  )
}

