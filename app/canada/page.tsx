import Link from "next/link"
import { ArrowLeft, MapPin, Users, Building2, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CanadaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20fill%3D%22%23ffffff10%22%20d%3D%22M50%2010l5%2015h15l-12%2010%205%2015-13-10-13%2010%205-15-12-10h15z%22%2F%3E%3C%2Fsvg%3E')] bg-center bg-no-repeat bg-[length:200px]" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">カナダ</h1>
          <p className="text-xl md:text-2xl opacity-90">Canada</p>
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
            <p className="text-2xl font-bold text-foreground">オタワ</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">人口</h3>
            </div>
            <p className="text-2xl font-bold text-foreground">約3,800万人</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">主要都市</h3>
            </div>
            <p className="text-foreground">トロント、バンクーバー、モントリオール</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Snowflake className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">特徴</h3>
            </div>
            <p className="text-foreground">メープルシロップ、ナイアガラの滝</p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">カナダについて</h2>
          <p className="text-muted-foreground leading-relaxed">
            カナダは北アメリカ大陸の北部に位置する国で、世界で2番目に広い国土を持っています。
            英語とフランス語が公用語で、多文化主義を国の方針として掲げています。
            美しい自然、親切な国民性、そして高い生活水準で知られ、移民にも人気の国です。
            ロッキー山脈やナイアガラの滝など、壮大な自然景観が魅力です。
          </p>
        </div>
      </div>
    </main>
  )
}
