import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Investigación · SOLYON Lab",
  description: "Investigamos para construir, y publicamos lo que podemos demostrar.",
  path: "/investigacion",
});

export default function InvestigacionPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Investigación</Link>
            <span className="kicker reveal"><span className="live"></span>Certificado por{" "}<b>MinCiencias</b></span>
            <h1 className="h1 reveal d1">Investigación aplicada que termina en producto.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Investigamos para construir, y publicamos lo que podemos demostrar.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#lineas">Ver líneas de investigación</a>
              <a className="btn btn-secondary" href="#">Perfil en GrupLAC ↗</a>
            </div>
          </div>
          <div className="console reveal d2" aria-label="Ficha del grupo de investigación certificado por MinCiencias">
            <div className="console-bar">
              <span>GrupLAC · ficha del grupo</span>
              <span className="on">Certificado</span>
            </div>
            <div className="record step-in">
              <div className="hd">
                <span>SOLYON DeepTech &amp; Cognitive Systems Lab</span>
              </div>
              <span className="k">Certificación</span>
              <span className="v">GrupLAC–MinCiencias · noviembre de 2025</span>
              <span className="k">Avalado por</span>
              <span className="v">SOLYON Technologies S.A.S. BIC</span>
              <span className="k">Área</span>
              <span className="v">Ingeniería de Sistemas</span>
              <span className="k">Línea</span>
              <span className="v">CTeI en TIC</span>
              <span className="k">Estado</span>
              <span className="v">
                <span className="chip ok">Grupo certificado</span>
              </span>
            </div>
            <div className="engine step-in s2">3 líneas activas</div>
            <div className="row step-in s3" style={{ gap: "8px" }}>
              <span className="chip">01 · Memoria en IA</span>
              <span className="chip">02 · Movilidad accesible</span>
              <span className="chip">03 · Conocimiento operacional</span>
            </div>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Ilustración de la ficha · datos del certificado</p>
          </div>
        </div>
      </section>
      <section className="section" id="lineas">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Líneas de investigación</p>
            <h2 className="h2">Tres preguntas. Tres productos.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h3">Memoria y confiabilidad en modelos de lenguaje</h3>
              <p className="muted">¿Cómo logra una IA conservar el contexto de una operación sin inventar?</p>
              <Link className="link" href="/tecnologia/arcanum" style={{ marginTop: "auto", width: "fit-content" }}>Arcanum →</Link>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h3">Movilidad accesible e inteligencia urbana</h3>
              <p className="muted">¿Cómo convertir las barreras del territorio en datos que mejoren la vida de quien se mueve con dificultad?</p>
              <Link className="link" href="/solyon-move" style={{ marginTop: "auto", width: "fit-content" }}>SOLYON Move →</Link>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h3">Conocimiento operacional y automatización</h3>
              <p className="muted">¿Cómo se transforma el criterio de expertos en sistemas que otros puedan operar?</p>
              <Link className="link" href="/tecnologia" style={{ marginTop: "auto", width: "fit-content" }}>SOLYON OS →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Método</p>
            <h2 className="h2">Primero la evidencia, después el código.</h2>
          </div>
          <div className="steps sr" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))" }}>
            <div className="step">
              <h3 className="h4">Observar</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Procesos, actores, restricciones y decisiones reales.</p>
            </div>
            <div className="step">
              <h3 className="h4">Documentar</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Evidencia, excepciones, fallas y dependencias.</p>
            </div>
            <div className="step">
              <h3 className="h4">Estructurar</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Reglas, modelos, datos y arquitectura.</p>
            </div>
            <div className="step">
              <h3 className="h4">Construir</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Software, automatización e IA.</p>
            </div>
            <div className="step">
              <h3 className="h4">Validar</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Con usuarios, compradores e instituciones.</p>
            </div>
            <div className="step">
              <h3 className="h4">Escalar</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Solo lo que demuestra utilidad.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Producción</p>
            <h2 className="h2">Resultados del laboratorio.</h2>
          </div>
          <div className="docs sr">
            <div className="doc">
              <div>
                <span className="mono" style={{ color: "#0E6E62" }}>Propiedad intelectual</span>
                <b style={{ display: "block" }}>Software registrado y portafolio de PI</b>
              </div>
              <Link className="link" href="/investigacion/propiedad-intelectual">Ver portafolio →</Link>
            </div>
            <div className="doc">
              <div>
                <span className="mono" style={{ color: "#0E6E62" }}>Publicaciones</span>
                <b style={{ display: "block" }}>Artículos, notas técnicas y presentaciones</b>
              </div>
              <Link className="link" href="/publicaciones">Ver publicaciones →</Link>
            </div>
            <div className="doc">
              <div>
                <span className="mono" style={{ color: "#0E6E62" }}>Datos abiertos</span>
                <b style={{ display: "block" }}>Reporte de barreras de accesibilidad</b>
              </div>
              <Link className="link" href="/reporte-barreras">Descargar →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap band sr">
          <div className="stack" style={{ gap: "12px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Colaboración</p>
            <h2 className="h2">Buscamos co-investigadores con contribución real.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Universidades, grupos y semilleros que quieran validar o ampliar nuestras líneas.</p>
          </div>
          <Link className="btn btn-primary" href="/contacto">Proponer colaboración</Link>
        </div>
      </section>
    </>
  );
}
