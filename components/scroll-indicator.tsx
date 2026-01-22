"use client"

import { useEffect, useState, memo } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export const ScrollIndicator = memo(function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)

      // Mostrar el indicador solo después de un poco de scroll
      setIsVisible(scrollPx > 50)
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${theme === "light" ? "bg-primary/70" : "bg-primary"} z-[60]`}
      style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  )
})
