import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="fglow" />
      <div className="finner">
        <div>
          <p className="fn">Bibelgemeinde Magdeburg</p>
          <p className="fc">Die Bibel, maßgebend fürs Leben</p>
        </div>
        <div className="flinks">
          <Link href="/datenschutz">Datenschutz</Link>
          <div className="fsep" />
          <Link href="/impressum">Impressum</Link>
        </div>
        <p className="fcopy">© 2026 Bibelgemeinde Magdeburg</p>
      </div>
    </footer>
  )
}
