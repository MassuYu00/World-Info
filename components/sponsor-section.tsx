"use client"

import Link from "next/link"

interface Sponsor {
    id: string
    name: string
    href: string
    // Color placeholder for now since we don't have real images
    color: string
}

const sponsors: Sponsor[] = [
    {
        id: "sponsor-1",
        name: "Sponsor 1",
        href: "#",
        color: "bg-blue-100",
    },
    {
        id: "sponsor-2",
        name: "Sponsor 2",
        href: "#",
        color: "bg-green-100",
    },
    {
        id: "sponsor-3",
        name: "Sponsor 3",
        href: "#",
        color: "bg-purple-100",
    },
    {
        id: "sponsor-4",
        name: "Sponsor 4",
        href: "#",
        color: "bg-orange-100",
    },
]

export function SponsorSection() {
    return (
        <section className="w-full py-2 bg-muted/30 rounded-xl">
            <div className="max-w-7xl mx-auto px-4">

                {/* Grid Layout: 2 cols mobile, 4 cols desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {sponsors.map((sponsor) => (
                        <Link
                            key={sponsor.id}
                            href={sponsor.href}
                            className="group block relative overflow-hidden rounded-xl border border-border/50 transition-all hover:shadow-md hover:-translate-y-1"
                        >
                            {/* Aspect Ratio Box */}
                            <div className={`w-full aspect-video ${sponsor.color} flex items-center justify-center text-muted-foreground font-medium`}>
                                <span className="text-sm">Banner Space</span>
                            </div>

                            <div className="p-2 bg-background">
                                <p className="font-semibold text-sm truncate">{sponsor.name}</p>
                                <p className="text-xs text-muted-foreground mt-1">Check it out</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
