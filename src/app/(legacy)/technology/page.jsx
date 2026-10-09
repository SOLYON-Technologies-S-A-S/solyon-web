"use client";

import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const ELEVENLABS_GRANTS_URL =
  "https://elevenlabs.io/startup-grants";

const ELEVENLABS_GRANTS_LOGO =
  "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

export default function TechnologyPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-18 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_32%,rgba(59,130,246,0.07),transparent_30rem),radial-gradient(circle_at_20%_15%,rgba(230,188,104,0.07),transparent_26rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {t.heroEyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[3.75rem]">
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

            <div className="mt-7">
              <a
                href="#solyon-os"
                className="inline-flex items-center gap-3 rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#efca7d]"
              >
                {t.heroButton}

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 5v14M6 13l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-lab-tech-main.png"
              alt={t.heroAlt}
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />

            <div className="absolute inset-2.5 rounded-[1.15rem] bg-gradient-to-t from-[#07090c]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#E6BC68]">
                SOLYON TECHNOLOGIES
              </p>

              <p className="mt-1 text-sm font-semibold text-white/90">
                {t.heroVisualLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLYON OS
      ========================================================= */}
      <section
        id="solyon-os"
        className="section-shell scroll-mt-24 py-11 md:py-14"
      >
        <div className="grid gap-9 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <p className="eyebrow">
              {t.osEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.osTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.osBody}
            </p>

            <div className="mt-6 rounded-xl border border-[#E6BC68]/20 bg-[#E6BC68]/[0.035] p-4">
              <p className="text-xs leading-6 text-white/52">
                <strong className="font-semibold text-[#E6BC68]">
                  {t.osStatusLabel}
                </strong>{" "}
                {t.osStatus}
              </p>
            </div>
          </div>

          <div className="rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-4 md:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.osLayers.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-xl border p-4 ${
                    index === 0
                      ? "border-[#E6BC68]/25 bg-[#E6BC68]/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.62rem] font-semibold text-[#E6BC68]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[0.54rem] font-semibold uppercase tracking-[0.13em] text-white/30">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-white/88">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/44">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-400/[0.035] px-4 py-3">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-violet-200/60">
                {t.learningLabel}
              </p>

              <p className="mt-2 text-xs leading-5 text-white/50">
                {t.learningLoop}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FROM OPERATIONS TO INFRASTRUCTURE
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {t.logicEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.logicTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.logicBody}
            </p>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {t.logicSteps.map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-xl border border-white/10 bg-[#0b0e12] p-4"
              >
                <span className="text-[0.58rem] font-semibold text-[#E6BC68]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-sm font-semibold text-white/85">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/42">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.capabilitiesEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.capabilitiesTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.capabilitiesBody}
          </p>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0b0e12] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#E6BC68]">
                  {item.label}
                </p>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-white/34">
                  {item.stage}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-white/88">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-[0.68rem] leading-5 text-white/32">
          {t.capabilityDisclaimer}
        </p>
      </section>

      {/* =========================================================
          AI / AGENTS / ELEVENLABS
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
            <div>
              <p className="eyebrow">
                {t.agentsEyebrow}
              </p>

              <h2 className={sectionTitleClass}>
                {t.agentsTitle}
              </h2>

              <p className={sectionCopyClass}>
                {t.agentsBody}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.agentsTags.map((item) => (
                  <span
                    key={item}
                    className={pillClass}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-white/10 bg-[#090b0f] p-5 md:p-6">
              <a
                href={ELEVENLABS_GRANTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ElevenLabs Grants"
                className="inline-flex opacity-80 transition hover:opacity-100"
              >
                <img
                  src={ELEVENLABS_GRANTS_LOGO}
                  alt="ElevenLabs Grants"
                  className="h-auto w-[165px] md:w-[185px]"
                />
              </a>

              <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                {t.grantEyebrow}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white/90">
                {t.grantTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/48">
                {t.grantBody}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.grantUses.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <p className="text-xs font-semibold text-white/78">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-white/40">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXECUTION EVIDENCE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/home-validation-rutan-toyota.png"
              alt={t.evidenceAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[16/10] w-full rounded-[1.15rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.evidenceVisualLabel}
            </span>
          </div>

          <div>
            <p className="eyebrow">
              {t.evidenceEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.evidenceTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.evidenceBody}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.evidencePoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
                >
                  <h3 className="text-sm font-semibold text-white/82">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/43">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/solyon-move"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#E6BC68]/50 hover:text-[#E6BC68]"
            >
              {t.evidenceButton}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          METHOD
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">
                {t.methodEyebrow}
              </p>

              <h2 className={sectionTitleClass}>
                {t.methodTitle}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/55">
              {t.methodBody}
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.method.map((item, index) => (
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
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-11 md:py-14">
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
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
                >
                  {t.ctaContact}
                </Link>

                <Link
                  href="/ecosystem"
                  className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  {t.ctaEcosystem}
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
    "Tecnología · Operational Intelligence",

  heroTitle:
    "Infraestructura tecnológica construida desde operaciones reales.",

  heroBody:
    "SOLYON convierte conocimiento operativo, evidencia y datos en software, automatización y capacidades de inteligencia artificial diseñadas para sistemas complejos.",

  heroButton:
    "Explorar SOLYON OS",

  heroTags: [
    "Operational Knowledge",
    "Data Infrastructure",
    "Operational Systems",
    "Agents & Automation",
  ],

  heroAlt:
    "Laboratorio tecnológico conceptual de SOLYON Technologies",

  heroVisualLabel:
    "DeepTech · Applied AI · Medellín",

  osEyebrow:
    "Plataforma tecnológica central",

  osTitle:
    "SOLYON OS — Operational Intelligence Infrastructure.",

  osBody:
    "SOLYON OS es la arquitectura mediante la cual estructuramos conocimiento, datos, workflows, controles, software y agentes de IA para convertir operación compleja en capacidad tecnológica reutilizable.",

  osStatusLabel:
    "Estado actual:",

  osStatus:
    "arquitectura central y dirección de convergencia en construcción progresiva. No afirmamos que todos los productos actuales ya operen sobre un único core técnico.",

  osLayers: [
    {
      label: "KNOWLEDGE",
      title: "Operational Knowledge",
      body:
        "Evidencia, reglas, excepciones, decisiones, contexto y conocimiento estructurado.",
    },
    {
      label: "DATA",
      title: "Data Infrastructure",
      body:
        "Captura, trazabilidad, servicios, interoperabilidad y reutilización de datos.",
    },
    {
      label: "OPERATIONS",
      title: "Operational Systems",
      body:
        "Software, interfaces, controles, permisos y herramientas para ejecutar operación.",
    },
    {
      label: "AGENTS",
      title: "Agents & Automation",
      body:
        "Workflows, automatización, agentes conversacionales y orquestación de inteligencia artificial.",
    },
  ],

  learningLabel:
    "Ciclo de aprendizaje",

  learningLoop:
    "operación → evidencia → conocimiento → datos → sistema → decisión → aprendizaje → nueva iteración.",

  logicEyebrow:
    "Arquitectura de aprendizaje",

  logicTitle:
    "No empezamos por la interfaz.",

  logicBody:
    "La tecnología comienza entendiendo cómo funciona realmente una operación. El software aparece después de estructurar la evidencia, las reglas, las excepciones y las decisiones.",

  logicSteps: [
    {
      title: "Operación",
      body:
        "Procesos y restricciones reales.",
    },
    {
      title: "Evidencia",
      body:
        "Casos, decisiones y excepciones.",
    },
    {
      title: "Conocimiento",
      body:
        "Reglas y memoria estructurada.",
    },
    {
      title: "Datos",
      body:
        "Información trazable y reutilizable.",
    },
    {
      title: "Sistema",
      body:
        "Software, workflows y controles.",
    },
    {
      title: "Aprendizaje",
      body:
        "Validación que mejora la siguiente iteración.",
    },
  ],

  capabilitiesEyebrow:
    "Capacidades tecnológicas",

  capabilitiesTitle:
    "Una arquitectura modular que evoluciona por evidencia.",

  capabilitiesBody:
    "Cada capacidad conserva su estado real. Algunas ya han sido utilizadas en producto y operación; otras están en construcción o validación.",

  capabilities: [
    {
      label: "KNOWLEDGE",
      stage: "ACTIVA",
      title: "Conocimiento estructurado",
      body:
        "Conversión de experiencia dispersa, documentación y criterios operativos en memoria reutilizable.",
    },
    {
      label: "DATA",
      stage: "ACTIVA / EVOLUCIÓN",
      title: "Infraestructura de datos",
      body:
        "Captura, organización, validación, trazabilidad y exposición de información operacional.",
    },
    {
      label: "WORKFLOWS",
      stage: "ACTIVA",
      title: "Automatización operativa",
      body:
        "Flujos y herramientas para reducir tareas repetitivas y mejorar control operacional.",
    },
    {
      label: "AI",
      stage: "EN DESARROLLO",
      title: "Agentes de IA",
      body:
        "Agentes especializados para conversación, consulta de conocimiento y coordinación de workflows definidos.",
    },
    {
      label: "SYSTEMS",
      stage: "ACTIVA",
      title: "Software operacional",
      body:
        "Interfaces, CRM, módulos administrativos, herramientas institucionales y sistemas de soporte.",
    },
    {
      label: "DECISION",
      stage: "VALIDACIÓN",
      title: "Soporte a decisiones",
      body:
        "Sistemas que organizan señales y contexto para reducir incertidumbre manteniendo responsabilidad humana.",
    },
  ],

  capabilityDisclaimer:
    "Las etapas indicadas describen el estado actual de capacidades del laboratorio. SOLYON no presenta SOLYON OS como una plataforma completamente terminada ni afirma autonomía total de sus sistemas de IA.",

  agentsEyebrow:
    "Applied AI · Agents & Automation",

  agentsTitle:
    "La IA se integra donde puede producir capacidad operativa real.",

  agentsBody:
    "Nuestro enfoque no parte de añadir un chatbot a cada producto. Diseñamos agentes alrededor de conocimiento, contexto, workflows y objetivos operativos específicos.",

  agentsTags: [
    "Conversational AI",
    "Knowledge Retrieval",
    "Workflow Automation",
    "Human-in-the-loop",
  ],

  grantEyebrow:
    "Infraestructura externa · AI ecosystem",

  grantTitle:
    "Seleccionados para recibir un ElevenLabs Grant.",

  grantBody:
    "Los recursos del programa apoyarán el desarrollo de nuevas capacidades conversacionales dentro del laboratorio y su integración progresiva en productos concretos.",

  grantUses: [
    {
      title: "SOLYON Academy",
      body:
        "Desarrollo de agentes conversacionales orientados a conocimiento y aprendizaje.",
    },
    {
      title: "SOLYON Move · Fase 2",
      body:
        "Exploración de interacción conversacional aplicada a movilidad y contexto territorial.",
    },
  ],

  evidenceEyebrow:
    "Evidencia de ejecución",

  evidenceTitle:
    "La arquitectura se valida construyendo.",

  evidenceBody:
    "SOLYON Move demuestra la capacidad del laboratorio para pasar de un problema real a producto móvil, infraestructura de datos, APIs, CRM, herramientas institucionales y validación territorial.",

  evidenceAlt:
    "Validación institucional y territorial de SOLYON Move en Medellín",

  evidenceVisualLabel:
    "RUTA N · TOYOTA MOBILITY FOUNDATION · MEDELLÍN",

  evidencePoints: [
    {
      title: "Producto",
      body:
        "Aplicación móvil desplegada y evolución funcional documentada.",
    },
    {
      title: "Datos",
      body:
        "Información territorial y capas operativas utilizadas por el sistema.",
    },
    {
      title: "Infraestructura",
      body:
        "APIs, CRM y herramientas institucionales alrededor del producto.",
    },
    {
      title: "Territorio",
      body:
        "Pruebas y validación frente a condiciones reales de Medellín.",
    },
  ],

  evidenceButton:
    "Explorar SOLYON Move",

  methodEyebrow:
    "Método de construcción",

  methodTitle:
    "De la operación al sistema.",

  methodBody:
    "El laboratorio no comienza programando. Primero entiende el problema, documenta la evidencia y estructura el conocimiento. Solo después construye producto y lo confronta con condiciones reales.",

  method: [
    {
      title: "Observar",
      body:
        "Comprender procesos, actores, restricciones y decisiones.",
    },
    {
      title: "Documentar",
      body:
        "Registrar evidencia, excepciones, fallas y dependencias.",
    },
    {
      title: "Estructurar",
      body:
        "Transformar evidencia en reglas, modelos, datos y arquitectura.",
    },
    {
      title: "Construir",
      body:
        "Desarrollar software, automatización y capacidades de IA.",
    },
    {
      title: "Validar",
      body:
        "Confrontar producto con usuarios, compradores e instituciones reales.",
    },
    {
      title: "Escalar",
      body:
        "Reutilizar únicamente aquello que demuestra utilidad y control.",
    },
  ],

  ctaTitle:
    "Construimos tecnología alrededor de problemas operativos reales.",

  ctaBody:
    "SOLYON OS es la dirección tecnológica que conecta conocimiento, datos, software, automatización e inteligencia artificial dentro de una infraestructura operacional reutilizable.",

  ctaContact:
    "Conversar con SOLYON",

  ctaEcosystem:
    "Explorar ecosistema",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  heroEyebrow:
    "Technology · Operational Intelligence",

  heroTitle:
    "Technology infrastructure built from real operations.",

  heroBody:
    "SOLYON turns operational knowledge, evidence and data into software, automation and artificial intelligence capabilities designed for complex systems.",

  heroButton:
    "Explore SOLYON OS",

  heroTags: [
    "Operational Knowledge",
    "Data Infrastructure",
    "Operational Systems",
    "Agents & Automation",
  ],

  heroAlt:
    "Conceptual SOLYON Technologies technology laboratory",

  heroVisualLabel:
    "DeepTech · Applied AI · Medellín",

  osEyebrow:
    "Core technology platform",

  osTitle:
    "SOLYON OS — Operational Intelligence Infrastructure.",

  osBody:
    "SOLYON OS is the architecture through which we structure knowledge, data, workflows, controls, software and AI agents to turn complex operations into reusable technological capability.",

  osStatusLabel:
    "Current status:",

  osStatus:
    "core architecture and convergence direction under progressive construction. We do not claim that every current product already operates on a single technical core.",

  osLayers: [
    {
      label: "KNOWLEDGE",
      title: "Operational Knowledge",
      body:
        "Evidence, rules, exceptions, decisions, context and structured knowledge.",
    },
    {
      label: "DATA",
      title: "Data Infrastructure",
      body:
        "Capture, traceability, services, interoperability and data reuse.",
    },
    {
      label: "OPERATIONS",
      title: "Operational Systems",
      body:
        "Software, interfaces, controls, permissions and tools for executing operations.",
    },
    {
      label: "AGENTS",
      title: "Agents & Automation",
      body:
        "Workflows, automation, conversational agents and artificial intelligence orchestration.",
    },
  ],

  learningLabel:
    "Learning loop",

  learningLoop:
    "operations → evidence → knowledge → data → systems → decisions → learning → next iteration.",

  logicEyebrow:
    "Learning architecture",

  logicTitle:
    "We do not begin with the interface.",

  logicBody:
    "Technology begins by understanding how an operation actually works. Software comes after evidence, rules, exceptions and decisions have been structured.",

  logicSteps: [
    {
      title: "Operations",
      body:
        "Real processes and constraints.",
    },
    {
      title: "Evidence",
      body:
        "Cases, decisions and exceptions.",
    },
    {
      title: "Knowledge",
      body:
        "Rules and structured memory.",
    },
    {
      title: "Data",
      body:
        "Traceable and reusable information.",
    },
    {
      title: "Systems",
      body:
        "Software, workflows and controls.",
    },
    {
      title: "Learning",
      body:
        "Validation improving the next iteration.",
    },
  ],

  capabilitiesEyebrow:
    "Technology capabilities",

  capabilitiesTitle:
    "A modular architecture evolving through evidence.",

  capabilitiesBody:
    "Each capability retains its actual stage. Some have already been used in products and operations, while others remain under construction or validation.",

  capabilities: [
    {
      label: "KNOWLEDGE",
      stage: "ACTIVE",
      title: "Structured knowledge",
      body:
        "Turning dispersed experience, documentation and operating criteria into reusable memory.",
    },
    {
      label: "DATA",
      stage: "ACTIVE / EVOLVING",
      title: "Data infrastructure",
      body:
        "Capturing, organizing, validating, tracing and exposing operational information.",
    },
    {
      label: "WORKFLOWS",
      stage: "ACTIVE",
      title: "Operational automation",
      body:
        "Flows and tools reducing repetitive tasks and improving operational control.",
    },
    {
      label: "AI",
      stage: "IN DEVELOPMENT",
      title: "AI agents",
      body:
        "Specialized agents for conversation, knowledge retrieval and coordination of defined workflows.",
    },
    {
      label: "SYSTEMS",
      stage: "ACTIVE",
      title: "Operational software",
      body:
        "Interfaces, CRM, administrative modules, institutional tools and support systems.",
    },
    {
      label: "DECISION",
      stage: "VALIDATION",
      title: "Decision support",
      body:
        "Systems organizing signals and context to reduce uncertainty while preserving human accountability.",
    },
  ],

  capabilityDisclaimer:
    "The stages shown describe the current state of laboratory capabilities. SOLYON does not present SOLYON OS as a fully completed platform or claim total autonomy for its AI systems.",

  agentsEyebrow:
    "Applied AI · Agents & Automation",

  agentsTitle:
    "AI is integrated where it can create real operating capability.",

  agentsBody:
    "Our approach does not begin by adding a chatbot to every product. We design agents around knowledge, context, workflows and specific operating objectives.",

  agentsTags: [
    "Conversational AI",
    "Knowledge Retrieval",
    "Workflow Automation",
    "Human-in-the-loop",
  ],

  grantEyebrow:
    "External infrastructure · AI ecosystem",

  grantTitle:
    "Selected to receive an ElevenLabs Grant.",

  grantBody:
    "Program resources will support the development of new conversational capabilities within the laboratory and their progressive integration into concrete products.",

  grantUses: [
    {
      title: "SOLYON Academy",
      body:
        "Development of conversational agents focused on knowledge and learning.",
    },
    {
      title: "SOLYON Move · Phase 2",
      body:
        "Exploration of conversational interaction applied to mobility and territorial context.",
    },
  ],

  evidenceEyebrow:
    "Execution evidence",

  evidenceTitle:
    "Architecture is validated by building.",

  evidenceBody:
    "SOLYON Move demonstrates the laboratory's ability to move from a real problem to mobile product, data infrastructure, APIs, CRM, institutional tools and territorial validation.",

  evidenceAlt:
    "Institutional and territorial validation of SOLYON Move in Medellín",

  evidenceVisualLabel:
    "RUTA N · TOYOTA MOBILITY FOUNDATION · MEDELLÍN",

  evidencePoints: [
    {
      title: "Product",
      body:
        "Deployed mobile application with documented functional evolution.",
    },
    {
      title: "Data",
      body:
        "Territorial information and operational layers used by the system.",
    },
    {
      title: "Infrastructure",
      body:
        "APIs, CRM and institutional tools built around the product.",
    },
    {
      title: "Territory",
      body:
        "Testing and validation against real conditions in Medellín.",
    },
  ],

  evidenceButton:
    "Explore SOLYON Move",

  methodEyebrow:
    "Construction method",

  methodTitle:
    "From operations to systems.",

  methodBody:
    "The laboratory does not begin by coding. It first understands the problem, documents evidence and structures knowledge. Only then does it build product and confront it with real conditions.",

  method: [
    {
      title: "Observe",
      body:
        "Understand processes, actors, constraints and decisions.",
    },
    {
      title: "Document",
      body:
        "Record evidence, exceptions, failures and dependencies.",
    },
    {
      title: "Structure",
      body:
        "Transform evidence into rules, models, data and architecture.",
    },
    {
      title: "Build",
      body:
        "Develop software, automation and AI capabilities.",
    },
    {
      title: "Validate",
      body:
        "Confront products with real users, buyers and institutions.",
    },
    {
      title: "Scale",
      body:
        "Reuse only what demonstrates utility and control.",
    },
  ],

  ctaTitle:
    "We build technology around real operational problems.",

  ctaBody:
    "SOLYON OS is the technology direction connecting knowledge, data, software, automation and artificial intelligence within reusable operational infrastructure.",

  ctaContact:
    "Talk with SOLYON",

  ctaEcosystem:
    "Explore ecosystem",
};
