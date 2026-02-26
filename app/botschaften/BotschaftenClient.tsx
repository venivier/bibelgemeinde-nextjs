'use client'

import { useState } from 'react'
import BotschaftItem, { type BotschaftData } from './BotschaftItem'

type Filter = 'alle' | 'Sonntag' | 'Mittwoch'

const tabs: { id: Filter; label: string }[] = [
  { id: 'alle', label: 'Alle' },
  { id: 'Sonntag', label: 'Sonntag' },
  { id: 'Mittwoch', label: 'Mittwoch' },
]

export default function BotschaftenClient({ botschaften }: { botschaften: BotschaftData[] }) {
  const [filter, setFilter] = useState<Filter>('alle')

  const filtered = filter === 'alle'
    ? botschaften
    : botschaften.filter(b => b.kategorie === filter)

  return (
    <>
      {/* ── Filter-Tabs ── */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {tabs.map(t => {
          const active = filter === t.id
          return (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              style={{
                padding: '0.52rem 1.3rem',
                borderRadius: '50px',
                border: active ? '1px solid rgba(201,162,39,0.5)' : '1px solid rgba(255,255,255,0.1)',
                background: active ? 'rgba(201,162,39,0.11)' : 'transparent',
                color: active ? '#c9a227' : 'rgba(255,255,255,0.48)',
                fontSize: '0.85rem',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: active ? 500 : 300,
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.03em',
              }}
            >{t.label}</button>
          )
        })}
      </div>

      {/* ── Karten ── */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'rgba(255,255,255,0.25)', fontFamily: 'Outfit, sans-serif' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', opacity: 0.3 }}>♪</div>
          <p style={{ fontSize: '0.9rem' }}>
            {filter === 'alle'
              ? 'Noch keine Botschaften vorhanden.'
              : `Noch keine ${filter}-Botschaften vorhanden.`}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.map(b => <BotschaftItem key={b.id} b={b} />)}
        </div>
      )}
    </>
  )
}
