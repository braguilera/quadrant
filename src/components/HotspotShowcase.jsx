"use client"

import InteractiveHotspot from "./InteractiveHotspot"

export default function HotspotShowcase({ imageUrl, imageAlt, hotspots, className = "" }) {
    return (
        <div className={`relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl ${className}`}>
            <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />

            {hotspots.map((hotspot, index) => (
                <InteractiveHotspot
                    key={index}
                    title={hotspot.title}
                    description={hotspot.description}
                    position={hotspot.position}
                    direction={hotspot.direction || "top-right"}
                    delay={hotspot.delay || index * 0.5}
                />
            ))}
        </div>
    )
}