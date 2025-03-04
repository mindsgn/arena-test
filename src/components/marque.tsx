import type React from "react"
import Marquee from "react-fast-marquee";

interface MarqueeItem {
  text: string
  icon?: React.ReactNode
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
}

export function InfiniteMarquee({ items, direction = "left", speed = "normal" }: InfiniteMarqueeProps) {
  // Duplicate items to create the infinite effect
  const duplicatedItems = [...items, ...items];

  let actualSpeed = 50;

  if (speed === "slow") {
    actualSpeed = 30;
  }

  if (speed === "fast") {
    actualSpeed = 80;
  }

  return (
       <Marquee direction={direction} speed={actualSpeed}>
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-white mx-4">
              {item.icon && <span>{item.icon}</span>}
              <span>{item.text}</span>
            </div>
          ))}
        </Marquee>
  );
}