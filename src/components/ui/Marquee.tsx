import React from 'react'

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
}

export function Marquee({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  // Clean class concatenation
  const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(' ')

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "flex-col animate-marquee-vertical"
                : "flex-row animate-marquee",
              reverse ? "reverse-anim" : "",
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            )}
            style={{
              animationDirection: reverse ? 'reverse' : 'normal'
            }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
