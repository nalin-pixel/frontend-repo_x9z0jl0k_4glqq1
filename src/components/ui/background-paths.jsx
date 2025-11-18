import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const paths = Array.from({ length: 12 }).map((_, i) => ({
  d: `M0 ${10 + i * 20} C 120 ${i * 12}, 240 ${i * 28}, 360 ${10 + i * 20}`,
  delay: i * 0.03,
}))

export default function BackgroundPaths({ title = 'EVERCONN mini', onCta }) {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 360 260" preserveAspectRatio="none" className="[&>path]:stroke-white/15">
          {paths.map((p, idx) => (
            <motion.path
              key={idx}
              d={p.d}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, delay: p.delay, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
              fill="none"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white"
        >
          {title}
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Entiende por qué decides, no solo qué compras.
        </p>
        <div className="mt-8 flex justify-center">
          <Button onClick={onCta}>Empezar a decidir</Button>
        </div>
      </div>
    </section>
  )
}
