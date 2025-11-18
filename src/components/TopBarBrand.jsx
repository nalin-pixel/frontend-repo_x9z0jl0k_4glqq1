import React from 'react'
import { motion } from 'framer-motion'

const TopBarBrand = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-30"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-xl border border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="h-14 flex items-center justify-center">
            <span className="font-semibold tracking-wide text-xl font-['Space_Grotesk',Inter,sans-serif]">
              EVERCONN mini
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TopBarBrand
