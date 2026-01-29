"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface CountryMarker {
  id: string
  name: string
  nameJa: string
  href: string
  x: number
  y: number
  direction: "left" | "right" // PC / Default direction
  mobileDirection?: "left" | "right" // Mobile override
}

const countries: CountryMarker[] = [
  {
    id: "canada",
    name: "Toronto",
    nameJa: "トロント",
    href: "https://toronto-info.vercel.app/",
    x: 82,
    y: 39,
    direction: "right", // PC: Right
    mobileDirection: "left", // Mobile: Left
  },
  {
    id: "thailand",
    name: "Thailand",
    nameJa: "タイ",
    href: "/thailand",
    x: 35,
    y: 58,
    direction: "left", // Left
    // No mobile override -> same as direction
  },
  {
    id: "philippines",
    name: "Philippines",
    nameJa: "フィリピン",
    href: "/philippines",
    x: 41,
    y: 59,
    direction: "right",
  },
  {
    id: "uk",
    name: "United Kingdom",
    nameJa: "イギリス",
    href: "/uk",
    x: 8,
    y: 34,
    direction: "right",
  },
  {
    id: "australia",
    name: "Australia",
    nameJa: "オーストラリア",
    href: "/australia",
    x: 45,
    y: 77,
    direction: "right",
  },
]

export function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <div className="relative w-full">
      {/* World Map Image */}
      <Image
        src="/images/World_Map.png"
        alt="World Map"
        width={2784}
        height={1536}
        className="w-full h-auto"
        priority
      />

      {/* Country Markers (Callout Style) */}
      {countries.map((country) => {
        const mobDir = country.mobileDirection || country.direction
        const pcDir = country.direction

        // Resolve classes based on direction
        // These functions are kept as they are used to dynamically generate classes
        // based on the country's direction properties, which are not static.
        // To ensure Tailwind JIT detection, all possible classes are listed.
        const baseClasses = {
          right: "left-2 right-auto flex-row origin-left",
          left: "right-2 left-auto flex-row-reverse origin-right",
        }
        const mdClasses = {
          right: "md:left-2 md:right-auto md:flex-row md:origin-left",
          left: "md:right-2 md:left-auto md:flex-row-reverse md:origin-right",
        }

        return (
          <Link
            key={country.id}
            href={country.href}
            className="absolute z-10 group"
            style={{
              left: `${country.x}%`,
              top: `${country.y}%`,
            }}
            onMouseEnter={() => setHoveredCountry(country.id)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            {/* Container for Dot, Line, and Label */}
            <div className="relative flex items-center justify-center">

              {/* 1. The Dot (Anchored at center) */}
              <div className="relative w-3 h-3 md:w-4 md:h-4 z-20">
                <span className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-75" />
                <span className="absolute inset-0 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
              </div>

              {/* 2. The Line & Label Group */}
              <div
                className={`absolute flex items-center transition-all duration-300 group-hover:scale-110 
                ${baseClasses[mobDir]} 
                ${mdClasses[pcDir]}
              `}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {/* Connecting Line */}
                <div
                  className="w-8 md:w-16 h-[3px] bg-black shadow-sm origin-center"
                />

                {/* Label */}
                <div
                  className={`
                  whitespace-nowrap px-3 py-1 md:px-5 md:py-2 bg-white/90 backdrop-blur-sm 
                  border border-pink-200 shadow-lg rounded-full
                  text-xs md:text-xl font-bold text-pink-600
                  transition-all duration-300
                `}
                >
                  {country.nameJa}
                </div>
              </div>

            </div>
          </Link>
        )
      })}
    </div>
  )
}
