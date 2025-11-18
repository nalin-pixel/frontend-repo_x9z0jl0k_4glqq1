import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Dock({ items = [], className }) {
  return (
    <div className={cn('flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2 py-1 backdrop-blur', className)}>
      {items.map((it, idx) => (
        <motion.button
          key={idx}
          whileHover={{ y: -2, scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          onClick={it.onClick}
          className="relative rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white"
          title={it.label}
        >
          {it.icon && <it.icon className="h-4 w-4" />}
          <span className="sr-only">{it.label}</span>
        </motion.button>
      ))}
    </div>
  )
}
