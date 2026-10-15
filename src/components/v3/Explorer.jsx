"use client";

// Generado desde el canvas v3 (Explorer.dc.html): Infraestructura SOLYON Move
// No editar a mano sin actualizar el canvas; ver design/v3/README.md
import { Fragment, useState } from "react";

class DCLogic {
  constructor(state, setState, props) { this.state = state; this.setState = setState; this.props = props || {}; }
}

class Component extends DCLogic {
  renderVals() {
    const a = (this.state && this.state.t) || 'ojos';
    const list = [
      { id: 'ojos', label: 'Ojos de Ciudad', who: 'App SOLYON Move, gratis en Google Play' },
      { id: 'arc', label: 'Arcanum', who: 'Motor de IA determinista' },
      { id: 'panel', label: 'Tablero institucional', who: 'Un usuario por secretaría' }
    ];
    return {
      tabs: list.map((t) => ({ ...t, sel: t.id === a ? 'true' : 'false', pick: () => this.setState({ t: t.id }) })),
      isOjos: a === 'ojos',
      isArc: a === 'arc',
      isPanel: a === 'panel'
    };
  }
}

export default function Explorer(props) {
  const [state, set] = useState({});
  const c = new Component(state, (p) => set((s) => ({ ...s, ...p })), props);
  const v = c.renderVals();
  return (<>{" "}<section className="s-negro sec" style={{fontFamily: "'Sora', sans-serif"}}>{" "}<div className="wrap">{" "}<h2 className="d2" style={{maxWidth: "900px", marginBottom: "clamp(32px, 4vw, 52px)"}}>{"Tres piezas, un mismo dato."}</h2>{" "}<div className="explore">{" "}<div className="ex-tabs" role="tablist" aria-label="Piezas de la infraestructura SOLYON Move">{" "}{v.tabs.map((t, $index) => (<Fragment key={$index}>{" "}<button className="ex-tab" type="button" role="tab" aria-selected={t.sel} onClick={t.pick}><span className="rd" aria-hidden="true"></span><b>{t.label}</b><small>{t.who}</small></button>{" "}</Fragment>))}{" "}</div>{" "}{v.isOjos && (<>{" "}<div className="ex-panel" role="tabpanel">{" "}<div className="ex-media tall"><img src="/media/app-mapa-reportes.jpg" alt="Mapa de la app SOLYON Move con cientos de reportes ciudadanos en Manrique y Aranjuez" /></div>{" "}<p>{"La app SOLYON Move convierte a cada usuario en ojos de la ciudad: reporta barreras e incidentes en vías y buses, y recibe rutas que evitan pendientes, escaleras y obstáculos según su perfil."}</p>{" "}<div className="row"><span className="free">{"Gratis"}</span><a className="btn btn-y" href="https://play.google.com/store/apps/details?id=com.solyon.move&referrer=utm_source%3Dsolyontechnologies.com%26utm_medium%3Dweb">{"Descargar en Google Play"}</a></div>{" "}</div>{" "}</>)}{" "}{v.isArc && (<>{" "}<div className="ex-panel" role="tabpanel">{" "}<div className="ex-media"><div className="flow" aria-label="Cómo decide Arcanum la ruta">{" "}<div className="nd"><i aria-hidden="true"></i><span>{"Barreras reportadas y patrones del entorno"}</span></div>{" "}<span className="ar" aria-hidden="true"></span>{" "}<div className="nd"><i aria-hidden="true"></i><span>{"Coste total de esfuerzo de cada ruta"}</span></div>{" "}<span className="ar" aria-hidden="true"></span>{" "}<div className="nd end"><i aria-hidden="true"></i><b>{"Ruta de mínimo esfuerzo"}</b></div>{" "}</div></div>{" "}<p>{"Arcanum es nuestro motor de IA determinista. No adivina: calcula. Con las barreras reportadas y los patrones del entorno mide el esfuerzo total de cada camino y elige el de menor esfuerzo."}</p>{" "}<div className="row"><a className="lnk" href="/tecnologia/arcanum">{"Conocer Arcanum"}</a></div>{" "}</div>{" "}</>)}{" "}{v.isPanel && (<>{" "}<div className="ex-panel" role="tabpanel">{" "}<div className="ex-media"><img src="/media/foto-crm.jpg" alt="Tablero institucional de SOLYON con usuarios activos, rutas reportadas y mapa de incidentes en Medellín" style={{objectPosition: "top left"}} /></div>{" "}<p>{"Un tablero georreferenciado en vivo: cada secretaría ve y gestiona solo las barreras que le corresponden, de Pendiente a Solucionado."}</p>{" "}<div className="row"><a className="lnk" href="/soluciones/gobierno">{"Ver la solución para gobierno"}</a></div>{" "}</div>{" "}</>)}{" "}</div>{" "}</div>{" "}</section>{" "}</>);
}
