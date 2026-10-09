import { pageMeta } from "@/lib/seo";
import LeadForm from "@/components/forms/LeadForm";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata = pageMeta({
  title: "Retail de alto ticket · SOLYON",
  description: "SOLYON le avisa primero al cliente correcto, le reserva el par y le cobra. Sin sobreventas y sin depender de las Historias.",
  path: "/soluciones/retail",
});

export default function RetailPage() {
  return (
    <>
      <section className="dark" style={{ padding: "80px 0 96px", overflow: "hidden" }}>
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "28px" }}>
            <Link className="crumb" href="/">Inicio / Soluciones / Retail</Link>
            <span className="kicker reveal"><span className="live"></span>Programa clientes fundadores ·{" "}<b>cupos abiertos</b></span>
            <h1 className="h1 reveal d1">Tu próximo drop, vendido antes de publicarlo.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "520px" }}>SOLYON le avisa primero al cliente correcto, le reserva el par y le cobra. Sin sobreventas y sin depender de las Historias.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#postular">Postular mi boutique</a>
              <a className="btn btn-secondary" href="#como">Cómo funciona</a>
            </div>
            <p className="mono reveal d4" style={{ color: "#A9B8BE" }}>En vivo en 21 días · bajo tu dominio y tu marca</p>
          </div>
          <div className="phone reveal d2" aria-label="Ejemplo animado de un lanzamiento privado por chat">
            <div className="phone-head">
              <span className="avatar">TU</span>
              <div>
                <b>Tu Boutique</b>
                <small>Lanzamiento privado</small>
              </div>
            </div>
            <div className="phone-body">
              <div className="msg them step-in">Andrés, llegó algo en tu talla que te va a gustar. Antes de publicarlo, es tuyo si lo quieres.</div>
              <div className="drop step-in s2">
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
              <div className="msg me step-in s3">Listo, ya pagué</div>
              <div className="typing step-in s3" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">El cambio</p>
            <h2 className="h2">Del caos de los chats a un sistema que vende solo.</h2>
          </div>
          <div className="versus sr">
            <div className="vs before">
              <span className="lbl">Hoy</span>
              <ul>
                <li>Las tallas y gustos de tus clientes están perdidos en miles de mensajes</li>
                <li>Apartados que nunca se pagan</li>
                <li>Dos clientes esperando el mismo par</li>
                <li>Clientes que compraron una vez y no volvieron</li>
              </ul>
            </div>
            <div className="vs after">
              <span className="lbl">Con SOLYON</span>
              <ul>
                <li>Una ficha VIP por cliente, construida desde tus chats</li>
                <li>Reserva con cobro automático y temporizador</li>
                <li>Si no paga a tiempo, el par pasa al siguiente</li>
                <li>Tus clientes dormidos reciben lo que les interesa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper" id="como">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">Cómo funciona</p>
            <h2 className="h2">21 días. Tú sigues vendiendo, nosotros construimos.</h2>
          </div>
          <div className="track sr">
            <div className="tk">
              <span className="day">Día 1</span>
              <h3 className="h4">Leemos tus chats</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Exportamos WhatsApp e Instagram y creamos tus primeras fichas VIP.</p>
            </div>
            <div className="tk">
              <span className="day">Día 8</span>
              <h3 className="h4">Montamos tu sistema</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Tu dominio, servidor dedicado y pagos con Wompi conectados.</p>
            </div>
            <div className="tk last">
              <span className="day">Día 21</span>
              <h3 className="h4">Lanzas tu primer drop</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Cargamos inventario, entrenamos a tu equipo y sale el primer lanzamiento privado.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="stack sr" style={{ gap: "20px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Inversión</p>
            <h2 className="h2">Las primeras boutiques construyen el producto con nosotros.</h2>
            <p className="muted" style={{ fontSize: "18px" }}>
              Cupos limitados para boutiques de alto ticket con inventario exclusivo o de edición limitada. Cupos:{" "}
              <span className="fill">[N.º]</span>
              {" "}· Beneficios:{" "}
              <span className="fill">[BENEFICIOS]</span>
            </p>
          </div>
          <div className="card sr" style={{ gap: "24px", padding: "40px" }}>
            <div>
              <p className="mono" style={{ color: "#A9B8BE" }}>Activación</p>
              <p className="price" style={{ marginTop: "8px" }}>COP 8.600.000</p>
              <p className="muted" style={{ marginTop: "8px", fontSize: "15px" }}>Incluye minería de chats, dominio propio y el primer mes. 50% al iniciar, 50% el día 21.</p>
            </div>
            <hr className="rule" />
            <div>
              <p className="mono" style={{ color: "#A9B8BE" }}>Desde el mes 2</p>
              <p className="price" style={{ fontSize: "32px", marginTop: "8px" }}>COP 1.200.000 / mes</p>
              <p className="muted" style={{ marginTop: "8px", fontSize: "15px" }}>Sin permanencia. Cancela cuando quieras.</p>
            </div>
            <a className="btn btn-primary" href="#postular">Postular mi boutique</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="sr">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="h2">Lo que preguntan los dueños de boutique.</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
      <section className="section paper" id="postular">
        <div className="wrap split">
          <div className="stack sr">
            <p className="eyebrow" style={{ margin: "0" }}>Postula tu boutique</p>
            <h2 className="h2">30 minutos para ver qué hay en tus chats.</h2>
            <p className="muted">Te mostramos cuántos clientes podrías reactivar. Sin costo.</p>
          </div>
          <LeadForm audience="retail" className="stack" style={{ gap: "20px" }} aria-label="Postulación retail">
            <div className="grid g2" style={{ gap: "20px" }}>
              <div className="field">
                <label htmlFor="r-name">Nombre</label>
                <input name="r-name" required id="r-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="r-brand">Boutique</label>
                <input name="r-brand" required id="r-brand" type="text" />
              </div>
              <div className="field">
                <label htmlFor="r-ig">Instagram</label>
                <input name="r-ig" required id="r-ig" type="text" placeholder="@tumarca" />
              </div>
              <div className="field">
                <label htmlFor="r-phone">WhatsApp</label>
                <input name="r-phone" required id="r-phone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <label className="check"><input type="checkbox" name="consent" required />{" "}Autorizo el tratamiento de mis datos según la política de SOLYON Technologies.</label>
            <button className="btn btn-primary" type="submit" style={{ width: "fit-content" }}>Postular mi boutique</button>
          </LeadForm>
        </div>
      </section>
    </>
  );
}
