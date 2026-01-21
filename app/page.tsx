import { WorldMap } from "@/components/world-map"
import { SponsorSection } from "@/components/sponsor-section"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src="/images/logo.png"
              alt="World Info Logo"
              width={80}
              height={80}
              className="w-12 h-12 md:w-20 md:h-20 object-contain"
            />
            <h1 className="text-xl md:text-4xl font-bold text-foreground">
              World Info
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start md:justify-center min-h-screen px-4 pt-24 pb-12 md:py-24">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            世界の掲示板へようこそ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            ボタンを押して掲示板を使う
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[90rem] aspect-[2/1] rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white">
          <WorldMap />
        </div>

        {/* Sponsor Section (Moved here) */}
        <div className="mt-4 w-full">
          <SponsorSection />
        </div>
      </div>

    </main>
  )
}
