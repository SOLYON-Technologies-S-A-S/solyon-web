"""Convierte los artboards .dc.html del canvas v3 en componentes React para Next.js 14.

Uso: python3 convert.py <dir_canvas_v3> <repo>
- Vistas de página  -> src/views/<Nombre>.jsx
- Componentes       -> src/components/v3/<Nombre>.jsx
- Medios /_blob/... -> /media/<archivo> (copiados a public/media)
"""
import ast, json, re, shutil, sys, pathlib
from html.parser import HTMLParser

S = pathlib.Path(sys.argv[1]); REPO = pathlib.Path(sys.argv[2]); P = S / "project" if (S / "project").exists() else S / "canvas"

ROUTES = {
    "Main": "/", "Gobierno": "/soluciones/gobierno", "Empresas": "/soluciones/empresas", "Retail": "/soluciones/retail",
    "Move": "/solyon-move", "Insurance": "/en/insurance", "Tecnologia": "/tecnologia", "Arcanum": "/tecnologia/arcanum",
    "Modelo": "/modelo", "Aliados": "/aliados", "Investigacion": "/investigacion", "PI": "/investigacion/propiedad-intelectual",
    "Publicaciones": "/publicaciones", "Impacto": "/impacto", "ReporteBarreras": "/reporte-barreras", "Nosotros": "/nosotros",
    "Prensa": "/prensa", "Contacto": "/contacto", "Politica": "/politica-de-datos", "Inversion": "/inversionistas",
}
COMPONENTS = ["Nav", "Footer", "Explorer", "Productos", "Reportes", "Ciclo"]
CRUMB_LINKS = {"Inicio": "/", "Home": "/", "Tecnología": "/tecnologia", "Investigación": "/investigacion",
               "Companies": "/soluciones/empresas", "Empresas": "/soluciones/empresas"}
# Audiencia de cada formulario según su aria-label (ver src/lib/leads.js)
FORM_AUDIENCE = {
    "Contacto": "contacto", "Solicitud de ficha técnica": "gobierno", "Solicitud de entidad pública": "gobierno",
    "Solicitud de empresa": "empresas", "Solicitud de diagnóstico": "empresas", "Postulación de boutique": "retail",
    "Contacto de investigación o prensa": "aliados", "Propuesta de alianza": "aliados", "Design partner application": "insurance",
    "Solicitud del reporte de barreras": "reporte", "Solicitud del memo de inversión": "inversion", "Suscripción a publicaciones": "publicaciones",
}
PLAY_REF = "&referrer=utm_source%3Dsolyontechnologies.com%26utm_medium%3Dweb"

blobs = json.load(open(S / "blobs.json")) if (S / "blobs.json").exists() else ast.literal_eval(re.search(r"^blobs = (\{.*?\})$", (S / "render3.py").read_text(), re.M).group(1))
blobs["697273894deaa146d3e6695b6d31c757"] = None
media_used = {}

def media(bid):
    f = blobs[bid]
    media_used[bid] = f
    return "/media/" + f

VOID = {"area", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr", "path", "circle", "rect", "line", "polyline", "polygon", "ellipse", "stop", "use"}
SVG_TAGS = {"lineargradient": "linearGradient", "radialgradient": "radialGradient", "clippath": "clipPath", "textpath": "textPath",
            "fegaussianblur": "feGaussianBlur", "foreignobject": "foreignObject", "animatetransform": "animateTransform"}
ATTR = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "maxlength": "maxLength", "autocomplete": "autoComplete",
        "readonly": "readOnly", "playsinline": "playsInline", "autoplay": "autoPlay", "allowfullscreen": "allowFullScreen",
        "viewbox": "viewBox", "preserveaspectratio": "preserveAspectRatio", "gradientunits": "gradientUnits",
        "gradienttransform": "gradientTransform", "stddeviation": "stdDeviation", "pathlength": "pathLength",
        "srcset": "srcSet", "crossorigin": "crossOrigin", "enctype": "encType", "novalidate": "noValidate",
        "onclick": "onClick", "onsubmit": "onSubmit", "onchange": "onChange", "colspan": "colSpan", "rowspan": "rowSpan"}
