'use client'

import { useState, useEffect, useRef, useCallback, DragEvent } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import styles from '../admin.module.css'

// ── Types ─────────────────────────────────────────────────────────────────────
interface Botschaft {
  id: string
  titel: string
  sprecher: string
  datum: string
  bibelstelle?: string
  beschreibung?: string
  audio_url?: string
  veroeffentlicht: boolean
  erstellt_am: string
  kategorie?: string
}

// ── Helper ────────────────────────────────────────────────────────────────────
function fmtDate(d: string) {
  if (!d) return '—'
  try {
    return new Date(d).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
  } catch {
    return d
  }
}

const labelSt: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  color: 'rgba(255,255,255,0.52)',
  marginBottom: '0.4rem',
  letterSpacing: '0.04em',
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const IcoGrid = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)
const IcoUpload = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
)
const IcoList = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <circle cx="3" cy="6" r="1" fill="currentColor" /><circle cx="3" cy="12" r="1" fill="currentColor" /><circle cx="3" cy="18" r="1" fill="currentColor" />
  </svg>
)
const IcoMic = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
  </svg>
)
const IcoGlobe = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)
const IcoSun = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)
const IcoUsers = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IcoTrash = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)
const IcoEdit = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const IcoCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const IcoUploadLarge = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="1.5">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
)

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
  return (
    <div style={{
      background: '#0e0e0e',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '18px',
      padding: '1.6rem 1.4rem',
    }}>
      <div style={{
        width: '44px', height: '44px',
        background: 'rgba(201,162,39,0.1)',
        border: '1px solid rgba(201,162,39,0.22)',
        borderRadius: '11px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#c9a227',
        marginBottom: '1.1rem',
      }}>{icon}</div>
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '2.6rem',
        fontWeight: 600,
        color: '#ffffff',
        lineHeight: 1,
        marginBottom: '0.35rem',
      }}>{value}</div>
      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.42)', letterSpacing: '0.03em' }}>{label}</div>
    </div>
  )
}

