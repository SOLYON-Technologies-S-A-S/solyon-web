"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  ["/soluciones/retail", "Retail"],
  ["/soluciones/gobierno", "Gobierno"],
  ["/en/insurance", "Insurance"],
  ["/tecnologia", "Tecnología"],
  ["/investigacion", "Investigación"],
  ["/nosotros", "Nosotros"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const burger = useRef(null);

  // Escape cierra el menú y devuelve el foco al botón.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <nav aria-label="Principal" className="wrap nav-in">
        <Link className="brand" href="/" aria-label="SOLYON Technologies, inicio" onClick={close}>
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <ellipse cx="15" cy="15" rx="13" ry="9" transform="rotate(-18 15 15)" fill="none" stroke="#E9EEEC" strokeWidth="1.5" />
            <ellipse cx="15" cy="15" rx="7.5" ry="5" transform="rotate(-18 15 15)" fill="none" stroke="#E9EEEC" strokeWidth="1.5" />
            <circle cx="15" cy="15" r="2.5" fill="#FF7A3D" />
          </svg>
          <span>SOLYON</span>
        </Link>
        <div className={`nav-links${open ? " open" : ""}`} id="menu">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
        </div>
        <div className="nav-cta">
          <Link className="lang" href="/en/insurance" lang="en" aria-label="English version">ES / EN</Link>
          <Link className="go" href="/contacto" onClick={close}>Agendar diagnóstico</Link>
          <button
            ref={burger}
            className="burger"
            type="button"
            aria-controls="menu"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
