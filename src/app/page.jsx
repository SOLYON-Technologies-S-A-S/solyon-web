import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Media from "@/components/ui/Media";
import HomeTabs from "@/components/home/HomeTabs";

export const metadata = pageMeta({
  title: "SOLYON Technologies · Inicio",
  description: "Tomamos lo que hoy vive en chats, hojas de cálculo y en la cabeza de tu equipo, y lo convertimos en un sistema que vende, decide y reporta.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero dark" style={{ padding: "96px 0 112px" }}>
        <svg className="hero-art" viewBox="0 0 900 900" aria-hidden="true" style={{ opacity: "0.35", right: "-320px" }}>
          <g fill="none" stroke="#2A5466" strokeWidth="1">
            <ellipse cx="520" cy="430" rx="150" ry="104" transform="rotate(-16 520 430)"></ellipse>
            <ellipse cx="510" cy="440" rx="225" ry="160" transform="rotate(-14 510 440)"></ellipse>
            <ellipse cx="500" cy="450" rx="300" ry="215" transform="rotate(-12 500 450)"></ellipse>
            <ellipse cx="490" cy="460" rx="378" ry="272" transform="rotate(-10 490 460)"></ellipse>
          </g>
        </svg>
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="kicker reveal" href="/prensa">
              <span className="live"></span>
              Seleccionados por{" "}
              <b>Toyota Mobility Foundation</b>
              {" "}→
            </Link>
            <h1 className="h1 reveal d1">Tu operación, convertida en software e IA.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "560px" }}>Tomamos lo que hoy vive en chats, hojas de cálculo y en la cabeza de tu equipo, y lo convertimos en un sistema que vende, decide y reporta.</p>
            <div className="row reveal d3" style={{ marginTop: "8px" }}>
              <Link className="btn btn-primary" href="/contacto">Agendar diagnóstico</Link>
              <a className="btn btn-secondary" href="#soluciones">Ver cómo funciona</a>
            </div>
            <p className="coords reveal d4">6.2442° N · 75.5812° W — Medellín, Colombia</p>
          </div>
          <div className="console reveal d2" aria-label="Ejemplo animado: un mensaje de WhatsApp se convierte en una ficha de cliente">
            <div className="console-bar">
              <span>SOLYON OS · en vivo</span>
              <span className="on">Procesando</span>
            </div>
            <div className="bubble step-in"><small>WhatsApp · 10:42</small>Hola! ¿Ya llegaron los Jordan 4 en talla 42? La vez pasada me quedé sin ellos.</div>
            <div className="engine step-in s2">Arcanum estructura</div>
            <div className="record step-in s3">
              <div className="hd">
                <span>Ficha VIP · Andrés M.</span>
                <span className="chip ok">Cliente recurrente</span>
              </div>
              <span className="k">Talla</span>
              <span className="v">42</span>
              <span className="k">Interés</span>
              <span className="v">Jordan 4 · lanzamientos</span>
              <span className="k">Historial</span>
              <span className="v">3 compras · ticket alto</span>
              <span className="k">Acción</span>
              <span className="v">
                <span className="chip">Ofrecer en el próximo drop</span>
              </span>
            </div>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Ilustración del flujo · datos de ejemplo</p>
          </div>
        </div>
      </section>
      <section className="paper" style={{ padding: "28px 0", borderBottom: "1px solid #D5DBD8" }}>
        <div className="marquee" aria-label="Publicaciones y respaldos">
          <div className="marquee-track">
            <Link className="mq" href="/prensa"><small>Publicado por</small>Toyota Mobility Foundation</Link>
            <Link className="mq" href="/prensa"><small>Publicado por</small>Alcaldía de Medellín</Link>
            <Link className="mq" href="/prensa"><small>Publicado por</small>Ruta N</Link>
            <span className="mq"><small>Grant</small>ElevenLabs</span>
            <span className="mq"><small>Programa</small>Google for Startups</span>
            <span className="mq"><small>Grupo certificado</small>MinCiencias</span>
            <span className="mq"><small>Incubación</small>Créame</span>
            <Link className="mq" href="/prensa" aria-hidden="true" tabIndex="-1"><small>Publicado por</small>Toyota Mobility Foundation</Link>
            <Link className="mq" href="/prensa" aria-hidden="true" tabIndex="-1"><small>Publicado por</small>Alcaldía de Medellín</Link>
            <Link className="mq" href="/prensa" aria-hidden="true" tabIndex="-1"><small>Publicado por</small>Ruta N</Link>
            <span className="mq" aria-hidden="true"><small>Grant</small>ElevenLabs</span>
            <span className="mq" aria-hidden="true"><small>Programa</small>Google for Startups</span>
            <span className="mq" aria-hidden="true"><small>Grupo certificado</small>MinCiencias</span>
            <span className="mq" aria-hidden="true"><small>Incubación</small>Créame</span>
          </div>
        </div>
      </section>
      <section className="section" id="soluciones">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Soluciones</p>
            <h2 className="h2">Una infraestructura. Tres operaciones.</h2>
          </div>
          <HomeTabs />
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Evidencia, no promesas</p>
            <h2 className="h2">Ya funcionó en las calles de Medellín.</h2>
          </div>
          <div className="bigstat sr">
            <div>
              <span className="n">184</span>
              <span className="l">usuarios activos al cierre, frente a una meta contractual de 150</span>
            </div>
            <div>
              <span className="n">378</span>
              <span className="l">barreras urbanas georreferenciadas con evidencia</span>
            </div>
            <div>
              <span className="n">−44%</span>
              <span className="l">de incertidumbre antes de cada viaje</span>
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
                <b>SOLYON Move en Manrique y Aranjuez</b>
                <span>Video del piloto</span>
              </div>
            </a>
            <div className="side">
              <Media className="media" kind="Foto real" tag="Manrique" icon="photo" file="solyon-move-field-validation.jpeg" alt="Foto real. Validación en territorio">
                  <b>Validación en territorio</b>
              </Media>
              <Media className="media" kind="Producto" tag="App" icon="phone" file="solyon-move-app-real.jpeg" alt="Producto. La app en uso">
                  <b>La app en uso</b>
              </Media>
            </div>
          </div>
          <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "12px 32px", justifyContent: "space-between", alignItems: "center" }}>
            <p className="muted" style={{ fontSize: "14px" }}>Piloto Medellín Mobility for All · Ruta N y Toyota Mobility Foundation · febrero a agosto de 2026</p>
            <Link className="link" href="/solyon-move">Ver el caso completo →</Link>
          </div>
        </div>
      </section>
      <section className="section paper" style={{ padding: "88px 0" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "16px", marginBottom: "8px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Así lo contaron</p>
            <Link className="link" href="/prensa">Sala de prensa →</Link>
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
              <p>SOLYON Move, una de las dos plataformas con IA para quienes se mueven con dificultad.</p>
            </a>
            <a className="qs" href="https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida">
              <span className="m">Ecosistema CTI · ago 2026</span>
              <span className="o">Ruta N</span>
              <p>Los resultados del piloto en Manrique y Aranjuez.</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="stack sr" style={{ gap: "24px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>La tecnología</p>
            <h2 className="h2">Cada cliente nuevo usa lo que construimos para el anterior.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>SOLYON OS reutiliza los mismos componentes entre industrias. Arcanum, nuestro motor de IA, le da memoria a cada operación.</p>
            <ul className="list" style={{ marginTop: "8px" }}>
              <li>
                <Link className="link" href="/investigacion">Grupo de investigación certificado por MinCiencias</Link>
              </li>
              <li>
                <Link className="link" href="/investigacion/propiedad-intelectual">Software propio registrado ante la DNDA</Link>
              </li>
              <li>
                <Link className="link" href="/reporte-barreras">Datos abiertos: reporte de barreras de Medellín</Link>
              </li>
            </ul>
            <Link className="btn btn-secondary" href="/tecnologia" style={{ width: "fit-content", marginTop: "8px" }}>Explorar SOLYON OS</Link>
          </div>
          <div className="stackviz sr" aria-label="Capas de SOLYON OS">
            <div className="lyr">
              <b>Agentes y automatización</b>
              <span>04 · Agents</span>
            </div>
            <div className="lyr">
              <b>Sistemas operativos</b>
              <span>03 · Systems</span>
            </div>
            <div className="lyr core">
              <b>Arcanum · memoria e inteligencia</b>
              <span>Núcleo</span>
            </div>
            <div className="lyr">
              <b>Infraestructura de datos</b>
              <span>02 · Data</span>
            </div>
            <div className="lyr">
              <b>Conocimiento operacional</b>
              <span>01 · Knowledge</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
          <h2 className="h2 sr" style={{ maxWidth: "900px" }}>¿Qué parte de tu operación vive en WhatsApp, Excel o en la cabeza de alguien?</h2>
          <p className="lead" style={{ margin: "0" }}>En 30 minutos te decimos qué se puede convertir en sistema.</p>
          <div className="row">
            <Link className="btn btn-primary" href="/contacto">Agendar diagnóstico de 30 minutos</Link>
            <a className="btn btn-secondary" href="https://wa.me/573147903517">Escribir por WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
