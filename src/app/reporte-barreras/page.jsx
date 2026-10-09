import { pageMeta } from "@/lib/seo";
import LeadForm from "@/components/forms/LeadForm";
import Link from "next/link";
import Media from "@/components/ui/Media";

export const metadata = pageMeta({
  title: "Reporte de barreras de accesibilidad · SOLYON",
  description: "El reporte abierto del piloto SOLYON Move, para que entidades, academia y organizaciones prioricen dónde intervenir.",
  path: "/reporte-barreras",
  image: "/visual/solyon-move-barriers.png",
});

export default function ReporteBarrerasPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "24px" }}>
            <Link className="crumb" href="/investigacion">Inicio / Investigación / Reporte de barreras</Link>
            <span className="kicker reveal"><span className="live"></span>Datos abiertos ·{" "}<b>Medellín 2026</b></span>
            <p className="reveal d1" style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontStretch: "122%", fontWeight: "750", fontSize: "clamp(110px, 15vw, 210px)", lineHeight: ".85", letterSpacing: "-.045em", color: "#FF7A3D" }}>378</p>
            <h1 className="h1 reveal d2" style={{ fontSize: "clamp(30px, 3.4vw, 48px)", maxWidth: "560px" }}>barreras que impiden moverse por Medellín, mapeadas una por una.</h1>
            <p className="lead reveal d3" style={{ margin: "0", maxWidth: "520px" }}>El reporte abierto del piloto SOLYON Move, para que entidades, academia y organizaciones prioricen dónde intervenir.</p>
            <div className="row reveal d4">
              <a className="btn btn-primary" href="#descargar">Descargar el reporte</a>
              <Link className="btn btn-secondary" href="/solyon-move">Ver el piloto</Link>
            </div>
          </div>
          <div className="mapbox reveal d2">
            <svg viewBox="0 0 520 420" role="img" aria-label="Mapa ilustrativo de barreras reportadas en Manrique y Aranjuez">
              <g fill="none" stroke="#2A5466" strokeWidth="1">
                <path d="M70 170 C 80 110, 160 80, 220 100 S 300 170, 260 220 S 120 260, 90 220 Z"></path>
                <path d="M40 175 C 50 90, 160 50, 245 80 S 340 175, 290 245 S 110 300, 60 240 Z"></path>
                <path d="M15 180 C 25 70, 160 20, 270 55 S 380 180, 320 270 S 100 340, 30 260 Z"></path>
                <path d="M290 250 C 300 205, 360 190, 400 215 S 440 280, 400 300 S 300 300, 290 250 Z"></path>
                <path d="M260 255 C 265 185, 360 160, 420 190 S 480 290, 420 330 S 270 335, 260 255 Z"></path>
                <path d="M230 260 C 230 160, 370 130, 450 165 S 515 300, 440 360 S 240 370, 230 260 Z"></path>
                <path d="M140 160 C 150 140, 190 135, 200 160 S 180 200, 160 195 S 135 180, 140 160 Z"></path>
              </g>
              <path d="M40 380 C 120 330, 190 280, 250 230 S 380 140, 490 70" fill="none" stroke="#3CC7B4" strokeWidth="2" strokeDasharray="6 6"></path>
              <g fill="#FF7A3D">
                <circle className="blinkpt" cx="156" cy="191" r="5" style={{ animationDelay: "0s" }}></circle>
                <circle cx="267" cy="193" r="3"></circle>
                <circle cx="157" cy="171" r="4"></circle>
                <circle cx="175" cy="187" r="3.5"></circle>
                <circle cx="192" cy="178" r="3.5"></circle>
                <circle className="blinkpt" cx="236" cy="190" r="5" style={{ animationDelay: ".4s" }}></circle>
                <circle cx="120" cy="129" r="3"></circle>
                <circle cx="121" cy="150" r="3"></circle>
                <circle cx="274" cy="204" r="3.5"></circle>
                <circle cx="110" cy="195" r="4"></circle>
                <circle className="blinkpt" cx="134" cy="242" r="5" style={{ animationDelay: ".8s" }}></circle>
                <circle cx="227" cy="203" r="3"></circle>
                <circle cx="122" cy="212" r="3"></circle>
                <circle cx="100" cy="147" r="3.5"></circle>
                <circle cx="145" cy="120" r="3.5"></circle>
                <circle className="blinkpt" cx="58" cy="190" r="5" style={{ animationDelay: "1.2s" }}></circle>
                <circle cx="150" cy="232" r="4"></circle>
                <circle cx="174" cy="148" r="3.5"></circle>
                <circle cx="69" cy="156" r="4"></circle>
                <circle cx="88" cy="178" r="3"></circle>
                <circle cx="205" cy="125" r="3"></circle>
                <circle cx="80" cy="225" r="3.5"></circle>
                <circle className="blinkpt" cx="382" cy="280" r="5" style={{ animationDelay: "1.6s" }}></circle>
                <circle cx="377" cy="298" r="3"></circle>
                <circle cx="361" cy="246" r="4"></circle>
                <circle cx="246" cy="222" r="3.5"></circle>
                <circle cx="313" cy="283" r="3.5"></circle>
                <circle className="blinkpt" cx="297" cy="238" r="5" style={{ animationDelay: "2s" }}></circle>
                <circle cx="399" cy="234" r="4"></circle>
                <circle cx="422" cy="277" r="3.5"></circle>
                <circle cx="236" cy="154" r="3.5"></circle>
                <circle cx="328" cy="300" r="4"></circle>
                <circle className="blinkpt" cx="265" cy="322" r="5" style={{ animationDelay: ".6s" }}></circle>
                <circle cx="354" cy="268" r="3"></circle>
                <circle cx="349" cy="314" r="4"></circle>
                <circle cx="331" cy="262" r="3.5"></circle>
                <circle cx="403" cy="262" r="4"></circle>
                <circle className="blinkpt" cx="445" cy="300" r="5" style={{ animationDelay: "1.4s" }}></circle>
                <circle cx="369" cy="214" r="3.5"></circle>
                <circle cx="433" cy="235" r="3.5"></circle>
                <circle cx="300" cy="340" r="3"></circle>
                <circle cx="410" cy="330" r="3.5"></circle>
              </g>
              <text x="60" y="72" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="15" letterSpacing="1.5">MANRIQUE</text>
              <text x="340" y="400" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="15" letterSpacing="1.5">ARANJUEZ</text>
            </svg>
            <div className="maplegend">
              <span><span style={{ color: "#FF7A3D" }}>●</span>{" "}Barrera reportada</span>
              <span><span style={{ color: "#3CC7B4" }}>- -</span>{" "}Ruta accesible</span>
              <span>Ilustración · datos de ejemplo</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="stack sr" style={{ gap: "24px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Contenido previsto</p>
            <h2 className="h2">Qué encontrarás.</h2>
            <ul className="checks" style={{ gridTemplateColumns: "1fr", gap: "0" }}>
              <li>Mapa de barreras por zona de la ciudad</li>
              <li>Clasificación por tipo de barrera</li>
              <li>Metodología de levantamiento y validación</li>
              <li>Recomendaciones para priorizar obras</li>
            </ul>
            <p className="mono muted" style={{ fontSize: "13px" }}>Licencia de los datos:{" "}<span className="fill">[DEFINIR LICENCIA ABIERTA]</span></p>
          </div>
          <Media className="media sr" kind="Mapa real" tag="Manrique · Aranjuez" icon="map" file="solyon-move-barriers.png" alt="Mapa real. [MAPA REAL DE LAS 378 BARRERAS]. Piloto SOLYON Move · feb–ago 2026">
              <b>[MAPA REAL DE LAS 378 BARRERAS]</b>
              <span>Piloto SOLYON Move · feb–ago 2026</span>
          </Media>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Para quién es</p>
            <h2 className="h2">Datos para quien decide y para quien investiga.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h3">Entidades públicas</h3>
              <p className="muted">Priorizar inversión en accesibilidad con evidencia georreferenciada.</p>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h3">Academia</h3>
              <p className="muted">Una base de datos real para estudiar movilidad y discapacidad.</p>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h3">Organizaciones y medios</h3>
              <p className="muted">Evidencia para incidencia pública y periodismo de datos.</p>
            </div>
          </div>
          <p className="mono" style={{ color: "#A9B8BE", fontSize: "13px", marginTop: "40px" }}>Fuente: piloto Medellín Mobility for All · Ruta N y Toyota Mobility Foundation · Manrique y Aranjuez · febrero a agosto de 2026</p>
        </div>
      </section>
      <section className="section paper" id="descargar">
        <div className="wrap split">
          <div className="stack sr" style={{ gap: "16px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Descarga gratuita</p>
            <h2 className="h2">Recibe el reporte en tu correo.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Te avisaremos también cuando publiquemos nuevos municipios.</p>
          </div>
          <LeadForm audience="reporte" className="stack" style={{ gap: "20px" }} aria-label="Descarga del reporte de barreras">
            <div className="grid g2" style={{ gap: "20px" }}>
              <div className="field">
                <label htmlFor="b-name">Nombre</label>
                <input name="b-name" required id="b-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="b-email">Correo</label>
                <input name="b-email" required id="b-email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="b-org">Organización</label>
                <input name="b-org" required id="b-org" type="text" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="b-profile">Perfil</label>
                <select id="b-profile" name="b-profile" required>
                  <option>Entidad pública</option>
                  <option>Academia</option>
                  <option>Organización social</option>
                  <option>Medio de comunicación</option>
                  <option>Empresa</option>
                  <option>Ciudadano</option>
                </select>
              </div>
            </div>
            <label className="check"><input type="checkbox" name="consent" required />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
            <button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Descargar reporte (PDF)</button>
          </LeadForm>
        </div>
      </section>
      <section className="section" style={{ padding: "88px 0" }}>
        <div className="wrap band">
          <h2 className="h2 sr">¿Quieres este mapa para tu municipio?</h2>
          <Link className="btn btn-primary" href="/soluciones/gobierno">Ver solución de gobierno</Link>
        </div>
      </section>
    </>
  );
}
