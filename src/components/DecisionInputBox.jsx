import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const DecisionInputBox = ({ onSubmit, compact = false, loading = false, label = 'Describe aquí lo que quieres encontrar' }) => {
  const [value, setValue] = useState('')
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto'
      textRef.current.style.height = textRef.current.scrollHeight + 'px'
    }
  }, [value])

  const handleSubmit = () => {
    const cleaned = value.trim()
    if (cleaned.length < 15) return
    onSubmit(cleaned)
    setValue('')
  }

  return (
    <div>
      {label && (
        <div className="text-sm text-[#9ca3af] mb-2">{label}</div>
      )}
      <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur ${compact ? 'p-3' : 'p-4 md:p-5'}`}>
        <textarea
          ref={textRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={compact ? 3 : 5}
          placeholder="Ejemplo: Quiero una laptop para arquitectura, que aguante renders, máximo 30 mil, y que no pese tanto."
          className="w-full resize-none bg-transparent outline-none text-[#e5e7eb] placeholder-[#9ca3af]"
          disabled={loading}
        />
        <div className="mt-3 flex justify-end">
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            onClick={handleSubmit}
            disabled={loading || value.trim().length < 15}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium text-sm transition-colors ${
              loading || value.trim().length < 15
                ? 'bg-cyan-600/40 text-white/60 cursor-not-allowed'
                : 'bg-cyan-400/90 hover:bg-cyan-400 text-black'
            }`}
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Analizar mi decisión
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default DecisionInputBox
