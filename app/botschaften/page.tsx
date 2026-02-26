import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { supabase } from '@/lib/supabase'
import BotschaftenClient from './BotschaftenClient'

export const revalidate = 60

export default async function BotschaftenPage() {
  const { data, error } = await supabase
    .from('botschaften')
    .select('id, titel, sprecher, datum, bibelstelle, beschreibung, audio_url, kategorie')
    .eq('veroeffentlicht', true)
    .order('datum', { ascending: false })

  if (error) console.error('[Botschaften] Fehler:', error)

  const botschaften = data ?? []

  return (
    <>
      <PageHero
        label="Predigten &amp; Botschaften"
        title="Botschaften"
        subtitle="Hören Sie Botschaften aus unserer Gemeinde – Gottes Wort klar und treu verkündigt."
      />

      <div className="sub-nav">
        <Link href="/">Start</Link>
        <span>›</span>
        <span className="current">Botschaften</span>
      </div>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="sinner">
          <BotschaftenClient botschaften={botschaften} />
        </div>
      </section>
    </>
  )
}
