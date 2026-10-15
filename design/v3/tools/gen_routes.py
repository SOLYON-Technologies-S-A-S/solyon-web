"""Genera src/app/**/page.jsx: metadatos, JSON-LD (FAQ, migas y extras) y la vista convertida del canvas."""
import json, re, sys, pathlib, html
S = pathlib.Path(sys.argv[1]); REPO = pathlib.Path(sys.argv[2]); P = S / "project" if (S / "project").exists() else S / "canvas"
sys.path.insert(0, str(pathlib.Path(__file__).parent))

PAGES = {
 "Main": ("/", "SOLYON Technologies: IA determinista desde Medellín", "Infraestructura de inteligencia operacional. Probada en la calle con SOLYON Move y en empresas con SOLYON OS. Laboratorio DeepTech en Medellín."),
 "Gobierno": ("/soluciones/gobierno", "Tablero de control de barreras para municipios | SOLYON", "Un tablero georreferenciado en vivo para controlar las barreras de su territorio, con un usuario por secretaría. Solicite la ficha técnica."),
 "Empresas": ("/soluciones/empresas", "SOLYON OS: inteligencia operacional para empresas", "Convierte el criterio de tu equipo en datos, sistemas y agentes de IA supervisados. Diagnóstico sin costo y piloto pagado contra entregables."),
 "Retail": ("/soluciones/retail", "Ventas sin sobreventa para boutiques | SOLYON", "Avisa primero al cliente correcto, reserva el par y cobra con Wompi. En vivo en 21 días. Activación desde COP 8,6 millones. Postula tu boutique."),
 "Move": ("/solyon-move", "SOLYON Move: rutas accesibles para movilidad reducida", "App gratuita para Android que calcula la ruta de menor esfuerzo y convierte cada reporte de barreras en datos para la ciudad. Validada con Ruta N."),
 "Insurance": ("/en/insurance", "Insurance operations and DOT compliance | SOLYON", "Operational intelligence for commercial insurance and trucking in the US. Every account keeps its own memory. Apply as a design partner."),
 "Tecnologia": ("/tecnologia", "SOLYON OS: infraestructura de inteligencia operacional", "Cuatro capas, conocimiento, datos, sistemas y agentes, con Arcanum como motor. Lo que construimos para un cliente se reutiliza en el siguiente."),
 "Arcanum": ("/tecnologia/arcanum", "Arcanum: motor de IA determinista | SOLYON", "Arcanum no adivina: calcula. Memoria jerárquica en tres niveles y reglas verificables para decisiones operativas. Benchmark interno, no auditado."),
 "Modelo": ("/modelo", "Modelo de negocio: implementación y licencia | SOLYON", "Construimos componentes una vez y los licenciamos muchas veces. Así se contrata SOLYON según quién compra: entidades, empresas y boutiques."),
 "Aliados": ("/aliados", "Aliados de SOLYON Technologies", "Ruta N, Toyota Mobility Foundation, Alcaldía de Medellín, academia y tecnología. Cada relación, con su fuente. Proponga una alianza."),
 "Investigacion": ("/investigacion", "Investigación aplicada en IA y movilidad | SOLYON Lab", "Laboratorio DeepTech con grupo en GrupLAC–MinCiencias (COL0248279). Investigamos para construir y publicamos lo que podemos demostrar."),
 "PI": ("/investigacion/propiedad-intelectual", "Propiedad intelectual de SOLYON Technologies", "Tecnología propia, 100% de SOLYON. SOLYON Move registrado ante la DNDA (13-110-56). Cada cliente accede mediante licencia de uso."),
 "Publicaciones": ("/publicaciones", "Publicaciones y datos del laboratorio | SOLYON", "Notas técnicas, reportes y comunicados oficiales sobre SOLYON Move y Arcanum. Marcamos qué está publicado y qué está en preparación."),
 "Impacto": ("/impacto", "Impacto medible del piloto SOLYON Move | SOLYON", "Lo que cambió en Manrique y Aranjuez con el piloto SOLYON Move: 150 personas validaron la app y 378 barreras quedaron mapeadas con foto."),
 "ReporteBarreras": ("/reporte-barreras", "Reporte abierto de barreras de accesibilidad | SOLYON", "Resumen público del piloto SOLYON Move: barreras por tipo, metodología y dataset anonimizado para entidades, academia y medios."),
 "Nosotros": ("/nosotros", "Nosotros: laboratorio DeepTech en Medellín | SOLYON", "Aplicamos inteligencia artificial a problemas físicos: calles, operaciones y riesgos reales. Conoce al equipo y los hitos verificables."),
 "Prensa": ("/prensa", "Sala de prensa de SOLYON Technologies", "Notas oficiales de la Alcaldía de Medellín, Ruta N y Toyota Mobility Foundation, kit de marca y contacto directo para periodistas."),
 "Contacto": ("/contacto", "Contacto | SOLYON Technologies", "Elige tu perfil, entidad pública, empresa, boutique o prensa, y recibe lo que necesitas para decidir. Respondemos en 3 días hábiles."),
 "Politica": ("/politica-de-datos", "Política de tratamiento de datos | SOLYON Technologies", "Cómo SOLYON Technologies S.A.S. BIC recoge, usa y protege los datos personales según la Ley 1581 de 2012, y cómo ejercer sus derechos."),
 "Inversion": ("/inversionistas", "Inversionistas | SOLYON Technologies", "Infraestructura de IA aplicada, probada en la calle. Tesis, tracción con fuente y memo de inversión de SOLYON Technologies."),
}
CRUMB = {"Inicio": "/", "Home": "/", "Tecnología": "/tecnologia", "Investigación": "/investigacion", "Companies": "/soluciones/empresas", "Empresas": "/soluciones/empresas"}
ORG = {"@id": "https://www.solyontechnologies.com/#organization"}
MOVE_APP = {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SOLYON Move", "operatingSystem": "Android",
            "applicationCategory": "TravelApplication", "url": "https://play.google.com/store/apps/details?id=com.solyon.move",
            "description": "Asistente de movilidad con IA para personas con movilidad reducida: rutas de menor esfuerzo que evitan pendientes, escaleras y obstáculos, y reportes ciudadanos de barreras.",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "COP"}, "publisher": ORG, "inLanguage": "es"}
