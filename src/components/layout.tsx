import type React from "react"
import { Background } from "./background"
import { Navbar } from "./nav"

interface CosmosLayoutProps {
  children?: React.ReactNode
}

export function CosmosLayout({ children }: CosmosLayoutProps) {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-black via-blue-900 to-black-950">
      <Background />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

