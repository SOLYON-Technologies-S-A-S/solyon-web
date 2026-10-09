"use client";

import { Fragment, useState } from "react";

// Texto tal cual en Retail.dc.html. El último ítem es un dato pendiente del fundador (SPEC §7).
const ITEMS = [
  { q: "¿Tengo que cambiar mi WhatsApp o mi Instagram?", a: "No. SOLYON trabaja con tus canales actuales y los conecta a tu sistema." },
  { q: "¿Cuánto tarda en estar funcionando?", a: "21 días desde la firma hasta el primer lanzamiento." },
  { q: "¿Hay cláusula de permanencia?", a: "No. Puedes cancelar la suscripción en cualquier momento." },
  { q: "¿De quién son los datos de mis clientes?", a: "[CONFIRMAR POLÍTICA DE PROPIEDAD Y TRATAMIENTO DE DATOS]" },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {ITEMS.map((f, i) => {
        const isOpen = open === i;
        return (
          <Fragment key={f.q}>
            <h3 style={{ margin: 0, font: "inherit" }}>
              <button
                type="button"
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="sign" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen}>
              <p className="ans">{f.a}</p>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
