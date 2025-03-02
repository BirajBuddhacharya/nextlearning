'use client';
import { Slider } from "@/components/ui/slider"
import { useState } from 'react'
import { ColorSlider } from "@/components/ui/color-slider"
import DraggableDiv from "@/components/DraggableDiv";

export default function Home() {
  const [redValue, setRedValue] = useState(0)
  const [blueValue, setBlueValue] = useState(0)
  const [greenValue, setGreenValue] = useState(0)

  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[50%] flex flex-col gap-4">
        <div>
          <span className="text-red-500">red</span>
          <ColorSlider
            defaultValue={[50]}
            max={255}
            step={1}
            onValueChange={(value) => setRedValue(value[0])}
            trackColor="bg-red-100"
            rangeColor="bg-red-500"
            thumbColor="bg-red-500"
          />
        </div>
        <div>
          <span className="text-blue-500">blue</span>
          <ColorSlider
            defaultValue={[33]}
            max={255}
            step={1}
            onValueChange={(value) => setBlueValue(value[0])}
            trackColor="bg-blue-100"
            rangeColor="bg-blue-500"
            thumbColor="bg-blue-500"
          />
        </div>
        <div>
          <span className="text-green-500">green</span>
          <ColorSlider
            defaultValue={[33]}
            max={255}
            step={1}
            onValueChange={(value) => setGreenValue(value[0])}
            trackColor="bg-green-100"
            rangeColor="bg-green-500"
            thumbColor="bg-green-500"
          />
        </div>
        <DraggableDiv rgbStr={`rgb(${redValue}, 0, 0)`} />
        <DraggableDiv rgbStr={`rgb(0, ${greenValue}, 0)`} />
        <DraggableDiv rgbStr={`rgb(0, 0, ${blueValue})`} />
      </div>
    </div>
  )
}