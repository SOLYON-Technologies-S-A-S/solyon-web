"use client";

import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const RUTAN_STORY =
  "https://rutanmedellin.org/noticias/en-medell%C3%ADn-crean-dos-plataformas-con-inteligencia-artificial-para-facilitar-los-viajes-de-personas-con-movilidad-reducida";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.solyon.move";

const sectionTitleClass =
  "mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl";

const sectionCopyClass =
  "mt-5 max-w-3xl text-base leading-7 text-white/58 md:text-lg";

function GooglePlayIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      <defs>
        <linearGradient id="play-green" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00D6A0" />
          <stop offset="100%" stopColor="#00A878" />
        </linearGradient>

        <linearGradient id="play-blue" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00A8FF" />
          <stop offset="100%" stopColor="#0077FF" />
        </linearGradient>

        <linearGradient id="play-yellow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFD45A" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>

        <linearGradient id="play-red" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FF5A68" />
          <stop offset="100%" stopColor="#FF314A" />
        </linearGradient>
      </defs>

      <path
        d="M4.5 3.6c-.7.7-1.1 1.8-1.1 3.2v18.4c0 1.4.4 2.5 1.1 3.2L17 16Z"
        fill="url(#play-green)"
      />

      <path
        d="M17 16 5.1 3.9c.7-.4 1.6-.3 2.6.3l14.6 8.4Z"
        fill="url(#play-blue)"
      />

      <path
        d="m17 16 5.3 3.4-14.6 8.4c-1 .6-1.9.7-2.6.3Z"
        fill="url(#play-yellow)"
      />

      <path
        d="M22.3 12.6 27 15.3c1.5.9 1.5 2.3 0 3.2l-4.7 2.7L17 16Z"
        fill="url(#play-red)"
      />
    </svg>
  );
}

