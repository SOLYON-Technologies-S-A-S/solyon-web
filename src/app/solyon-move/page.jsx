import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Media from "@/components/ui/Media";

export const metadata = pageMeta({
  title: "SOLYON Move · Movilidad accesible",
  description: "Rutas con menos pendientes y obstáculos para personas con movilidad reducida. Cada reporte se vuelve un dato para la ciudad.",
  path: "/solyon-move",
});

export default function MovePage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "26px" }}>
            <Link className="crumb" href="/">Inicio / Soluciones / SOLYON Move</Link>
            <span className="kicker reveal"><span className="live"></span>App gratuita ·{" "}<b>Android</b></span>
            <h1 className="h1 reveal d1">Moverse por la ciudad sin adivinar dónde están las barreras.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Rutas con menos pendientes y obstáculos para personas con movilidad reducida. Cada reporte se vuelve un dato para la ciudad.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="https://play.google.com/store/apps/details?id=com.solyon.move">Descargar en Google Play</a>
              <a className="btn btn-secondary" href="#video">Ver el video</a>
            </div>
            <div className="statrow reveal d4">
              <div>
                <b>184</b>
                <span>usuarios activos</span>
              </div>
              <div>
                <b>378</b>
                <span>barreras mapeadas</span>
              </div>
              <div>
                <b>+60%</b>
                <span>salidas autónomas</span>
              </div>
            </div>
          </div>
          <div className="phone reveal d2" aria-label="Ejemplo animado de la app SOLYON Move sugiriendo una ruta accesible">
            <div className="phone-head">
              <span className="avatar">SM</span>
              <div>
                <b>SOLYON Move</b>
                <small>Ruta accesible activa</small>
              </div>
            </div>
            <div className="phone-body" style={{ minHeight: "460px" }}>
              <div className="route step-in">
                <svg viewBox="0 0 280 160" aria-hidden="true">
                  <g fill="none" stroke="#C5CECA" strokeWidth="10" strokeLinecap="round">
                    <path d="M10 140 L90 100 L170 110 L270 30"></path>
                    <path d="M90 100 L120 20"></path>
                    <path d="M170 110 L230 150"></path>
                  </g>
                  <path d="M90 100 L120 20" fill="none" stroke="#B84A12" strokeWidth="3" strokeDasharray="3 5"></path>
                  <path className="go" d="M10 140 L90 100 L170 110 L270 30" fill="none" stroke="#0E6E62" strokeWidth="4" strokeLinecap="round"></path>
                  <circle cx="108" cy="52" r="7" fill="#FF7A3D"></circle>
                  <circle cx="10" cy="140" r="6" fill="#0B1D26"></circle>
                  <circle cx="270" cy="30" r="6" fill="#0E6E62"></circle>
                </svg>
              </div>
              <div className="alert step-in s2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B84A12" strokeWidth="2" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                  <path d="M12 3l10 18H2z"></path>
                  <path d="M12 10v5M12 18v.5"></path>
                </svg>
                <div><b>Barrera reportada a 120 m</b>Escaleras sin rampa en el camino corto.</div>
              </div>
              <div className="msg them step-in s2">Te propongo esta ruta: 3 minutos más, sin escaleras y con andén amplio.</div>
              <div className="paybtn step-in s3" style={{ background: "#0E6E62", color: "#fff" }}>Iniciar ruta accesible</div>
              <p className="mono" style={{ fontSize: "10.5px", color: "#4A5A61", textAlign: "center" }}>Ilustración · datos de ejemplo</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Para las personas</p>
            <h2 className="h2">Una ruta pensada para tu forma de moverte.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h4">Perfil de movilidad</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Le dices cómo te mueves y la ruta se adapta a ti.</p>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h4">Rutas sin obstáculos</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Trayectos con menos pendientes, escaleras y barreras.</p>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h4">Alertas en el camino</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Avisos sobre condiciones de la ruta antes de salir.</p>
            </div>
            <div>
              <span className="n">04</span>
              <h3 className="h4">Reporta y ayuda a otros</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Una foto y la ubicación bastan para mapear una barrera nueva.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark" id="video">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">El piloto · febrero a agosto de 2026</p>
            <h2 className="h2">Medido en las calles de Manrique y Aranjuez.</h2>
          </div>
          <a className="video sr" href="https://www.youtube.com/watch?v=0SyayXeU42g" aria-label="Ver en YouTube el video del piloto SOLYON Move">
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 4l14 8-14 8z"></path>
              </svg>
            </span>
            <div className="vmeta">
              <b>SOLYON Move en las calles de Medellín</b>
              <span>Video del piloto · YouTube</span>
            </div>
          </a>
          <div className="bigstat sr" style={{ marginTop: "56px" }}>
            <div>
              <span className="n">184</span>
              <span className="l">usuarios activos al cierre, frente a una meta contractual de 150</span>
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
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Evidencia de campo</p>
            <h2 className="h2">Así se ve el trabajo en la calle.</h2>
          </div>
          <div className="gallery sr">
            <Media className="media big" kind="Foto real" tag="Manrique · 2026" icon="photo" file="solyon-move-field-validation.jpeg" alt="Foto real. Validación en territorio. Recorridos con usuarios del piloto">
                <b>Validación en territorio</b>
                <span>Recorridos con usuarios del piloto</span>
            </Media>
            <Media className="media tall" kind="Producto" tag="App" icon="phone" file="solyon-move-app-real.jpeg" alt="Producto. La app en uso. Captura real">
                <b>La app en uso</b>
                <span>Captura real</span>
            </Media>
            <Media className="media" kind="Evidencia" tag="378" icon="photo" file="solyon-move-barriers.png" alt="Evidencia. Barreras documentadas">
                <b>Barreras documentadas</b>
            </Media>
            <Media className="media" kind="Plataforma" tag="Entidad" icon="desktop" file="solyon-move-crm-historica.png" alt="Plataforma. CRM y mapa territorial. Reportes e historiales en tiempo real">
                <b>CRM y mapa territorial</b>
                <span>Reportes e historiales en tiempo real</span>
            </Media>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="stack sr" style={{ gap: "20px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>La infraestructura</p>
            <h2 className="h2">La app es solo la capa visible.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Detrás opera SOLYON OS, la misma arquitectura de nuestras otras soluciones. Las rutas se calculan con un motor propio.</p>
            <Link className="link" href="/tecnologia" style={{ width: "fit-content" }}>Conocer SOLYON OS →</Link>
          </div>
          <div className="stackviz sr">
            <div className="lyr">
              <b>Inteligencia urbana</b>
              <span>Patrones para decidir</span>
            </div>
            <div className="lyr">
              <b>Capa institucional</b>
              <span>CRM e incidentes</span>
            </div>
            <div className="lyr core">
              <b>Capa de datos</b>
              <span>Barreras con evidencia</span>
            </div>
            <div className="lyr">
              <b>Capa de integración</b>
              <span>API</span>
            </div>
            <div className="lyr">
              <b>Capa ciudadana</b>
              <span>La app</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <div className="head sr" style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", maxWidth: "none" }}>
            <div>
              <p className="eyebrow">Así lo contaron</p>
              <h2 className="h2">Tres instituciones publicaron el piloto.</h2>
            </div>
          </div>
          <div className="quote-strip sr">
            <a className="qs" href="https://toyotamobilityfoundation.org/en/press-room/pressrelease02162026/">
              <span className="m">Internacional · feb 2026</span>
              <span className="o">Toyota Mobility Foundation</span>
              <p>SOLYON, entre los cinco proyectos seleccionados para la movilidad inclusiva en Medellín.</p>
            </a>
            <a className="qs" href="https://www.medellin.gov.co/es/sala-de-prensa/noticias/en-medellin-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida/">
              <span className="m">Gobierno · ago 2026</span>
              <span className="o">Alcaldía de Medellín</span>
              <p>Una de las dos plataformas con IA para quienes se mueven con dificultad.</p>
            </a>
            <a className="qs" href="https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida">
              <span className="m">Ecosistema CTI · ago 2026</span>
              <span className="o">Ruta N</span>
              <p>Los resultados del piloto en Manrique y Aranjuez.</p>
            </a>
          </div>
          <div className="feat sr" style={{ marginTop: "64px" }}>
            <div>
              <span className="tag tag-dev"><span className="dot"></span>Lo que sigue · en desarrollo</span>
              <h3 className="h3">Un asistente que conversa por voz</h3>
              <p className="muted">Movilidad y contexto territorial por voz, con apoyo del ElevenLabs Grant.</p>
            </div>
            <div>
              <span className="tag tag-val"><span className="dot"></span>Lo que sigue · en conversación</span>
              <h3 className="h3">Más municipios en 2027</h3>
              <p className="muted">Ampliar el mapa de barreras y el observatorio a otros municipios del Valle de Aburrá.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap band">
          <div>
            <p className="eyebrow">Para alcaldías y operadores de transporte</p>
            <h2 className="h2">Lleva SOLYON Move a tu territorio.</h2>
          </div>
          <Link className="btn btn-primary" href="/soluciones/gobierno">Ver solución para gobierno</Link>
        </div>
      </section>
    </>
  );
}
