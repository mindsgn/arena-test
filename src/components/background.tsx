
import { useState, useEffect } from "react";
import { OrbitingOrb } from "./orb"
import Spline from '@splinetool/react-spline';
import { useStore } from '@/store';

export function Background() {
  const { setReady } = useStore()
  const [isClient, setIsClient] = useState(false);

   useEffect(() => {
    setIsClient(true);
    setReady();
  }, []);

  return (
    <div className="absolute inset-0 z-0 filter blur">
      <div>
        <div className="absolute top-[30%] right-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 opacity-70"></div>
        <div className="absolute bottom-[10%] right-[25%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-400 to-back opacity-70"></div>
      </div>

       {isClient && <Spline scene="https://prod.spline.design/EhYJshFr9ILMZiha/scene.splinecode" />}

      <OrbitingOrb
        position="top-[10%] left-[5%]"
        size="w-32 h-32 md:w-40 md:h-40"
        color="bg-gradient-to-br from-purple-700 to-purple-900"
      />

      <OrbitingOrb
        position="bottom-[20%] left-[20%]"
        size="w-36 h-36 md:w-48 md:h-48"
        color="bg-gradient-to-br from-purple-800 to-purple-950"
      />

      <OrbitingOrb
        position="top-[60%] right-[5%]"
        size="w-28 h-28 md:w-36 md:h-36"
        color="bg-gradient-to-br from-teal-300 to-teal-500"
        opacity="opacity-60"
      />
    </div>
  )
}