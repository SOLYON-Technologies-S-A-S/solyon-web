import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Media from "@/components/ui/Media";

export const metadata = pageMeta({
  title: "Impacto · SOLYON",
  description: "Medimos resultados en personas, territorio e instituciones, con metodología pública y evaluación de terceros.",
  path: "/impacto",
  image: "/visual/solyon-move-field-validation.jpeg",
});

export default function ImpactoPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/investigacion">Inicio / Investigación / Impacto</Link>
            <span className="kicker reveal"><span className="live"></span>Piloto SOLYON Move ·{" "}<b>feb–ago 2026</b></span>
            <h1 className="h1 reveal d1">Impacto que se puede demostrar, no solo declarar.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Medimos resultados en personas, territorio e instituciones, con metodología pública y evaluación de terceros.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#cifras">Ver las cifras</a>
              <Link className="btn btn-secondary" href="/solyon-move">Caso SOLYON Move</Link>
            </div>
          </div>
          <div className="mapbox reveal d2">
            <svg viewBox="0 0 480 340" role="img" aria-label="Mapa ilustrativo de barreras georreferenciadas en Manrique y Aranjuez">
              <g fill="none" stroke="#2A5466" strokeWidth="1">
                <ellipse cx="190" cy="170" rx="55" ry="38" transform="rotate(-14 190 170)"></ellipse>
                <ellipse cx="190" cy="170" rx="110" ry="76" transform="rotate(-12 190 170)"></ellipse>
                <ellipse cx="200" cy="175" rx="175" ry="118" transform="rotate(-10 200 175)"></ellipse>
                <ellipse cx="345" cy="150" rx="62" ry="44" transform="rotate(-8 345 150)"></ellipse>
                <ellipse cx="345" cy="150" rx="115" ry="82" transform="rotate(-8 345 150)"></ellipse>
              </g>
              <path d="M50 290 C 130 240, 175 205, 225 172 S 330 118, 430 82" fill="none" stroke="#3CC7B4" strokeWidth="2" strokeDasharray="6 6"></path>
              <g fill="#FF7A3D">
                <circle cx="140" cy="222" r="5"></circle>
                <circle cx="182" cy="146" r="5" className="blinkpt"></circle>
                <circle cx="246" cy="196" r="5"></circle>
                <circle cx="298" cy="128" r="5" className="blinkpt"></circle>
                <circle cx="358" cy="170" r="5"></circle>
                <circle cx="392" cy="110" r="5"></circle>
                <circle cx="112" cy="160" r="5" className="blinkpt"></circle>
                <circle cx="268" cy="246" r="5"></circle>
                <circle cx="214" cy="110" r="5"></circle>
                <circle cx="330" cy="212" r="5" className="blinkpt"></circle>
              </g>
              <text x="120" y="98" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">MANRIQUE</text>
              <text x="330" y="250" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">ARANJUEZ</text>
            </svg>
            <div className="maplegend">
              <span><span style={{ color: "#FF7A3D" }}>●</span>{" "}Barrera georreferenciada</span>
              <span><span style={{ color: "#3CC7B4" }}>- -</span>{" "}Ruta accesible</span>
              <span>Ilustración · datos de ejemplo</span>
            </div>
          </div>
        </div>
        <div className="wrap" id="cifras" style={{ marginTop: "88px" }}>
          <div className="bigstat sr" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" }}>
            <div>
              <span className="n">184</span>
              <span className="l">usuarios activos al cierre del piloto</span>
            </div>
            <div>
              <span className="n">122,7%</span>
              <span className="l">de cumplimiento frente a la meta contractual de 150</span>
            </div>
            <div>
              <span className="n">378</span>
              <span className="l">barreras urbanas georreferenciadas</span>
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
          <p className="muted sr" style={{ fontSize: "14px", marginTop: "32px", maxWidth: "900px" }}>Fuente: piloto SOLYON Move, programa Medellín Mobility for All (Ruta N y Toyota Mobility Foundation), febrero–agosto de 2026, Manrique y Aranjuez, con paneles de evaluación acompañados por el Área Metropolitana del Valle de Aburrá. Las notas de prensa citan 150 personas porque era la meta contractual del programa; el informe de cierre registró 184. Metodología:{" "}<span className="fill">[RESUMEN O ENLACE A LA METODOLOGÍA]</span></p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Evidencia visual</p>
            <h2 className="h2">Cada cifra tiene una calle, una persona y una foto.</h2>
          </div>
          <div className="gallery sr" style={{ gridAutoRows: "250px" }}>
            <Media className="media big" kind="Foto real" tag="Manrique · 2026" icon="photo" file="solyon-move-field-validation.jpeg" alt="Foto real. Validación en territorio. Recorridos con usuarios del piloto">
                <b>Validación en territorio</b>
                <span>Recorridos con usuarios del piloto</span>
            </Media>
            <Media className="media tall" kind="Producto" tag="App Android" icon="phone" file="solyon-move-app-real.jpeg" alt="Producto. La app en manos de los usuarios. Captura real de SOLYON Move">
                <b>La app en manos de los usuarios</b>
                <span>Captura real de SOLYON Move</span>
            </Media>
            <Media className="media" kind="Evidencia" tag="378" icon="photo" file="solyon-move-barriers.png" alt="Evidencia. Barreras documentadas. Foto y georreferencia por punto">
                <b>Barreras documentadas</b>
                <span>Foto y georreferencia por punto</span>
            </Media>
            <Media className="media" kind="Foto real" tag="Aranjuez" icon="photo" label="[FOTO · taller con la comunidad]" alt="Foto real. Trabajo con la comunidad. Acompañamiento territorial">
                <b>Trabajo con la comunidad</b>
                <span>Acompañamiento territorial</span>
            </Media>
            <Media className="media wide" kind="Plataforma" tag="Capa institucional" icon="desktop" file="solyon-move-crm-historica.png" alt="Plataforma. CRM y mapa territorial. Lo que ve la entidad en tiempo real">
                <b>CRM y mapa territorial</b>
                <span>Lo que ve la entidad en tiempo real</span>
            </Media>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Objetivos de Desarrollo Sostenible</p>
            <h2 className="h2">Dónde contribuimos.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">ODS 9</span>
              <h3 className="h3">Industria, innovación e infraestructura</h3>
              <p className="muted">Infraestructura tecnológica propia desarrollada en Colombia.</p>
            </div>
            <div>
              <span className="n">ODS 10</span>
              <h3 className="h3">Reducción de las desigualdades</h3>
              <p className="muted">Más autonomía para personas con movilidad reducida.</p>
            </div>
            <div>
              <span className="n">ODS 11</span>
              <h3 className="h3">Ciudades y comunidades sostenibles</h3>
              <p className="muted">Datos para priorizar obras de accesibilidad urbana.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Demostrado y en construcción</p>
            <h2 className="h2">Separamos lo que ya probamos de lo que viene.</h2>
          </div>
          <div className="table-box sr">
            <table>
              <thead>
                <tr>
                  <th>Iniciativa</th>
                  <th>Qué existe hoy</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>SOLYON Move</strong>
                  </td>
                  <td>App publicada, datos territoriales y CRM institucional evaluados en campo</td>
                  <td>
                    <span className="tag tag-live"><span className="dot"></span>Demostrado</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>EL-VÍA</strong>
                  </td>
                  <td>App de formación en cumplimiento DOT publicada en Google Play</td>
                  <td>
                    <span className="tag tag-live"><span className="dot"></span>Publicado</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Retail de alto ticket</strong>
                  </td>
                  <td>Módulo construido; programa de clientes fundadores abierto</td>
                  <td>
                    <span className="tag tag-val"><span className="dot"></span>En despliegue</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Insurance Operations</strong>
                  </td>
                  <td>Flujos en validación con el cliente cero</td>
                  <td>
                    <span className="tag tag-val"><span className="dot"></span>En validación</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Arcanum</strong>
                  </td>
                  <td>Motor de IA con benchmark interno</td>
                  <td>
                    <span className="tag tag-dev"><span className="dot"></span>En desarrollo</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap band sr">
          <div className="stack" style={{ gap: "12px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Sociedad BIC</p>
            <h2 className="h2">Beneficio e interés colectivo, por estatutos.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>SOLYON Technologies es una S.A.S. BIC y publica su reporte de gestión anual.</p>
            <a className="link" href="#" style={{ width: "fit-content" }}>Reporte de gestión BIC{" "}<span className="fill">[ENLACE]</span></a>
          </div>
          <Link className="btn btn-primary" href="/contacto">Medir impacto con nosotros</Link>
        </div>
      </section>
    </>
  );
}
