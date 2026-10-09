import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Arcanum · Motor de IA de SOLYON",
  description: "Arcanum es el motor de IA propio de SOLYON. Organiza el conocimiento en una memoria jerárquica para que cada respuesta parta del contexto correcto, no de suposiciones.",
  path: "/tecnologia/arcanum",
});

export default function ArcanumPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/tecnologia">Inicio / Tecnología / Arcanum</Link>
            <span className="kicker reveal">
              <span className="live"></span>
              <span>Capa de inteligencia de{" "}<b>SOLYON OS</b></span>
            </span>
            <h1 className="h1 reveal d1">La IA que recuerda cómo funciona tu operación.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Arcanum es el motor de IA propio de SOLYON. Organiza el conocimiento en una memoria jerárquica para que cada respuesta parta del contexto correcto, no de suposiciones.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#resultados">Ver resultados</a>
              <Link className="btn btn-secondary" href="/investigacion">Ver el laboratorio</Link>
            </div>
          </div>
          <div className="console reveal d2" aria-label="Representación simplificada de la memoria jerárquica de Arcanum">
            <div className="console-bar">
              <span>Arcanum · memoria jerárquica</span>
              <span className="on">Consultando</span>
            </div>
            <div className="bubble step-in"><small>Consulta</small>¿Qué excepciones aplican a este caso?</div>
            <div className="step-in s2" style={{ border: "1px solid #3A5A68", borderRadius: "12px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#A9B8BE" }}>
                <span>N1 · General</span>
                <span>Reglas y criterio de la organización</span>
              </div>
              <div style={{ border: "1px solid #4A7385", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#A9B8BE" }}>
                  <span>N2 · Operación</span>
                  <span>Procesos y excepciones</span>
                </div>
                <div className="step-in s3" style={{ border: "1.5px solid #FF7A3D", background: "rgba(255,122,61,.14)", borderRadius: "8px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#FF7A3D" }}>
                    <span>N3 · Caso</span>
                    <span>Cliente, cuenta o barrera concreta</span>
                  </div>
                  <span className="chip ok" style={{ width: "fit-content" }}>Contexto recuperado</span>
                </div>
              </div>
            </div>
            <p className="muted" style={{ fontSize: "14px" }}>Lo general vive arriba y el detalle de cada caso abajo. La IA consulta solo el nivel que necesita: menos ruido, menos respuestas inventadas.</p>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Representación simplificada · datos de ejemplo</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Qué hace</p>
            <h2 className="h2">Cuatro funciones, dentro de alcances definidos.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h4">Recuperar conocimiento</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Acceso contextual a documentación y criterio estructurado.</p>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h4">Razonamiento asistido</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Análisis y soporte a decisiones con responsabilidad humana.</p>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h4">Orquestar agentes</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Coordinación de agentes especializados sobre flujos definidos.</p>
            </div>
            <div>
              <span className="n">04</span>
              <h3 className="h4">Contexto operacional</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Uso de datos, reglas y permisos propios de cada operación.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark" id="resultados">
        <div className="wrap">
          <div className="head sr" style={{ marginBottom: "40px" }}>
            <p className="eyebrow">Resultados de laboratorio</p>
            <h2 className="h2">Lo que medimos internamente.</h2>
          </div>
          <div className="sr" style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "12px 18px", border: "1.5px solid #FF7A3D", borderRadius: "4px", background: "rgba(255,122,61,.1)", marginBottom: "24px" }}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" style={{ fill: "none", stroke: "#FF7A3D", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", flex: "none" }}>
              <path d="M12 3l9.5 17h-19z"></path>
              <path d="M12 10v4"></path>
              <path d="M12 17.5v.01"></path>
            </svg>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "15px", letterSpacing: ".08em", textTransform: "uppercase", color: "#FF7A3D", fontWeight: "500" }}>Benchmark interno, no auditado</span>
          </div>
          <div className="bigstat sr">
            <div>
              <span className="n">93%</span>
              <span className="l">de coherencia contextual en las pruebas internas · benchmark interno, no auditado</span>
            </div>
            <div>
              <span className="n">−61%</span>
              <span className="l">de alucinaciones frente a la línea base de las pruebas internas · benchmark interno, no auditado</span>
            </div>
          </div>
          <div className="notice sr" style={{ marginTop: "40px" }}>Benchmark interno de SOLYON, no auditado por terceros. Metodología y condiciones de prueba:{" "}<span className="fill">[ENLACE A NOTA TÉCNICA]</span>. Buscamos aliados académicos para una validación independiente.</div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap split">
          <div className="stack sr" style={{ gap: "20px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Principios</p>
            <h2 className="h2">IA útil, con límites claros.</h2>
          </div>
          <ul className="checks sr" style={{ gridTemplateColumns: "1fr", gap: "0" }}>
            <li>
              <span><b>Supervisión humana.</b>{" "}Las decisiones con consecuencias las toma una persona. Arcanum organiza el contexto.</span>
            </li>
            <li>
              <span><b>Alcances definidos.</b>{" "}Cada agente trabaja sobre tareas y permisos concretos, no como inteligencia general.</span>
            </li>
            <li>
              <span><b>Menos dependencia de terceros.</b>{" "}En SOLYON Move, las rutas se calculan con un motor propio, sin APIs de rutas externas.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section" style={{ padding: "88px 0" }}>
        <div className="wrap band">
          <div className="sr">
            <p className="eyebrow">Investigación</p>
            <h2 className="h2">¿Eres investigador o universidad? Validemos Arcanum juntos.</h2>
          </div>
          <div className="row">
            <Link className="btn btn-primary" href="/investigacion">Ver el laboratorio</Link>
            <Link className="btn btn-secondary" href="/contacto">Proponer colaboración</Link>
          </div>
        </div>
      </section>
    </>
  );
}
