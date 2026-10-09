"use client";

import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const sectionTitleClass =
  "mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]";

const sectionCopyClass =
  "mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base sm:leading-7";

const pillClass =
  "rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[0.68rem] text-white/55";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <main className="overflow-hidden bg-[#07090c] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 md:py-18 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_25%,rgba(230,188,104,0.08),transparent_30rem),radial-gradient(circle_at_20%_75%,rgba(59,130,246,0.05),transparent_28rem)]" />

        <div className="section-shell relative grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
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
              <Link
                href="/technology"
                className="inline-flex justify-center rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
              >
                {t.technologyButton}
              </Link>

              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                {t.contactButton}
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0e12] p-2.5">
              <Image
                src="/visual/about-lab.png"
                alt={t.labAlt}
                width={1000}
                height={760}
                priority
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
              />

              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white/65 backdrop-blur-lg">
                SOLYON LAB
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0e12] p-2.5 sm:mt-10">
              <Image
                src="/visual/about-origin.png"
                alt={t.originAlt}
                width={1000}
                height={760}
                priority
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
              />

              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white/65 backdrop-blur-lg">
                {t.originVisualLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVIDENCE STRIP
      ========================================================= */}
      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="section-shell grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {t.evidence.map((item) => (
            <div
              key={item.value}
              className="bg-[#0b0e12] p-5 md:p-7"
            >
              <p className="text-xl font-semibold md:text-2xl">
                {item.value}
              </p>

              <p className="mt-2 text-xs leading-5 text-white/42">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          ORIGIN
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">
              {t.originEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.originTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.originIntro}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.originSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.6rem] font-semibold text-[#E6BC68]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[0.54rem] font-semibold uppercase tracking-[0.13em] text-white/30">
                    {step.label}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-semibold text-white/85">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/43">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDERS
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.025] py-11 md:py-14">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {t.foundersEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.foundersTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.foundersIntro}
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {t.founders.map((founder) => (
              <article
                key={founder.name}
                className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b0e12] p-5 md:p-6"
              >
                <div className="absolute right-5 top-3 text-6xl font-semibold text-white/[0.025]">
                  {founder.initials}
                </div>

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#E6BC68]">
                  {founder.role}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {founder.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {founder.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className={pillClass}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MEDELLÍN
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0e12] p-2.5">
            <Image
              src="/visual/impact-institutional.png"
              alt={t.medellinAlt}
              width={1200}
              height={820}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="aspect-[16/10] w-full rounded-[1.1rem] object-cover"
            />

            <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07090c]/85 px-3 py-1.5 text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-white/65 backdrop-blur-lg">
              MEDELLÍN · COLOMBIA
            </span>
          </div>

          <div>
            <p className="eyebrow">
              {t.medellinEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.medellinTitle}
            </h2>

            <p className={sectionCopyClass}>
              {t.medellinBody}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.medellinItems.map((item) => (
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
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE BUILD
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

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          TEAM / CAPABILITY
      ========================================================= */}
      <section className="section-shell py-11 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {t.teamEyebrow}
            </p>

            <h2 className={sectionTitleClass}>
              {t.teamTitle}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/55">
            {t.teamBody}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.capabilities.map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-[#0b0e12] p-4"
            >
              <span className="text-[0.6rem] font-semibold text-[#E6BC68]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-2 text-sm font-medium leading-6 text-white/68">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRINCIPLE / CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-11 md:py-14">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[1.55rem] border border-[#E6BC68]/25 bg-gradient-to-br from-[#17140d] to-[#0b0e12]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="p-6 md:p-8">
                <p className="eyebrow">
                  {t.principleEyebrow}
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl">
                  {t.principleTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                  {t.principleBody}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-[#E6BC68] px-6 py-3 text-sm font-semibold text-[#090b0e]"
                >
                  {t.principleButton}
                </Link>
              </div>

              <div className="relative min-h-[300px] lg:min-h-[360px]">
                <Image
                  src="/visual/impact-systemic.png"
                  alt={t.principleAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#17140d] via-[#17140d]/20 to-transparent" />
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
    "Nosotros · Laboratorio DeepTech",

  heroTitle:
    "La tecnología nació de operar, documentar y aprender durante años.",

  heroBody:
    "SOLYON Technologies convierte experiencia operacional, evidencia acumulada y aprendizaje del mundo real en infraestructura tecnológica, productos e inteligencia artificial aplicada.",

  heroTags: [
    "Medellín, Colombia",
    "DeepTech",
    "Operational Intelligence",
    "Applied AI",
  ],

  technologyButton:
    "Explorar tecnología",

  contactButton:
    "Conversar con SOLYON",

  labAlt:
    "Laboratorio de SOLYON Technologies en Medellín",

  originAlt:
    "Documentación y evidencia que forman parte del origen de SOLYON Technologies",

  originVisualLabel:
    "EVIDENCIA · MEMORIA OPERATIVA",

  evidence: [
    {
      value: "8+ años",
      label:
        "de experiencia acumulada en operaciones complejas y mercados reales",
    },
    {
      value: "17",
      label:
        "cuadernos manuscritos que documentan procesos, decisiones y aprendizaje",
    },
    {
      value: "89 GB",
      label:
        "de evidencia y documentación organizada como corpus empresarial",
    },
    {
      value: "2 países",
      label:
        "construcción, operación y validación entre Colombia y Estados Unidos",
    },
  ],

  originEyebrow:
    "Origen",

  originTitle:
    "El laboratorio comenzó antes del código.",

  originIntro:
    "SOLYON no parte de una hipótesis abstracta sobre cómo deberían funcionar las operaciones. Parte de años observándolas desde dentro, documentando fricciones y convirtiendo esa evidencia en arquitectura tecnológica.",

  originSteps: [
    {
      label: "OPERACIÓN",
      title: "Comprender sistemas reales",
      body:
        "Experiencia directa en operaciones, servicio, seguros, logística, control y procesos expuso problemas, decisiones y excepciones difíciles de observar desde fuera.",
    },
    {
      label: "EVIDENCIA",
      title: "Documentar para construir memoria",
      body:
        "Cuadernos, archivos, procesos, fotografías y decisiones se convirtieron en una memoria empresarial estructurable.",
    },
    {
      label: "LABORATORIO",
      title: "Convertir conocimiento en tecnología",
      body:
        "SOLYON transforma evidencia en datos, taxonomías, workflows, software, controles, automatización y agentes.",
    },
    {
      label: "VALIDACIÓN",
      title: "Confrontar sistemas con realidad",
      body:
        "Insurance Operations, SOLYON Move y otros entornos permiten evaluar capacidades frente a usuarios, compradores, instituciones y restricciones reales.",
    },
  ],

  foundersEyebrow:
    "Equipo fundador",

  foundersTitle:
    "Visión y ejecución construidas como una sola capacidad.",

  foundersIntro:
    "SOLYON nace de una complementariedad fundadora entre conocimiento operativo, arquitectura empresarial, control de procesos, comprensión de usuarios y disciplina de ejecución.",

  founders: [
    {
      initials: "SM",
      name: "Sergio Andrés Murillo",
      role: "Cofundador y CEO",
      body:
        "Lidera la visión, la arquitectura empresarial y la conversión de conocimiento operativo en tecnología. Su trayectoria combina operaciones, seguros, trucking, desarrollo de negocio, producto y construcción progresiva de SOLYON Technologies.",
      tags: [
        "Strategy",
        "Architecture",
        "Operations",
        "Insurance",
        "Product",
      ],
    },
    {
      initials: "ET",
      name: "Elizabeth Tamayo",
      role: "Cofundadora y COO",
      body:
        "Lidera ejecución, control de procesos y adaptación a usuarios reales. Su experiencia integra operaciones, calidad, seguros, validación de producto y estructuración operacional de SOLYON Move.",
      tags: [
        "Operations",
        "QA",
        "Insurance",
        "Users",
        "Execution",
      ],
    },
  ],

  medellinEyebrow:
    "Construidos desde Medellín",

  medellinTitle:
    "Medellín es parte del laboratorio.",

  medellinBody:
    "La ciudad conecta talento, instituciones, tecnología y territorio. SOLYON ha utilizado ese entorno para fortalecer capacidad empresarial, desarrollar producto y validar tecnología bajo condiciones reales.",

  medellinItems: [
    {
      title: "Talento",
      body:
        "Acceso a capacidades técnicas, diseño, producto e innovación.",
    },
    {
      title: "Instituciones",
      body:
        "Relación con actores del ecosistema de ciencia, tecnología e innovación.",
    },
    {
      title: "Territorio",
      body:
        "Condiciones urbanas reales utilizadas para confrontar producto y tecnología.",
    },
    {
      title: "Aprendizaje",
      body:
        "Evidencia institucional y operacional convertida en nuevas capacidades.",
    },
  ],

  medellinAlt:
    "Ecosistema institucional de SOLYON Technologies en Medellín",

  methodEyebrow:
    "Cómo construimos",

  methodTitle:
    "Operación → evidencia → sistema → aprendizaje.",

  methodBody:
    "La disciplina del laboratorio consiste en no confundir una idea con una capacidad construida. Cada etapa debe dejar evidencia suficiente para justificar la siguiente.",

  method: [
    {
      title: "Observar",
      body:
        "Entender procesos, usuarios, restricciones y decisiones.",
    },
    {
      title: "Estructurar",
      body:
        "Convertir evidencia en conocimiento, datos y arquitectura.",
    },
    {
      title: "Construir",
      body:
        "Desarrollar software, automatización y capacidades de IA.",
    },
    {
      title: "Validar",
      body:
        "Probar frente a usuarios, compradores, instituciones y territorio.",
    },
  ],

  teamEyebrow:
    "Capacidad multidisciplinaria",

  teamTitle:
    "Un laboratorio construido alrededor de la ejecución.",

  teamBody:
    "SOLYON articula conocimiento de dominio con ingeniería, producto, calidad, investigación, ventas, diseño, comunicación y documentación para desarrollar sistemas completos.",

  capabilities: [
    "Software y desarrollo full stack",
    "QA y control de calidad",
    "Producto y operaciones",
    "Datos e infraestructura",
    "IA aplicada y automatización",
    "Diseño y comunicación",
    "Investigación aplicada",
    "Documentación y control",
  ],

  principleEyebrow:
    "Principio de construcción",

  principleTitle:
    "La operación primero. La evidencia siempre.",

  principleBody:
    "La credibilidad de SOLYON depende de mantener alineadas visión, evidencia y ejecución. Distinguimos con precisión lo construido, lo validado, lo que está en desarrollo y lo que todavía es dirección futura.",

  principleButton:
    "Abrir una conversación",

  principleAlt:
    "Visión sistémica de SOLYON Technologies",
};

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  heroEyebrow:
    "About · DeepTech Laboratory",

  heroTitle:
    "The technology was born from years of operating, documenting and learning.",

  heroBody:
    "SOLYON Technologies turns operational experience, accumulated evidence and real-world learning into technology infrastructure, products and applied artificial intelligence.",

  heroTags: [
    "Medellín, Colombia",
    "DeepTech",
    "Operational Intelligence",
    "Applied AI",
  ],

  technologyButton:
    "Explore technology",

  contactButton:
    "Talk with SOLYON",

  labAlt:
    "SOLYON Technologies laboratory in Medellín",

  originAlt:
    "Documentation and evidence behind the origin of SOLYON Technologies",

  originVisualLabel:
    "EVIDENCE · OPERATING MEMORY",

  evidence: [
    {
      value: "8+ years",
      label:
        "of accumulated experience in complex operations and real markets",
    },
    {
      value: "17",
      label:
        "handwritten notebooks documenting processes, decisions and learning",
    },
    {
      value: "89 GB",
      label:
        "of evidence and documentation organized as an enterprise corpus",
    },
    {
      value: "2 countries",
      label:
        "with construction, operations and validation across Colombia and the United States",
    },
  ],

  originEyebrow:
    "Origin",

  originTitle:
    "The laboratory began before the code.",

  originIntro:
    "SOLYON does not begin with an abstract hypothesis about how operations should work. It begins with years of observing them from the inside, documenting friction and turning that evidence into technological architecture.",

  originSteps: [
    {
      label: "OPERATIONS",
      title: "Understand real systems",
      body:
        "Direct experience across operations, service, insurance, logistics, control and processes exposed problems, decisions and exceptions that are difficult to observe from outside.",
    },
    {
      label: "EVIDENCE",
      title: "Document to build memory",
      body:
        "Notebooks, files, processes, photographs and decisions became an enterprise memory capable of being structured.",
    },
    {
      label: "LABORATORY",
      title: "Turn knowledge into technology",
      body:
        "SOLYON turns evidence into data, taxonomies, workflows, software, controls, automation and agents.",
    },
    {
      label: "VALIDATION",
      title: "Confront systems with reality",
      body:
        "Insurance Operations, SOLYON Move and other environments allow capabilities to be evaluated against real users, buyers, institutions and constraints.",
    },
  ],

  foundersEyebrow:
    "Founding team",

  foundersTitle:
    "Vision and execution built as one capability.",

  foundersIntro:
    "SOLYON was built from a founding complement combining operating knowledge, enterprise architecture, process control, user understanding and execution discipline.",

  founders: [
    {
      initials: "SM",
      name: "Sergio Andrés Murillo",
      role: "Co-founder and CEO",
      body:
        "Leads vision, enterprise architecture and the conversion of operational knowledge into technology. His experience combines operations, insurance, trucking, business development, product and the progressive construction of SOLYON Technologies.",
      tags: [
        "Strategy",
        "Architecture",
        "Operations",
        "Insurance",
        "Product",
      ],
    },
    {
      initials: "ET",
      name: "Elizabeth Tamayo",
      role: "Co-founder and COO",
      body:
        "Leads execution, process control and adaptation to real users. Her experience integrates operations, quality, insurance, product validation and the operational structuring of SOLYON Move.",
      tags: [
        "Operations",
        "QA",
        "Insurance",
        "Users",
        "Execution",
      ],
    },
  ],

  medellinEyebrow:
    "Built from Medellín",

  medellinTitle:
    "Medellín is part of the laboratory.",

  medellinBody:
    "The city connects talent, institutions, technology and territory. SOLYON has used this environment to strengthen enterprise capability, develop products and validate technology under real conditions.",

  medellinItems: [
    {
      title: "Talent",
      body:
        "Access to technical, design, product and innovation capabilities.",
    },
    {
      title: "Institutions",
      body:
        "Relationships with actors across the science, technology and innovation ecosystem.",
    },
    {
      title: "Territory",
      body:
        "Real urban conditions used to confront products and technology.",
    },
    {
      title: "Learning",
      body:
        "Institutional and operating evidence converted into new capabilities.",
    },
  ],

  medellinAlt:
    "SOLYON Technologies institutional ecosystem in Medellín",

  methodEyebrow:
    "How we build",

  methodTitle:
    "Operations → evidence → systems → learning.",

  methodBody:
    "The laboratory discipline is not to confuse an idea with a built capability. Each stage must leave enough evidence to justify the next.",

  method: [
    {
      title: "Observe",
      body:
        "Understand processes, users, constraints and decisions.",
    },
    {
      title: "Structure",
      body:
        "Turn evidence into knowledge, data and architecture.",
    },
    {
      title: "Build",
      body:
        "Develop software, automation and AI capabilities.",
    },
    {
      title: "Validate",
      body:
        "Test against users, buyers, institutions and territory.",
    },
  ],

  teamEyebrow:
    "Multidisciplinary capability",

  teamTitle:
    "A laboratory built around execution.",

  teamBody:
    "SOLYON combines domain knowledge with engineering, product, quality, research, sales, design, communication and documentation to develop complete systems.",

  capabilities: [
    "Software and full-stack development",
    "QA and quality control",
    "Product and operations",
    "Data and infrastructure",
    "Applied AI and automation",
    "Design and communication",
    "Applied research",
    "Documentation and control",
  ],

  principleEyebrow:
    "Building principle",

  principleTitle:
    "Operations first. Evidence always.",

  principleBody:
    "SOLYON's credibility depends on keeping vision, evidence and execution aligned. We distinguish precisely what has been built, validated, remains under development and still represents future direction.",

  principleButton:
    "Start a conversation",

  principleAlt:
    "Systemic vision of SOLYON Technologies",
};
