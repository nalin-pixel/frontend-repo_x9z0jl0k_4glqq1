import React from 'react'

const AppShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#050B24] text-[#e5e7eb]">
      <div className="relative min-h-screen">
        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
        {children}
      </div>
    </div>
  )
}

export default AppShell
