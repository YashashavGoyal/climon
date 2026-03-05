"use client"

import { cn } from "@/lib/utils"

interface GridLinesProps {
    className?: string
    horizontal?: number[] // Percentages for horizontal lines
    vertical?: number[] // Percentages for vertical lines
    intersections?: Array<{ x: number, y: number }> // Percentage pairs
}

export function GridLines({ className, horizontal = [0, 100], vertical = [0, 100], intersections = [] }: GridLinesProps) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
            {/* Horizontal Lines */}
            {horizontal.map((top) => (
                <div
                    key={`h-${top}`}
                    className="grid-line-h absolute left-0 right-0"
                    style={{ top: top === 100 ? 'calc(100% - 2px)' : `${top}%` }}
                />
            ))}

            {/* Vertical Lines */}
            {vertical.map((left) => (
                <div
                    key={`v-${left}`}
                    className="grid-line-v absolute top-0 bottom-0"
                    style={{ left: left === 100 ? 'calc(100% - 2px)' : `${left}%` }}
                />
            ))}

            {/* Intersections */}
            {intersections.map(({ x, y }, i) => (
                <div
                    key={`plus-${i}`}
                    className="grid-plus absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                />
            ))}
        </div>
    )
}
