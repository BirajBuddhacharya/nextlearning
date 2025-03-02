import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const ColorSlider = React.forwardRef(({ 
  className, 
  trackColor = "bg-slate-200", 
  rangeColor = "bg-primary", 
  thumbColor = "bg-background", 
  ...props 
}, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className={cn("relative h-2 w-full grow overflow-hidden rounded-full", trackColor)}>
      <SliderPrimitive.Range className={cn("absolute h-full", rangeColor)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(
      "block h-5 w-5 rounded-full border-2", 
      `border-[${rangeColor.replace('bg-', '')}]`, 
      thumbColor, 
      "focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
    )} />
  </SliderPrimitive.Root>
))

ColorSlider.displayName = "ColorSlider"

export { ColorSlider }