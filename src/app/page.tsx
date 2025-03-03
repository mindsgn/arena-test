import { CosmosLayout } from "@/components/layout"
import { Hero } from "@/components/hero"
import { InfiniteMarquee } from "@/components/marque"
import { Atom, Cpu, Database, Globe, Server, Zap, Shield } from "lucide-react"

export default function CosmosLanding() {
  const marqueeItems = [
    { text: "Interchain", icon: <Globe className="w-5 h-5" /> },
    { text: "Scalable", icon: <Zap className="w-5 h-5" /> },
    { text: "Secure", icon: <Shield className="w-5 h-5" /> },
    { text: "Modular", icon: <Cpu className="w-5 h-5" /> },
    { text: "Decentralized", icon: <Server className="w-5 h-5" /> },
    { text: "Efficient", icon: <Atom className="w-5 h-5" /> },
    { text: "Flexible", icon: <Database className="w-5 h-5" /> },
  ]

  return (
    <CosmosLayout>
      <Hero />
      <InfiniteMarquee 
       items={marqueeItems}
       direction="left"
       speed="normal"
      />
    </CosmosLayout>
  )
}

