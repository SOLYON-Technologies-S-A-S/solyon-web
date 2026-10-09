import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Política de tratamiento de datos · SOLYON",
  description: "Política de tratamiento de datos personales de SOLYON Technologies S.A.S. BIC.",
  path: "/politica-de-datos",
});

// El texto legal está pendiente del fundador (SPEC §7). El marcador queda visible en desarrollo
// y el chequeo de build bloquea la publicación en producción mientras exista.
export default function PoliticaDeDatosPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Legal</p>
          <h1 className="h1">Política de tratamiento de datos</h1>
        </div>
        <p className="notice"><span className="fill">[TEXTO LEGAL DE LA POLÍTICA DE TRATAMIENTO DE DATOS · PENDIENTE]</span></p>
      </div>
    </section>
  );
}
