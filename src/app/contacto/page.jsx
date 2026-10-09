import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import ContactSelector from "@/components/contact/ContactSelector";

export const metadata = pageMeta({
  title: "Contacto · SOLYON",
  description: "Dinos quién eres y te llevamos a la persona correcta. Sin costo y sin compromiso.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <section className="dark phero" style={{ paddingBottom: "80px" }}>
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Contacto</Link>
            <span className="kicker reveal"><span className="live"></span>Diagnóstico ·{" "}<b>sin costo</b></span>
            <h1 className="h1 reveal d1">Agenda un diagnóstico de 30 minutos.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "520px" }}>Dinos quién eres y te llevamos a la persona correcta. Sin costo y sin compromiso.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#formulario">Elegir mi perfil</a>
              <a className="btn btn-secondary" href="https://wa.me/573147903517">Escribir por WhatsApp</a>
            </div>
          </div>
          <div className="mapbox reveal d2">
            <svg viewBox="0 0 520 300" role="img" aria-label="Mapa ilustrativo con la ubicación de SOLYON en Medellín">
              <g fill="none" stroke="#2A5466" strokeWidth="1">
                <ellipse cx="260" cy="150" rx="40" ry="26" transform="rotate(-14 260 150)"></ellipse>
                <ellipse cx="260" cy="150" rx="90" ry="58" transform="rotate(-12 260 150)"></ellipse>
                <ellipse cx="262" cy="152" rx="145" ry="92" transform="rotate(-10 262 152)"></ellipse>
                <ellipse cx="265" cy="155" rx="205" ry="128" transform="rotate(-8 265 155)"></ellipse>
                <ellipse cx="268" cy="158" rx="270" ry="168" transform="rotate(-6 268 158)"></ellipse>
              </g>
              <path d="M260 150 L 470 60" fill="none" stroke="#3CC7B4" strokeWidth="1.5" strokeDasharray="5 6"></path>
              <path d="M260 150 L 60 250" fill="none" stroke="#3CC7B4" strokeWidth="1.5" strokeDasharray="5 6"></path>
              <circle cx="260" cy="150" r="16" fill="none" stroke="#FF7A3D" strokeWidth="1.5" className="blinkpt"></circle>
              <circle cx="260" cy="150" r="6" fill="#FF7A3D"></circle>
              <circle cx="470" cy="60" r="4" fill="#3CC7B4" className="blinkpt" style={{ animationDelay: ".8s" }}></circle>
              <circle cx="60" cy="250" r="4" fill="#3CC7B4" className="blinkpt" style={{ animationDelay: "1.6s" }}></circle>
              <text x="284" y="146" fill="#E9EEEC" fontFamily="IBM Plex Mono, monospace" fontSize="15" letterSpacing="1.5">MEDELLÍN</text>
              <text x="284" y="168" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">6.2442° N · 75.5812° W</text>
              <text x="370" y="40" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="13">ESTADOS UNIDOS</text>
              <text x="40" y="276" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="13">COLOMBIA</text>
            </svg>
            <div className="maplegend">
              <span><span style={{ color: "#FF7A3D" }}>●</span>{" "}Sede</span>
              <span><span style={{ color: "#3CC7B4" }}>- -</span>{" "}Dónde operamos</span>
              <span>Ilustración</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="formulario">
        <div className="wrap">
          <div className="head sr" style={{ marginBottom: "32px" }}>
            <p className="eyebrow">Elige tu perfil</p>
            <h2 className="h2">¿Quién eres?</h2>
          </div>
          <ContactSelector />
        </div>
      </section>
      <section className="section paper" style={{ padding: "88px 0" }}>
        <div className="wrap band">
          <h2 className="h2 sr">¿Primero quieres ver lo que ya construimos?</h2>
          <div className="row">
            <Link className="btn btn-primary" href="/solyon-move">Ver el piloto SOLYON Move</Link>
            <Link className="btn btn-secondary" href="/nosotros">Conocer al equipo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
