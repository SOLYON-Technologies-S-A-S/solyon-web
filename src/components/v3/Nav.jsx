"use client";

// Generado desde el canvas v3 (Nav.dc.html): Navegación SOLYON
// No editar a mano sin actualizar el canvas; ver design/v3/README.md
import { Fragment, useState } from "react";

class DCLogic {
  constructor(state, setState, props) { this.state = state; this.setState = setState; this.props = props || {}; }
}

class Component extends DCLogic {
  renderVals() {
    const open = !!(this.state && this.state.open);
    return { ctaLabel: this.props.ctaLabel ?? 'Hablar con el equipo', ctaHref: this.props.ctaHref ?? '/contacto', open: open, closed: !open, openCls: open ? 'open' : '', expanded: open ? 'true' : 'false', label: open ? 'Cerrar menú' : 'Abrir menú', toggle: () => this.setState({ open: !open }) };
  }
}

export default function Nav(props) {
  const [state, set] = useState({});
  const c = new Component(state, (p) => set((s) => ({ ...s, ...p })), props);
  const v = c.renderVals();
  return (<>{" "}<a className="skip" href="#contenido">{"Saltar al contenido"}</a>{" "}<header className="nav" style={{fontFamily: "'Sora', sans-serif"}}>{" "}<nav aria-label="Principal" className="wrap nav-in">{" "}<a className="brand" href="/" aria-label="SOLYON Technologies, inicio">{" "}<img src="/media/simbolo.png" alt="" />{" "}<div><b>{"SOLYON"}</b><span>{"TECHNOLOGIES"}</span></div>{" "}</a>{" "}<div className={`nav-links ${v.openCls}`} id="menu">{" "}<a href="/soluciones/gobierno">{"Gobierno"}</a>{" "}<a href="/soluciones/empresas">{"Empresas"}</a>{" "}<a href="/soluciones/retail">{"Retail"}</a>{" "}<a href="/solyon-move">{"SOLYON Move"}</a>{" "}<a href="/tecnologia">{"Tecnología"}</a>{" "}<a href="/nosotros">{"Nosotros"}</a>{" "}</div>{" "}<div className="nav-end">{" "}<a className="lang" href="/en/insurance" lang="en">{"Insurance (EN)"}</a>{" "}<a className="btn btn-y" href={v.ctaHref}>{v.ctaLabel}</a>{" "}<button className="burger" type="button" aria-controls="menu" aria-expanded={v.expanded} aria-label={v.label} onClick={v.toggle}>{" "}{v.open && (<><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></>)}{" "}{v.closed && (<><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg></>)}{" "}</button>{" "}</div>{" "}</nav>{" "}</header>{" "}</>);
}
