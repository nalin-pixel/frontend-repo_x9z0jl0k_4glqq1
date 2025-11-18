import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function TextReveal({ text, className = '' }) {
  const words = useMemo(() => text.split(' '), [text])
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.2, 1])

  return (
    <section className={`relative py-32 ${className}`}>
      <div className="mx-auto max-w-4xl px-4">
        <motion.p style={{ opacity }} className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white/90">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.015 }}
              className="inline-block mr-2"
            >
              {w}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  )
}
