"use client";

import Link from "next/link";
import GooglePlayLink from "@/components/GooglePlayLink";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const EMAIL = "sergio@solyontechnologies.com";
const WHATSAPP = "https://wa.me/573147903517";
const LINKEDIN = "https://www.linkedin.com/company/solyon-technologies/";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

function ContactRoute({ route }) {
  const subject = encodeURIComponent(route.subject);
  const body = encodeURIComponent(route.bodyTemplate);

  return (
    <article className="group flex h-full flex-col rounded-[1.4rem] border border-white/10 bg-[#0b0e12] p-5 transition hover:border-[#E6BC68]/30 hover:bg-white/[0.03] md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
            {route.label}
          </p>

          <h3 className="mt-3 text-xl font-semibold text-white/90">
            {route.title}
          </h3>
        </div>

        <span className="text-lg text-white/20 transition group-hover:text-[#E6BC68]">
          ↗
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-white/48">
        {route.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {route.tags.map((tag) => (
          <span
            key={tag}
            className={pillClass}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E6BC68] transition hover:text-[#F0CA7E]"
      >
        {route.button}
        <span>→</span>
      </a>
    </article>
  );
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-18 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(230,188,104,0.08),transparent_30rem),radial-gradient(circle_at_22%_74%,rgba(59,130,246,0.05),transparent_28rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  t.generalSubject
                )}`}
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
              >
                {t.emailButton}
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.03]"
              >
                {t.whatsappButton}
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-white/35">
              {t.location}
            </p>
          </div>

          {/* DIRECT CONTACT */}
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0e12] p-5 md:p-6">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.19em] text-[#E6BC68]">
              {t.directEyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white/90">
              {t.directTitle}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/48">
              {t.directBody}
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/68 transition hover:border-[#E6BC68]/35 hover:text-white"
              >
                <span>{EMAIL}</span>
                <span>↗</span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/68 transition hover:border-[#E6BC68]/35 hover:text-white"
              >
                <span>WhatsApp · +57 314 790 3517</span>
                <span>↗</span>
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/68 transition hover:border-[#E6BC68]/35 hover:text-white"
              >
                <span>LinkedIn · SOLYON Technologies</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROUTES
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.routesEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.routesTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.routesBody}
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {t.routes.map((route) => (
            <ContactRoute
              key={route.title}
              route={route}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          CONTEXT
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">
              {t.prepareEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.prepareTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.prepareBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {t.prepareItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
              >
                <span className="text-[0.6rem] font-semibold text-[#E6BC68]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-sm font-semibold text-white/85">
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
          INVESTORS + SOLYON MOVE
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* INVESTORS */}
          <div className="rounded-[1.45rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] via-[#0d0e10] to-[#090b0e] p-5 md:p-6">
            <p className="eyebrow">
              {t.investorEyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">
              {t.investorTitle}
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/52">
              {t.investorBody}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.investorTags.map((item) => (
                <span
                  key={item}
                  className={pillClass}
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                t.investorSubject
              )}`}
              className="mt-6 inline-flex rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
            >
              {t.investorButton}
            </a>
          </div>

          {/* MOVE */}
          <div className="rounded-[1.45rem] border border-white/10 bg-[#0b0e12] p-5 md:p-6">
            <p className="eyebrow">
              SOLYON MOVE
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">
              {t.moveTitle}
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/52">
              {t.moveBody}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GooglePlayLink label={t.moveButton} />

              <Link
                href="/solyon-move"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                {t.moveCaseButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-11 md:py-14">
        <div className="section-shell">
          <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">
                  SOLYON TECHNOLOGIES
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl">
                  {t.finalTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                  {t.finalBody}
                </p>
              </div>

              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  t.generalSubject
                )}`}
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
              >
                {t.finalButton}
              </a>
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
    "Contacto · Tecnología · Capital · Alianzas",

  heroTitle:
    "Conversemos alrededor de un problema real.",

  heroBody:
    "SOLYON trabaja con organizaciones, inversionistas, instituciones y equipos tecnológicos donde exista una oportunidad concreta de convertir conocimiento, datos y operaciones en capacidad tecnológica.",

  heroTags: [
    "DeepTech",
    "Operational Intelligence",
    "Applied AI",
    "Medellín",
  ],

  emailButton:
    "Escribir por correo",

  whatsappButton:
    "Conversar por WhatsApp",

  location:
    "Medellín, Colombia · Tecnología construida para operar en contextos reales",

  generalSubject:
    "Conversación estratégica con SOLYON Technologies",

  directEyebrow:
    "Contacto directo",

  directTitle:
    "Canales simples para iniciar.",

  directBody:
    "No necesitas un proceso complejo para hablar con nosotros. Si existe un problema, oportunidad, inversión o alianza concreta, podemos comenzar directamente con el contexto esencial.",

  routesEyebrow:
    "Rutas de colaboración",

  routesTitle:
    "Empieza por el contexto correcto.",

  routesBody:
    "Cada conversación tiene un objetivo diferente. Estas rutas ayudan a identificar rápidamente dónde existe una posible colaboración con SOLYON.",

  routes: [
    {
      label: "Capital y estrategia",
      title: "Inversionistas y fondos",
      description:
        "Conversaciones sobre SOLYON Technologies, SOLYON OS, tesis DeepTech, estrategia comercial, construcción de plataforma, gobernanza y escalamiento.",
      tags: [
        "DeepTech",
        "Applied AI",
        "Infrastructure",
        "Venture",
      ],
      subject:
        "Interés de inversión en SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nOrganización / fondo:\nTesis o enfoque de inversión:\nMotivo del interés en SOLYON Technologies:\nEtapa o tipo de conversación propuesta:\n\nSaludos,",
      button:
        "Iniciar conversación de inversión",
    },
    {
      label: "Mercado y operaciones",
      title: "Empresas y operadores",
      description:
        "Problemas operativos donde conocimiento, workflows, datos, automatización o IA aplicada puedan convertirse en una solución tecnológica medible.",
      tags: [
        "Operations",
        "Insurance",
        "Automation",
        "Data",
      ],
      subject:
        "Colaboración empresarial con SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nEmpresa:\nProblema operacional:\nUsuarios o equipos afectados:\nEvidencia o datos disponibles:\nResultado esperado:\n\nSaludos,",
      button:
        "Explorar colaboración empresarial",
    },
    {
      label: "Instituciones e impacto",
      title: "Instituciones, universidades y organizaciones",
      description:
        "Movilidad, accesibilidad, investigación aplicada, tecnología urbana, conocimiento e iniciativas donde el laboratorio pueda construir y validar capacidad.",
      tags: [
        "Mobility",
        "Accessibility",
        "Research",
        "Institutions",
      ],
      subject:
        "Colaboración institucional con SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nInstitución:\nReto o programa:\nUsuarios o población involucrada:\nAlcance propuesto:\nResultado esperado:\n\nSaludos,",
      button:
        "Iniciar conversación institucional",
    },
    {
      label: "Tecnología e infraestructura",
      title: "IA, cloud, datos e integraciones",
      description:
        "Colaboraciones relacionadas con infraestructura, agentes, modelos, datos, conectores, automatización, APIs y herramientas para sistemas operacionales.",
      tags: [
        "AI",
        "Cloud",
        "Agents",
        "Integrations",
      ],
      subject:
        "Colaboración tecnológica con SOLYON Technologies",
      bodyTemplate:
        "Hola Sergio,\n\nEmpresa / equipo:\nCapacidad tecnológica:\nCaso de uso potencial:\nModelo de colaboración:\nSiguiente paso propuesto:\n\nSaludos,",
      button:
        "Explorar colaboración tecnológica",
    },
  ],

  prepareEyebrow:
    "Antes de conversar",

  prepareTitle:
    "Tres elementos ayudan a avanzar más rápido.",

  prepareBody:
    "No necesitamos una presentación perfecta. Necesitamos entender con precisión qué problema existe, qué evidencia tenemos y qué resultado tendría valor.",

  prepareItems: [
    {
      title: "Problema",
      body:
        "Qué proceso, sistema o usuario experimenta la fricción.",
    },
    {
      title: "Evidencia",
      body:
        "Qué información existe y qué ha sido observado o validado.",
    },
    {
      title: "Resultado",
      body:
        "Qué piloto, integración, decisión, alianza o inversión tendría sentido iniciar.",
    },
  ],

  investorEyebrow:
    "Capital · Escalamiento",

  investorTitle:
    "Construimos una compañía de infraestructura tecnológica.",

  investorBody:
    "La tesis de inversión de SOLYON parte de convertir conocimiento operacional en software, datos, automatización e inteligencia reutilizable mediante SOLYON OS, con mercados concretos para validar capacidad y recurrencia.",

  investorTags: [
    "SOLYON OS",
    "Operational Intelligence",
    "Applied AI",
    "DeepTech",
  ],

  investorSubject:
    "Solicitud de conversación de inversión — SOLYON Technologies",

  investorButton:
    "Solicitar conversación de inversión",

  moveTitle:
    "Conoce una ejecución pública del laboratorio.",

  moveBody:
    "SOLYON Move permite observar cómo el laboratorio convierte un problema real en producto móvil, datos, APIs, herramientas institucionales y validación territorial.",

  moveButton:
    "SOLYON Move gratis en Google Play",

  moveCaseButton:
    "Explorar el caso",

  finalTitle:
    "Las mejores conversaciones comienzan con un problema que vale la pena resolver.",

  finalBody:
    "Si existe un reto operacional, tecnológico, institucional o de inversión donde SOLYON pueda aportar capacidad real, conversemos.",

  finalButton:
    "Contactar SOLYON",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  heroEyebrow:
    "Contact · Technology · Capital · Partnerships",

  heroTitle:
    "Let us talk around a real problem.",

  heroBody:
    "SOLYON works with organizations, investors, institutions and technology teams where there is a concrete opportunity to turn knowledge, data and operations into technological capability.",

  heroTags: [
    "DeepTech",
    "Operational Intelligence",
    "Applied AI",
    "Medellín",
  ],

  emailButton:
    "Send an email",

  whatsappButton:
    "Chat on WhatsApp",

  location:
    "Medellín, Colombia · Technology built for real operating environments",

  generalSubject:
    "Strategic conversation with SOLYON Technologies",

  directEyebrow:
    "Direct contact",

  directTitle:
    "Simple channels to begin.",

  directBody:
    "You do not need a complex process to talk with us. If there is a concrete problem, opportunity, investment or partnership, we can begin directly with the essential context.",

  routesEyebrow:
    "Collaboration routes",

  routesTitle:
    "Start with the right context.",

  routesBody:
    "Each conversation has a different objective. These routes help identify where meaningful collaboration with SOLYON may exist.",

  routes: [
    {
      label: "Capital and strategy",
      title: "Investors and funds",
      description:
        "Conversations about SOLYON Technologies, SOLYON OS, the DeepTech thesis, commercial strategy, platform building, governance and scale.",
      tags: [
        "DeepTech",
        "Applied AI",
        "Infrastructure",
        "Venture",
      ],
      subject:
        "Investment interest in SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nOrganization / fund:\nInvestment thesis or focus:\nReason for interest in SOLYON Technologies:\nProposed stage or conversation type:\n\nRegards,",
      button:
        "Start an investment conversation",
    },
    {
      label: "Market and operations",
      title: "Companies and operators",
      description:
        "Operational problems where knowledge, workflows, data, automation or applied AI can become a measurable technology solution.",
      tags: [
        "Operations",
        "Insurance",
        "Automation",
        "Data",
      ],
      subject:
        "Business collaboration with SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nCompany:\nOperational problem:\nAffected users or teams:\nAvailable evidence or data:\nExpected outcome:\n\nRegards,",
      button:
        "Explore business collaboration",
    },
    {
      label: "Institutions and impact",
      title: "Institutions, universities and organizations",
      description:
        "Mobility, accessibility, applied research, urban technology, knowledge and initiatives where the laboratory can build and validate capability.",
      tags: [
        "Mobility",
        "Accessibility",
        "Research",
        "Institutions",
      ],
      subject:
        "Institutional collaboration with SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nInstitution:\nChallenge or program:\nUsers or population involved:\nProposed scope:\nExpected outcome:\n\nRegards,",
      button:
        "Start an institutional conversation",
    },
    {
      label: "Technology and infrastructure",
      title: "AI, cloud, data and integrations",
      description:
        "Collaborations involving infrastructure, agents, models, data, connectors, automation, APIs and tools for operational systems.",
      tags: [
        "AI",
        "Cloud",
        "Agents",
        "Integrations",
      ],
      subject:
        "Technology collaboration with SOLYON Technologies",
      bodyTemplate:
        "Hello Sergio,\n\nCompany / team:\nTechnology capability:\nPotential use case:\nCollaboration model:\nProposed next step:\n\nRegards,",
      button:
        "Explore technology collaboration",
    },
  ],

  prepareEyebrow:
    "Before we talk",

  prepareTitle:
    "Three elements help us move faster.",

  prepareBody:
    "We do not need a perfect presentation. We need to understand precisely what problem exists, what evidence is available and what outcome would create value.",

  prepareItems: [
    {
      title: "Problem",
      body:
        "Which process, system or user is experiencing the friction.",
    },
    {
      title: "Evidence",
      body:
        "What information exists and what has already been observed or validated.",
    },
    {
      title: "Outcome",
      body:
        "Which pilot, integration, decision, partnership or investment would make sense to begin.",
    },
  ],

  investorEyebrow:
    "Capital · Scale",

  investorTitle:
    "We are building a technology infrastructure company.",

  investorBody:
    "SOLYON's investment thesis begins by turning operational knowledge into reusable software, data, automation and intelligence through SOLYON OS, using concrete markets to validate capability and recurrence.",

  investorTags: [
    "SOLYON OS",
    "Operational Intelligence",
    "Applied AI",
    "DeepTech",
  ],

  investorSubject:
    "Investment conversation request — SOLYON Technologies",

  investorButton:
    "Request an investment conversation",

  moveTitle:
    "Explore a public execution of the laboratory.",

  moveBody:
    "SOLYON Move shows how the laboratory turns a real problem into mobile product, data, APIs, institutional tools and territorial validation.",

  moveButton:
    "Get SOLYON Move free on Google Play",

  moveCaseButton:
    "Explore the case",

  finalTitle:
    "The best conversations begin with a problem worth solving.",

  finalBody:
    "If there is an operational, technological, institutional or investment challenge where SOLYON can contribute real capability, let us talk.",

  finalButton:
    "Contact SOLYON",
};
