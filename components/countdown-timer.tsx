"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime()
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!timeLeft) {
    return (
      <div className="flex justify-center items-center gap-4 py-8">
        <div className="h-16 w-20 animate-pulse bg-muted rounded-lg" />
        <div className="h-16 w-20 animate-pulse bg-muted rounded-lg" />
        <div className="h-16 w-20 animate-pulse bg-muted rounded-lg" />
        <div className="h-16 w-20 animate-pulse bg-muted rounded-lg" />
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-lg px-4 py-3 min-w-[80px] text-center shadow-sm">
              <span className="text-3xl md:text-4xl font-bold tabular-nums">{unit.value}</span>
            </div>
            <span className="text-sm text-muted-foreground mt-2 font-medium">{unit.label}</span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl text-muted-foreground hidden sm:block" aria-hidden="true">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
