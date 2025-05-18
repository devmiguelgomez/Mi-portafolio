"use client"

import { useEffect, useState, memo } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export const CursorEffect = memo(function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Solo activar en dispositivos que no son táctiles
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

    if (!isTouchDevice) {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      }

      window.addEventListener("mousemove", updateMousePosition, { passive: true })

      return () => {
        window.removeEventListener("mousemove", updateMousePosition)
      }
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className={`fixed top-0 left-0 w-6 h-6 rounded-full ${
        theme === "light" ? "bg-primary/20" : "bg-primary/30"
      } pointer-events-none z-50 mix-blend-screen`}
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        x: { duration: 0.2, ease: "linear" },
        y: { duration: 0.2, ease: "linear" },
      }}
    />
  )
})
