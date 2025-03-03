import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6">
      <div className="flex items-center">
        <Link href="/" className="text-white font-medium text-xl tracking-wider">
          <span className="flex items-center font-bold">
            BLOCK MONEY
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link href="#products">Products</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#developers">Developers</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#resources">Resources</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#contact">Contact</Link>
        </Button>
      </div>

      <Button variant="outline" asChild>
        <Link href="https://ibc.fun" className="flex items-center">
          GET STARTED <span className="ml-1">→</span>
        </Link>
      </Button>
    </nav>
  )
}

