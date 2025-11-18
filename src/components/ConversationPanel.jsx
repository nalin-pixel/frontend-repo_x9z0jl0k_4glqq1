import React, { useRef, useEffect } from 'react'
import DecisionInputBox from './DecisionInputBox'

const ConversationPanel = ({ messages, onSubmit, loading, error, onRetry }) => {
  const endRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
      {/* Error banner */}
      {error && (
        <div className="mb-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-200 px-3 py-2 text-sm flex items-center justify-between">
          <span>{error}</span>
          {onRetry && (
            <button onClick={onRetry} className="text-xs underline offset-2">Reintentar</button>
          )}
        </div>
      )}

      <div ref={listRef} className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`${
              m.role === 'user'
                ? 'bg-cyan-400/10 border-cyan-400/40'
                : 'bg-white/5 border-white/10'
            } border rounded-xl px-3 py-2 max-w-[90%] text-sm`}> 
              {m.role !== 'user' && (
                <div className="text-[10px] uppercase tracking-wide text-white/60 mb-1">Robot</div>
              )}
              <div className="leading-relaxed whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="mt-4">
        <DecisionInputBox onSubmit={onSubmit} loading={loading} compact label={null} />
      </div>
    </div>
  )}

export default ConversationPanel