BOOL = {"required", "open", "controls", "playsinline", "autoplay", "muted", "loop", "allowfullscreen", "checked", "disabled", "hidden", "novalidate", "readonly", "selected", "multiple"}
NO_WS = {"select", "optgroup", "svg", "g", "defs", "ul", "ol", "table", "tbody", "thead", "tr", "video", "audio", "picture"}

class Node:
    def __init__(s, tag, attrs=None, parent=None):
        s.tag, s.attrs, s.children, s.parent = tag, attrs or [], [], parent

class Tree(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.root = Node("#root"); s.cur = s.root
    def handle_starttag(s, tag, attrs):
        n = Node(tag, attrs, s.cur); s.cur.children.append(n)
        if tag not in VOID: s.cur = n
    def handle_startendtag(s, tag, attrs):
        s.cur.children.append(Node(tag, attrs, s.cur))
    def handle_endtag(s, tag):
        n = s.cur
        while n is not None and n.tag != tag: n = n.parent
        if n is not None and n.parent is not None: s.cur = n.parent
    def handle_data(s, d):
        s.cur.children.append(d)

HOLE = re.compile(r"\{\{\s*([^}]+?)\s*\}\}")

def ref(path, scope):
    path = path.strip()
    if path in ("true", "false"): return path
    if re.fullmatch(r"-?\d+(\.\d+)?", path): return path
    head = path.split(".")[0]
    return path if head in scope else "v." + path

def js(s): return json.dumps(s, ensure_ascii=False)

def camel(k):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)

def style_obj(st):
    out = []
    for decl in re.split(r";(?![^(]*\))", st):
        if ":" not in decl: continue
        k, v = decl.split(":", 1); k, v = k.strip(), v.strip()
        if not k: continue
        out.append(f"{js(k) if k.startswith('--') else camel(k)}: {js(v)}")
    return "{{" + ", ".join(out) + "}}"

def link(href):
    if href.startswith("/_blob/"): return media(href[7:])
    m = re.fullmatch(r"(?:\./)?(\w+)\.dc\.html(#.*)?", href)
    if m:
        name = m.group(1)
        if name not in ROUTES: raise SystemExit(f"ruta desconocida {href}")
        return ROUTES[name] + (m.group(2) or "")
    if "play.google.com/store/apps/details" in href and "referrer=" not in href: return href + PLAY_REF
    return href

def attr_val(v, scope):
    hs = list(HOLE.finditer(v))
    if not hs: return js(v)
    if len(hs) == 1 and hs[0].group(0) == v.strip(): return "{" + ref(hs[0].group(1), scope) + "}"
    parts, last = [], 0
    for h in hs:
        parts.append(v[last:h.start()].replace("`", "\\`").replace("${", "\\${")); parts.append("${" + ref(h.group(1), scope) + "}"); last = h.end()
    parts.append(v[last:].replace("`", "\\`"))
    return "{`" + "".join(parts) + "`}"

