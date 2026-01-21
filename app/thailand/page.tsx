import Link from "next/link"
import { ArrowLeft, MapPin, Users, Building2, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThailandPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2220%22%20fill%3D%22%23ffffff10%22%2F%3E%3C%2Fsvg%3E')] bg-center bg-no-repeat bg-[length:150px]" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">タイ</h1>
          <p className="text-xl md:text-2xl opacity-90">Thailand</p>
        </div>

        {/* Back Button */}
        <Link href="/" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            地図に戻る
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">首都</h3>
            </div>
            <p className="text-2xl font-bold text-foreground">バンコク</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">人口</h3>
            </div>
            <p className="text-2xl font-bold text-foreground">約7,000万人</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">主要都市</h3>
            </div>
            <p className="text-foreground">バンコク、チェンマイ、プーケット</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">特徴</h3>
            </div>
            <p className="text-foreground">仏教寺院、タイ料理、ビーチリゾート</p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">タイについて</h2>
          <p className="text-muted-foreground leading-relaxed">
            タイは東南アジアに位置する王国で、「微笑みの国」として知られています。
            豊かな仏教文化、美しいビーチ、そして世界的に有名なタイ料理が魅力です。
            バンコクの壮大な寺院から、北部のチェンマイの山岳地帯、南部のリゾートアイランドまで、
            多様な観光スポットがあり、世界中から観光客が訪れます。
          </p>
        </div>
      </div>
    </main>
  )
}
