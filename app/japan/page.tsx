import Link from "next/link"
import { ArrowLeft, MapPin, Users, Building2, Cherry } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JapanPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">日本</h1>
          <p className="text-xl md:text-2xl opacity-90">Japan</p>
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
            <p className="text-2xl font-bold text-foreground">東京</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">人口</h3>
            </div>
            <p className="text-2xl font-bold text-foreground">約1億2,500万人</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">主要都市</h3>
            </div>
            <p className="text-foreground">東京、大阪、京都、名古屋</p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Cherry className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">特徴</h3>
            </div>
            <p className="text-foreground">桜、富士山、寿司、アニメ</p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">日本について</h2>
          <p className="text-muted-foreground leading-relaxed">
            日本は東アジアに位置する島国で、四季折々の美しい自然と古くからの伝統文化が魅力です。
            最先端のテクノロジーと歴史的な神社仏閣が共存する独特の国です。
            和食は2013年にユネスコ無形文化遺産に登録され、世界中で愛されています。
            おもてなしの心と清潔さ、安全性は世界でも高く評価されています。
          </p>
        </div>
      </div>
    </main>
  )
}
