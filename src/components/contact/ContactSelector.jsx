"use client";

import { useRef, useState } from "react";
import LeadForm from "@/components/forms/LeadForm";

const TABS = [
  { id: "retail", label: "Tengo una boutique", sub: "Retail de alto ticket" },
  { id: "gov", label: "Soy entidad pública", sub: "Gobierno y territorio" },
  { id: "ins", label: "Insurance in the US", sub: "Design partners" },
  { id: "ally", label: "Aliado o academia", sub: "Alianzas, inversión, prensa" },
];

// Selector de audiencia de /contacto (patrón ARIA tabs). Cada perfil muestra su formulario.
// Los formularios se conectan al envío por SMTP en la etapa 4.
export default function ContactSelector() {
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
      <div className="tabs" role="tablist" aria-label="Tipo de contacto" onKeyDown={onKeyDown} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[t.id] = el)}
            className="tab"
            type="button"
            role="tab"
            id={`tab-contacto-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="panel-contacto"
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            style={{ minHeight: "64px", padding: "10px 22px", flexDirection: "column", alignItems: "flex-start", gap: "2px", borderRadius: "12px", textAlign: "left" }}
          >
            <span>{t.label}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: "11.5px", letterSpacing: ".06em", textTransform: "uppercase", opacity: 0.8 }}>{t.sub}</span>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start" }}>
        <div style={{ flex: "2 1 560px", minWidth: "0" }}>
          {tab === "retail" && (
            <>
            <LeadForm audience="retail" className="stack" role="tabpanel" id="panel-contacto" aria-labelledby={`tab-contacto-${tab}`} style={{ gap: "20px", padding: "clamp(24px, 4vw, 40px)", background: "#fff", border: "1px solid #D5DBD8", borderRadius: "14px", animation: "rise .5s cubic-bezier(.2,.7,.2,1) both" }} aria-label="Contacto retail">
              <p className="mono" style={{ color: "#B84A12", fontSize: "13px" }}>Retail de alto ticket · responde ventas@</p>
              <div className="grid g2" style={{ gap: "20px" }}>
                <div className="field">
                  <label htmlFor="c-r-name">Nombre</label>
                  <input name="c-r-name" required id="c-r-name" type="text" autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="c-r-brand">Boutique</label>
                  <input name="c-r-brand" required id="c-r-brand" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="c-r-ig">Instagram</label>
                  <input name="c-r-ig" required id="c-r-ig" type="text" placeholder="@tumarca" />
                </div>
                <div className="field">
                  <label htmlFor="c-r-phone">WhatsApp</label>
                  <input name="c-r-phone" required id="c-r-phone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <label className="check"><input type="checkbox" name="consent" required />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
              <button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Agendar diagnóstico</button>
            </LeadForm>
            </>
          )}
          {tab === "gov" && (
            <>
            <LeadForm audience="gobierno" className="stack" role="tabpanel" id="panel-contacto" aria-labelledby={`tab-contacto-${tab}`} style={{ gap: "20px", padding: "clamp(24px, 4vw, 40px)", background: "#fff", border: "1px solid #D5DBD8", borderRadius: "14px", animation: "rise .5s cubic-bezier(.2,.7,.2,1) both" }} aria-label="Contacto gobierno">
              <p className="mono" style={{ color: "#B84A12", fontSize: "13px" }}>Gobierno y territorio · responde gobierno@</p>
              <div className="grid g2" style={{ gap: "20px" }}>
                <div className="field">
                  <label htmlFor="c-g-entity">Entidad</label>
                  <input name="c-g-entity" required id="c-g-entity" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="c-g-role">Cargo</label>
                  <input name="c-g-role" required id="c-g-role" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="c-g-email">Correo institucional</label>
                  <input name="c-g-email" required id="c-g-email" type="email" autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="c-g-town">Municipio</label>
                  <input name="c-g-town" required id="c-g-town" type="text" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-g-goal">Meta o proyecto del Plan de Desarrollo</label>
                <textarea id="c-g-goal" name="c-g-goal"></textarea>
              </div>
              <label className="check"><input type="checkbox" name="consent" required />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
              <button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Solicitar ficha técnica</button>
            </LeadForm>
            </>
          )}
          {tab === "ins" && (
            <>
            <LeadForm audience="insurance" lang="en" className="stack" role="tabpanel" id="panel-contacto" aria-labelledby={`tab-contacto-${tab}`} style={{ gap: "20px", padding: "clamp(24px, 4vw, 40px)", background: "#fff", border: "1px solid #D5DBD8", borderRadius: "14px", animation: "rise .5s cubic-bezier(.2,.7,.2,1) both" }} aria-label="Insurance contact">
              <p className="mono" style={{ color: "#B84A12", fontSize: "13px" }}>Insurance Operations · partners@</p>
              <div className="grid g2" style={{ gap: "20px" }}>
                <div className="field">
                  <label htmlFor="c-i-name">Full name</label>
                  <input name="c-i-name" required id="c-i-name" type="text" autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="c-i-company">Company</label>
                  <input name="c-i-company" required id="c-i-company" type="text" autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="c-i-email">Work email</label>
                  <input name="c-i-email" required id="c-i-email" type="email" autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="c-i-type">Type of operation</label>
                  <select id="c-i-type" name="c-i-type" required>
                    <option>Insurance agency</option>
                    <option>MGA</option>
                    <option>Carrier</option>
                    <option>Trucking fleet</option>
                    <option>Compliance services</option>
                  </select>
                </div>
              </div>
              <label className="check"><input type="checkbox" name="consent" required />{" "}I agree to SOLYON Technologies' privacy policy.</label>
              <button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Apply as a design partner</button>
            </LeadForm>
            </>
          )}
          {tab === "ally" && (
            <>
            <LeadForm audience="aliados" className="stack" role="tabpanel" id="panel-contacto" aria-labelledby={`tab-contacto-${tab}`} style={{ gap: "20px", padding: "clamp(24px, 4vw, 40px)", background: "#fff", border: "1px solid #D5DBD8", borderRadius: "14px", animation: "rise .5s cubic-bezier(.2,.7,.2,1) both" }} aria-label="Contacto aliados">
              <p className="mono" style={{ color: "#B84A12", fontSize: "13px" }}>Aliados, academia e inversión · responde el fundador</p>
              <div className="grid g2" style={{ gap: "20px" }}>
                <div className="field">
                  <label htmlFor="c-a-name">Nombre</label>
                  <input name="c-a-name" required id="c-a-name" type="text" autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="c-a-org">Organización</label>
                  <input name="c-a-org" required id="c-a-org" type="text" autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="c-a-email">Correo</label>
                  <input name="c-a-email" required id="c-a-email" type="email" autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="c-a-type">Tipo de alianza</label>
                  <select id="c-a-type" name="c-a-type" required>
                    <option>Distribución</option>
                    <option>Academia e investigación</option>
                    <option>Institucional</option>
                    <option>Socio estratégico</option>
                    <option>Prensa</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-a-msg">Mensaje</label>
                <textarea id="c-a-msg" name="c-a-msg"></textarea>
              </div>
              <label className="check"><input type="checkbox" name="consent" required />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
<button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Enviar</button>
            </LeadForm>
            </>
          )}
        </div>
        <aside style={{ flex: "1 1 300px", minWidth: "0" }} aria-label="Canales directos">
          <p className="eyebrow">Canales directos</p>
          <div className="docs">
            <div className="doc">
              <div>
                <b>WhatsApp</b>
                <p>+57 314 790 3517</p>
              </div>
              <a className="link" href="https://wa.me/573147903517">Escribir ↗</a>
            </div>
            <div className="doc">
              <div>
                <b>Ventas</b>
                <p>
                  <span className="fill">[ventas@solyontechnologies.com]</span>
                </p>
              </div>
            </div>
            <div className="doc">
              <div>
                <b>Gobierno</b>
                <p>
                  <span className="fill">[gobierno@solyontechnologies.com]</span>
                </p>
              </div>
            </div>
            <div className="doc">
              <div>
                <b>Fundador</b>
                <p>sergio@solyontechnologies.com</p>
              </div>
            </div>
            <div className="doc">
              <div>
                <b>Medellín, Colombia</b>
                <p>Respondemos en un máximo de{" "}<span className="fill">[N.º]</span>{" "}días hábiles.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