function GooglePlayButton({ label, className = "" }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.055] ${className}`}
    >
      <GooglePlayIcon />
      <span>{label}</span>
    </a>
  );
}

export default function SolyonMovePage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="bg-[#07090c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(139,92,246,0.14),transparent_32rem)]" />

        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              {t.body}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.capabilityTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GooglePlayButton label={t.download} />

              <Link
                href="/technology"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                {t.technology}
              </Link>

              <a
                href="https://www.youtube.com/watch?v=0SyayXeU42g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                {t.video}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <Image
              src="/visual/solyon-move-field-validation.jpeg"
              alt={t.heroAlt}
              width={1400}
              height={1000}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.realEvidence}
            </span>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="section-shell py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.systemEyebrow}</p>

          <h2 className={sectionTitleClass}>{t.systemTitle}</h2>

          <p className={sectionCopyClass}>{t.systemBody}</p>
        </div>

        <div className="mt-10 rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-4 md:p-6">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {t.architecture.map((item, index) => (
              <div key={item.title} className="relative">
                <article className="h-full rounded-xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-base font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {item.body}
                  </p>
                </article>

                {index < t.architecture.length - 1 && (
                  <div className="mx-auto my-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-white/35 lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:my-0 lg:-translate-y-1/2">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-violet-400/20 bg-violet-400/[0.04] px-4 py-3 text-xs leading-6 text-white/55 md:text-sm">
            <strong className="text-white/88">{t.loopLabel}</strong>{" "}
            {t.loop}
          </div>
        </div>
      </section>

      {/* USER LAYER */}
      <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.userEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.userTitle}</h2>

            <p className={sectionCopyClass}>{t.userBody}</p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {t.userItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-[#0b0e12] px-4 py-3 text-sm text-white/55"
                >
                  {item}
                </div>
              ))}
            </div>

            <GooglePlayButton label={t.download} className="mt-6" />
          </div>

          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/solyon-move-app-real.jpeg"
              alt={t.appAlt}
              width={900}
              height={1600}
              sizes="(max-width: 1024px) 85vw, 380px"
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/70">
              {t.productEvidence}
            </span>
          </div>
        </div>
      </section>

      {/* TERRITORY -> DATA */}
      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.dataEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.dataTitle}</h2>

            <p className={sectionCopyClass}>{t.dataBody}</p>

            <div className="mt-6 space-y-2.5">
              {t.dataFlow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E6BC68] text-[0.7rem] font-bold text-[#090b0e]">
                    {index + 1}
                  </span>

                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5 md:min-h-[430px]">
            <Image
              src="/visual/solyon-move-barriers.png"
              alt={t.barriersAlt}
              width={1400}
              height={950}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto max-h-[520px] w-full rounded-[1.25rem] bg-white object-contain"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/90 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-lg">
              {t.territoryEvidence}
            </span>
          </div>
        </div>
      </section>

      {/* CRM / URBAN INTELLIGENCE */}
      <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.crmEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.crmTitle}</h2>

            <p className={sectionCopyClass}>{t.crmBody}</p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/solyon-move-crm-historica.png"
              alt={t.crmAlt}
              width={1800}
              height={1050}
              sizes="100vw"
              className="aspect-[16/8.5] w-full rounded-[1.25rem] object-cover object-top"
            />

            <span className="absolute left-5 top-5 rounded-full border border-[#E6BC68]/25 bg-[#090b0e]/90 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[#E6BC68] backdrop-blur-lg">
              {t.historicalLabel}
            </span>
          </div>

          <p className="mt-4 max-w-4xl text-xs leading-5 text-white/38">
            {t.crmDisclaimer}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.crmCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
              >
                <h3 className="text-sm font-semibold text-white/82">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-white/42">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* API */}
      <section className="section-shell py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">{t.apiEyebrow}</p>

          <h2 className={sectionTitleClass}>{t.apiTitle}</h2>

          <p className={sectionCopyClass}>{t.apiBody}</p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {t.integrationNodes.map((item, index) => (
            <article
              key={item}
              className={`rounded-xl border p-4 ${
                index === 2
                  ? "border-[#E6BC68]/30 bg-[#E6BC68]/[0.055]"
                  : "border-white/10 bg-[#0b0e12]"
              }`}
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/35">
                NODE {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-sm font-semibold">{item}</h3>
            </article>
          ))}
        </div>

        <p className="mt-5 max-w-3xl text-xs leading-6 text-white/42">
          {t.apiNote}
        </p>
      </section>

      {/* FIELD VALIDATION */}
      <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.validationEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.validationTitle}</h2>

            <p className={sectionCopyClass}>{t.validationBody}</p>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#0b0e12] p-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                {t.programLabel}
              </p>

              <p className="mt-2 text-sm leading-6 text-white/55">
                {t.programBody}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/solyon-move-field-validation.jpeg"
              alt={t.fieldAlt}
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* THIRD-PARTY VALIDATION */}
      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/solyon-move-rutan-feature.png"
              alt={t.mediaAlt}
              width={1100}
              height={900}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="w-full rounded-[1.25rem] object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">{t.mediaEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.mediaTitle}</h2>

            <p className={sectionCopyClass}>{t.mediaBody}</p>

            <a
              href={RUTAN_STORY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              {t.mediaButton}
            </a>
          </div>
        </div>
      </section>

      {/* LAB CAPABILITY */}
      <section className="border-y border-white/10 bg-[#0b0e12] py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">{t.labEyebrow}</p>

            <h2 className={sectionTitleClass}>{t.labTitle}</h2>

            <p className={sectionCopyClass}>{t.labBody}</p>
          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {t.labCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                  {item.label}
                </p>

                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-white/50">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell py-16 md:py-20">
        <div className="rounded-[1.7rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12] p-7 md:p-10">
          <p className="eyebrow">{t.ctaEyebrow}</p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">
            {t.ctaTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/55">
            {t.ctaBody}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <GooglePlayButton label={t.download} />

            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e] transition hover:brightness-105"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const es = {
  eyebrow: "Infraestructura de movilidad accesible · Medellín",

  title:
    "SOLYON Move convierte movilidad y territorio en inteligencia operativa.",

  body:
    "Una infraestructura que integra experiencia móvil, datos territoriales, APIs, CRM e inteligencia urbana.",

  capabilityTags: [
    "Mobile Product",
    "Applied AI",
    "Data Infrastructure",
    "API Layer",
    "Institutional CRM",
    "Urban Intelligence",
  ],

  download: "Descargar gratis en Google Play",

  technology: "Explorar tecnología SOLYON",

  video: "Ver video del proyecto",

  heroAlt: "Validación real de SOLYON Move en territorio",

  realEvidence: "EVIDENCIA REAL · VALIDACIÓN EN CAMPO",

  systemEyebrow: "La infraestructura",

  systemTitle: "La app es solo la capa visible.",

  systemBody:
    "Detrás opera una arquitectura que captura territorio, estructura datos, conecta servicios y habilita gestión institucional.",

  architecture: [
    {
      title: "Citizen Layer",
      body: "Perfil, rutas, alertas y reportes.",
    },
    {
      title: "Data Layer",
      body: "Barreras, territorio y contexto operacional.",
    },
    {
      title: "API Layer",
      body: "Intercambio entre servicios e integraciones.",
    },
    {
      title: "Institutional Layer",
      body: "CRM, usuarios, incidentes y operación.",
    },
    {
      title: "Urban Intelligence",
      body: "Visualización territorial y patrones.",
    },
  ],

  loopLabel: "Ciclo de inteligencia:",

  loop:
    "territorio → observación → dato → estructuración → operación → aprendizaje.",

  userEyebrow: "Capa ciudadana",

  userTitle: "Movilidad diseñada alrededor de la persona.",

  userBody:
    "La app personaliza la experiencia y conecta al usuario con la infraestructura de datos que opera detrás.",

  userItems: [
    "Perfil y tipo de movilidad",
    "Variables personales y contexto",
    "Planificación de trayectos",
    "Alertas y condiciones de ruta",
    "Reporte de barreras",
    "Participación comunitaria",
  ],

  appAlt: "Interfaz real de la aplicación SOLYON Move",

  productEvidence: "PRODUCTO REAL",

  dataEyebrow: "Territorio como dato",

  dataTitle: "El territorio se convierte en datos.",

  dataBody:
    "Barreras, pendientes, superficies y obstáculos se documentan con contexto y evidencia para alimentar la inteligencia del sistema.",

  dataFlow: [
    "Observación en territorio",
    "Reporte digital",
    "Evidencia y contexto",
    "Estructuración del dato",
    "Visualización institucional",
  ],

  barriersAlt:
    "Evidencia real de barreras urbanas documentadas durante SOLYON Move",

  territoryEvidence: "EVIDENCIA TERRITORIAL",

  crmEyebrow: "Capa institucional",

  crmTitle: "Del dato a una visión operacional del territorio.",

  crmBody:
    "El CRM organiza usuarios, rutas, incidentes y evidencia dentro de una capa operativa para seguimiento y análisis.",

  crmAlt: "Interfaz del CRM y mapa territorial de SOLYON Move",

  historicalLabel: "CAPA INSTITUCIONAL · EVOLUCIÓN DEL PRODUCTO",

  crmDisclaimer:
    "La interfaz muestra una etapa operacional del sistema. Las métricas corresponden al corte visible en la captura.",

  crmCapabilities: [
    {
      title: "Usuarios",
      body: "Perfiles y participación.",
    },
    {
      title: "Rutas",
      body: "Información asociada a trayectos.",
    },
    {
      title: "Incidentes",
      body: "Barreras, contexto y evidencia.",
    },
    {
      title: "Reporting",
      body: "Seguimiento y análisis institucional.",
    },
  ],

  apiEyebrow: "Arquitectura conectable",

  apiTitle: "Una infraestructura diseñada para intercambiar información.",

  apiBody:
    "La capa de integración conecta experiencia móvil, datos, herramientas institucionales y sistemas externos.",

  integrationNodes: [
    "Mobile App",
    "Data Services",
    "SOLYON API Layer",
    "Institutional CRM",
    "External Systems",
  ],

  apiNote:
    "La arquitectura puede evolucionar hacia nuevas integraciones y fuentes externas a medida que sean implementadas y verificadas.",

  validationEyebrow: "Del laboratorio al territorio",

  validationTitle: "Probada en condiciones urbanas reales.",

  validationBody:
    "La validación en campo confronta producto, datos y experiencia con barreras, pendientes y superficies reales.",

  programLabel: "MOVILIDAD PARA TODOS · MEDELLÍN",

  programBody:
    "SOLYON Move fue desarrollado y validado en el marco de Movilidad para Todos, iniciativa impulsada por Ruta N y Toyota Mobility Foundation.",

  fieldAlt: "Prueba y validación de SOLYON Move en calles de Medellín",

  mediaEyebrow: "Validación de terceros",

  mediaTitle: "Ruta N documentó públicamente SOLYON Move.",

  mediaBody:
    "En agosto de 2026, Ruta N presentó a SOLYON Move como una de las plataformas desarrolladas para mejorar la movilidad de personas con movilidad reducida en Medellín.",

  mediaButton: "Leer publicación oficial ↗",

  mediaAlt: "Publicación de Ruta N sobre SOLYON Move",

  labEyebrow: "Capacidad del laboratorio",

  labTitle: "Un sistema completo, no un producto aislado.",

  labBody:
    "SOLYON Move demuestra capacidad para construir producto, datos, APIs, software institucional y validación en condiciones reales.",

  labCapabilities: [
    {
      label: "01",
      title: "Product Engineering",
      body: "Experiencias digitales para necesidades reales.",
    },
    {
      label: "02",
      title: "Applied AI & Data",
      body: "Contexto, personalización y datos operacionales.",
    },
    {
      label: "03",
      title: "Institutional Software",
      body: "CRM, visualización y operación.",
    },
    {
      label: "04",
      title: "Field Validation",
      body: "Pruebas fuera del laboratorio.",
    },
  ],

  ctaEyebrow: "SOLYON Technologies",

  ctaTitle:
    "SOLYON Move demuestra cómo SOLYON construye infraestructura aplicada.",

  ctaBody:
    "El laboratorio convierte problemas complejos en sistemas donde convergen inteligencia artificial, datos y operaciones.",

  ctaButton: "Conversar con SOLYON",
};

const en = {
  eyebrow: "Accessible mobility infrastructure · Medellín",

  title:
    "SOLYON Move turns mobility and territory into operating intelligence.",

  body:
    "An infrastructure integrating mobile experience, territorial data, APIs, CRM and urban intelligence.",

  capabilityTags: [
    "Mobile Product",
    "Applied AI",
    "Data Infrastructure",
    "API Layer",
    "Institutional CRM",
    "Urban Intelligence",
  ],

  download: "Download free on Google Play",

  technology: "Explore SOLYON technology",

  video: "Watch project video",

  heroAlt: "Real-world SOLYON Move field validation",

  realEvidence: "REAL EVIDENCE · FIELD VALIDATION",

  systemEyebrow: "The infrastructure",

  systemTitle: "The app is only the visible layer.",

  systemBody:
    "Behind it sits an architecture capturing territory, structuring data, connecting services and enabling institutional operations.",

  architecture: [
    {
      title: "Citizen Layer",
      body: "Profiles, routes, alerts and reports.",
    },
    {
      title: "Data Layer",
      body: "Barriers, territory and operating context.",
    },
    {
      title: "API Layer",
      body: "Exchange among services and integrations.",
    },
    {
      title: "Institutional Layer",
      body: "CRM, users, incidents and operations.",
    },
    {
      title: "Urban Intelligence",
      body: "Territorial visualization and patterns.",
    },
  ],

  loopLabel: "Intelligence loop:",

  loop:
    "territory → observation → data → structuring → operations → learning.",

  userEyebrow: "Citizen layer",

  userTitle: "Mobility designed around the person.",

  userBody:
    "The app personalizes mobility and connects the user with the data infrastructure operating behind it.",

  userItems: [
    "Mobility profile and type",
    "Personal variables and context",
    "Trip planning",
    "Route alerts and conditions",
    "Barrier reporting",
    "Community participation",
  ],

  appAlt: "Real SOLYON Move application interface",

  productEvidence: "REAL PRODUCT",

  dataEyebrow: "Territory as data",

  dataTitle: "Territory becomes data.",

  dataBody:
    "Barriers, slopes, surfaces and obstacles are documented with context and evidence to feed the system's intelligence.",

  dataFlow: [
    "Territorial observation",
    "Digital reporting",
    "Evidence and context",
    "Data structuring",
    "Institutional visualization",
  ],

  barriersAlt: "Real urban barriers documented through SOLYON Move",

  territoryEvidence: "TERRITORIAL EVIDENCE",

  crmEyebrow: "Institutional layer",

  crmTitle: "From data to an operational view of territory.",

  crmBody:
    "The CRM organizes users, routes, incidents and evidence within an operating layer for monitoring and analysis.",

  crmAlt: "SOLYON Move CRM interface and territorial map",

  historicalLabel: "INSTITUTIONAL LAYER · PRODUCT EVOLUTION",

  crmDisclaimer:
    "The interface shows an operational stage of the system. Metrics correspond to the snapshot visible in the image.",

  crmCapabilities: [
    {
      title: "Users",
      body: "Profiles and participation.",
    },
    {
      title: "Routes",
      body: "Journey-related information.",
    },
    {
      title: "Incidents",
      body: "Barriers, context and evidence.",
    },
    {
      title: "Reporting",
      body: "Institutional monitoring and analysis.",
    },
  ],

  apiEyebrow: "Connectable architecture",

  apiTitle: "Infrastructure designed to exchange information.",

  apiBody:
    "The integration layer connects mobile experience, data, institutional tooling and external systems.",

  integrationNodes: [
    "Mobile App",
    "Data Services",
    "SOLYON API Layer",
    "Institutional CRM",
    "External Systems",
  ],

  apiNote:
    "The architecture can evolve toward new integrations and external sources as they are implemented and verified.",

  validationEyebrow: "From laboratory to territory",

  validationTitle: "Tested under real urban conditions.",

  validationBody:
    "Field validation confronts product, data and experience with real barriers, slopes and surfaces.",

  programLabel: "MOBILITY FOR ALL · MEDELLÍN",

  programBody:
    "SOLYON Move was developed and validated under Mobility for All, an initiative driven by Ruta N and Toyota Mobility Foundation.",

  fieldAlt: "SOLYON Move testing and validation in Medellín",

  mediaEyebrow: "Third-party validation",

  mediaTitle: "Ruta N publicly documented SOLYON Move.",

  mediaBody:
    "In August 2026, Ruta N featured SOLYON Move among the platforms developed to improve mobility for people with reduced mobility in Medellín.",

  mediaButton: "Read official story ↗",

  mediaAlt: "Ruta N publication featuring SOLYON Move",

  labEyebrow: "Laboratory capability",

  labTitle: "A complete system, not an isolated product.",

  labBody:
    "SOLYON Move demonstrates capability across product, data, APIs, institutional software and real-world validation.",

  labCapabilities: [
    {
      label: "01",
      title: "Product Engineering",
      body: "Digital experiences for real needs.",
    },
    {
      label: "02",
      title: "Applied AI & Data",
      body: "Context, personalization and operating data.",
    },
    {
      label: "03",
      title: "Institutional Software",
      body: "CRM, visualization and operations.",
    },
    {
      label: "04",
      title: "Field Validation",
      body: "Testing beyond the laboratory.",
    },
  ],

  ctaEyebrow: "SOLYON Technologies",

  ctaTitle:
    "SOLYON Move demonstrates how SOLYON builds applied infrastructure.",

  ctaBody:
    "The laboratory turns complex problems into systems where artificial intelligence, data and operations converge.",

  ctaButton: "Talk with SOLYON",
};
