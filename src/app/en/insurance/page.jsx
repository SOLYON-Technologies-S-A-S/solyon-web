import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Insurance Operations · SOLYON",
  description: "Operational intelligence for commercial insurance and trucking compliance. Every account keeps its own memory, and nothing expires unnoticed.",
  path: "/en/insurance",
  lang: "en",
});

export default function InsurancePage() {
  return (
    <div lang="en">
      <section className="dark phero">
        <div className="wrap hero2">
          <div className="stack" style={{ gap: "26px" }}>
            <Link className="crumb" href="/">Home / Solutions / Insurance Operations</Link>
            <span className="kicker reveal"><span className="live"></span>Design Partner Program ·{" "}<b>limited seats</b></span>
            <h1 className="h1 reveal d1">Compliance and renewals that never depend on memory.</h1>
            <p className="lead reveal d2" style={{ margin: "0", maxWidth: "540px" }}>Operational intelligence for commercial insurance and trucking compliance. Every account keeps its own memory, and nothing expires unnoticed.</p>
            <div className="row reveal d3">
              <a className="btn btn-primary" href="#apply">Apply as a design partner</a>
              <Link className="btn btn-secondary" href="/tecnologia">How the platform works</Link>
            </div>
          </div>
          <div className="console reveal d2" aria-label="Animated example: account memory with compliance alerts">
            <div className="console-bar">
              <span>SOLYON OS · account memory</span>
              <span className="on">Monitoring</span>
            </div>
            <div className="bubble step-in"><small>Inbox · 08:14</small>New certificate of insurance received for Fleet A (PDF).</div>
            <div className="engine step-in s2">Arcanum structures</div>
            <div className="record step-in s3">
              <div className="hd">
                <span>Account · Fleet of 14 units</span>
                <span className="chip">Action needed</span>
              </div>
              <span className="k">Certificate</span>
              <span className="v">Expires in 12 days</span>
              <span className="k">DOT filing</span>
              <span className="v">
                <span className="chip ok">Up to date</span>
              </span>
              <span className="k">Renewal</span>
              <span className="v">Quote follow-up scheduled</span>
              <span className="k">Memory</span>
              <span className="v">3 exceptions on record</span>
            </div>
            <p className="mono" style={{ color: "#A9B8BE", fontSize: "11px" }}>Interface illustration · sample data</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">The shift</p>
            <h2 className="h2">From people who remember everything to a system that does.</h2>
          </div>
          <div className="versus sr">
            <div className="vs before">
              <span className="lbl">Today</span>
              <ul>
                <li>DOT deadlines tracked in spreadsheets and calendars</li>
                <li>Accounts stall when a key person is out</li>
                <li>The same data re-keyed from PDFs into several systems</li>
                <li>Renewals that depend on someone remembering</li>
              </ul>
            </div>
            <div className="vs after">
              <span className="lbl">With SOLYON</span>
              <ul>
                <li>Deadlines tracked per account, with alerts before they expire</li>
                <li>Every decision and exception kept in account memory</li>
                <li>Documents read and structured once</li>
                <li>Structured follow-up on every renewal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">What we are building with partners</p>
            <h2 className="h2">Four workflows, one operational memory.</h2>
            <p className="lead">Status is shown on each one. We only call it live when it is.</p>
          </div>
          <div className="feat sr">
            <div>
              <span className="n">01</span>
              <span className="tag tag-val"><span className="dot"></span>In validation</span>
              <h3 className="h4">Document intake</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Extract and structure the documents your team receives every day.</p>
            </div>
            <div>
              <span className="n">02</span>
              <span className="tag tag-val"><span className="dot"></span>In validation</span>
              <h3 className="h4">Compliance tracking</h3>
              <p className="muted" style={{ fontSize: "15px" }}>DOT-related deadlines and requirements per account.</p>
            </div>
            <div>
              <span className="n">03</span>
              <span className="tag tag-dev"><span className="dot"></span>In development</span>
              <h3 className="h4">Renewal workflows</h3>
              <p className="muted" style={{ fontSize: "15px" }}>No renewal depends on someone remembering it.</p>
            </div>
            <div>
              <span className="n">04</span>
              <span className="tag tag-dev"><span className="dot"></span>In development</span>
              <h3 className="h4">Account memory</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Decisions and exceptions, searchable by your team and by AI agents.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="stack sr" style={{ gap: "20px" }}>
            <p className="eyebrow" style={{ margin: "0" }}>Why SOLYON</p>
            <p className="big-quote">Built from inside the operation, not from a whiteboard.</p>
            <p className="muted" style={{ fontSize: "18px" }}>Our founders ran insurance and trucking operations between the US and Colombia and documented every process before writing a line of code.</p>
          </div>
          <ul className="checks sr" style={{ gridTemplateColumns: "1fr" }}>
            <li>
              <span><b>EL-VÍA is live on Google Play.</b>{" "}Our DOT compliance training app for Spanish-speaking truck drivers.</span>
            </li>
            <li>
              <span><b>Bilingual by design.</b>{" "}Built for operations that serve Latino carriers and drivers in English and Spanish.</span>
            </li>
            <li>
              <span><b>Proven delivery.</b>{" "}A full-stack product shipped and evaluated by third parties in our SOLYON Move pilot.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head sr">
            <p className="eyebrow">How the program works</p>
            <h2 className="h2">From discovery to license, with measured results.</h2>
          </div>
          <div className="track t4 sr">
            <div className="tk">
              <span className="day">01</span>
              <h3 className="h4">Discovery call</h3>
              <p className="muted" style={{ fontSize: "15px" }}>We map your workflows and pick one with clear economic impact.</p>
            </div>
            <div className="tk">
              <span className="day">02</span>
              <h3 className="h4">Paid pilot under SLA</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Defined deliverables, timelines and service levels.</p>
            </div>
            <div className="tk">
              <span className="day">03</span>
              <h3 className="h4">Before and after</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Time, errors and missed deadlines against your baseline.</p>
            </div>
            <div className="tk last">
              <span className="day">04</span>
              <h3 className="h4">License</h3>
              <p className="muted" style={{ fontSize: "15px" }}>Recurring license once results justify it. Terms:{" "}<span className="fill">[PARTNER TERMS]</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper" id="apply">
        <div className="wrap split">
          <div className="stack sr">
            <p className="eyebrow" style={{ margin: "0" }}>Apply</p>
            <h2 className="h2">Become a design partner.</h2>
            <p className="muted">We work with a small number of partners at a time. We reply within{" "}<span className="fill">[N]</span>{" "}business days.</p>
          </div>
          <form className="stack" style={{ gap: "20px" }} aria-label="Design partner application">
            <div className="grid g2" style={{ gap: "20px" }}>
              <div className="field">
                <label htmlFor="i-name">Full name</label>
                <input id="i-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="i-company">Company</label>
                <input id="i-company" type="text" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="i-email">Work email</label>
                <input id="i-email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="i-type">Type of operation</label>
                <select id="i-type">
                  <option>Insurance agency</option>
                  <option>MGA</option>
                  <option>Carrier</option>
                  <option>Trucking fleet</option>
                  <option>Compliance services</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="i-pain">Which workflow hurts the most today?</label>
              <textarea id="i-pain"></textarea>
            </div>
            <label className="check"><input type="checkbox" />{" "}I agree to SOLYON Technologies' privacy policy.</label>
            <button className="btn btn-primary" type="button" style={{ width: "fit-content" }}>Apply as a design partner</button>
          </form>
        </div>
      </section>
    </div>
  );
}
