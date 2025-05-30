"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { ChatBot } from "@/components/chatbot"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 z-10 bg-background rounded-full shadow-lg hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="w-[350px] sm:w-[400px]">
              <ChatBot />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="rounded-full shadow-lg"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chatear
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 