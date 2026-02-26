'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import styles from '../admin.module.css'

const INVITE_CODE = 'BGM2026'

export default function AdminRegister() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (code !== INVITE_CODE) {
      setError('Ungültiger Einladungscode. Bitte wende dich an den Administrator.')
      return
    }

    if (password.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein.')
      return
    }

    setLoading(true)

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      router.push('/admin?registered=1')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#080808',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'Outfit, sans-serif',
      position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,162,39,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#0e0e0e',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '18px',
        padding: '2.5rem 2rem',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)',
      }}>

        {/* Cross SVG */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.4rem' }}>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
            <rect x="20" y="5" width="6" height="36" fill="#c9a227" rx="1" />
            <rect x="7" y="18" width="32" height="6" fill="#c9a227" rx="1" />
          </svg>
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '2rem',
          fontWeight: 600,
          color: '#ffffff',
          textAlign: 'center',
          margin: '0 0 0.2rem',
          letterSpacing: '0.01em',
        }}>Registrierung</h1>

        <p style={{
          color: 'rgba(255,255,255,0.4)',
          textAlign: 'center',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 1.5rem',
        }}>Bibelgemeinde Magdeburg</p>

        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.55), transparent)',
          marginBottom: '1.8rem',
        }} />

        {error && (
          <div style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.22)',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            color: '#f87171',
            fontSize: '0.855rem',
            marginBottom: '1.1rem',
            lineHeight: 1.5,
          }}>{error}</div>
        )}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelSt}>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Vor- und Nachname"
              className={styles.input}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelSt}>E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="name@gemeinde.de"
              className={styles.input}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelSt}>Passwort</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Mindestens 6 Zeichen"
              className={styles.input}
            />
          </div>

          <div style={{ marginBottom: '1.6rem' }}>
            <label style={labelSt}>Einladungscode</label>
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
              placeholder="Einladungscode eingeben"
              className={styles.input}
            />
          </div>

          <button type="submit" disabled={loading} className={styles.loginBtn}>
            {loading ? 'Konto wird erstellt…' : 'Konto erstellen'}
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: '1.4rem',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.35)',
        }}>
          Bereits registriert?{' '}
          <Link href="/admin" style={{ color: '#c9a227', textDecoration: 'none' }}>
            Anmelden
          </Link>
        </p>
      </div>
    </div>
  )
}

const labelSt: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  color: 'rgba(255,255,255,0.52)',
  marginBottom: '0.4rem',
  letterSpacing: '0.04em',
}
