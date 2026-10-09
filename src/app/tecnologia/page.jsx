import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Tecnología · SOLYON OS",
  description: "SOLYON OS estructura conocimiento, datos, sistemas y agentes de IA en componentes que pasan de una industria a otra.",
  path: "/tecnologia",
});

export default function TecnologiaPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Tecnología</Link>
            <span className="kicker reveal">
              <span className="live"></span>
              <span>SOLYON OS ·{" "}<b>Operational Intelligence</b></span>
            </span>
            <h1 className="h1 reveal d1">Tu operación, convertida en capacidad reutilizable.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>SOLYON OS estructura conocimiento, datos, sistemas y agentes de IA en componentes que pasan de una industria a otra.</p>
            <div className="row reveal d3">
              <Link className="btn btn-primary" href="/contacto">Agendar diagnóstico</Link>
              <a className="btn btn-secondary" href="#reutilizacion">Ver la reutilización</a>
            </div>
            <p className="mono reveal d4" style={{ color: "#A9B8BE" }}>Operational Intelligence Infrastructure · construido sobre Google Cloud Platform</p>
          </div>
          <div className="stackviz" aria-label="Las cuatro capas de SOLYON OS con Arcanum como núcleo">
            <div className="lyr reveal d1">
              <b>Agentes y automatización</b>
              <span style={{ whiteSpace: "nowrap" }}>04 · Agents</span>
            </div>
            <div className="lyr reveal d2">
              <b>Sistemas operativos</b>
              <span style={{ whiteSpace: "nowrap" }}>03 · Systems</span>
            </div>
            <div className="lyr core reveal d3">
              <b>Arcanum · memoria e inteligencia</b>
              <span style={{ whiteSpace: "nowrap" }}>Núcleo</span>
            </div>
            <div className="lyr reveal d4">
              <b>Infraestructura de datos</b>
              <span style={{ whiteSpace: "nowrap" }}>02 · Data</span>
            </div>
            <div className="lyr reveal d5">
              <b>Conocimiento operacional</b>
              <span style={{ whiteSpace: "nowrap" }}>01 · Knowledge</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Arquitectura</p>
            <h2 className="h2">Cuatro capas. Una sola memoria operativa.</h2>
            <p className="lead">Cada capa resuelve una parte del problema y alimenta a la siguiente.</p>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h4">Conocimiento operacional</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Reglas, decisiones, excepciones y criterio de expertos convertidos en memoria estructurada y consultable.</p>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h4">Infraestructura de datos</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Captura, validación, trazabilidad e interoperabilidad de la información de cada operación.</p>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h4">Sistemas operativos</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Interfaces, CRM, permisos, controles y herramientas institucionales para el día a día.</p>
            </div>
            <div>
              <span className="n">04</span>
              <h3 className="h4">Agentes y automatización</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Flujos y agentes de IA sobre tareas definidas, con supervisión humana.</p>
            </div>
          </div>
          <div className="sr" style={{ marginTop: "48px", paddingTop: "28px", borderTop: "1px solid #D5DBD8", display: "flex", flexWrap: "wrap", gap: "12px 24px", alignItems: "center" }}>
            <p className="mono" style={{ color: "#4A5A61", textTransform: "uppercase" }}>Cada implementación deja el sistema más inteligente</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px" }}>
              <span className="tag" style={{ color: "#0B1D26", borderColor: "#0B1D26" }}>Operación</span>
              <span aria-hidden="true" style={{ color: "#B84A12" }}>→</span>
              <span className="tag" style={{ color: "#0B1D26", borderColor: "#0B1D26" }}>Evidencia</span>
              <span aria-hidden="true" style={{ color: "#B84A12" }}>→</span>
              <span className="tag" style={{ color: "#0B1D26", borderColor: "#0B1D26" }}>Conocimiento</span>
              <span aria-hidden="true" style={{ color: "#B84A12" }}>→</span>
              <span className="tag" style={{ color: "#0B1D26", borderColor: "#0B1D26" }}>Datos</span>
              <span aria-hidden="true" style={{ color: "#B84A12" }}>→</span>
              <span className="tag" style={{ color: "#0B1D26", borderColor: "#0B1D26" }}>Sistema</span>
              <span aria-hidden="true" style={{ color: "#B84A12" }}>→</span>
              <span className="tag" style={{ color: "#0B1D26", borderColor: "#0B1D26" }}>Decisión</span>
              <span aria-hidden="true" style={{ color: "#B84A12" }}>→</span>
              <span className="tag tag-dev">Aprendizaje</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper" id="reutilizacion">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Reutilización</p>
            <h2 className="h2">Los mismos componentes, tres industrias.</h2>
            <p className="lead">Esto separa una plataforma de una agencia de desarrollo: cada vertical reutiliza lo que construyó la anterior.</p>
          </div>
          <div className="table-box sr" style={{ boxShadow: "0 40px 80px -50px rgba(11,29,38,.45)" }}>
            <table>
              <thead>
                <tr>
                  <th>Capa</th>
                  <th>Retail de alto ticket</th>
                  <th>Gobierno y territorio</th>
                  <th>Insurance Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="mono" style={{ color: "#B84A12" }}>01</span>{" "}<strong>Knowledge</strong></td>
                  <td>Preferencias y tallas extraídas de chats</td>
                  <td>Barreras clasificadas con evidencia</td>
                  <td>Reglas de cumplimiento por cuenta</td>
                </tr>
                <tr>
                  <td><span className="mono" style={{ color: "#B84A12" }}>02</span>{" "}<strong>Data</strong></td>
                  <td>Fichas VIP e historial de compra</td>
                  <td>Datos georreferenciados del territorio</td>
                  <td>Datos de documentos y pólizas</td>
                </tr>
                <tr>
                  <td><span className="mono" style={{ color: "#B84A12" }}>03</span>{" "}<strong>Systems</strong></td>
                  <td>CRM y reservas bajo dominio propio</td>
                  <td>CRM institucional y reportes</td>
                  <td>Seguimiento de renovaciones</td>
                </tr>
                <tr>
                  <td><span className="mono" style={{ color: "#B84A12" }}>04</span>{" "}<strong>Agents</strong></td>
                  <td>Lanzamiento privado y reactivación</td>
                  <td>Asistente conversacional (fase 2)</td>
                  <td>Intake de documentos</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row sr" style={{ marginTop: "28px", gap: "12px 32px" }}>
            <Link className="link" href="/soluciones/retail">Retail →</Link>
            <Link className="link" href="/soluciones/gobierno">Gobierno →</Link>
            <Link className="link" href="/en/insurance">Insurance →</Link>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="stack sr" style={{ gap: "24px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Capa de inteligencia</p>
            <h2 className="h2">Arcanum, el motor de IA propio de SOLYON.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Memoria jerárquica para que la IA recuerde el contexto de cada operación y un método para reducir alucinaciones.</p>
            <Link className="btn btn-primary" href="/tecnologia/arcanum" style={{ width: "fit-content" }}>Conocer Arcanum</Link>
          </div>
          <div className="sr" aria-label="Representación simplificada de la memoria jerárquica de Arcanum" style={{ border: "1px solid #3A5A68", borderRadius: "14px", padding: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <p className="mono" style={{ color: "#A9B8BE" }}>General · reglas y criterio</p>
            <div style={{ border: "1px solid #4A7385", borderRadius: "10px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="mono" style={{ color: "#A9B8BE" }}>Operación · procesos y excepciones</p>
              <div style={{ border: "1.5px solid #FF7A3D", background: "rgba(255,122,61,.12)", borderRadius: "8px", padding: "16px" }}>
                <p className="mono" style={{ color: "#FF7A3D" }}>Caso · cliente, cuenta o barrera</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="stack sr" style={{ gap: "20px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Estado de la tecnología</p>
            <h2 className="h2">Lo que funciona hoy y lo que estamos construyendo.</h2>
            <p className="muted">Un componente se vuelve compartido solo cuando demuestra utilidad en más de una operación. SOLYON OS evoluciona por evidencia.</p>
          </div>
          <div className="docs sr">
            <div className="doc">
              <div style={{ flex: "1 1 240px" }}>
                <b>Conocimiento estructurado</b>
                <p>Convierte experiencia y documentación en memoria reutilizable</p>
              </div>
              <span className="tag tag-live"><span className="dot"></span>Activa</span>
            </div>
            <div className="doc">
              <div style={{ flex: "1 1 240px" }}>
                <b>Software operacional</b>
                <p>Interfaces, CRM y módulos institucionales</p>
              </div>
              <span className="tag tag-live"><span className="dot"></span>Activa</span>
            </div>
            <div className="doc">
              <div style={{ flex: "1 1 240px" }}>
                <b>Automatización operativa</b>
                <p>Flujos que reducen tareas repetitivas</p>
              </div>
              <span className="tag tag-live"><span className="dot"></span>Activa</span>
            </div>
            <div className="doc">
              <div style={{ flex: "1 1 240px" }}>
                <b>Infraestructura de datos</b>
                <p>Captura, trazabilidad y exposición de información</p>
              </div>
              <span className="tag tag-live"><span className="dot"></span>Activa · en evolución</span>
            </div>
            <div className="doc">
              <div style={{ flex: "1 1 240px" }}>
                <b>Soporte a decisiones</b>
                <p>Organiza señales y contexto, con responsabilidad humana</p>
              </div>
              <span className="tag tag-val"><span className="dot"></span>En validación</span>
            </div>
            <div className="doc">
              <div style={{ flex: "1 1 240px" }}>
                <b>Agentes de IA</b>
                <p>Agentes especializados para conversación y coordinación</p>
              </div>
              <span className="tag tag-dev"><span className="dot"></span>En desarrollo</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper" style={{ padding: "88px 0" }}>
        <div className="wrap band">
          <div className="sr">
            <p className="eyebrow">Siguiente paso</p>
            <h2 className="h2">Mira cómo se aplica a tu operación.</h2>
          </div>
          <div className="row">
            <Link className="btn btn-primary" href="/contacto">Agendar diagnóstico</Link>
            <Link className="btn btn-secondary" href="/modelo">Ver el modelo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
