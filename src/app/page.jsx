// Marcador de la etapa 1. La Home real (Main.dc.html) se construye en la etapa 2.
export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <section className="section dark">
      <div className="wrap">
        <p className="eyebrow">Etapa 1</p>
        <h1 className="h1">Layout, navegación y estilos base</h1>
        <p className="lead">Página temporal. La Home se construye en la etapa 2.</p>
      </div>
    </section>
  );
}
