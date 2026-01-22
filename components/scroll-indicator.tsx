"use client"

import { useEffect, useState, memo } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export const ScrollIndicator = memo(function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    // Inicializar el indicador
    updateScrollProgress()

    window.addEventListener("scroll", updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${theme === "light" ? "bg-primary/70" : "bg-primary"} z-[51]`}
      style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  )
})
