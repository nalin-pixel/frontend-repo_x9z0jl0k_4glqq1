import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MainLayout = ({ left, right, show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto w-full max-w-6xl px-4 pt-28 pb-10 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-7 space-y-4">{left}</div>
          <div className="md:col-span-5 space-y-4">{right}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MainLayout
