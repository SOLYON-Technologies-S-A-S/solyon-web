import Link from "next/link";

export const metadata = { title: { absolute: "Página no encontrada · SOLYON" }, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Error 404</p>
        <h1 className="h1">Esta página no existe.</h1>
        <p className="lead">Puede que el enlace haya cambiado con el nuevo sitio.</p>
        <div className="row" style={{ marginTop: 32 }}>
          <Link className="btn btn-primary" href="/">Volver al inicio</Link>
        </div>
      </div>
    </section>
  );
}
