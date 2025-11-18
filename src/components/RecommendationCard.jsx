import React from 'react'

const Badge = ({ children, variant = 'default' }) => {
  const styles = {
    default: 'bg-white/5 text-white/80 border-white/10',
    primary: 'bg-cyan-400/20 text-cyan-100 border-cyan-400/30',
    warn: 'bg-orange-400/20 text-orange-100 border-orange-400/30',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] border ${styles[variant]}`}>{children}</span>
  )
}

const RecommendationCard = ({ route }) => {
  const isPrimary = route.recommended
  const badgeVariant = isPrimary ? 'primary' : route.badge === 'Riesgo alto' ? 'warn' : 'default'

  return (
    <div className={`rounded-2xl border p-4 ${
      isPrimary ? 'border-cyan-400/40 bg-cyan-400/5' : 'border-white/10 bg-white/5'
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-white/70 mb-1">
            {isPrimary ? <Badge variant="primary">Ruta sugerida</Badge> : <Badge>{route.badge}</Badge>}
          </div>
          <h4 className="text-lg text-white font-medium">{route.title}</h4>
          <p className="text-sm text-white/70 mt-1">{route.summary}</p>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-white/80">
        {route.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-cyan-300">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecommendationCard
