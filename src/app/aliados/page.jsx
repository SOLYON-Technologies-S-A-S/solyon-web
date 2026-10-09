import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Aliados · SOLYON",
  description: "SOLYON crece con ingresos propios, grants y alianzas estratégicas. Buscamos socios que aporten mercado, conocimiento o capital con visión de permanencia.",
  path: "/aliados",
});

export default function AliadosPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Aliados</Link>
            <span className="kicker reveal">
              <span className="live"></span>
              <span>Crecimiento con{" "}<b>aliados</b></span>
            </span>
            <h1 className="h1 reveal d1">Construimos con aliados de largo plazo.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>SOLYON crece con ingresos propios, grants y alianzas estratégicas. Buscamos socios que aporten mercado, conocimiento o capital con visión de permanencia.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#proponer">Proponer una alianza</a>
              <a className="btn btn-secondary" href="#tipos">Formas de aliarse</a>
            </div>
          </div>
          <div className="console reveal d2" aria-label="La tesis de SOLYON en una pantalla">
            <div className="console-bar">
              <span>La tesis en una pantalla</span>
              <span className="on">SOLYON OS</span>
            </div>
            <div className="record" style={{ gap: "12px 18px", fontSize: "14.5px" }}>
              <div className="hd">
                <span>Por qué SOLYON</span>
                <span className="chip">Medellín</span>
              </div>
              <span className="k">Problema</span>
              <span className="v" style={{ fontWeight: "500" }}>El conocimiento de las operaciones vive en chats, documentos y personas, y se pierde.</span>
              <span className="k">Solución</span>
              <span className="v" style={{ fontWeight: "500" }}>SOLYON OS lo convierte en software, datos y agentes de IA reutilizables entre industrias.</span>
              <span className="k">Evidencia</span>
              <span className="v" style={{ fontWeight: "500" }}>
                Piloto con Ruta N y Toyota Mobility Foundation:{" "}
                <b>184 usuarios</b>
                {" "}al cierre,{" "}
                <b>122,7%</b>
                {" "}de la meta contractual de 150.
              </span>
              <span className="k">Modelo</span>
              <span className="v" style={{ fontWeight: "500" }}>Activación que financia la implementación y licencia recurrente por cliente.</span>
            </div>
            <Link className="link" href="/modelo" style={{ width: "fit-content" }}>Ver el modelo de negocio →</Link>
          </div>
        </div>
      </section>
      <section className="section" id="tipos">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Tipos de alianza</p>
            <h2 className="h2">Cuatro formas de construir con nosotros.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h4">Distribución</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Empresas que llevan SOLYON OS a nuevos mercados o a su base de clientes, de forma no exclusiva.</p>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h4">Academia e investigación</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Universidades y grupos que co-investigan y validan de forma independiente nuestra tecnología.</p>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h4">Instituciones</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Entidades de innovación y gobiernos que articulan pilotos y escalamiento territorial.</p>
            </div>
            <div>
              <span className="n">04</span>
              <h3 className="h4">Socios estratégicos</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Participación directa en la compañía, con alineación de largo plazo.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Ecosistema actual</p>
            <h2 className="h2">Con quién trabajamos hoy.</h2>
          </div>
          <ul className="checks sr">
            <li>
              <span><b>Ruta N.</b>{" "}Contrato del piloto SOLYON Move y articulación con el Distrito.</span>
            </li>
            <li>
              <span><b>Toyota Mobility Foundation.</b>{" "}Cofinanciador del programa Medellín Mobility for All.</span>
            </li>
            <li>
              <span><b>Créame.</b>{" "}Incubación con acompañamiento del Distrito de Medellín.</span>
            </li>
            <li>
              <span><b>Google for Startups.</b>{" "}Programa y créditos de Google Cloud.</span>
            </li>
            <li>
              <span><b>ElevenLabs.</b>{" "}Grant para agentes conversacionales.</span>
            </li>
            <li>
              <span><b>MinCiencias.</b>{" "}Grupo de investigación certificado en GrupLAC.</span>
            </li>
          </ul>
          <div className="notice sr" style={{ marginTop: "40px" }}>La documentación detallada (estados financieros, estructura societaria, contratos) se comparte por enlace privado después de una primera reunión.</div>
        </div>
      </section>
      <section className="section paper" id="proponer">
        <div className="wrap split">
          <div className="stack sr" style={{ gap: "20px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Hablemos</p>
            <h2 className="h2">Propón una alianza.</h2>
            <p className="muted">Responde el fundador directamente.</p>
          </div>
          <form className="stack" style={{ gap: "20px" }} aria-label="Propuesta de alianza">
            <div className="grid g2" style={{ gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
              <div className="field">
                <label htmlFor="a-name">Nombre</label>
                <input id="a-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="a-org">Organización</label>
                <input id="a-org" type="text" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="a-email">Correo</label>
                <input id="a-email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="a-type">Tipo de alianza</label>
                <select id="a-type">
                  <option>Distribución</option>
                  <option>Academia e investigación</option>
                  <option>Institucional</option>
                  <option>Socio estratégico</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="a-msg">Cuéntanos tu propuesta</label>
              <textarea id="a-msg"></textarea>
            </div>
            <button className="btn btn-primary" type="button" style={{ width: "fit-content" }}>Enviar propuesta</button>
          </form>
        </div>
      </section>
    </>
  );
}
