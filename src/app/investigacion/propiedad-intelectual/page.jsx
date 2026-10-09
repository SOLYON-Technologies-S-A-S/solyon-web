import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Propiedad intelectual · SOLYON",
  description: "Todo lo que construimos es de SOLYON Technologies. Nuestros clientes, incluido nuestro cliente cero, acceden mediante licencia de uso.",
  path: "/investigacion/propiedad-intelectual",
});

export default function PIPage() {
  return (
    <>
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/investigacion">Inicio / Investigación / Propiedad intelectual</Link>
            <h1 className="h1 reveal d1">Tecnología propia, protegida y licenciada.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Todo lo que construimos es de SOLYON Technologies. Nuestros clientes, incluido nuestro cliente cero, acceden mediante licencia de uso.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#portafolio">Ver portafolio</a>
              <Link className="btn btn-secondary" href="/contacto">Consultar licencia</Link>
            </div>
          </div>
          <div className="console reveal d2" aria-label="Resumen del portafolio de propiedad intelectual">
            <div className="console-bar">
              <span>Portafolio de PI · titular SOLYON</span>
              <span className="on">Activo</span>
            </div>
            <div className="record step-in">
              <div className="hd">
                <span>SOLYON OS</span>
                <span className="chip ok">Registrado</span>
              </div>
              <span className="k">Protección</span>
              <span className="v">Registro de software · DNDA</span>
              <span className="k">Referencia</span>
              <span className="v">
                <span className="fill" style={{ background: "#FFE7D9", color: "#B84A12" }}>[N.º DE REGISTRO]</span>
              </span>
              <span className="k">Titular</span>
              <span className="v">SOLYON Technologies</span>
              <span className="k">Uso</span>
              <span className="v">Licencia a clientes</span>
            </div>
            <div className="engine step-in s2">En proceso</div>
            <div className="row step-in s3" style={{ gap: "8px" }}>
              <span className="chip">SOLYON Move · confirmar</span>
              <span className="chip">EL-VÍA · confirmar</span>
              <span className="chip">Marca SOLYON · confirmar</span>
            </div>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Ilustración · resumen del portafolio</p>
          </div>
        </div>
      </section>
      <section className="section" id="portafolio">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Portafolio</p>
            <h2 className="h2">Activos registrados y en proceso.</h2>
          </div>
          <div className="table-box sr">
            <table>
              <thead>
                <tr>
                  <th>Activo</th>
                  <th>Tipo de protección</th>
                  <th>Referencia</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>SOLYON OS</strong>
                  </td>
                  <td>Registro de software · DNDA</td>
                  <td>
                    <span className="fill">[N.º DE REGISTRO]</span>
                  </td>
                  <td>
                    <span className="tag tag-live"><span className="dot"></span>Registrado</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>SOLYON Move</strong>
                  </td>
                  <td>Registro de software · DNDA</td>
                  <td>
                    <span className="fill">[N.º DE REGISTRO]</span>
                  </td>
                  <td>
                    <span className="tag tag-val"><span className="dot"></span>Confirmar</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>EL-VÍA</strong>
                  </td>
                  <td>Registro de software · DNDA</td>
                  <td>
                    <span className="fill">[N.º DE REGISTRO]</span>
                  </td>
                  <td>
                    <span className="tag tag-val"><span className="dot"></span>Confirmar</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Marca SOLYON</strong>
                  </td>
                  <td>Registro de marca · SIC</td>
                  <td>
                    <span className="fill">[N.º DE EXPEDIENTE]</span>
                  </td>
                  <td>
                    <span className="tag tag-val"><span className="dot"></span>Confirmar</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Solicitudes de patente</strong>
                  </td>
                  <td>USPTO</td>
                  <td>
                    <span className="fill">[PUBLICAR SOLO CON CONFIRMACIÓN DEL ABOGADO]</span>
                  </td>
                  <td>
                    <span className="tag"><span className="dot"></span>Pendiente</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Cómo protegemos la tecnología</p>
            <h2 className="h2">Tres reglas que no negociamos.</h2>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <h3 className="h3">La PI es 100% de SOLYON</h3>
              <p className="muted">Los clientes reciben licencia de uso; la tecnología y sus mejoras permanecen en la compañía.</p>
            </div>
            <div>
              <span className="n">02</span>
              <h3 className="h3">Cesión de derechos del equipo</h3>
              <p className="muted">Todo desarrollo del equipo y de contratistas se cede formalmente a SOLYON.</p>
            </div>
            <div>
              <span className="n">03</span>
              <h3 className="h3">Separación de entidades</h3>
              <p className="muted">Cada cliente, incluido el cliente cero, es independiente y paga por el uso.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap band sr">
          <div className="stack" style={{ gap: "12px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Licenciamiento</p>
            <h2 className="h2">¿Quieres usar la tecnología de SOLYON?</h2>
            <p className="muted" style={{ fontSize: "18px" }}>Conversemos sobre una licencia de uso para tu operación.</p>
          </div>
          <Link className="btn btn-primary" href="/contacto">Hablar con el equipo</Link>
        </div>
      </section>
    </>
  );
}
