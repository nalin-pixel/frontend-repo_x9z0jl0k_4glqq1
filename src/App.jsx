import React, { useState } from 'react'
import AppShell from './components/AppShell'
import TopBarBrand from './components/TopBarBrand'
import DecisionHero from './components/DecisionHero'
import MainLayout from './components/MainLayout'
import ConversationPanel from './components/ConversationPanel'
import StaticRobotPanel from './components/StaticRobotPanel'
import RecommendationList from './components/RecommendationList'
import LoadingOverlay from './components/LoadingOverlay'
import BackgroundPaths from '@/components/ui/background-paths'
import TextReveal from '@/components/ui/text-reveal'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [routes, setRoutes] = useState([])
  const [error, setError] = useState('')

  const callAnalyze = async (text) => {
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/decision/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text })
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: 'Error' }))
        throw new Error(err.detail || 'Error analizando la decisión')
      }

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        { role: 'user', content: text },
        { role: 'assistant', content: data.robot_message }
      ])
      setRoutes(data.recommendations || [])
      setStarted(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const focusDecisionInput = () => {
    const el = document.querySelector('textarea')
    if (el) {
      el.focus()
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <AppShell>
      <TopBarBrand />

      {!started && (
        <>
          <DecisionHero onSubmit={callAnalyze} loading={loading} />
          <BackgroundPaths title="Entiende por qué decides" onCta={focusDecisionInput} />
          <TextReveal
            text={
              'EVERCONN mini te ayuda a entender por qué decides, no solo qué compras. No muestra catálogos. Escucha tu contexto, tu presupuesto y tus miedos, y devuelve rutas claras con lo que ganas y lo que sacrificas.'
            }
          />
        </>
      )}

      <MainLayout
        show={started}
        left={
          <ConversationPanel
            messages={messages}
            onSubmit={callAnalyze}
            loading={loading}
            error={error}
            onRetry={() => {
              if (messages.length > 0) {
                const lastUser = [...messages].reverse().find((m) => m.role === 'user')
                if (lastUser) callAnalyze(lastUser.content)
              }
            }}
          />
        }
        right={
          <div className="relative">
            <StaticRobotPanel state={loading ? 'loading' : 'ready'} />
            <div className="mt-3 relative">
              <LoadingOverlay visible={loading} />
              <RecommendationList routes={routes} />
            </div>
          </div>
        }
      />
    </AppShell>
  )
}

export default App