// ── Panel: Übersicht ──────────────────────────────────────────────────────────
function OverviewPanel({ botschaften }: { botschaften: Botschaft[] }) {
  const total = botschaften.length
  const live = botschaften.filter(b => b.veroeffentlicht === true).length
  const recent = botschaften.slice(0, 3)

  return (
    <div style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: '#fff', margin: '0 0 0.3rem' }}>
          Übersicht
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.42)', margin: 0, fontSize: '0.9rem' }}>
          Willkommen zurück, Bradley.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <StatCard icon={<IcoMic />} value={total} label="Botschaften gesamt" />
        <StatCard icon={<IcoGlobe />} value={live} label="Veröffentlicht" />
        <StatCard icon={<IcoSun />} value="So." label="Gottesdienst" />
        <StatCard icon={<IcoUsers />} value="2" label="Admins" />
      </div>

      {/* Recent Table */}
      <div style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '1.8rem' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#fff', margin: '0 0 1.3rem' }}>
          Letzte Botschaften
        </h3>
        {recent.length === 0 ? (
          <p style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.88rem' }}>Noch keine Botschaften vorhanden.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
              <thead>
                <tr>
                  {['Titel', 'Sprecher', 'Datum', 'Status'].map(h => (
                    <th key={h} style={{
                      textAlign: 'left', padding: '0.4rem 0.75rem',
                      fontSize: '0.69rem', letterSpacing: '0.09em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.32)', borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recent.map(b => (
                  <tr key={b.id} className={styles.tableRow}>
                    <td style={{ padding: '0.82rem 0.75rem', fontSize: '0.88rem', color: '#fff' }}>{b.titel}</td>
                    <td style={{ padding: '0.82rem 0.75rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)' }}>{b.sprecher}</td>
                    <td style={{ padding: '0.82rem 0.75rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>{fmtDate(b.datum)}</td>
                    <td style={{ padding: '0.82rem 0.75rem' }}>
                      <StatusBadge veroeffentlicht={b.veroeffentlicht} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Status Badge ──────────────────────────────────────────────────────────────
function StatusBadge({ veroeffentlicht }: { veroeffentlicht: boolean }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.18rem 0.6rem',
      borderRadius: '20px',
      fontSize: '0.7rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
      background: veroeffentlicht ? 'rgba(34,197,94,0.11)' : 'rgba(255,255,255,0.05)',
      color: veroeffentlicht ? '#4ade80' : 'rgba(255,255,255,0.42)',
      border: `1px solid ${veroeffentlicht ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.1)'}`,
    }}>
      {veroeffentlicht ? 'Live' : 'Entwurf'}
    </span>
  )
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function Toast({ message }: { message: string }) {
  return (
    <div style={{
      position: 'fixed', bottom: '2rem', right: '2rem',
      background: '#0e0e0e',
      border: '1px solid rgba(34,197,94,0.38)',
      borderRadius: '12px',
      padding: '0.9rem 1.4rem',
      display: 'flex', alignItems: 'center', gap: '0.7rem',
      zIndex: 9999,
      boxShadow: '0 8px 40px rgba(0,0,0,0.55)',
      animation: 'slideInToast 0.25s ease',
    }}>
      <div style={{
        width: '24px', height: '24px', borderRadius: '50%',
        background: 'rgba(34,197,94,0.14)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#4ade80', flexShrink: 0,
      }}>
        <IcoCheck />
      </div>
      <span style={{ color: '#fff', fontSize: '0.88rem', fontFamily: 'Outfit, sans-serif' }}>{message}</span>

      <style>{`
        @keyframes slideInToast {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

// ── Panel: Upload ─────────────────────────────────────────────────────────────
function UploadPanel({ onUploaded }: { onUploaded: () => void }) {
  const [titel, setTitel] = useState('')
  const [sprecher, setSprecher] = useState('Bradley McKenzie')
  const [datum, setDatum] = useState('')
  const [bibelstelle, setBibelstelle] = useState('')
  const [beschreibung, setBeschreibung] = useState('')
  const [kategorie, setKategorie] = useState<'Sonntag' | 'Mittwoch' | 'Sonderveranstaltung'>('Sonntag')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [toast, setToast] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const f = e.dataTransfer.files[0]
    if (f) setAudioFile(f)
  }

  const resetForm = () => {
    setTitel('')
    setSprecher('Bradley McKenzie')
    setDatum('')
    setBibelstelle('')
    setBeschreibung('')
    setKategorie('Sonntag')
    setAudioFile(null)
  }

  const handleSubmit = async (isDraft = false) => {
    if (!titel.trim() || !datum || !audioFile) {
      showToast('Bitte Titel, Datum und Audiodatei angeben.')
      return
    }
    setUploading(true)
    try {
      const fileName = `${Date.now()}-${audioFile.name.replace(/\s+/g, '-')}`

      console.log('[Upload] Starte Storage-Upload:', { bucket: 'Audio', fileName, type: audioFile.type, size: audioFile.size })

      const { data: uploadData, error: upErr } = await supabase.storage
        .from('Audio')
        .upload(fileName, audioFile, { contentType: audioFile.type })

      if (upErr) {
        console.error('[Upload] Storage-Fehler:', upErr)
        const msg = upErr.message || JSON.stringify(upErr)
        showToast(`Storage-Fehler: ${msg}`)
        return
      }

      console.log('[Upload] Storage erfolgreich:', uploadData)

      const { data: { publicUrl } } = supabase.storage.from('Audio').getPublicUrl(fileName)
      console.log('[Upload] Public URL:', publicUrl)

      const { error: dbErr } = await supabase.from('botschaften').insert({
        titel: titel.trim(),
        sprecher: sprecher.trim() || 'Bradley McKenzie',
        datum,
        bibelstelle: bibelstelle.trim(),
        beschreibung: beschreibung.trim(),
        audio_url: publicUrl,
        veroeffentlicht: !isDraft,
        kategorie,
      })

      if (dbErr) {
        console.error('[Upload] Datenbank-Fehler:', dbErr)
        showToast(`Datenbank-Fehler: ${dbErr.message}`)
        return
      }

      showToast(isDraft ? 'Entwurf wurde gespeichert!' : 'Botschaft wurde veröffentlicht!')
      resetForm()
      onUploaded()
    } catch (err: unknown) {
      console.error('[Upload] Unerwarteter Fehler:', err)
      const msg = err instanceof Error
        ? err.message
        : typeof err === 'object' && err !== null && 'message' in err
          ? String((err as Record<string, unknown>).message)
          : JSON.stringify(err)
      showToast(`Fehler: ${msg}`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: '#fff', margin: '0 0 0.3rem' }}>
          Botschaft hochladen
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.42)', margin: 0, fontSize: '0.9rem' }}>
          Neue Predigt veröffentlichen oder als Entwurf speichern.
        </p>
      </div>

      <div style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '1.8rem' }}>
        {/* 2-column grid (responsive via CSS module) */}
        <div className={styles.formGrid}>
          <div>
            <label style={labelSt}>Titel *</label>
            <input type="text" value={titel} onChange={e => setTitel(e.target.value)}
              placeholder="z. B. Glaube und Vertrauen" className={styles.input} />
          </div>
          <div>
            <label style={labelSt}>Sprecher</label>
            <input type="text" value={sprecher} onChange={e => setSprecher(e.target.value)}
              placeholder="Bradley McKenzie" className={styles.input} />
          </div>
          <div>
            <label style={labelSt}>Datum *</label>
            <input type="date" value={datum} onChange={e => setDatum(e.target.value)}
              className={styles.input} style={{ colorScheme: 'dark' }} />
          </div>
          <div>
            <label style={labelSt}>Bibelstelle</label>
            <input type="text" value={bibelstelle} onChange={e => setBibelstelle(e.target.value)}
              placeholder="z. B. Johannes 3,16" className={styles.input} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelSt}>Kategorie *</label>
            <select
              value={kategorie}
              onChange={e => setKategorie(e.target.value as 'Sonntag' | 'Mittwoch' | 'Sonderveranstaltung')}
              className={styles.input}
              style={{ cursor: 'pointer' }}
            >
              <option value="Sonntag">Sonntag</option>
              <option value="Mittwoch">Mittwoch</option>
              <option value="Sonderveranstaltung">Sonderveranstaltung / Sonstiges</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '1.4rem' }}>
          <label style={labelSt}>Beschreibung</label>
          <textarea value={beschreibung} onChange={e => setBeschreibung(e.target.value)}
            placeholder="Kurze Beschreibung der Botschaft…" className={styles.textarea} />
        </div>

        {/* Drop Zone */}
        <div style={{ marginBottom: '1.8rem' }}>
          <label style={labelSt}>Audiodatei *</label>
          <div
            className={`${styles.dropZone} ${isDragging ? styles.dropZoneActive : ''}`}
            onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
          >
            <input ref={fileRef} type="file" accept="audio/*" style={{ display: 'none' }}
              onChange={e => e.target.files?.[0] && setAudioFile(e.target.files[0])} />
            {audioFile ? (
              <div>
                <div style={{ color: '#c9a227', fontWeight: 500, fontSize: '0.92rem', marginBottom: '0.25rem' }}>
                  {audioFile.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)' }}>
                  {(audioFile.size / 1024 / 1024).toFixed(2)} MB – Klicken um zu ändern
                </div>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '0.6rem' }}><IcoUploadLarge /></div>
                <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  Audiodatei hier ablegen oder klicken
                </div>
                <div style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.78rem' }}>
                  MP3, M4A, WAV, OGG, AAC, FLAC – alle Formate
                </div>
              </>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          <button onClick={() => handleSubmit(false)} disabled={uploading} className={styles.btnGold}>
            {uploading ? 'Wird hochgeladen…' : 'Veröffentlichen'}
          </button>
          <button onClick={() => handleSubmit(true)} disabled={uploading} className={styles.btnGhost}>
            Als Entwurf speichern
          </button>
        </div>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  )
}

// ── Panel: Alle Botschaften ───────────────────────────────────────────────────
function MessagesPanel({ botschaften, onDelete }: { botschaften: Botschaft[]; onDelete: (id: string, audioUrl?: string) => void }) {
  return (
    <div style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 600, color: '#fff', margin: '0 0 0.3rem' }}>
          Alle Botschaften
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.42)', margin: 0, fontSize: '0.9rem' }}>
          {botschaften.length} {botschaften.length === 1 ? 'Botschaft' : 'Botschaften'} insgesamt
        </p>
      </div>

      <div style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '1.8rem', overflowX: 'auto' }}>
        {botschaften.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3.5rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', opacity: 0.2 }}>♪</div>
            <p style={{ color: 'rgba(255,255,255,0.3)', margin: 0, fontSize: '0.9rem' }}>
              Noch keine Botschaften vorhanden.
            </p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
            <thead>
              <tr>
                {['Titel', 'Sprecher', 'Datum', 'Kategorie', 'Status', 'Aktionen'].map(h => (
                  <th key={h} style={{
                    textAlign: 'left', padding: '0.4rem 0.75rem',
                    fontSize: '0.69rem', letterSpacing: '0.09em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.32)', borderBottom: '1px solid rgba(255,255,255,0.07)',
                    whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {botschaften.map(b => (
                <tr key={b.id} className={styles.tableRow}>
                  <td style={{ padding: '0.82rem 0.75rem', fontSize: '0.88rem', color: '#fff', maxWidth: '240px' }}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.titel}</div>
                  </td>
                  <td style={{ padding: '0.82rem 0.75rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>{b.sprecher}</td>
                  <td style={{ padding: '0.82rem 0.75rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>{fmtDate(b.datum)}</td>
                  <td style={{ padding: '0.82rem 0.75rem' }}>
                    <span style={{
                      display: 'inline-block', padding: '0.18rem 0.6rem', borderRadius: '20px',
                      fontSize: '0.7rem', fontWeight: 500,
                      background: b.kategorie === 'Sonntag' ? 'rgba(201,162,39,0.12)' : b.kategorie === 'Sonderveranstaltung' ? 'rgba(139,92,246,0.12)' : 'rgba(148,163,184,0.1)',
                      color: b.kategorie === 'Sonntag' ? '#c9a227' : b.kategorie === 'Sonderveranstaltung' ? '#a78bfa' : '#94a3b8',
                      border: `1px solid ${b.kategorie === 'Sonntag' ? 'rgba(201,162,39,0.3)' : b.kategorie === 'Sonderveranstaltung' ? 'rgba(139,92,246,0.3)' : 'rgba(148,163,184,0.2)'}`,
                    }}>{b.kategorie || '—'}</span>
                  </td>
                  <td style={{ padding: '0.82rem 0.75rem' }}><StatusBadge veroeffentlicht={b.veroeffentlicht} /></td>
                  <td style={{ padding: '0.82rem 0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      <button className={styles.editBtn} title="Bearbeiten"><IcoEdit /></button>
                      <button className={styles.deleteBtn} title="Löschen" onClick={() => onDelete(b.id, b.audio_url)}><IcoTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
type Panel = 'overview' | 'upload' | 'messages'

export default function Dashboard() {
  const router = useRouter()
  const [panel, setPanel] = useState<Panel>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [botschaften, setBotschaften] = useState<Botschaft[]>([])
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState('')

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }, [])

  const loadData = useCallback(async () => {
    const { data } = await supabase
      .from('botschaften')
      .select('*')
      .order('erstellt_am', { ascending: false })
    if (data) setBotschaften(data)
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push('/admin')
      } else {
        loadData().finally(() => setLoading(false))
      }
    })
  }, [router, loadData])

  const handleDelete = async (id: string, audioUrl?: string) => {
    if (!confirm('Botschaft wirklich löschen?')) return
    if (audioUrl) {
      const fileName = audioUrl.split('/').pop()
      if (fileName) {
        await supabase.storage.from('Audio').remove([fileName])
      }
    }
    const { error } = await supabase.from('botschaften').delete().eq('id', id)
    if (!error) {
      showToast('Botschaft wurde gelöscht.')
      await loadData()
    } else {
      showToast(`Fehler beim Löschen: ${error.message}`)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const navItems: { id: Panel; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Übersicht', icon: <IcoGrid /> },
    { id: 'upload', label: 'Botschaft hochladen', icon: <IcoUpload /> },
    { id: 'messages', label: 'Alle Botschaften', icon: <IcoList /> },
  ]

  const activePanelLabel = navItems.find(n => n.id === panel)?.label ?? 'Dashboard'

  const handleNavClick = (id: Panel) => {
    setPanel(id)
    setSidebarOpen(false)
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: '#080808',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Outfit, sans-serif',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="15" y="3" width="5" height="30" fill="#c9a227" rx="0.5" />
            <rect x="3" y="15" width="30" height="5" fill="#c9a227" rx="0.5" />
          </svg>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Laden…
          </span>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', fontFamily: 'Outfit, sans-serif' }}>

      {/* ── Mobile sidebar overlay ───────────────────────────────────────────── */}
      <div
        className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.sidebarOverlayVisible : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <aside
        className={`${styles.sidebarDrawer} ${sidebarOpen ? styles.sidebarDrawerOpen : ''}`}
        style={{
          width: '250px', flexShrink: 0,
          background: '#0e0e0e',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', flexDirection: 'column',
          position: 'sticky', top: 0, height: '100vh', overflowY: 'auto',
        }}
      >
        {/* Logo */}
        <div style={{ padding: '1.8rem 1.5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="13" y="3" width="4" height="24" fill="#c9a227" rx="0.5" />
              <rect x="4" y="12" width="22" height="4" fill="#c9a227" rx="0.5" />
            </svg>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                Bibelgemeinde
              </div>
              <div style={{ fontSize: '0.65rem', color: '#c9a227', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1 }}>
                Admin
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '1rem 0.75rem', flex: 1, overflowY: 'auto', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <button
            onClick={() => handleNavClick('overview')}
            className={`${styles.navBtn} ${panel === 'overview' ? styles.navBtnActive : ''}`}
          >
            <IcoGrid />
            Übersicht
          </button>
          <button
            onClick={() => handleNavClick('upload')}
            className={`${styles.navBtn} ${panel === 'upload' ? styles.navBtnActive : ''}`}
          >
            <IcoUpload />
            Botschaft hochladen
          </button>
          <button
            onClick={() => handleNavClick('messages')}
            className={`${styles.navBtn} ${panel === 'messages' ? styles.navBtnActive : ''}`}
          >
            <IcoList />
            Alle Botschaften
          </button>

          <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
            <a
              href="https://www.youtube.com/@bibelgemeindemagdeburge.v.1130"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.6rem 0.85rem', borderRadius: '10px',
                color: 'rgba(255,255,255,0.38)', fontSize: '0.82rem',
                textDecoration: 'none', transition: 'all 0.2s',
                fontFamily: 'Outfit, sans-serif',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,0,0,0.07)'
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ff4444'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.38)'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube Kanal
            </a>
          </div>
        </nav>

        {/* User Footer */}
        <div style={{ padding: '1rem 1.2rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.8rem' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #c9a227, #d4ac2f)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0,
            }}>B</div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: '0.82rem', color: '#fff', fontWeight: 500,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>Bradley McKenzie</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.38)' }}>Administrator</div>
            </div>
          </div>
          <button onClick={handleSignOut} className={styles.signOutBtn}>
            Abmelden
          </button>
        </div>
      </aside>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <main style={{ flex: 1, overflowY: 'auto', minWidth: 0 }}>
        {/* Mobile header bar */}
        <div className={styles.mobileHeader}>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setSidebarOpen(true)}
            aria-label="Menü öffnen"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className={styles.mobilePanelTitle}>{activePanelLabel}</span>
        </div>

        {panel === 'overview' && <OverviewPanel botschaften={botschaften} />}
        {panel === 'upload' && (
          <UploadPanel onUploaded={async () => { await loadData() }} />
        )}
        {panel === 'messages' && (
          <MessagesPanel botschaften={botschaften} onDelete={handleDelete} />
        )}
      </main>

      {/* ── Global Toast ────────────────────────────────────────────────────── */}
      {toast && <Toast message={toast} />}
    </div>
  )
}
