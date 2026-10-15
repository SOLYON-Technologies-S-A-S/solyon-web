import Nav from "@/components/v3/Nav";
import Footer from "@/components/v3/Footer";

export const metadata = { title: { absolute: "Página no encontrada | SOLYON Technologies" }, robots: { index: false } };

export default function NotFound() {
  return (
    <div style={{ fontFamily: "'Sora', sans-serif", background: "#000000", color: "#EFE8D8" }}>
      <Nav />
      <main id="contenido">
        <section className="s-negro phero">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 820 }}>
            <p className="kick">Error 404</p>
            <h1 className="d1">Esta página no existe.</h1>
            <p className="lead sub">Puede que el enlace haya cambiado con el nuevo sitio.</p>
            <div className="row">
              <a className="btn btn-y" href="/">Volver al inicio</a>
              <a className="btn btn-o" href="/contacto">Hablar con el equipo</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
