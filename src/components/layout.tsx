import type React from "react"
import { useEffect } from "react"
import { Background } from "./background"
import { Navbar } from "./nav"
import { useStore } from "@/store"
import {LoadingScreen} from "@/components/loading"
import { motion } from "motion/react"

interface CosmosLayoutProps {
  children?: React.ReactNode
}

export function CosmosLayout({ children }: CosmosLayoutProps) {
    const {setReady, ready} = useStore();

    useEffect(() => {
      const timer = setTimeout(() => {
        setReady()
      }, 2500)

      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-black via-blue-900 to-black-950">
        <LoadingScreen />
        <Background />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Navbar />
          {children}
        </motion.div>
      </div>
    )
}