class Emitter:
    def __init__(s, name):
        s.name, s.uses = name, set(); s.forms = []
    def attrs(s, n, scope):
        out = []; tag = n.tag
        for k, v in n.attrs:
            if k.startswith("hint-") or k == "data-todo": continue
            if v is None:
                if k in BOOL: out.append(ATTR.get(k, k)); continue
                v = ""
            nk = ATTR.get(k, k)
            if k.startswith(("aria-", "data-")) or k in ("role", "lang"):
                nk = k
            elif "-" in k or ":" in k:
                nk = camel(k.replace(":", "-"))
            if k == "style" and not HOLE.search(v):
                out.append(f"style={style_obj(v)}"); continue
            if k in ("href", "src", "poster") and not HOLE.search(v):
                v = link(v)
            if k in BOOL and v in ("", k):
                out.append(nk); continue
            out.append(f"{nk}={attr_val(v, scope)}")
        if tag == "form":
            label = dict(n.attrs).get("aria-label", "")
            aud = FORM_AUDIENCE.get(label)
            if aud: out.append(f'data-audience="{aud}"'); s.forms.append(aud)
        if tag in ("input", "select", "textarea"):
            d = dict(n.attrs)
            if "id" in d and "name" not in d and d.get("type") != "checkbox": out.append(f'name={js(d["id"])}')
            if d.get("type") == "checkbox" and "required" in d and "name" not in d: out.append('name="consent"')
        return (" " + " ".join(out)) if out else ""
    def text(s, t, scope, parent_tag):
        if not t.strip():
            if parent_tag in NO_WS or t == "": return ""
            return '{" "}'
        out, last = [], 0
        def lit(x):
            x = re.sub(r"\s+", " ", x)
            return "{" + js(x) + "}" if x else ""
        for h in HOLE.finditer(t):
            out.append(lit(t[last:h.start()])); out.append("{" + ref(h.group(1), scope) + "}"); last = h.end()
        out.append(lit(t[last:]))
        return "".join(out)
    def crumb(s, n):
        txt = "".join(c for c in n.children if isinstance(c, str)).strip()
        parts = [p.strip() for p in txt.split("/")]
        items = []
        for i, p in enumerate(parts):
            if i == len(parts) - 1: items.append(f'<span aria-current="page">{{{js(p)}}}</span>')
            else:
                href = CRUMB_LINKS.get(p)
                if not href: raise SystemExit(f"miga sin ruta: {p} en {s.name}")
                items.append(f'<a href={js(href)}>{{{js(p)}}}</a>')
        return '<nav className="crumb" aria-label="Ruta de navegación">' + '{" / "}'.join(items) + "</nav>"
    def node(s, n, scope, parent_tag=""):
        if isinstance(n, str): return s.text(n, scope, parent_tag)
        tag = n.tag; d = dict(n.attrs)
        if tag == "sc-if":
            cond = HOLE.fullmatch(d["value"].strip()).group(1)
            return "{" + ref(cond, scope) + " && (<>" + s.kids(n, scope, parent_tag) + "</>)}"
        if tag == "sc-for":
            lst = HOLE.fullmatch(d["list"].strip()).group(1); a = d.get("as", "item")
            sc = scope | {a, "$index"}
            return "{" + ref(lst, scope) + f".map(({a}, $index) => (<Fragment key={{$index}}>" + s.kids(n, sc, parent_tag) + "</Fragment>))}"
        if tag == "dc-import":
            nm = d["name"]; s.uses.add(nm)
            props = " ".join(f"{camel(k)}={attr_val(v, scope)}" for k, v in n.attrs if k not in ("name",) and not k.startswith("hint-"))
            return f"<{nm}{(' ' + props) if props else ''} />"
        if tag == "a" and "crumb" in d.get("class", "").split(): return s.crumb(n)
        if tag == "style":
            css = "".join(c for c in n.children if isinstance(c, str))
            return "<style dangerouslySetInnerHTML={{ __html: " + js(css) + " }} />"
        jtag = SVG_TAGS.get(tag, tag)
        if tag == "video" and "autoplay" in d:
            jtag = "AutoVideo"; s.uses.add("AutoVideo")
        a = s.attrs(n, scope)
        if tag in VOID and not n.children: return f"<{jtag}{a} />"
        return f"<{jtag}{a}>" + s.kids(n, scope, tag) + f"</{jtag}>"
    def kids(s, n, scope, ptag):
        return "".join(s.node(c, scope, ptag) for c in n.children)

def parse(name):
    src = (P / f"{name}.dc.html").read_text()
    title = re.search(r"<title>(.*?)</title>", src, re.S).group(1).strip()
    xdc = re.search(r"<x-dc>(.*)</x-dc>", src, re.S).group(1)
    helmet = re.search(r"<helmet>(.*?)</helmet>", xdc, re.S)
    styles = []
    if helmet:
        for st in re.findall(r"<style>(.*?)</style>", helmet.group(1), re.S):
            st = st.replace("body{margin:0}", "").strip()
            if st: styles.append(st)
        xdc = xdc.replace(helmet.group(0), "")
    script = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', src, re.S).group(1).strip()
    return title, xdc, styles, script

