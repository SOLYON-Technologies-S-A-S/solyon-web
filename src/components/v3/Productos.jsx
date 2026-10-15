"use client";

// Generado desde el canvas v3 (Productos.dc.html): Productos SOLYON
// No editar a mano sin actualizar el canvas; ver design/v3/README.md
import { Fragment, useState } from "react";

class DCLogic {
  constructor(state, setState, props) { this.state = state; this.setState = setState; this.props = props || {}; }
}

class Component extends DCLogic {
  renderVals() {
    const a = (this.state && this.state.t) || 'move';
    const list = [
      { id: 'move', label: 'SOLYON Move', who: 'Movilidad accesible, gratis en Google Play' },
      { id: 'elvia', label: 'EL-VÍA', who: 'Formación DOT para conductores, freemium' },
      { id: 'os', label: 'SOLYON OS', who: 'Infraestructura para empresas' }
    ];
    return {
      tabs: list.map((t) => ({ ...t, sel: t.id === a ? 'true' : 'false', pick: () => this.setState({ t: t.id }) })),
      isMove: a === 'move',
      isElvia: a === 'elvia',
      isOs: a === 'os'
    };
  }
}

export default function Productos(props) {
  const [state, set] = useState({});
  const c = new Component(state, (p) => set((s) => ({ ...s, ...p })), props);
  const v = c.renderVals();
  return (<>{" "}<section className="s-negro sec" style={{fontFamily: "'Sora', sans-serif"}}>{" "}<div className="wrap">{" "}<h2 className="d2" style={{maxWidth: "900px", marginBottom: "clamp(32px, 4vw, 52px)"}}>{"Lo que ya está funcionando."}</h2>{" "}<div className="explore">{" "}<div className="ex-tabs" role="tablist" aria-label="Productos de SOLYON Technologies">{" "}{v.tabs.map((t, $index) => (<Fragment key={$index}>{" "}<button className="ex-tab" type="button" role="tab" aria-selected={t.sel} onClick={t.pick}><span className="rd" aria-hidden="true"></span><b>{t.label}</b><small>{t.who}</small></button>{" "}</Fragment>))}{" "}</div>{" "}{v.isMove && (<>{" "}<div className="ex-panel" role="tabpanel">{" "}<div className="ex-media"><img src="/media/usuario-app.jpg" alt="Usuario en silla de ruedas muestra la app SOLYON Move en su teléfono" style={{objectPosition: "50% 35%"}} /></div>{" "}<div className="row"><span className="free">{"Gratis"}</span><span className="stamp">{"Validada con Ruta N y Toyota Mobility Foundation"}</span></div>{" "}<p>{"Asistente de movilidad con IA para personas con movilidad reducida: rutas que evitan pendientes, escaleras y obstáculos, y reportes ciudadanos de barreras en vías y buses."}</p>{" "}<div className="row"><a className="btn btn-y" href="https://play.google.com/store/apps/details?id=com.solyon.move&referrer=utm_source%3Dsolyontechnologies.com%26utm_medium%3Dweb">{"Descargar en Google Play"}</a><a className="lnk" href="/solyon-move">{"Ver el caso Medellín"}</a></div>{" "}</div>{" "}</>)}{" "}{v.isElvia && (<>{" "}<div className="ex-panel" role="tabpanel">{" "}<div className="ex-media tall"><img src="/media/elvia-app.png" alt="Pantalla de inicio de EL-VÍA DOT Express con el plan de entrenamiento y el modo gratuito" /></div>{" "}<div className="row"><span className="free">{"Freemium"}</span></div>{" "}<p>{"Entrenamiento con IA para que conductores latinos en EE. UU. pasen la inspección del DOT: frases del oficial, señales clave, roleplays con IA, pronunciación y certificado final, en un plan de 7 días."}</p>{" "}<div className="row"><a className="btn btn-y" href="https://play.google.com/store/apps/details?id=com.solyon.elvia&referrer=utm_source%3Dsolyontechnologies.com%26utm_medium%3Dweb">{"Descargar en Google Play"}</a></div>{" "}</div>{" "}</>)}{" "}{v.isOs && (<>{" "}<div className="ex-panel" role="tabpanel">{" "}<div className="ex-media" style={{padding: "clamp(18px, 3vw, 36px)"}}><div className="layers" aria-label="Capas de SOLYON OS" style={{width: "100%"}}>{" "}<div className="layer">{"Agentes y automatización"}<small>{"con supervisión humana"}</small></div>{" "}<div className="layer">{"Sistemas y paneles"}<small>{"CRM, permisos, reportes"}</small></div>{" "}<div className="layer core"><b>{"Arcanum"}</b><small>{"memoria e inteligencia"}</small></div>{" "}<div className="layer">{"Datos y conocimiento operacional"}<small>{"captura, reglas, trazabilidad"}</small></div>{" "}</div></div>{" "}<div className="row"><span className="free">{"Licencia empresarial"}</span></div>{" "}<p>{"La infraestructura que corre debajo de nuestras apps, disponible para empresas: conocimiento, datos, sistemas y agentes supervisados, con Arcanum como motor."}</p>{" "}<div className="row"><a className="btn btn-y" href="/contacto">{"Proponer un piloto"}</a><a className="lnk" href="/tecnologia">{"Ver la tecnología"}</a></div>{" "}</div>{" "}</>)}{" "}</div>{" "}</div>{" "}</section>{" "}</>);
}
