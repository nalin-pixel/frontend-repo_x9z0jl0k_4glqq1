import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'

const StaticRobotPanel = ({ state = 'idle' }) => {
  const isLoading = state === 'loading'
  const statusText = isLoading ? 'Analizando tu decisión…' : 'Listo con nuevas rutas.'

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.02, 1], y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Minimal robot avatar */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-cyan-500/10 border border-cyan-400/30 shadow-[0_0_30px_rgba(56,189,248,0.25)] flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-400/40" />
          </div>
        </motion.div>

        <div className="mt-4 text-center">
          <div className="text-sm text-white/80">Asistente EVERCONN mini</div>
          <div className="text-xs text-white/60">Te ayudo a estructurar tu decisión.</div>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80">
          {isLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />}
          <span>{statusText}</span>
        </div>
      </div>
    </div>
  )
}

export default StaticRobotPanel