def logic_needed(xdc):
    return bool(HOLE.search(xdc))

def build(name, kind):
    title, xdc, styles, script = parse(name)
    t = Tree(); t.feed(xdc); t.close()
    e = Emitter(name)
    body = "".join(e.node(c, frozenset()) for c in t.root.children)
    dyn = logic_needed(xdc)
    style_jsx = "".join("<style dangerouslySetInnerHTML={{ __html: " + js(st) + " }} />" for st in styles)
    imports = []
    if dyn: imports.append('import { Fragment, useState } from "react";')
    for u in sorted(e.uses): imports.append(f'import {u} from "@/components/{"ui" if u == "AutoVideo" else "v3"}/{u}";')
    logic = ""
    if dyn:
        code = re.sub(r"'(\w+)\.dc\.html(#[^']*)?'", lambda m: "'" + ROUTES[m.group(1)] + (m.group(2) or "") + "'", script)
        if e.forms:
            imports.append('import { submitLead } from "@/lib/submitLead";')
            code = code.replace("send: (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ sent: true }); }",
                                "send: (e) => { if (e && e.preventDefault) e.preventDefault(); submitLead(e.currentTarget).then((ok) => { if (ok) this.setState({ sent: true }); }); }")
            if "submitLead(" not in code: raise SystemExit(f"no se pudo conectar el formulario de {name}")
        logic = ("class DCLogic {\n  constructor(state, setState, props) { this.state = state; this.setState = setState; this.props = props || {}; }\n}\n\n"
                 + code + "\n\n")
    head = ('"use client";\n\n' if dyn else "") + f"// Generado desde el canvas v3 ({name}.dc.html): {title}\n// No editar a mano sin actualizar el canvas; ver design/v3/README.md\n" + "\n".join(imports) + "\n\n"
    fn = f"export default function {name}(props) {{\n"
    if dyn:
        fn += "  const [state, set] = useState({});\n  const c = new Component(state, (p) => set((s) => ({ ...s, ...p })), props);\n  const v = c.renderVals();\n"
    fn += "  return (<>" + style_jsx + body + "</>);\n}\n"
    out = REPO / ("src/components/v3" if kind == "comp" else "src/views") / f"{name}.jsx"
    out.parent.mkdir(parents=True, exist_ok=True)
    def ini(m):
        known = {"Sergio Andrés Murillo Estrada": "SM", "Sebastián Hoyos Castrillón": "SH", "Elizabeth Tamayo Londoño": "ET", "Andrés Felipe Cárdenas Hernández": "AC"}
        name = m.group(1).strip()
        return "{" + json.dumps(known.get(name) or "".join(w[0] for w in name.split()[:2])) + "}"
    fn = re.sub(r'<div className="pc-ph">\{"\[FOTO: retrato de ([^\]]+)\]"\}</div>', lambda m: '<div className="pc-ph pc-ini" aria-hidden="true">' + ini(m) + "</div>", fn)
    out.write_text(head + logic + fn)
    return title, e.forms

report = {}
for c in COMPONENTS: report[c] = build(c, "comp")
for p in ROUTES: report[p] = build(p, "view")
# medios
dst = REPO / "public/media"; dst.mkdir(parents=True, exist_ok=True)
for bid, f in media_used.items():
    if f and (S / f).exists(): shutil.copy2(S / f, dst / f)
css = (S / "solyon-v3-final.css").read_text()
css = re.sub(r"/_blob/([0-9a-f]{32})", lambda m: media(m.group(1)), css)
for bid, f in media_used.items():
    if f and (S / f).exists(): shutil.copy2(S / f, dst / f)
(REPO / "src/styles/v3.css").write_text(css)
json.dump({k: {"title": v[0], "forms": v[1]} for k, v in report.items()}, open(REPO / "design/v3/convert-report.json", "w"), ensure_ascii=False, indent=1)
print("\nOK", len(report), "artboards,", len(media_used), "medios")
