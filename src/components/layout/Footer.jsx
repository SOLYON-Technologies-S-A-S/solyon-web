import Link from "next/link";

const COLUMNS = [
  {
    title: "Soluciones",
    links: [
      ["/soluciones/retail", "Retail de alto ticket"],
      ["/soluciones/gobierno", "Gobierno y territorio"],
      ["/solyon-move", "SOLYON Move"],
      ["/en/insurance", "Insurance Operations", "en"],
    ],
  },
  {
    title: "Tecnología",
    links: [
      ["/tecnologia", "SOLYON OS"],
      ["/tecnologia/arcanum", "Arcanum"],
      ["/modelo", "Modelo"],
      ["/aliados", "Aliados"],
    ],
  },
  {
    title: "Investigación",
    links: [
      ["/investigacion", "Laboratorio"],
      ["/investigacion/propiedad-intelectual", "Propiedad intelectual"],
      ["/publicaciones", "Publicaciones"],
      ["/impacto", "Impacto"],
      ["/reporte-barreras", "Reporte de barreras"],
    ],
  },
  {
    title: "Compañía",
    links: [
      ["/nosotros", "Nosotros"],
      ["/prensa", "Prensa"],
      ["/contacto", "Contacto"],
      ["https://wa.me/573147903517", "WhatsApp +57 314 790 3517"],
    ],
  },
];

const SOCIAL = [
  ["https://www.linkedin.com/company/solyon-technologies/", "LinkedIn"],
  ["https://www.instagram.com/solyontechnologies/", "Instagram"],
  ["https://www.youtube.com/watch?v=0SyayXeU42g", "YouTube"],
];

function FooterLink({ href, lang, children }) {
  return /^https?:/.test(href) ? (
    <a href={href} lang={lang}>{children}</a>
  ) : (
    <Link href={href} lang={lang}>{children}</Link>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="foot-name">SOLYON</span>
            <p>Infraestructura de inteligencia operacional. Laboratorio DeepTech desde Medellín.</p>
            <p className="coords">6.2442° N · 75.5812° W</p>
          </div>
          {COLUMNS.map((col) => (
            <div className="foot-col" key={col.title}>
              <p className="mono">{col.title}</p>
              {col.links.map(([href, label, lang]) => (
                <FooterLink key={href} href={href} lang={lang}>{label}</FooterLink>
              ))}
            </div>
          ))}
        </div>
        <hr className="rule" />
        <div className="foot-bottom">
          <p>© 2026 SOLYON Technologies S.A.S. BIC · Medellín, Colombia</p>
          <div className="foot-social">
            {SOCIAL.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <Link href="/politica-de-datos">Política de tratamiento de datos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