ELVIA_APP = {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "EL-VÍA DOT Express", "operatingSystem": "Android",
             "applicationCategory": "EducationalApplication", "url": "https://play.google.com/store/apps/details?id=com.solyon.elvia",
             "description": "Entrenamiento con IA para que conductores latinos en EE. UU. se preparen para las inspecciones del DOT.",
             "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Modo gratuito; plan PRO dentro de la app"}, "publisher": ORG}
def video(name, desc, file, poster, dur, date):
    return {"@context": "https://schema.org", "@type": "VideoObject", "name": name, "description": desc, "thumbnailUrl": f"https://www.solyontechnologies.com/media/{poster}",
            "contentUrl": f"https://www.solyontechnologies.com/media/{file}", "uploadDate": f"{date}T00:00:00-05:00", "duration": dur, "publisher": ORG, "inLanguage": "es"}
def service(name, desc, url, extra=None):
    d = {"@context": "https://schema.org", "@type": "Service", "name": name, "description": desc, "provider": ORG, "areaServed": "CO", "url": "https://www.solyontechnologies.com" + url}
    if extra: d.update(extra)
    return d
EXTRA = {
 "Main": [MOVE_APP, ELVIA_APP],
 "Move": [MOVE_APP,
          video("SOLYON Move en el programa de Ruta N", "Pieza de Ruta N sobre SOLYON Move: la app, el tablero institucional en tiempo real y el piloto con personas con movilidad reducida en Medellín. Con subtítulos.", "rutan-solyon-move.mp4", "rutan-solyon-move-poster.jpg", "PT1M8S", "2026-08-07"),
          video("SOLYON Move, agosto de 2026", "Una persona en silla de ruedas usa SOLYON Move para planificar su ruta en Medellín.", "move-agosto.mp4", "move-agosto-poster.jpg", "PT10S", "2026-08-06")],
 "Gobierno": [service("Tablero de control de barreras de accesibilidad", "Tablero georreferenciado en vivo para que las secretarías de un municipio gestionen en tiempo real las barreras reportadas por la ciudadanía, con un usuario por secretaría.", "/soluciones/gobierno", {"audience": {"@type": "Audience", "audienceType": "Entidades públicas"}})],
 "Empresas": [service("SOLYON OS para empresas", "Infraestructura de inteligencia operacional: conocimiento, datos, sistemas y agentes de IA supervisados, con diagnóstico sin costo, piloto pagado y licencia.", "/soluciones/empresas")],
 "Retail": [service("SOLYON para boutiques de alto ticket", "Clientes, lanzamientos privados, reservas y cobros en un solo sistema, en vivo en 21 días.", "/soluciones/retail",
            {"offers": [{"@type": "Offer", "name": "Activación", "price": "8600000", "priceCurrency": "COP"},
                        {"@type": "Offer", "name": "Suscripción mensual desde el mes 2", "price": "1200000", "priceCurrency": "COP"}]})],
 "ReporteBarreras": [{"@context": "https://schema.org", "@type": "Dataset", "name": "Reporte de barreras de accesibilidad del piloto SOLYON Move",
     "description": "Barreras urbanas georreferenciadas con foto, tipo y fecha, reportadas por la ciudadanía y levantadas en campo en las comunas 3 Manrique y 4 Aranjuez de Medellín durante el piloto SOLYON Move. Datos personales anonimizados.",
     "url": "https://www.solyontechnologies.com/reporte-barreras", "creator": ORG, "spatialCoverage": "Medellín, Colombia", "temporalCoverage": "2026-02/2026-08",
     "variableMeasured": ["Tipo de barrera", "Ubicación", "Fecha", "Estado"], "isAccessibleForFree": True, "inLanguage": "es"}],
}

