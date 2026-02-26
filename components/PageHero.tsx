interface PageHeroProps {
  label: string
  title: string
  subtitle: string
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <>
      <div className="page-hero">
        <p className="ph-label">{label}</p>
        <h1 className="ph-title">{title}</h1>
        <p className="ph-sub">{subtitle}</p>
      </div>
      <div className="pdiv" />
    </>
  )
}
