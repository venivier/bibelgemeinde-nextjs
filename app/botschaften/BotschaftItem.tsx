'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

export interface BotschaftData {
  id: string
  titel: string
  sprecher: string
  datum: string
  bibelstelle?: string
  beschreibung?: string
  audio_url?: string
  kategorie?: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmtDate(d: string) {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
  } catch { return d }
}

function fmtTime(s: number) {
  if (!s || isNaN(s) || !isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const IcoPlay = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
)
const IcoPause = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="3" width="4" height="18" rx="1" /><rect x="15" y="3" width="4" height="18" rx="1" />
  </svg>
)
const IcoVolume = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
)
const IcoDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
const IcoClose = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ── Kategorie Badge ───────────────────────────────────────────────────────────
function KategorieBadge({ k }: { k?: string }) {
  const isSo = k === 'Sonntag'
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.18rem 0.65rem',
      borderRadius: '20px',
      fontSize: '0.68rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      background: isSo ? 'rgba(201,162,39,0.12)' : 'rgba(148,163,184,0.1)',
      color: isSo ? '#c9a227' : '#94a3b8',
      border: `1px solid ${isSo ? 'rgba(201,162,39,0.3)' : 'rgba(148,163,184,0.2)'}`,
    }}>{k || 'Botschaft'}</span>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function BotschaftItem({ b }: { b: BotschaftData }) {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const ensureAudio = useCallback(() => {
    if (!audioRef.current && b.audio_url) {
      const a = new Audio(b.audio_url)
      a.volume = volume
      a.onloadedmetadata = () => setDuration(a.duration)
      a.ontimeupdate = () => setCurrentTime(a.currentTime)
      a.onended = () => setPlaying(false)
      audioRef.current = a
    }
    return audioRef.current
  }, [b.audio_url]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => { audioRef.current?.pause() }, [])

  const handleOpen = () => { ensureAudio(); setOpen(true) }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    audioRef.current?.pause()
    setPlaying(false)
    setOpen(false)
  }

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    const a = ensureAudio()
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play().catch(() => setPlaying(false)); setPlaying(true) }
  }

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const t = Number(e.target.value)
    if (audioRef.current) audioRef.current.currentTime = t
    setCurrentTime(t)
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const v = Number(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  // Progress fill percentage for CSS
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const vol = volume * 100

  return (
    <div
      onClick={!open ? handleOpen : undefined}
      style={{
        background: '#0e0e0e',
        border: `1px solid ${open ? 'rgba(201,162,39,0.38)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '18px',
        padding: '1.6rem',
        cursor: open ? 'default' : 'pointer',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        boxShadow: open ? '0 0 32px rgba(201,162,39,0.06)' : 'none',
      }}
    >
      {/* ── Header: Badge + Datum ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
        <KategorieBadge k={b.kategorie} />
        <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.38)', fontFamily: 'Outfit, sans-serif' }}>
          {fmtDate(b.datum)}
        </span>
      </div>

      {/* ── Titel ── */}
      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.45rem',
        fontWeight: 600,
        color: '#fff',
        margin: '0 0 0.3rem',
        lineHeight: 1.2,
      }}>{b.titel}</h3>

      {/* ── Sprecher · Bibelstelle ── */}
      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.42)', margin: '0 0 1rem', fontFamily: 'Outfit, sans-serif' }}>
        {b.sprecher}
        {b.bibelstelle && (
          <> · <span style={{ color: 'rgba(201,162,39,0.65)' }}>{b.bibelstelle}</span></>
        )}
      </p>

      {/* ── Play button (player geschlossen) ── */}
      {!open && b.audio_url && (
        <button
          onClick={e => { e.stopPropagation(); handleOpen() }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1.15rem',
            background: 'rgba(201,162,39,0.1)',
            border: '1px solid rgba(201,162,39,0.28)',
            borderRadius: '50px',
            color: '#c9a227',
            fontSize: '0.8rem',
            fontFamily: 'Outfit, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,162,39,0.18)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,162,39,0.1)' }}
        >
          <IcoPlay size={13} /> Abspielen
        </button>
      )}

      {/* ── Audio Player ── */}
      {open && (
        <div style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>

          {/* Play/Pause + Fortschrittsbalken + Zeiten */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#c9a227',
                border: 'none', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#000', cursor: 'pointer',
                boxShadow: '0 0 18px rgba(201,162,39,0.4)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
            >
              {playing ? <IcoPause size={16} /> : <IcoPlay size={16} />}
            </button>

            {/* Progress + Time */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <input
                type="range" min={0} max={duration || 0} value={currentTime} step={0.5}
                onChange={seek} onClick={e => e.stopPropagation()}
                style={{
                  width: '100%', height: '4px', cursor: 'pointer', marginBottom: '0.3rem',
                  accentColor: '#c9a227',
                  background: `linear-gradient(to right, #c9a227 ${progress}%, rgba(255,255,255,0.12) ${progress}%)`,
                }}
                className="bgm-range"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(255,255,255,0.42)', fontFamily: 'Outfit, sans-serif' }}>
                <span>{fmtTime(currentTime)}</span>
                <span>{fmtTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Lautstärke + Download + Schließen */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>

            {/* Volume */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.4)' }}>
              <IcoVolume />
              <input
                type="range" min={0} max={1} step={0.05} value={volume}
                onChange={changeVolume} onClick={e => e.stopPropagation()}
                style={{
                  width: '72px', height: '3px', cursor: 'pointer',
                  accentColor: '#c9a227',
                  background: `linear-gradient(to right, #c9a227 ${vol}%, rgba(255,255,255,0.12) ${vol}%)`,
                }}
                className="bgm-range"
              />
            </div>

            <div style={{ flex: 1 }} />

            {/* Download */}
            {b.audio_url && (
              <a
                href={b.audio_url}
                download
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.38rem 0.85rem',
                  border: '1px solid rgba(255,255,255,0.13)',
                  borderRadius: '50px',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.76rem',
                  fontFamily: 'Outfit, sans-serif',
                  textDecoration: 'none',
                  transition: 'all 0.18s',
                }}
                onMouseEnter={e => { const a = e.currentTarget; a.style.borderColor = 'rgba(255,255,255,0.28)'; a.style.color = '#fff' }}
                onMouseLeave={e => { const a = e.currentTarget; a.style.borderColor = 'rgba(255,255,255,0.13)'; a.style.color = 'rgba(255,255,255,0.5)' }}
              >
                <IcoDownload /> Download
              </a>
            )}

            {/* Close */}
            <button
              onClick={handleClose}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '30px', height: '30px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%',
                background: 'transparent',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.28)'; b.style.color = '#fff' }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.borderColor = 'rgba(255,255,255,0.12)'; b.style.color = 'rgba(255,255,255,0.4)' }}
            >
              <IcoClose />
            </button>
          </div>
        </div>
      )}

      {/* Range input CSS */}
      <style>{`
        .bgm-range { -webkit-appearance: none; appearance: none; border-radius: 99px; outline: none; }
        .bgm-range::-webkit-slider-thumb {
          -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%;
          background: #c9a227; cursor: pointer; box-shadow: 0 0 6px rgba(201,162,39,0.5);
          transition: transform 0.15s;
        }
        .bgm-range::-webkit-slider-thumb:hover { transform: scale(1.25); }
        .bgm-range::-moz-range-thumb {
          width: 14px; height: 14px; border-radius: 50%;
          background: #c9a227; border: none; cursor: pointer;
        }
      `}</style>
    </div>
  )
}
