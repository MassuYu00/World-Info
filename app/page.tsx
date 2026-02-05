import { WorldMap } from "@/components/world-map"
import { SponsorSection } from "@/components/sponsor-section"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-2 md:p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src="/images/logo.png"
              alt="World Info Logo"
              width={80}
              height={80}
              className="w-12 h-12 md:w-20 md:h-20 object-contain"
            />
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-4xl font-bold text-foreground">
                World Info
              </h1>
              <span className="text-xs md:text-sm text-muted-foreground pt-1 md:pt-2">
                〜世界の掲示板〜
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-4 mr-36">
            <a href="/terms" className="text-sm text-black hover:text-gray-700 transition-colors">
              利用規約
            </a>
            <a href="/privacy" className="text-sm text-black hover:text-gray-700 transition-colors">
              プライバシーポリシー
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start md:justify-center min-h-screen px-4 pt-16 pb-12 md:py-16">


        {/* Map Container */}
        <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white mt-6">
          <WorldMap />
        </div>

        {/* Sponsor Section (Moved here) */}
        <div className="mt-4 w-full max-w-5xl">
          <SponsorSection />
        </div>
      </div>

    </main>
  )
}
