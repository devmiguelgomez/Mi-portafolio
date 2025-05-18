import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HighlightProps {
  children: ReactNode
  className?: string
  type?: "primary" | "secondary" | "gradient" | "bold"
}

export function Highlight({ children, className, type = "primary" }: HighlightProps) {
  const styles = {
    primary: "text-primary font-medium",
    secondary: "text-secondary-foreground font-medium",
    gradient: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 font-medium",
    bold: "font-bold",
  }

  return <span className={cn(styles[type], className)}>{children}</span>
}
