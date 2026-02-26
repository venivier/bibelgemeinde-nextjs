import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Bibelgemeinde Magdeburg',
}

export default function DatenschutzPage() {
  return (
    <section className="section" style={{ paddingTop: '10rem' }}>
      <div className="sinner">
        <span className="slabel">Rechtliches</span>
        <h2 className="stitle" style={{ marginBottom: '2.5rem' }}>Datenschutzerklärung</h2>
        <div className="prose">

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>
              1. Datenschutz auf einen Blick
            </h3>
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>
              Allgemeine Hinweise
            </h4>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>
              Datenerfassung auf dieser Website
            </h4>
            <p><strong style={{ color: 'rgba(255,255,255,.7)' }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <p style={{ marginTop: '1rem' }}><strong style={{ color: 'rgba(255,255,255,.7)' }}>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p style={{ marginTop: '.5rem' }}>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
            <p style={{ marginTop: '1rem' }}><strong style={{ color: 'rgba(255,255,255,.7)' }}>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
            <p style={{ marginTop: '1rem' }}><strong style={{ color: 'rgba(255,255,255,.7)' }}>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            <p style={{ marginTop: '.5rem' }}>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".</p>
          </div>

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>2. Hosting</h3>
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>Externes Hosting</h4>
            <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p style={{ marginTop: '.5rem' }}>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
            <p style={{ marginTop: '.5rem' }}>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
          </div>

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>3. Allgemeine Hinweise und Pflichtinformationen</h3>
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>Datenschutz</h4>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p style={{ marginTop: '.5rem' }}>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
            <p style={{ marginTop: '.5rem' }}>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>Hinweis zur verantwortlichen Stelle</h4>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p style={{ marginTop: '.5rem' }}>Bibelgemeinde Magdeburg e.V.<br />Maxim-Gorki-Straße 31<br />39108 Magdeburg</p>
            <p style={{ marginTop: '.5rem' }}>Telefon: 039204 63903<br />E-Mail: info@bibelgemeinde-magdeburg.de</p>
            <p style={{ marginTop: '.5rem' }}>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
            <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>SSL- bzw. TLS-Verschlüsselung</h4>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
          </div>

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>4. Datenerfassung auf dieser Website</h3>
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>Cookies</h4>
            <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
            <p style={{ marginTop: '.5rem' }}>Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>Server-Log-Dateien</h4>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
            <p style={{ marginTop: '.5rem' }}>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>

            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', margin: '1.5rem 0 .8rem' }}>Anfrage per E-Mail oder Telefon</h4>
            <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </div>

          <div className="prose-section">
            <h3 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>5. Plugins und Tools</h3>
            <h4 style={{ color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>Google Maps (mit Einwilligung)</h4>
            <p>Diese Website nutzt über eine API den Kartendienst Google Maps. Anbieterin ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
            <p style={{ marginTop: '.5rem' }}>Um den Datenschutz auf dieser Website zu gewährleisten, ist Google Maps deaktiviert, wenn Sie diese Website das erste Mal betreten. Eine direkte Verbindung zu den Servern von Google wird erst hergestellt, wenn Sie Google Maps selbstständig aktivieren (Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO).</p>
            <p style={{ marginTop: '.5rem' }}>
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{' '}
              <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                https://www.google.de/intl/de/policies/privacy/
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
