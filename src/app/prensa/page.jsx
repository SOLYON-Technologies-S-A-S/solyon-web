import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Media from "@/components/ui/Media";

export const metadata = pageMeta({
  title: "Prensa · SOLYON",
  description: "Kit de marca, datos clave, menciones y contacto directo para periodistas, jurados y organizadores de eventos.",
  path: "/prensa",
});

export default function PrensaPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Prensa</Link>
            <span className="kicker reveal"><span className="live"></span>Prensa ·{" "}<b>3 publicaciones</b></span>
            <h1 className="h1 reveal d1">Todo para contar la historia de SOLYON.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "520px" }}>Kit de marca, datos clave, menciones y contacto directo para periodistas, jurados y organizadores de eventos.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#">Descargar kit de prensa (ZIP)</a>
              <a className="btn btn-secondary" href="#contacto-prensa">Contacto de prensa</a>
            </div>
          </div>
          <div className="console reveal d2" aria-label="Ficha de datos clave de SOLYON">
            <div className="console-bar">
              <span>Ficha de prensa · SOLYON</span>
              <span className="on">Datos oficiales</span>
            </div>
            <div className="record">
              <div className="hd">
                <span>SOLYON Technologies S.A.S. BIC</span>
                <span className="chip ok">Medellín</span>
              </div>
              <span className="k">Qué hace</span>
              <span className="v">SOLYON OS · infraestructura de inteligencia operacional</span>
              <span className="k">Fundadores</span>
              <span className="v">Sergio Andrés Murillo (CEO) · Elizabeth Tamayo (COO)</span>
              <span className="k">Piloto</span>
              <span className="v">SOLYON Move · Ruta N y Toyota Mobility Foundation</span>
              <span className="k">Usuarios</span>
              <span className="v">184 frente a una meta de 150{" "}<span className="chip">+22,7%</span></span>
              <span className="k">Barreras</span>
              <span className="v">378 georreferenciadas en Medellín</span>
            </div>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Piloto Medellín Mobility for All · febrero a agosto de 2026</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="stack sr" style={{ gap: "16px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>En breve</p>
            <h2 className="h2">SOLYON en un párrafo.</h2>
            <p className="muted" style={{ fontSize: "15px" }}>Listo para copiar en tu nota o en la presentación de un evento.</p>
          </div>
          <div className="stack sr" style={{ gap: "20px" }}>
            <p style={{ fontSize: "20px", lineHeight: "1.6" }}>SOLYON Technologies es una compañía DeepTech de Medellín que construye SOLYON OS, una infraestructura de inteligencia operacional que convierte el conocimiento de las organizaciones en software, datos y agentes de IA. Su piloto SOLYON Move, con Ruta N y Toyota Mobility Foundation, cerró con 184 usuarios activos frente a una meta contractual de 150 (22,7% por encima) y mapeó 378 barreras de accesibilidad en Medellín.</p>
            <p className="mono muted" style={{ fontSize: "13px" }}>Fundada por Sergio Andrés Murillo (CEO) y Elizabeth Tamayo (COO) · S.A.S. BIC</p>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Menciones</p>
            <h2 className="h2">Lo que se ha publicado.</h2>
          </div>
          <div className="quote-strip sr">
            <a className="qs" href="https://toyotamobilityfoundation.org/en/press-room/pressrelease02162026/">
              <span className="m">Internacional · 16 feb 2026</span>
              <span className="o">Toyota Mobility Foundation</span>
              <p>Anuncia a SOLYON entre los cinco proyectos seleccionados con Ruta N para la movilidad inclusiva en Medellín.</p>
              <span className="link" style={{ fontSize: "15px" }}>Leer comunicado (EN) ↗</span>
            </a>
            <a className="qs" href="https://www.medellin.gov.co/es/sala-de-prensa/noticias/en-medellin-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida/">
              <span className="m">Gobierno · 6 ago 2026</span>
              <span className="o">Alcaldía de Medellín</span>
              <p>Presenta a SOLYON Move como una de las dos plataformas con IA para los viajes de personas con movilidad reducida.</p>
              <span className="link" style={{ fontSize: "15px" }}>Leer nota ↗</span>
            </a>
            <a className="qs" href="https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida">
              <span className="m">Ecosistema CTI · ago 2026</span>
              <span className="o">Ruta N</span>
              <p>Publicación oficial del programa sobre los resultados de SOLYON Move en Manrique y Aranjuez.</p>
              <span className="link" style={{ fontSize: "15px" }}>Leer nota ↗</span>
            </a>
          </div>
          <p className="muted sr" style={{ fontSize: "14px", margin: "24px 0 48px" }}>Las notas citan 150 usuarios: era la meta contractual del piloto. El cierre fue de 184 usuarios activos.</p>
          <div className="table-box sr">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Medio</th>
                  <th>Tema</th>
                  <th>Enlace</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6 de agosto de 2026</td>
                  <td>
                    <strong>Alcaldía de Medellín</strong>
                  </td>
                  <td>En Medellín crean dos plataformas con IA para facilitar los viajes de personas con movilidad reducida</td>
                  <td>
                    <a className="link" href="https://www.medellin.gov.co/es/sala-de-prensa/noticias/en-medellin-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida/">Leer ↗</a>
                  </td>
                </tr>
                <tr>
                  <td>16 de febrero de 2026</td>
                  <td>
                    <strong>Toyota Mobility Foundation</strong>
                  </td>
                  <td>Cinco proyectos seleccionados por Ruta N y TMF para la movilidad inclusiva en Medellín (EN)</td>
                  <td>
                    <a className="link" href="https://toyotamobilityfoundation.org/en/press-room/pressrelease02162026/">Leer ↗</a>
                  </td>
                </tr>
                <tr>
                  <td>Agosto de 2026</td>
                  <td>
                    <strong>Ruta N</strong>
                  </td>
                  <td>Plataformas con IA para facilitar los viajes de personas con movilidad reducida</td>
                  <td>
                    <a className="link" href="https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida">Leer ↗</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fill">[FECHA]</span>
                  </td>
                  <td>
                    <span className="fill">[MEDIO]</span>
                  </td>
                  <td>
                    <span className="fill">[AGREGAR CADA NUEVA MENCIÓN]</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Kit de marca</p>
            <h2 className="h2">Logos y fotos oficiales.</h2>
          </div>
          <div className="grid g3 sr" style={{ gap: "24px" }}>
            <div className="stack" style={{ gap: "14px" }}>
              <div style={{ background: "#0B1D26", border: "1px solid #24485A", borderRadius: "10px", minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <svg width="36" height="36" viewBox="0 0 30 30" aria-hidden="true">
                  <ellipse cx="15" cy="15" rx="13" ry="9" transform="rotate(-18 15 15)" fill="none" stroke="#E9EEEC" strokeWidth="1.5"></ellipse>
                  <ellipse cx="15" cy="15" rx="7.5" ry="5" transform="rotate(-18 15 15)" fill="none" stroke="#E9EEEC" strokeWidth="1.5"></ellipse>
                  <circle cx="15" cy="15" r="2.5" fill="#FF7A3D"></circle>
                </svg>
                <span style={{ fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "750", fontSize: "24px", letterSpacing: "0.06em", color: "#E9EEEC" }}>SOLYON</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <h3 className="h4">Logo sobre fondo oscuro</h3>
                <a className="link" href="#">SVG · PNG</a>
              </div>
            </div>
            <div className="stack" style={{ gap: "14px" }}>
              <div style={{ background: "#F4F5F2", borderRadius: "10px", minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <svg width="36" height="36" viewBox="0 0 30 30" aria-hidden="true">
                  <ellipse cx="15" cy="15" rx="13" ry="9" transform="rotate(-18 15 15)" fill="none" stroke="#0B1D26" strokeWidth="1.5"></ellipse>
                  <ellipse cx="15" cy="15" rx="7.5" ry="5" transform="rotate(-18 15 15)" fill="none" stroke="#0B1D26" strokeWidth="1.5"></ellipse>
                  <circle cx="15" cy="15" r="2.5" fill="#FF7A3D"></circle>
                </svg>
                <span style={{ fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "750", fontSize: "24px", letterSpacing: "0.06em", color: "#0B1D26" }}>SOLYON</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <h3 className="h4">Logo sobre fondo claro</h3>
                <a className="link" href="#">SVG · PNG</a>
              </div>
            </div>
            <div className="stack" style={{ gap: "14px" }}>
              <Media className="media" kind="Foto real" tag="Kit" icon="photo" label="fundadores · campo · laboratorio" alt="Foto real. Alta resolución">
                  <span>Alta resolución</span>
              </Media>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <h3 className="h4">Fotografías</h3>
                <a className="link" href="#">JPG alta resolución</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="contacto-prensa" style={{ padding: "88px 0" }}>
        <div className="wrap band">
          <div className="stack sr" style={{ gap: "16px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Contacto de prensa</p>
            <h2 className="h2">¿Entrevista o datos para una nota?</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Escríbenos a{" "}<span className="fill">[prensa@solyontechnologies.com]</span></p>
          </div>
          <Link className="btn btn-primary" href="/contacto">Contactar</Link>
        </div>
      </section>
    </>
  );
}
