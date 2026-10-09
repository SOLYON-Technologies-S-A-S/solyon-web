"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const TABS = [
  { id: "retail", label: "Retail de alto ticket" },
  { id: "gov", label: "Gobierno y territorio" },
  { id: "ins", label: "Insurance (US)" },
];

// Pestañas de la home (patrón ARIA tabs): flechas, Inicio y Fin mueven la selección.
export default function HomeTabs() {
  const [tab, setTab] = useState("retail");
  const refs = useRef({});

  const onKeyDown = (e) => {
    const i = TABS.findIndex((t) => t.id === tab);
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    setTab(TABS[next].id);
    refs.current[TABS[next].id]?.focus();
  };

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Soluciones por tipo de cliente" onKeyDown={onKeyDown}>
        {TABS.map((t) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[t.id] = el)}
            className="tab"
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="panel-soluciones"
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === "retail" && (
        <>
        <div className="panel" role="tabpanel" id="panel-soluciones" aria-labelledby={`tab-${tab}`} tabIndex={0}>
          <div className="stack" style={{ gap: "20px" }}>
            <span className="tag tag-dev"><span className="dot"></span>Programa clientes fundadores</span>
            <h3 className="h2" style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}>Vende tu drop al cliente correcto antes de publicarlo.</h3>
            <p className="muted" style={{ fontSize: "18px" }}>Para boutiques de alto ticket que venden por WhatsApp e Instagram. En vivo en 21 días, bajo tu propia marca.</p>
            <Link className="btn btn-primary" href="/soluciones/retail" style={{ width: "fit-content" }}>Ver solución retail</Link>
          </div>
          <div className="drop" style={{ maxWidth: "360px", justifySelf: "center", width: "100%", boxShadow: "0 30px 60px -30px rgba(11,29,38,.35)" }}>
            <span className="chip" style={{ width: "fit-content" }}>Acceso anticipado · solo VIP</span>
            <div className="img">[FOTO DEL PRODUCTO]</div>
            <b>Jordan 4 Retro · Talla 42</b>
            <div className="timer">
              <span>Reservado para ti</span>
              <span>14:59</span>
            </div>
            <div className="bar">
              <i></i>
            </div>
            <div className="paybtn">Pagar y asegurar</div>
          </div>
        </div>
        </>
      )}
      {tab === "gov" && (
        <>
        <div className="panel" role="tabpanel" id="panel-soluciones" aria-labelledby={`tab-${tab}`} tabIndex={0}>
          <div className="stack" style={{ gap: "20px" }}>
            <span className="tag tag-live"><span className="dot"></span>Validado en Medellín</span>
            <h3 className="h2" style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}>Datos del territorio para planear y rendir cuentas.</h3>
            <p className="muted" style={{ fontSize: "18px" }}>Mapa de barreras, observatorio territorial y accesibilidad de flota, con trabajo de campo incluido.</p>
            <Link className="btn btn-primary" href="/soluciones/gobierno" style={{ width: "fit-content" }}>Ver solución de gobierno</Link>
          </div>
          <div style={{ background: "#0B1D26", borderRadius: "12px", padding: "20px", position: "relative" }}>
            <svg viewBox="0 0 480 320" style={{ width: "100%", display: "block" }} role="img" aria-label="Mapa ilustrativo de barreras en Manrique y Aranjuez">
              <g fill="none" stroke="#2A5466" strokeWidth="1">
                <ellipse cx="200" cy="160" rx="60" ry="40" transform="rotate(-14 200 160)"></ellipse>
                <ellipse cx="200" cy="160" rx="120" ry="80" transform="rotate(-12 200 160)"></ellipse>
                <ellipse cx="210" cy="165" rx="185" ry="120" transform="rotate(-10 210 165)"></ellipse>
                <ellipse cx="340" cy="140" rx="70" ry="50" transform="rotate(-8 340 140)"></ellipse>
                <ellipse cx="340" cy="140" rx="120" ry="85" transform="rotate(-8 340 140)"></ellipse>
              </g>
              <path d="M60 260 C 140 220, 180 190, 230 160 S 330 110, 420 80" fill="none" stroke="#3CC7B4" strokeWidth="2" strokeDasharray="6 6"></path>
              <g fill="#FF7A3D">
                <circle cx="150" cy="210" r="5"></circle>
                <circle cx="190" cy="140" r="5"></circle>
                <circle cx="250" cy="185" r="5"></circle>
                <circle cx="300" cy="120" r="5"></circle>
                <circle cx="355" cy="160" r="5"></circle>
                <circle cx="390" cy="105" r="5"></circle>
                <circle cx="120" cy="150" r="5"></circle>
                <circle cx="270" cy="230" r="5"></circle>
              </g>
              <text x="130" y="105" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">MANRIQUE</text>
              <text x="330" y="215" fill="#A9B8BE" fontFamily="IBM Plex Mono, monospace" fontSize="12">ARANJUEZ</text>
            </svg>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginTop: "12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#A9B8BE" }}>
              <span><span style={{ color: "#FF7A3D" }}>●</span>{" "}Barrera reportada</span>
              <span><span style={{ color: "#3CC7B4" }}>- -</span>{" "}Ruta accesible</span>
              <span>Ilustración</span>
            </div>
          </div>
        </div>
        </>
      )}
      {tab === "ins" && (
        <>
        <div className="panel" role="tabpanel" id="panel-soluciones" aria-labelledby={`tab-${tab}`} tabIndex={0} lang="en">
          <div className="stack" style={{ gap: "20px" }}>
            <span className="tag tag-val"><span className="dot"></span>Design partners · US</span>
            <h3 className="h2" style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}>Compliance and renewals that never depend on memory.</h3>
            <p className="muted" style={{ fontSize: "18px" }}>Operational intelligence for commercial insurance and trucking compliance in the United States.</p>
            <Link className="btn btn-primary" href="/en/insurance" style={{ width: "fit-content" }}>See insurance solution</Link>
          </div>
          <div className="record" style={{ background: "#fff", border: "1px solid #D5DBD8", boxShadow: "0 30px 60px -30px rgba(11,29,38,.35)", fontSize: "14px" }}>
            <div className="hd">
              <span>Account · Fleet of 14 units</span>
              <span className="chip">Action needed</span>
            </div>
            <span className="k">Certificate</span>
            <span className="v">Expires in 12 days</span>
            <span className="k">DOT filing</span>
            <span className="v">
              <span className="chip ok">Up to date</span>
            </span>
            <span className="k">Renewal</span>
            <span className="v">Quote follow-up scheduled</span>
            <span className="k">Memory</span>
            <span className="v">3 exceptions on record</span>
            <span className="k" style={{ gridColumn: "1/-1", paddingTop: "8px" }}>Interface illustration · sample data</span>
          </div>
        </div>
        </>
      )}
    </>
  );
}
