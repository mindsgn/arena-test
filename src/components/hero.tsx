"use client"
import {motion} from "motion/react"
import { useStore } from "@/store"

export function Hero() {
  const {ready} = useStore()

  return (
    <div  className="flex md:flex-col-reverse  items-center justify-center px-6 md:px-12 pt-16 md:pt-24 pb-16 min-h-[80vh]">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-700 from-sky-500">Seamless, Safe</span>
          <br />
            CRYPTO
        </h1>

        <div className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          <p className="mb-4">BLOCK MONEY encrypts evevry transaction, sheilding your sensative asset information from public view. With read-only view keys, you remain compliant and in control</p>
        </div>
      </motion.div>
    </div>
  )
}

