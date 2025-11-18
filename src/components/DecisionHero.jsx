import React from 'react'
import { motion } from 'framer-motion'
import DecisionInputBox from './DecisionInputBox'

const DecisionHero = ({ onSubmit, loading }) => {
  return (
    <div className="flex items-center justify-center pt-24 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-[#e5e7eb]">¿Qué quieres encontrar hoy?</h1>
        <p className="mt-3 text-base md:text-lg text-[#9ca3af]">
          Describe qué necesitas, tu presupuesto y qué te preocupa más.
        </p>
        <div className="mt-6">
          <DecisionInputBox onSubmit={onSubmit} loading={loading} />
        </div>
      </motion.div>
    </div>
  )
}

export default DecisionHero
