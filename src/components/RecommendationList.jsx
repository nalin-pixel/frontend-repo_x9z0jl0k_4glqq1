import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RecommendationCard from './RecommendationCard'

const RecommendationList = ({ routes }) => {
  return (
    <div className="space-y-3">
      <AnimatePresence initial={false}>
        {routes.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
          >
            <RecommendationCard route={r} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default RecommendationList
