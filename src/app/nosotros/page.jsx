import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Media from "@/components/ui/Media";

export const metadata = pageMeta({
  title: "Nosotros · SOLYON",
  description: "SOLYON no parte de una teoría sobre cómo deberían funcionar las operaciones. Parte de haberlas vivido por dentro.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Nosotros</Link>
            <h1 className="h1 reveal">La tecnología nació de operar, documentar y aprender.</h1>
            <p className="lead reveal d1" style={{ margin: "0", maxWidth: "540px" }}>SOLYON no parte de una teoría sobre cómo deberían funcionar las operaciones. Parte de haberlas vivido por dentro.</p>
            <div className="row reveal d2">
              <a className="btn btn-primary" href="#equipo">Conocer al equipo</a>
              <a className="btn btn-secondary" href="#origen">Nuestro origen</a>
            </div>
            <p className="coords reveal d3">6.2442° N · 75.5812° W — Medellín, Colombia</p>
          </div>
          <div className="bigstat reveal d2" aria-label="Cifras de origen" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <span className="n" style={{ fontSize: "clamp(48px, 5vw, 76px)" }}>8+</span>
              <span className="l">años en operaciones complejas y mercados reales</span>
            </div>
            <div>
              <span className="n" style={{ fontSize: "clamp(48px, 5vw, 76px)" }}>17</span>
              <span className="l">cuadernos manuscritos de procesos y decisiones</span>
            </div>
            <div>
              <span className="n" style={{ fontSize: "clamp(48px, 5vw, 76px)" }}>89 GB</span>
              <span className="l">de evidencia organizada como corpus empresarial</span>
            </div>
            <div>
              <span className="n" style={{ fontSize: "clamp(48px, 5vw, 76px)" }}>2</span>
              <span className="l">países: Colombia y Estados Unidos</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="origen">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Origen</p>
            <h2 className="h2">El laboratorio empezó antes del código.</h2>
          </div>
          <div className="track t4 sr">
            <div className="tk">
              <span className="day">Operar</span>
              <p className="muted" style={{ fontSize: "15px" }}>Años en seguros, logística, servicio y control de procesos expusieron problemas que no se ven desde fuera.</p>
            </div>
            <div className="tk">
              <span className="day">Documentar</span>
              <p className="muted" style={{ fontSize: "15px" }}>Cuadernos, archivos y decisiones se convirtieron en una memoria empresarial.</p>
            </div>
            <div className="tk">
              <span className="day">Construir</span>
              <p className="muted" style={{ fontSize: "15px" }}>Esa evidencia se transformó en datos, flujos, software y agentes.</p>
            </div>
            <div className="tk last">
              <span className="day">Validar</span>
              <p className="muted" style={{ fontSize: "15px" }}>SOLYON Move, retail e insurance confrontan la tecnología con la realidad.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper" id="equipo">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Equipo fundador</p>
            <h2 className="h2">Visión y ejecución, como una sola capacidad.</h2>
          </div>
          <div className="profile sr" style={{ gap: "24px" }}>
            <div className="pcard" style={{ padding: "0", overflow: "hidden", gap: "0" }}>
              <Media className="media" kind="Foto real" tag="CEO" icon="person" label="[FOTO REAL · Sergio Andrés Murillo]" alt="Foto real. Sergio Andrés Murillo. Cofundador y CEO">
                  <b>Sergio Andrés Murillo</b>
                  <span>Cofundador y CEO</span>
              </Media>
              <div className="stack" style={{ padding: "32px", gap: "12px" }}>
                <p className="muted">Lidera la visión, la arquitectura de SOLYON OS y la conversión de conocimiento operativo en tecnología. Trayectoria en operaciones, seguros, trucking y producto.</p>
                <a className="link" href="#" style={{ width: "fit-content" }}>LinkedIn ↗</a>
              </div>
            </div>
            <div className="pcard" style={{ padding: "0", overflow: "hidden", gap: "0" }}>
              <Media className="media" kind="Foto real" tag="COO" icon="person" label="[FOTO REAL · Elizabeth Tamayo]" alt="Foto real. Elizabeth Tamayo. Cofundadora y COO">
                  <b>Elizabeth Tamayo</b>
                  <span>Cofundadora y COO</span>
              </Media>
              <div className="stack" style={{ padding: "32px", gap: "12px" }}>
                <p className="muted">Lidera la ejecución, el control de procesos y la adopción con usuarios reales. Dirigió la operación territorial de SOLYON Move.</p>
                <a className="link" href="#" style={{ width: "fit-content" }}>LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div className="stack sr" style={{ gap: "20px" }}>
              <p className="eyebrow" style={{ margin: "0" }}>Desde Medellín</p>
              <h2 className="h2">La ciudad es parte del laboratorio.</h2>
              <p className="muted" style={{ fontSize: "18px" }}>Incubados en Créame con acompañamiento del Distrito de Medellín, y conectados con Ruta N y el ecosistema de ciencia, tecnología e innovación.</p>
              <p className="coords">SOLYON Technologies S.A.S. BIC · Medellín, Colombia</p>
            </div>
            <Media className="media sr" kind="Foto real" tag="Laboratorio" icon="photo" label="[FOTO REAL · equipo en el laboratorio]" alt="Foto real. El equipo en Medellín">
                <b>El equipo en Medellín</b>
            </Media>
          </div>
          <div style={{ marginTop: "72px" }}>
            <p className="eyebrow sr">Un laboratorio construido para ejecutar</p>
            <ul className="checks sr">
              <li>Software full stack</li>
              <li>IA aplicada y automatización</li>
              <li>Datos e infraestructura</li>
              <li>QA y control de calidad</li>
              <li>Producto y operaciones</li>
              <li>Investigación aplicada</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{ padding: "88px 0" }}>
        <div className="wrap band">
          <h2 className="h2 sr">Cuéntanos qué operación quieres convertir en sistema.</h2>
          <Link className="btn btn-primary" href="/contacto">Abrir una conversación</Link>
        </div>
      </section>
    </>
  );
}
