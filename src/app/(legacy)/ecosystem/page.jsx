"use client";

import Image from "next/image";
import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

export default function EcosystemPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-18 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_32%,rgba(230,188,104,0.08),transparent_30rem),radial-gradient(circle_at_22%_70%,rgba(59,130,246,0.06),transparent_28rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t.heroEyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[3.7rem]">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
              {t.heroBody}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.heroTags.map((item) => (
                <span
                  key={item}
                  className={pillClass}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ARCHITECTURE MAP */}
          <div className="rounded-[1.6rem] border border-white/10 bg-[#0b0e12] p-4 md:p-5">
            <div className="rounded-xl border border-[#E6BC68]/25 bg-[#E6BC68]/[0.04] p-5">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                01 · COMPANY
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                SOLYON Technologies
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/45">
                {t.mapCompany}
              </p>
            </div>

            <div className="mx-auto h-5 w-px bg-gradient-to-b from-[#E6BC68]/50 to-white/10" />

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                    02 · CORE PLATFORM
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    SOLYON OS
                  </h2>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-white/36">
                  Operational Intelligence
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-white/45">
                {t.mapOS}
              </p>
            </div>

            <div className="mx-auto h-5 w-px bg-white/10" />

            <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.035] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-violet-200/65">
                    03 · AI INTELLIGENCE LAYER
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    Arcanum
                  </h2>
                </div>

                <span className="rounded-full border border-violet-300/15 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-violet-100/45">
                  {t.mapArcanumStatus}
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-white/48">
                {t.mapArcanum}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.arcanumTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[0.58rem] text-white/42"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.architectureEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.architectureTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.architectureBody}
          </p>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {t.architectureLayers.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
            >
              <p className="text-[0.6rem] font-semibold text-[#E6BC68]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white/85">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-white/43">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          APPLICATIONS / MARKETS
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {t.applicationsEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.applicationsTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.applicationsBody}
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {/* INSURANCE */}
            <article className="flex min-h-[350px] flex-col rounded-[1.4rem] border border-[#E6BC68]/20 bg-gradient-to-br from-[#15130d] to-[#0b0e12] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68]">
                  {t.insurance.type}
                </p>

                <span className="rounded-full border border-[#E6BC68]/20 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-[#E6BC68]/70">
                  {t.insurance.stage}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Insurance Operations
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-white/48">
                {t.insurance.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.insurance.tags.map((item) => (
                  <span
                    key={item}
                    className={pillClass}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-t border-white/10 pt-4 text-[0.68rem] leading-5 text-white/34">
                {t.insurance.note}
              </p>
            </article>

            {/* MOVE */}
            <article className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b0e12]">
              <div className="relative h-44 overflow-hidden border-b border-white/10">
                <Image
                  src="/visual/home-validation-rutan-toyota.png"
                  alt={t.move.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1 text-[0.54rem] font-semibold uppercase tracking-[0.13em] text-white/65 backdrop-blur-lg">
                  {t.move.visualLabel}
                </span>
              </div>

              <div className="flex min-h-[310px] flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68]">
                    {t.move.type}
                  </p>

                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-white/36">
                    {t.move.stage}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  SOLYON Move
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-white/48">
                  {t.move.body}
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/solyon-move"
                    className="inline-flex w-fit rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white"
                  >
                    {t.move.button}
                  </Link>

                  <GooglePlayLink
                    label={t.download}
                    compact
                  />
                </div>
              </div>
            </article>

            {/* ACADEMY */}
            <article className="flex min-h-[350px] flex-col rounded-[1.4rem] border border-white/10 bg-[#0b0e12] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68]">
                  {t.academy.type}
                </p>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-white/36">
                  {t.academy.stage}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                SOLYON Academy
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-white/48">
                {t.academy.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.academy.tags.map((item) => (
                  <span
                    key={item}
                    className={pillClass}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-t border-white/10 pt-4 text-[0.68rem] leading-5 text-white/34">
                {t.academy.note}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCANUM
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t.arcanumEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.arcanumTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.arcanumBody}
            </p>

            <p className="mt-5 max-w-xl text-[0.68rem] leading-5 text-white/34">
              {t.arcanumDisclaimer}
            </p>
          </div>

          <div className="rounded-[1.55rem] border border-violet-400/20 bg-gradient-to-br from-violet-400/[0.035] to-[#0b0e12] p-5 md:p-6">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-violet-200/60">
              ARCANUM · AI INTELLIGENCE LAYER
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.arcanumCapabilities.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#090b0f] p-4"
                >
                  <span className="text-[0.58rem] font-semibold text-[#E6BC68]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold text-white/85">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs leading-5 text-white/42">
              <strong className="text-white/72">
                {t.arcanumRoleLabel}
              </strong>{" "}
              {t.arcanumRole}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATIONSHIPS / LOOP
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">
              {t.relationshipsEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.relationshipsTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.relationshipsBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.relationships.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
              >
                <span className="text-[0.6rem] font-semibold text-[#E6BC68]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-sm font-semibold text-white/85">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-white/43">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO DISCIPLINE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.disciplineEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.disciplineTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.disciplineBody}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.gates.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
            >
              <p className="text-[0.6rem] font-semibold text-[#E6BC68]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white/85">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-white/43">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-[0.68rem] leading-5 text-white/32">
          {t.disciplineNote}
        </p>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-11 md:py-14">
        <div className="section-shell">
          <div className="rounded-[1.55rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] via-[#0d0e10] to-[#090b0e] p-6 md:p-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">
                  SOLYON TECHNOLOGIES
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl">
                  {t.ctaTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                  {t.ctaBody}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/technology"
                  className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
                >
                  {t.ctaTechnology}
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  {t.ctaContact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* =========================================================
   ESPAÑOL
========================================================= */

const es = {
  heroEyebrow:
    "Ecosistema · Arquitectura empresarial",

  heroTitle:
    "Una compañía tecnológica. Una infraestructura central. Múltiples rutas de aplicación.",

  heroBody:
    "SOLYON organiza laboratorio, plataforma, inteligencia, productos y mercados según su función real. La meta no es construir negocios desconectados, sino acumular capacidades tecnológicas reutilizables.",

  heroTags: [
    "SOLYON Technologies",
    "SOLYON OS",
    "Arcanum",
    "Products",
    "Commercial Wedges",
  ],

  mapCompany:
    "Compañía madre y laboratorio DeepTech desde Medellín. Construye capacidad tecnológica, producto, conocimiento y arquitectura.",

  mapOS:
    "Infraestructura central para estructurar conocimiento, datos, sistemas operativos, automatización y agentes.",

  mapArcanum:
    "Capa de inteligencia de SOLYON OS orientada a conocimiento contextual, razonamiento asistido, agentes y coordinación de procesos definidos.",

  mapArcanumStatus:
    "EN DESARROLLO",

  arcanumTags: [
    "Knowledge",
    "Reasoning",
    "Agents",
    "Orchestration",
  ],

  architectureEyebrow:
    "Arquitectura",

  architectureTitle:
    "Cada capa cumple una función distinta.",

  architectureBody:
    "SOLYON Technologies construye la capacidad. SOLYON OS organiza la infraestructura. Arcanum concentra capacidades de inteligencia. Los productos y mercados permiten validar utilidad bajo condiciones reales.",

  architectureLayers: [
    {
      title: "Company",
      body:
        "Estrategia, laboratorio, propiedad tecnológica, talento y asignación de recursos.",
    },
    {
      title: "Platform",
      body:
        "Conocimiento, datos, software, workflows, controles y arquitectura reutilizable.",
    },
    {
      title: "Intelligence",
      body:
        "Arcanum, agentes, automatización y capacidades de inteligencia aplicada.",
    },
    {
      title: "Applications",
      body:
        "Productos y mercados donde la infraestructura se enfrenta a necesidades concretas.",
    },
  ],

  applicationsEyebrow:
    "Productos y mercados",

  applicationsTitle:
    "La infraestructura se valida en problemas concretos.",

  applicationsBody:
    "No todas las aplicaciones tienen el mismo modelo económico ni la misma etapa. Cada una conserva independencia suficiente para validar una necesidad real sin redefinir toda la compañía.",

  insurance: {
    type: "Wedge comercial prioritario",
    stage: "VALIDACIÓN",
    body:
      "Insurance Operations es el primer mercado de validación comercial de SOLYON OS. El foco inicial está en operaciones especializadas de commercial insurance, incluyendo trucking, donde existe conocimiento profundo del dominio.",
    tags: [
      "Commercial Insurance",
      "Trucking",
      "Workflow Automation",
      "Operational Intelligence",
    ],
    note:
      "Insurance Operations es un mercado inicial de validación. No define a SOLYON Technologies como una compañía de seguros.",
  },

  move: {
    type: "Producto independiente",
    stage: "ACTIVO",
    body:
      "SOLYON Move integra producto móvil, datos territoriales, APIs, CRM y herramientas institucionales para movilidad accesible e inteligencia urbana.",
    alt:
      "Validación institucional y territorial de SOLYON Move en Medellín",
    visualLabel:
      "RUTA N · TOYOTA MOBILITY FOUNDATION",
    button:
      "Explorar SOLYON Move",
  },

  academy: {
    type: "Knowledge application",
    stage: "EN DESARROLLO",
    body:
      "SOLYON Academy convierte conocimiento estructurado en experiencias de aprendizaje asistidas por agentes conversacionales y nuevas interfaces de IA.",
    tags: [
      "Knowledge Systems",
      "Conversational AI",
      "Agents",
      "Learning",
    ],
    note:
      "El desarrollo de capacidades conversacionales contará con infraestructura del ElevenLabs Grant otorgado a SOLYON Technologies.",
  },

  download:
    "SOLYON Move gratis en Google Play",

  arcanumEyebrow:
    "Capa de inteligencia",

  arcanumTitle:
    "Arcanum es el cerebro de IA dentro de la arquitectura SOLYON.",

  arcanumBody:
    "Arcanum no sustituye a SOLYON OS. Funciona como una capa de inteligencia destinada a conectar conocimiento estructurado, contexto operacional, agentes y workflows bajo objetivos definidos.",

  arcanumDisclaimer:
    "Arcanum permanece en desarrollo progresivo. No se presenta como inteligencia autónoma general, sistema autoevolutivo irrestricto ni como una plataforma completamente terminada.",

  arcanumCapabilities: [
    {
      title: "Knowledge Retrieval",
      body:
        "Acceso contextual a conocimiento estructurado y documentación relevante.",
    },
    {
      title: "Assisted Reasoning",
      body:
        "Análisis contextual y soporte a decisiones dentro de alcances definidos.",
    },
    {
      title: "Agent Orchestration",
      body:
        "Coordinación de agentes especializados alrededor de tareas y workflows.",
    },
    {
      title: "Operational Context",
      body:
        "Uso de datos, reglas, permisos y contexto específico de cada operación.",
    },
  ],

  arcanumRoleLabel:
    "Rol dentro del ecosistema:",

  arcanumRole:
    "convertir la infraestructura de conocimiento y datos de SOLYON OS en capacidades de inteligencia aplicables a productos y operaciones.",

  relationshipsEyebrow:
    "Cómo se conecta",

  relationshipsTitle:
    "La evidencia alimenta la infraestructura.",

  relationshipsBody:
    "El valor acumulativo aparece cuando cada ejecución deja conocimiento, datos, controles y arquitectura que pueden fortalecer las siguientes.",

  relationships: [
    {
      title: "El problema genera evidencia",
      body:
        "Productos y mercados exponen restricciones, decisiones, excepciones y necesidades reales.",
    },
    {
      title: "El laboratorio estructura",
      body:
        "SOLYON convierte evidencia en conocimiento, datos, arquitectura y criterios tecnológicos.",
    },
    {
      title: "SOLYON OS reutiliza",
      body:
        "Las capacidades justificadas pueden convertirse en componentes compartidos y reutilizables.",
    },
    {
      title: "Arcanum agrega inteligencia",
      body:
        "La capa de IA utiliza conocimiento, contexto y workflows para habilitar nuevas capacidades.",
    },
    {
      title: "Los productos validan",
      body:
        "Cada implementación confronta la tecnología con usuarios, compradores o instituciones reales.",
    },
    {
      title: "El aprendizaje regresa",
      body:
        "La evidencia de uso mejora producto, documentación, controles y siguientes iteraciones.",
    },
  ],

  disciplineEyebrow:
    "Disciplina de portafolio",

  disciplineTitle:
    "No toda capacidad se convierte en un nuevo negocio.",

  disciplineBody:
    "SOLYON mantiene una compañía tecnológica amplia, pero exige evidencia antes de asignar recursos relevantes a nuevas aplicaciones o mercados.",

  gates: [
    {
      title: "Problema real",
      body:
        "Debe existir una necesidad operacional claramente documentada.",
    },
    {
      title: "Usuario o comprador",
      body:
        "Debe existir acceso a quien utilice o pague por resolver el problema.",
    },
    {
      title: "Resultado medible",
      body:
        "La tecnología debe demostrar utilidad mediante evidencia concreta.",
    },
    {
      title: "Reutilización o recurrencia",
      body:
        "La capacidad debe justificar escala, reutilización o modelo económico sostenible.",
    },
  ],

  disciplineNote:
    "Esta disciplina evita convertir cada experimento, módulo o validación en una nueva compañía y mantiene la asignación de capital alineada con evidencia.",

  ctaTitle:
    "Construimos un ecosistema donde cada ejecución fortalece la siguiente.",

  ctaBody:
    "SOLYON Technologies conecta laboratorio, SOLYON OS, Arcanum, productos y mercados bajo una arquitectura destinada a acumular capacidad tecnológica reutilizable.",

  ctaTechnology:
    "Explorar tecnología",

  ctaContact:
    "Conversar con SOLYON",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  heroEyebrow:
    "Ecosystem · Enterprise architecture",

  heroTitle:
    "One technology company. One core infrastructure. Multiple paths to application.",

  heroBody:
    "SOLYON organizes laboratory, platform, intelligence, products and markets according to their actual function. The goal is not to build disconnected businesses, but to compound reusable technological capabilities.",

  heroTags: [
    "SOLYON Technologies",
    "SOLYON OS",
    "Arcanum",
    "Products",
    "Commercial Wedges",
  ],

  mapCompany:
    "Parent company and DeepTech laboratory from Medellín. Builds technology capability, products, knowledge and architecture.",

  mapOS:
    "Core infrastructure for structuring knowledge, data, operational systems, automation and agents.",

  mapArcanum:
    "SOLYON OS intelligence layer focused on contextual knowledge, assisted reasoning, agents and coordination of defined processes.",

  mapArcanumStatus:
    "IN DEVELOPMENT",

  arcanumTags: [
    "Knowledge",
    "Reasoning",
    "Agents",
    "Orchestration",
  ],

  architectureEyebrow:
    "Architecture",

  architectureTitle:
    "Every layer performs a different function.",

  architectureBody:
    "SOLYON Technologies builds capability. SOLYON OS organizes infrastructure. Arcanum concentrates intelligence capabilities. Products and markets test utility under real conditions.",

  architectureLayers: [
    {
      title: "Company",
      body:
        "Strategy, laboratory, technology ownership, talent and resource allocation.",
    },
    {
      title: "Platform",
      body:
        "Knowledge, data, software, workflows, controls and reusable architecture.",
    },
    {
      title: "Intelligence",
      body:
        "Arcanum, agents, automation and applied intelligence capabilities.",
    },
    {
      title: "Applications",
      body:
        "Products and markets where infrastructure confronts concrete needs.",
    },
  ],

  applicationsEyebrow:
    "Products and markets",

  applicationsTitle:
    "Infrastructure is validated against concrete problems.",

  applicationsBody:
    "Not every application has the same business model or stage. Each retains enough independence to validate a real need without redefining the entire company.",

  insurance: {
    type: "Priority commercial wedge",
    stage: "VALIDATION",
    body:
      "Insurance Operations is SOLYON OS's first commercial validation market. Initial focus is specialized commercial insurance operations, including trucking, where deep domain knowledge already exists.",
    tags: [
      "Commercial Insurance",
      "Trucking",
      "Workflow Automation",
      "Operational Intelligence",
    ],
    note:
      "Insurance Operations is an initial validation market. It does not define SOLYON Technologies as an insurance company.",
  },

  move: {
    type: "Independent product",
    stage: "ACTIVE",
    body:
      "SOLYON Move integrates mobile product, territorial data, APIs, CRM and institutional tools for accessible mobility and urban intelligence.",
    alt:
      "Institutional and territorial validation of SOLYON Move in Medellín",
    visualLabel:
      "RUTA N · TOYOTA MOBILITY FOUNDATION",
    button:
      "Explore SOLYON Move",
  },

  academy: {
    type: "Knowledge application",
    stage: "IN DEVELOPMENT",
    body:
      "SOLYON Academy turns structured knowledge into learning experiences supported by conversational agents and new AI interfaces.",
    tags: [
      "Knowledge Systems",
      "Conversational AI",
      "Agents",
      "Learning",
    ],
    note:
      "Conversational capabilities will be developed using infrastructure from the ElevenLabs Grant awarded to SOLYON Technologies.",
  },

  download:
    "Get SOLYON Move free on Google Play",

  arcanumEyebrow:
    "Intelligence layer",

  arcanumTitle:
    "Arcanum is the AI brain within the SOLYON architecture.",

  arcanumBody:
    "Arcanum does not replace SOLYON OS. It operates as an intelligence layer intended to connect structured knowledge, operational context, agents and workflows around defined objectives.",

  arcanumDisclaimer:
    "Arcanum remains under progressive development. It is not presented as autonomous general intelligence, an unrestricted self-evolving system or a fully completed platform.",

  arcanumCapabilities: [
    {
      title: "Knowledge Retrieval",
      body:
        "Contextual access to structured knowledge and relevant documentation.",
    },
    {
      title: "Assisted Reasoning",
      body:
        "Contextual analysis and decision support within defined scopes.",
    },
    {
      title: "Agent Orchestration",
      body:
        "Coordination of specialized agents around tasks and workflows.",
    },
    {
      title: "Operational Context",
      body:
        "Use of data, rules, permissions and operation-specific context.",
    },
  ],

  arcanumRoleLabel:
    "Role within the ecosystem:",

  arcanumRole:
    "turn SOLYON OS knowledge and data infrastructure into intelligence capabilities applicable to products and operations.",

  relationshipsEyebrow:
    "How it connects",

  relationshipsTitle:
    "Evidence feeds the infrastructure.",

  relationshipsBody:
    "Compounding value appears when each execution leaves knowledge, data, controls and architecture that can strengthen the next one.",

  relationships: [
    {
      title: "Problems generate evidence",
      body:
        "Products and markets expose real constraints, decisions, exceptions and needs.",
    },
    {
      title: "The laboratory structures",
      body:
        "SOLYON turns evidence into knowledge, data, architecture and technology criteria.",
    },
    {
      title: "SOLYON OS reuses",
      body:
        "Justified capabilities can become shared and reusable components.",
    },
    {
      title: "Arcanum adds intelligence",
      body:
        "The AI layer uses knowledge, context and workflows to enable new capabilities.",
    },
    {
      title: "Products validate",
      body:
        "Each implementation confronts technology with real users, buyers or institutions.",
    },
    {
      title: "Learning returns",
      body:
        "Usage evidence improves product, documentation, controls and subsequent iterations.",
    },
  ],

  disciplineEyebrow:
    "Portfolio discipline",

  disciplineTitle:
    "Not every capability becomes a new business.",

  disciplineBody:
    "SOLYON maintains a broad technology company while requiring evidence before allocating significant resources to new applications or markets.",

  gates: [
    {
      title: "Real problem",
      body:
        "A clearly documented operational need must exist.",
    },
    {
      title: "User or buyer",
      body:
        "There must be access to whoever uses or pays to solve the problem.",
    },
    {
      title: "Measurable outcome",
      body:
        "Technology must demonstrate utility through concrete evidence.",
    },
    {
      title: "Reuse or recurrence",
      body:
        "Capability must justify scale, reuse or a sustainable economic model.",
    },
  ],

  disciplineNote:
    "This discipline prevents every experiment, module or validation from becoming a separate company and keeps capital allocation aligned with evidence.",

  ctaTitle:
    "We build an ecosystem where every execution strengthens the next.",

  ctaBody:
    "SOLYON Technologies connects laboratory, SOLYON OS, Arcanum, products and markets under an architecture designed to compound reusable technology capability.",

  ctaTechnology:
    "Explore technology",

  ctaContact:
    "Talk with SOLYON",
};
