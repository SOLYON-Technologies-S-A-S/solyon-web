"use client";

// Generado desde el canvas v3 (Ciclo.dc.html): Ciclo en tiempo real
// No editar a mano sin actualizar el canvas; ver design/v3/README.md
import { Fragment, useState } from "react";

class DCLogic {
  constructor(state, setState, props) { this.state = state; this.setState = setState; this.props = props || {}; }
}

class Component extends DCLogic {
  renderVals() {
    const a = (this.state && this.state.t) || 1;
    const list = [
      { id: 1, label: 'La ciudadanía reporta', who: 'Ojos de Ciudad, en la app' },
      { id: 2, label: 'Llega al tablero', who: 'En menos de 1 minuto, según nuestras mediciones' },
      { id: 3, label: 'Arcanum recalcula la ruta', who: 'Ruta de mínimo esfuerzo' },
      { id: 4, label: 'La comunidad confirma', who: 'Estado Solucionado' }
    ];
    return {
      steps: list.map((s) => ({ ...s, n: String(s.id), sel: s.id === a ? 'true' : 'false', pick: () => this.setState({ t: s.id }) })),
      is1: a === 1, is2: a === 2, is3: a === 3, is4: a === 4
    };
  }
}

export default function Ciclo(props) {
  const [state, set] = useState({});
  const c = new Component(state, (p) => set((s) => ({ ...s, ...p })), props);
  const v = c.renderVals();
  return (<>{" "}<section className="s-negro sec" style={{fontFamily: "'Sora', sans-serif"}}>{" "}<div className="wrap">{" "}<div style={{display: "flex", flexDirection: "column", gap: "14px", maxWidth: "820px", marginBottom: "clamp(32px, 4vw, 52px)"}}>{" "}<div className="row" style={{gap: "10px 14px", alignItems: "center"}}><span className="cy-live"><i aria-hidden="true"></i>{"En tiempo real, menos de 1 minuto"}</span><span className="stamp int">{"Medición interna repetida, no auditada"}</span></div>{" "}<h2 className="d2">{"De la calle al tablero de la entidad en menos de un minuto."}</h2>{" "}</div>{" "}<div className="cy">{" "}<div className="cy-steps" role="tablist" aria-label="Ciclo de un reporte en SOLYON Move">{" "}{v.steps.map((s, $index) => (<Fragment key={$index}>{" "}<button className="cy-step" type="button" role="tab" aria-selected={s.sel} onClick={s.pick}><span className="nb" aria-hidden="true">{s.n}</span><b>{s.label}</b><small>{s.who}</small></button>{" "}</Fragment>))}{" "}</div>{" "}{v.is1 && (<>{" "}<div className="cy-shot" role="tabpanel">{" "}<div className="cy-media"><img src="/media/app-reportar-via.jpg" alt="Pantalla Reportar vía de la app SOLYON Move con dirección, descripción y foto adjunta" /></div>{" "}<p>{"Una persona ve la barrera, toma la foto y la reporta desde Ojos de Ciudad, en la app SOLYON Move. Dirección, tipo y evidencia quedan en un solo registro."}</p>{" "}</div>{" "}</>)}{" "}{v.is2 && (<>{" "}<div className="cy-shot" role="tabpanel">{" "}<div className="cy-media"><img src="/media/crm-incidente.jpg" alt="Detalle de un incidente en el CRM de SOLYON con descripción, fecha, foto y control de estado Pendiente o Revisado" /></div>{" "}<p>{"En menos de un minuto el reporte aparece en el tablero de la secretaría que le corresponde, con su foto y su fecha. Su equipo lo revisa y cambia el estado de Pendiente a Revisado."}</p>{" "}</div>{" "}</>)}{" "}{v.is3 && (<>{" "}<div className="cy-shot" role="tabpanel">{" "}<div className="cy-media"><img src="/media/app-ruta-calculada.jpg" alt="La app SOLYON Move con una ruta calculada que rodea los reportes de barreras, con tiempo y distancia estimados" /></div>{" "}<p>{"Arcanum suma la barrera al cálculo de esfuerzo. La siguiente ruta que pide cualquier usuario ya la rodea, con tiempo y distancia estimados."}</p>{" "}</div>{" "}</>)}{" "}{v.is4 && (<>{" "}<div className="cy-shot" role="tabpanel">{" "}<div className="cy-media"><img src="/media/app-reporte-activo.jpg" alt="Detalle de un reporte activo en la app con foto y el botón Solucionado para que la comunidad confirme el arreglo" /></div>{" "}<p>{"Cuando la barrera se arregla, la propia comunidad lo confirma con Solucionado. El mapa y el tablero se actualizan para todos."}</p>{" "}</div>{" "}</>)}{" "}</div>{" "}<div className="bt">{" "}<p className="d4">{"Qué se está reportando"}</p>{" "}<div className="bt-bar" role="img" aria-label="Distribución de reportes por tipo: Infraestructura 220, Movilidad 129, Espacio público 34">{" "}<span style={{flex: "220", background: "#B8962C"}}></span><span style={{flex: "129", background: "#BEBEBE"}}></span><span style={{flex: "34", background: "#A8606C"}}></span>{" "}</div>{" "}<div className="bt-l">{" "}<div className="bt-i"><b><i style={{background: "#B8962C"}}></i><em>{"220"}</em>{"Infraestructura"}</b><span>{"Huecos, aceras dañadas, postes mal ubicados, paraderos estrechos, rampas inexistentes"}</span></div>{" "}<div className="bt-i"><b><i style={{background: "#BEBEBE"}}></i><em>{"129"}</em>{"Movilidad"}</b><span>{"Vehículos mal parqueados o sobre la acera, invasión del cruce peatonal"}</span></div>{" "}<div className="bt-i"><b><i style={{background: "#A8606C"}}></i><em>{"34"}</em>{"Espacio público"}</b><span>{"Basura que bloquea la acera, locales que invaden el andén, ventas sobre la rampa, letreros"}</span></div>{" "}</div>{" "}<p style={{marginTop: "18px"}}><span className="stamp int">{"Registro interno del CRM, octubre de 2026"}</span></p>{" "}</div>{" "}</div>{" "}</section>{" "}</>);
}
