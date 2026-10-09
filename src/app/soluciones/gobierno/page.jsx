import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Media from "@/components/ui/Media";

export const metadata = pageMeta({
  title: "Gobierno y territorio · SOLYON",
  description: "Mapeamos las barreras de tu municipio con la comunidad y las convertimos en evidencia para el Plan de Desarrollo.",
  path: "/soluciones/gobierno",
});

export default function GobiernoPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "26px" }}>
            <Link className="crumb" href="/">Inicio / Soluciones / Gobierno y territorio</Link>
            <span className="kicker reveal"><span className="live"></span>Validado con{" "}<b>Ruta N y Toyota Mobility Foundation</b></span>
            <h1 className="h1 reveal d1">Decide dónde invertir con datos del territorio.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Mapeamos las barreras de tu municipio con la comunidad y las convertimos en evidencia para el Plan de Desarrollo.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#ficha">Solicitar ficha técnica</a>
              <Link className="btn btn-secondary" href="/solyon-move">Ver el piloto</Link>
            </div>
            <div className="statrow reveal d4">
              <div>
                <b>184</b>
                <span>usuarios en el piloto</span>
              </div>
              <div>
                <b>378</b>
                <span>barreras mapeadas</span>
              </div>
              <div>
                <b>2</b>
                <span>comunas: Manrique y Aranjuez</span>
              </div>
            </div>
          </div>
          <div className="mapbox reveal d2">
            <svg viewBox="0 0 480 360" role="img" aria-label="Mapa ilustrativo de barreras reportadas en Manrique y Aranjuez">
              <g fill="none" stroke="#2A5466" strokeWidth="1">
                <ellipse cx="190" cy="170" rx="60" ry="40" transform="rotate(-14 190 170)"></ellipse>
                <ellipse cx="190" cy="170" rx="120" ry="82" transform="rotate(-12 190 170)"></ellipse>
                <ellipse cx="200" cy="175" rx="180" ry="125" transform="rotate(-10 200 175)"></ellipse>
                <ellipse cx="340" cy="150" rx="70" ry="50" transform="rotate(-8 340 150)"></ellipse>
                <ellipse cx="340" cy="150" rx="125" ry="88" transform="rotate(-8 340 150)"></ellipse>
                <ellipse cx="300" cy="180" rx="230" ry="165" transform="rotate(-8 300 180)"></ellipse>
              </g>
              <path d="M50 290 C 130 250, 180 210, 230 175 S 330 120, 430 80" fill="none" stroke="#3CC7B4" strokeWidth="2" strokeDasharray="6 6"></path>
              <g fill="#FF7A3D">
                <circle cx="140" cy="220" r="5"></circle>
                <circle cx="180" cy="145" r="5" className="blinkpt"></circle>
                <circle cx="245" cy="195" r="5"></circle>
                <circle cx="300" cy="125" r="5" className="blinkpt" style={{ animationDelay: ".8s" }}></circle>
                <circle cx="355" cy="170" r="5"></circle>
                <circle cx="395" cy="110" r="5"></circle>
                <circle cx="110" cy="160" r="5" className="blinkpt" style={{ animationDelay: "1.4s" }}></circle>
                <circle cx="265" cy="245" r="5"></circle>
                <circle cx="215" cy="120" r="4"></circle>
                <circle cx="330" cy="215" r="4" className="blinkpt" style={{ animationDelay: ".4s" }}></circle>
                <circle cx="160" cy="270" r="4"></circle>
                <circle cx="420" cy="160" r="4"></circle>
              </g>
              <text x="120" y="105" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">MANRIQUE</text>
              <text x="320" y="255" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">ARANJUEZ</text>
            </svg>
            <div className="maplegend">
              <span><span style={{ color: "#FF7A3D" }}>●</span>{" "}Barrera reportada</span>
              <span><span style={{ color: "#3CC7B4" }}>- -</span>{" "}Ruta accesible</span>
              <span>Ilustración</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Qué resolvemos</p>
            <h2 className="h2">Los compromisos están en el Plan. La evidencia, casi nunca.</h2>
            <p className="lead">Tres herramientas sobre la misma infraestructura, para que tu entidad mida, priorice y rinda cuentas.</p>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <span className="tag tag-live"><span className="dot"></span>Validado</span>
              <h3 className="h3">Mapa de barreras de accesibilidad</h3>
              <p className="muted">Levantamiento ciudadano y técnico con foto y georreferencia, listo para priorizar obras.</p>
            </div>
            <div>
              <span className="n">02</span>
              <span className="tag tag-val"><span className="dot"></span>Disponible</span>
              <h3 className="h3">Observatorio territorial</h3>
              <p className="muted">Tablero e informes que conectan los datos del territorio con las metas del Plan de Desarrollo.</p>
            </div>
            <div>
              <span className="n">03</span>
              <span className="tag tag-val"><span className="dot"></span>Disponible</span>
              <h3 className="h3">Accesibilidad de flota por placa</h3>
              <p className="muted">Qué vehículos y rutas del transporte público son accesibles y dónde están las brechas.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Evidencia · Medellín Mobility for All</p>
            <h2 className="h2">Ya lo hicimos en Medellín, con evaluación de terceros.</h2>
          </div>
          <div className="bigstat sr">
            <div>
              <span className="n">184</span>
              <span className="l">usuarios activos al cierre: 122,7% de la meta contractual de 150</span>
            </div>
            <div>
              <span className="n">378</span>
              <span className="l">barreras georreferenciadas</span>
            </div>
            <div>
              <span className="n">−44%</span>
              <span className="l">de incertidumbre antes del viaje</span>
            </div>
            <div>
              <span className="n">+60%</span>
              <span className="l">de salidas autónomas</span>
            </div>
          </div>
          <div className="evidence sr" style={{ marginTop: "48px" }}>
            <a className="video" href="https://www.youtube.com/watch?v=0SyayXeU42g" aria-label="Ver en YouTube el video del piloto SOLYON Move">
              <span className="play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 4l14 8-14 8z"></path>
                </svg>
              </span>
              <div className="vmeta">
                <b>Trabajo de campo en Manrique y Aranjuez</b>
                <span>Video del piloto</span>
              </div>
            </a>
            <div className="side">
              <Media className="media" kind="Foto real" tag="Aranjuez" icon="photo" label="[FOTO · taller con la comunidad]" alt="Foto real. Talleres con la comunidad">
                  <b>Talleres con la comunidad</b>
              </Media>
              <Media className="media" kind="Plataforma" tag="Entidad" icon="desktop" file="solyon-move-crm-historica.png" alt="Plataforma. Lo que ve la entidad">
                  <b>Lo que ve la entidad</b>
              </Media>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "28px", fontSize: "14px" }}>Contrato con Ruta N y Toyota Mobility Foundation, con paneles de evaluación acompañados por el Área Metropolitana del Valle de Aburrá. Cerrado en agosto de 2026.{" "}<a className="link" href="https://www.medellin.gov.co/es/sala-de-prensa/noticias/en-medellin-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida/">Nota de la Alcaldía de Medellín ↗</a></p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="stack sr">
            <p className="eyebrow" style={{ margin: "0" }}>Qué incluye</p>
            <h2 className="h2">No entregamos solo software.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Entregamos capacidad instalada en la entidad y llegada real a la comunidad.</p>
          </div>
          <ul className="checks sr" style={{ gridTemplateColumns: "1fr" }}>
            <li>Software propio con licencia para la entidad</li>
            <li>Capacitación a las secretarías que usarán el sistema</li>
            <li>Trabajo de campo con la comunidad, incluidas zonas descentralizadas</li>
            <li>Informes periódicos alineados a las metas del Plan de Desarrollo</li>
            <li>
              <span>Exportación a formatos GIS:{" "}<span className="fill">[CONFIRMAR FORMATOS]</span></span>
            </li>
            <li>Soporte técnico durante todo el contrato</li>
          </ul>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap split">
          <div className="stack sr">
            <p className="eyebrow" style={{ margin: "0" }}>Ruta de contratación</p>
            <h2 className="h2">Documentación lista para tu proceso.</h2>
            <p className="muted">La modalidad la define la entidad. Nosotros entregamos lo que el proceso requiere.</p>
          </div>
          <div className="docs sr">
            <div className="doc">
              <div>
                <b>Registro del software ante la DNDA</b>
                <p>Soporta la titularidad del software</p>
              </div>
              <span className="chip ok">Disponible</span>
            </div>
            <div className="doc">
              <div>
                <b>Ficha técnica de la solución</b>
                <p>Alcance, entregables y requisitos técnicos</p>
              </div>
              <span className="chip ok">Disponible</span>
            </div>
            <div className="doc">
              <div>
                <b>Certificación del grupo de investigación</b>
                <p>Respalda el componente de ciencia, tecnología e innovación</p>
              </div>
              <span className="chip ok">Disponible</span>
            </div>
            <div className="doc">
              <div>
                <b>Mapeo a metas del Plan de Desarrollo</b>
                <p>Conecta la propuesta con los compromisos del municipio</p>
              </div>
              <span className="chip">Por entidad</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="ficha">
        <div className="wrap split">
          <div className="stack sr">
            <p className="eyebrow" style={{ margin: "0" }}>Solicita la ficha técnica</p>
            <h2 className="h2">Te la enviamos con una propuesta para tu municipio.</h2>
            <p className="muted">Respondemos en un máximo de{" "}<span className="fill">[N.º]</span>{" "}días hábiles.</p>
          </div>
          <form className="stack" style={{ gap: "20px" }} aria-label="Solicitud de ficha técnica">
            <div className="grid g2" style={{ gap: "20px" }}>
              <div className="field">
                <label htmlFor="g-entity">Entidad</label>
                <input id="g-entity" type="text" placeholder="Alcaldía de…" />
              </div>
              <div className="field">
                <label htmlFor="g-role">Cargo</label>
                <input id="g-role" type="text" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="g-email">Correo institucional</label>
              <input id="g-email" type="email" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="g-goal">¿Qué meta del Plan de Desarrollo quieres atender?</label>
              <textarea id="g-goal"></textarea>
              <span className="hint">Opcional. Nos ayuda a preparar una propuesta concreta.</span>
            </div>
            <label className="check"><input type="checkbox" />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
            <button className="btn btn-primary" type="button" style={{ width: "fit-content" }}>Solicitar ficha técnica</button>
          </form>
        </div>
      </section>
    </>
  );
}
