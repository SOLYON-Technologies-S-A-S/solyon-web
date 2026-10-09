import { pageMeta } from "@/lib/seo";
import LeadForm from "@/components/forms/LeadForm";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Publicaciones · SOLYON Lab",
  description: "Artículos, notas técnicas y datos abiertos. Marcamos con claridad qué está publicado y qué está en preparación.",
  path: "/publicaciones",
});

export default function PublicacionesPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/investigacion">Inicio / Investigación / Publicaciones</Link>
            <h1 className="h1 reveal d1">Lo que aprendemos, documentado.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Artículos, notas técnicas y datos abiertos. Marcamos con claridad qué está publicado y qué está en preparación.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#lista">Ver publicaciones</a>
              <a className="btn btn-secondary" href="#suscribirse">Suscribirme</a>
            </div>
          </div>
          <div className="console reveal d2" aria-label="Índice de publicaciones por estado">
            <div className="console-bar">
              <span>Índice · SOLYON Lab</span>
              <span className="on">6 entradas</span>
            </div>
            <div className="record step-in">
              <div className="hd">
                <span>Por estado</span>
              </div>
              <span className="k">Publicado</span>
              <span className="v">
                <span className="chip ok">1 · datos abiertos</span>
              </span>
              <span className="k">Preparación</span>
              <span className="v">
                <span className="chip">2 · artículo y nota técnica</span>
              </span>
              <span className="k">Externas</span>
              <span className="v">3 · Toyota Mobility Foundation, Alcaldía, Ruta N</span>
            </div>
            <div className="bubble step-in s2"><small>Último · datos abiertos</small>Barreras de accesibilidad en Medellín: 378 puntos georreferenciados</div>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Ilustración · resumen de esta página</p>
          </div>
        </div>
      </section>
      <section className="section" id="lista">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Publicaciones</p>
            <h2 className="h2">De lo más reciente a lo más antiguo.</h2>
          </div>
          <div className="docs">
            <article className="doc sr" style={{ alignItems: "flex-start" }}>
              <div className="stack" style={{ gap: "8px", flex: "1 1 520px" }}>
                <div className="row" style={{ gap: "12px" }}>
                  <span className="tag tag-dev"><span className="dot"></span>En preparación</span>
                  <span className="mono muted">Artículo científico · Movilidad accesible</span>
                </div>
                <h3 className="h3">Resultados del piloto SOLYON Move en Medellín Mobility for All</h3>
                <p>Diseño, metodología y resultados del piloto con personas con movilidad reducida.</p>
              </div>
              <span className="mono muted">Revista:{" "}<span className="fill">[AGREGAR AL SOMETER]</span></span>
            </article>
            <article className="doc sr" style={{ alignItems: "flex-start" }}>
              <div className="stack" style={{ gap: "8px", flex: "1 1 520px" }}>
                <div className="row" style={{ gap: "12px" }}>
                  <span className="tag tag-dev"><span className="dot"></span>En preparación</span>
                  <span className="mono muted">Nota técnica · IA</span>
                </div>
                <h3 className="h3">Arcanum: memoria jerárquica para reducir alucinaciones</h3>
                <p>Arquitectura y metodología del benchmark interno del motor de IA de SOLYON.</p>
              </div>
            </article>
            <article className="doc sr" style={{ alignItems: "flex-start" }}>
              <div className="stack" style={{ gap: "8px", flex: "1 1 520px" }}>
                <div className="row" style={{ gap: "12px" }}>
                  <span className="tag tag-live"><span className="dot"></span>Publicado · datos abiertos</span>
                  <span className="mono muted">2026 · Movilidad accesible</span>
                </div>
                <h3 className="h3">Barreras de accesibilidad en Medellín: 378 puntos georreferenciados</h3>
                <p>Reporte abierto con los datos levantados durante el piloto SOLYON Move.</p>
              </div>
              <Link className="link" href="/reporte-barreras">Descargar reporte →</Link>
            </article>
            <article className="doc sr" style={{ alignItems: "flex-start" }}>
              <div className="stack" style={{ gap: "8px", flex: "1 1 520px" }}>
                <div className="row" style={{ gap: "12px" }}>
                  <span className="tag"><span className="dot"></span>Externa</span>
                  <span className="mono muted">Agosto de 2026 · Ruta N</span>
                </div>
                <h3 className="h3">Ruta N presenta a SOLYON Move entre las plataformas con IA para la movilidad reducida</h3>
                <p>Resultados del piloto en Manrique y Aranjuez.</p>
              </div>
              <a className="link" href="https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida">Leer en Ruta N ↗</a>
            </article>
            <article className="doc sr" style={{ alignItems: "flex-start" }}>
              <div className="stack" style={{ gap: "8px", flex: "1 1 520px" }}>
                <div className="row" style={{ gap: "12px" }}>
                  <span className="tag"><span className="dot"></span>Externa</span>
                  <span className="mono muted">6 ago 2026 · Alcaldía de Medellín</span>
                </div>
                <h3 className="h3">En Medellín crean dos plataformas con IA para facilitar los viajes de personas con movilidad reducida</h3>
                <p>Nota de la sala de prensa del Distrito sobre SOLYON Move y el programa Movilidad para Todos.</p>
              </div>
              <a className="link" href="https://www.medellin.gov.co/es/sala-de-prensa/noticias/en-medellin-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida/">Leer en medellin.gov.co ↗</a>
            </article>
            <article className="doc sr" style={{ alignItems: "flex-start" }}>
              <div className="stack" style={{ gap: "8px", flex: "1 1 520px" }}>
                <div className="row" style={{ gap: "12px" }}>
                  <span className="tag"><span className="dot"></span>Externa · internacional</span>
                  <span className="mono muted">16 feb 2026 · Toyota Mobility Foundation</span>
                </div>
                <h3 className="h3" lang="en">Five Projects Selected by Ruta N and Toyota Mobility Foundation Support Inclusive Mobility in Medellín</h3>
                <p>Comunicado global que anuncia a SOLYON entre los cinco equipos seleccionados.</p>
              </div>
              <a className="link" href="https://toyotamobilityfoundation.org/en/press-room/pressrelease02162026/">Leer comunicado ↗</a>
            </article>
          </div>
        </div>
      </section>
      <section className="section paper" id="suscribirse">
        <div className="wrap band sr">
          <div className="stack" style={{ gap: "12px", flex: "1 1 420px", maxWidth: "600px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Suscríbete</p>
            <h2 className="h2">Recibe cada nueva publicación.</h2>
          </div>
          <LeadForm audience="publicaciones" className="stack" style={{ gap: "16px", flex: "1 1 360px", maxWidth: "460px" }} aria-label="Suscripción a publicaciones">
            <div className="field">
              <label htmlFor="p-email">Correo</label>
              <input name="p-email" required id="p-email" type="email" autoComplete="email" />
            </div>
            <label className="check"><input type="checkbox" name="consent" required />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
            <button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Suscribirme</button>
          </LeadForm>
        </div>
      </section>
    </>
  );
}