def faqs(src):
    out = []
    for q, a in re.findall(r'<details class="qa"[^>]*><summary>(.*?)</summary><p>(.*?)</p></details>', src, re.S):
        strip = lambda x: html.unescape(re.sub(r"<[^>]+>", "", x)).strip()
        out.append({"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(a)}})
    return out

def crumbs(src, path):
    m = re.search(r'<a class="crumb"[^>]*>(.*?)</a>', src)
    if not m: return None
    parts = [p.strip() for p in html.unescape(m.group(1)).split("/")]
    items = []
    for i, p in enumerate(parts):
        url = path if i == len(parts) - 1 else CRUMB[p]
        items.append({"@type": "ListItem", "position": i + 1, "name": p, "item": "https://www.solyontechnologies.com" + (url if url != "/" else "")})
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items}

for name, (path, title, desc) in PAGES.items():
    assert len(title) <= 60, (name, len(title)); assert len(desc) <= 160, (name, len(desc))
    src = (P / f"{name}.dc.html").read_text()
    ld = list(EXTRA.get(name, []))
    f = faqs(src)
    if f: ld.append({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": f})
    c = crumbs(src, path)
    if c: ld.append(c)
    lang = "en" if name == "Insurance" else "es"
    d = REPO / "src/app" / path.strip("/")
    d.mkdir(parents=True, exist_ok=True)
    body = f"<{name} />"
    if lang == "en": body = f'<div lang="en">{body}</div>'
    code = f'''// Ruta {path}: vista generada desde el canvas v3 ({name}.dc.html). Metadatos y datos estructurados aquí.
import {name} from "@/views/{name}";
import JsonLd from "@/components/ui/JsonLd";
import {{ pageMeta }} from "@/lib/seo";

export const metadata = pageMeta({{
  title: {json.dumps(title, ensure_ascii=False)},
  description: {json.dumps(desc, ensure_ascii=False)},
  path: {json.dumps(path)},{chr(10) + '  lang: "en",' if lang == "en" else ""}
}});

const LD = {json.dumps(ld, ensure_ascii=False, indent=2)};

export default function Page() {{
  return (
    <>
      {{LD.map((d, i) => <JsonLd key={{i}} data={{d}} />)}}
      {body}
    </>
  );
}}
'''
    (d / "page.jsx").write_text(code)
    print(path, len(ld), "LD", len(f), "FAQ")
