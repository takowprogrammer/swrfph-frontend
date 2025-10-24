'use client'

import { Button } from "@/components/ui/button"
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuickAction {
    label: string
    icon: LucideIcon
    onClick: () => void
    variant?: 'default' | 'outline' | 'secondary'
}

interface QuickActionsProps {
    actions: QuickAction[]
    className?: string
    delay?: number
}

export function QuickActions({
    actions,
    className,
    delay = 0
}: QuickActionsProps) {
    return (
        <div className={cn("space-y-4", className)}>
            {actions.map((action, index) => (
                <div
                    key={action.label}
                    className="transform hover:scale-102 transition-transform duration-200"
                >
                    <Button
                        variant={action.variant || "outline"}
                        className="w-full justify-start text-base py-6 h-auto group relative overflow-hidden"
                        onClick={action.onClick}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <action.icon className="mr-3 h-5 w-5 group-hover:text-green-600 transition-colors relative z-10" />
                        <span className="relative z-10">{action.label}</span>
                    </Button>
                </div>
            ))}
        </div>
    )
}