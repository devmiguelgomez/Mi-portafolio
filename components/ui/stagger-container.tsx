"use client"

import type { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
