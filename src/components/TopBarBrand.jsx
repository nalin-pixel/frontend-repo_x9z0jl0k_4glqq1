import React from 'react'
import { motion } from 'framer-motion'
import { Dock } from '@/components/ui/dock-two'
import { Info, User, Globe2, Moon } from 'lucide-react'

const TopBarBrand = () => {
  const items = [
    { icon: Info, label: 'Acerca', onClick: () => alert('EVERCONN mini · prototipo de decisiones guiadas') },
    { icon: User, label: 'Cuenta', onClick: () => alert('Abrir panel de cuenta (demo)') },
    { icon: Globe2, label: 'Idioma', onClick: () => alert('Cambiar idioma (demo)') },
    { icon: Moon, label: 'Tema', onClick: () => document.documentElement.classList.toggle('dark') },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-30"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-xl border border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="h-14 flex items-center justify-between px-3">
            <span className="font-semibold tracking-wide text-lg md:text-xl font-['Space_Grotesk',Inter,sans-serif]">
              EVERCONN mini
            </span>
            <Dock items={items} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TopBarBrand
