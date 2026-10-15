"use client";

// Generado desde el canvas v3 (Reportes.dc.html): Muro de reportes
// No editar a mano sin actualizar el canvas; ver design/v3/README.md
import { Fragment, useState } from "react";

class DCLogic {
  constructor(state, setState, props) { this.state = state; this.setState = setState; this.props = props || {}; }
}

class Component extends DCLogic {
  renderVals() {
    const f = (this.state && this.state.f) || 'all';
    const kinds = ['a', 'h', 't', 'h', 'e', 'a', 'h', 'h'];
    const list = [{id: 'all', label: 'Todos'}, {id: 'h', label: 'Huecos y alcantarillas'}, {id: 'a', label: 'Andenes y rampas'}, {id: 't', label: 'Transporte'}, {id: 'e', label: 'Escombros'}];
    const all = !!(this.state && this.state.all);
    const out = { fs: list.map((x) => ({ ...x, on: x.id === f ? 'true' : 'false', pick: () => this.setState({ f: x.id }) })) };
    let shown = 0, total = 0;
    kinds.forEach((k, i) => { const ok = f === 'all' || f === k; if (ok) total++; const vis = ok && (all || shown < 4); if (vis) shown++; out['s' + i] = vis; });
    out.hasMore = total > 4;
    out.moreLabel = all ? 'Ver menos' : 'Ver los ' + total + ' reportes';
    out.more = () => this.setState({ all: !all });
    return out;
  }
}

export default function Reportes(props) {
  const [state, set] = useState({});
  const c = new Component(state, (p) => set((s) => ({ ...s, ...p })), props);
  const v = c.renderVals();
  return (<>{" "}<section className="s-crema sec" style={{fontFamily: "'Sora', sans-serif"}}>{" "}<div className="wrap">{" "}<div className="rw-head">{" "}<div style={{display: "flex", flexDirection: "column", gap: "12px", maxWidth: "640px"}}>{" "}<h2 className="d2">{"Así se ve un reporte de Ojos de Ciudad."}</h2>{" "}<p className="lead sub">{"Foto, dirección, tipo de barrera y fecha. Cada uno entra al mapa y al cálculo de esfuerzo de Arcanum."}</p>{" "}</div>{" "}<div className="rw-f" role="group" aria-label="Filtrar reportes por tipo">{v.fs.map((f, $index) => (<Fragment key={$index}><button type="button" aria-pressed={f.on} onClick={f.pick}>{f.label}</button></Fragment>))}</div>{" "}</div>{" "}<div className="rw-grid" aria-live="polite">{" "}{v.s0 && (<><article className="rw-c"><figure><img src="/media/rep_ce401abd_0.jpg" alt="Foto del reporte: acera estrecha, sin rampa, Cra. 52 # 81-3" /><span className="ty a">{"Andenes y rampas"}</span></figure><div className="rw-b"><b>{"Acera estrecha, sin rampa"}</b><span>{"Cra. 52 # 81-3, Medellín. 28 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s1 && (<><article className="rw-c"><figure><img src="/media/rep_4aadc940_0.jpg" alt="Foto del reporte: hueco peligroso, Cl. 52B # 80-4" /><span className="ty h">{"Huecos y alcantarillas"}</span></figure><div className="rw-b"><b>{"Hueco peligroso"}</b><span>{"Cl. 52B # 80-4, Medellín. 30 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s2 && (<><article className="rw-c"><figure><img src="/media/rep_478c5344_0.jpg" alt="Foto del reporte: paradero de bus demasiado estrecho para personas con movilidad reducida, Cra. 34 # 95AA-64" /><span className="ty t">{"Transporte"}</span></figure><div className="rw-b"><b>{"Paradero de bus demasiado estrecho para personas con movilidad reducida"}</b><span>{"Cra. 34 # 95AA-64, Medellín. 28 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s3 && (<><article className="rw-c"><figure><img src="/media/rep_80a9c386_0.jpg" alt="Foto del reporte: alcantarilla abierta en obra, Cra. 52 # 91-47" /><span className="ty h">{"Huecos y alcantarillas"}</span></figure><div className="rw-b"><b>{"Alcantarilla abierta en obra"}</b><span>{"Cra. 52 # 91-47, Medellín. 28 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s4 && (<><article className="rw-c"><figure><img src="/media/rep_5c7a1d76_0.jpg" alt="Foto del reporte: escombros en la vía, Cra. 52 # 82A-29" /><span className="ty e">{"Escombros"}</span></figure><div className="rw-b"><b>{"Escombros en la vía"}</b><span>{"Cra. 52 # 82A-29, Medellín. 28 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s5 && (<><article className="rw-c"><figure><img src="/media/rep_6cb86282_0.jpg" alt="Foto del reporte: andén angosto por obra, Av. 80 # 59AA-19" /><span className="ty a">{"Andenes y rampas"}</span></figure><div className="rw-b"><b>{"Andén angosto por obra"}</b><span>{"Av. 80 # 59AA-19, Medellín. 30 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s6 && (<><article className="rw-c"><figure><img src="/media/rep_d9209fe7_0.jpg" alt="Foto del reporte: hueco en el andén, Av. 80 # 52-51" /><span className="ty h">{"Huecos y alcantarillas"}</span></figure><div className="rw-b"><b>{"Hueco en el andén"}</b><span>{"Av. 80 # 52-51, Medellín. 30 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}{v.s7 && (<><article className="rw-c"><figure><img src="/media/rep_4aadc940_1.jpg" alt="Foto del reporte: alcantarilla sin tapa, Cl. 52B # 80-4" /><span className="ty h">{"Huecos y alcantarillas"}</span></figure><div className="rw-b"><b>{"Alcantarilla sin tapa"}</b><span>{"Cl. 52B # 80-4, Medellín. 30 jul 2026"}</span><span className="an">{"Ciudadano anonimizado"}</span></div></article></>)}{" "}</div>{" "}{v.hasMore && (<><div style={{marginTop: "22px"}}><button className="btn btn-o rw-more" type="button" onClick={v.more}>{v.moreLabel}</button></div></>)}{" "}<p className="rw-note">{"Reportes reales del piloto, julio de 2026. Los nombres de quienes reportan se anonimizan según la Ley 1581 de 2012."}</p>{" "}</div>{" "}</section>{" "}</>);
}
