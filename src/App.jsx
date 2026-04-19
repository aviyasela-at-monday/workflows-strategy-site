import { useState, useEffect } from 'react'
import './App.css'

const NAV = [
  { id: 'setup', label: 'The Setup' },
  { id: 'why-workflows', label: 'Why Workflows Matter' },
  { id: 'what-becomes', label: 'What Workflows Become' },
  { id: 'risk', label: 'The Risk' },
  { id: 'why-monday', label: 'Why monday Wins' },
  { id: 'what-we-build', label: 'What We Build' },
  { id: 'winning-picture', label: 'Winning Picture' },
  { id: 'open-questions', label: 'Open Questions' },
  { id: 'citations', label: 'Citations' },
]

const C = {
  bg: '#0c0d14',
  sidebar: '#0f1019',
  card: '#161724',
  cardAlt: '#1c1d2e',
  border: 'rgba(99,102,241,0.2)',
  borderLight: 'rgba(255,255,255,0.07)',
  indigo: '#818cf8',
  indigoDeep: '#6366f1',
  orange: '#fb923c',
  green: '#34d399',
  amber: '#fbbf24',
  purple: '#c084fc',
  red: '#f87171',
  text: '#e8eaf0',
  textMuted: 'rgba(232,234,240,0.55)',
  textDim: 'rgba(232,234,240,0.35)',
}

function useActiveSection() {
  const [active, setActive] = useState('setup')
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

function Sidebar() {
  const active = useActiveSection()
  return (
    <aside style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: 220,
      height: '100vh',
      background: C.sidebar,
      borderRight: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      padding: '32px 0',
      zIndex: 100,
      overflowY: 'auto',
    }}>
      <div style={{ padding: '0 20px 28px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          color: C.indigo,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 4,
        }}>
          AI Workflows
        </div>
        <div style={{ fontSize: 12, color: C.textDim }}>Strategy · April 2026</div>
      </div>
      <nav style={{ padding: '20px 0', flex: 1 }}>
        {NAV.map(({ id, label }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={e => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                display: 'block',
                padding: '9px 20px',
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? C.indigo : C.textMuted,
                textDecoration: 'none',
                borderLeft: `2px solid ${isActive ? C.indigo : 'transparent'}`,
                background: isActive ? 'rgba(129,140,248,0.06)' : 'transparent',
                transition: 'all 0.15s',
              }}
            >
              {label}
            </a>
          )
        })}
      </nav>
      <div style={{ padding: '16px 20px', borderTop: `1px solid ${C.border}`, fontSize: 11, color: C.textDim }}>
        Internal · Do not distribute
      </div>
    </aside>
  )
}

function Section({ id, children }) {
  return (
    <section id={id} style={{ padding: '72px 0', borderBottom: `1px solid ${C.borderLight}` }}>
      {children}
    </section>
  )
}

function SectionTag({ children }) {
  return (
    <div style={{
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: C.indigo,
      background: 'rgba(129,140,248,0.1)',
      border: '1px solid rgba(129,140,248,0.25)',
      borderRadius: 6,
      padding: '3px 10px',
      marginBottom: 16,
    }}>
      {children}
    </div>
  )
}

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: 'Poppins, sans-serif',
      fontSize: 32,
      fontWeight: 700,
      margin: '0 0 28px',
      color: '#fff',
      lineHeight: 1.2,
    }}>
      {children}
    </h2>
  )
}

function H3({ children, color = C.indigo }) {
  return (
    <h3 style={{
      fontSize: 11,
      fontWeight: 700,
      margin: '0 0 10px',
      color,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }}>
      {children}
    </h3>
  )
}

function P({ children, muted = false, style = {} }) {
  return (
    <p style={{
      margin: '0 0 16px',
      fontSize: 16,
      lineHeight: 1.75,
      color: muted ? C.textMuted : C.text,
      ...style,
    }}>
      {children}
    </p>
  )
}

function Card({ children, accent, style = {} }) {
  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderLeft: accent ? `3px solid ${accent}` : `1px solid ${C.border}`,
      borderRadius: 14,
      padding: '24px 28px',
      marginBottom: 16,
      ...style,
    }}>
      {children}
    </div>
  )
}

function Quote({ children, attribution }) {
  return (
    <div style={{
      background: 'rgba(129,140,248,0.05)',
      border: `1px solid rgba(129,140,248,0.2)`,
      borderLeft: `4px solid ${C.indigo}`,
      borderRadius: '0 12px 12px 0',
      padding: '20px 24px',
      margin: '24px 0',
    }}>
      <p style={{
        margin: 0,
        fontSize: 17,
        lineHeight: 1.7,
        color: '#c7d2fe',
        fontStyle: 'italic',
        fontWeight: 400,
      }}>
        "{children}"
      </p>
      {attribution && (
        <p style={{ margin: '10px 0 0', fontSize: 13, color: C.textDim }}>
          — {attribution}
        </p>
      )}
    </div>
  )
}

function SignalHave({ children }) {
  return (
    <div style={{
      background: 'rgba(52,211,153,0.07)',
      border: `1px solid rgba(52,211,153,0.25)`,
      borderRadius: 10,
      padding: '14px 18px',
      margin: '12px 0',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
    }}>
      <span style={{ color: C.green, fontSize: 14, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.green, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Signal we have</div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(232,234,240,0.8)' }}>{children}</p>
      </div>
    </div>
  )
}

function SignalNeeded({ children }) {
  return (
    <div style={{
      background: 'rgba(251,191,36,0.06)',
      border: `1px solid rgba(251,191,36,0.2)`,
      borderRadius: 10,
      padding: '14px 18px',
      margin: '12px 0',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
    }}>
      <span style={{ color: C.amber, fontSize: 14, flexShrink: 0, marginTop: 1 }}>○</span>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.amber, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Signal needed</div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(232,234,240,0.8)' }}>{children}</p>
      </div>
    </div>
  )
}

function Note({ children }) {
  return (
    <div style={{
      background: 'rgba(251,146,60,0.06)',
      border: `1px solid rgba(251,146,60,0.2)`,
      borderRadius: 10,
      padding: '12px 16px',
      margin: '12px 0',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
    }}>
      <span style={{ color: C.orange, fontSize: 13, flexShrink: 0 }}>⚠</span>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: C.textMuted, fontStyle: 'italic' }}>{children}</p>
    </div>
  )
}

function TypeBadge({ type, subtitle }) {
  const isOne = type === 1
  const color = isOne ? C.indigo : C.purple
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '36px 0 20px' }}>
      <div style={{
        background: color + '1a',
        border: `1px solid ${color}44`,
        borderRadius: 8,
        padding: '4px 14px',
        fontSize: 12,
        fontWeight: 700,
        color,
        letterSpacing: '0.06em',
        flexShrink: 0,
      }}>
        TYPE {type}
      </div>
      <span style={{ fontSize: 14, color: C.textMuted }}>{subtitle}</span>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 15, lineHeight: 1.75, color: C.text, marginBottom: 8 }}>
          {item}
        </li>
      ))}
    </ul>
  )
}

function StatCard({ number, label, desc, color = C.orange }) {
  return (
    <div style={{
      background: C.cardAlt,
      borderRadius: 12,
      padding: '16px',
      border: `1px solid ${C.border}`,
    }}>
      <div style={{ fontSize: 26, fontWeight: 800, color, lineHeight: 1 }}>{number}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, margin: '4px 0 2px' }}>{label}</div>
      <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.4 }}>{desc}</div>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ display: 'flex', background: C.bg, minHeight: '100vh' }}>
      <Sidebar />

      <main style={{ marginLeft: 220, flex: 1, maxWidth: 800, padding: '0 56px' }}>

        {/* HERO */}
        <div style={{ padding: '96px 0 72px', borderBottom: `1px solid ${C.borderLight}` }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: C.indigo,
            marginBottom: 20,
          }}>
            AI Workflows @ monday.com · April 2026 · Internal
          </div>
          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 800,
            margin: '0 0 20px',
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #ffffff 30%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Workflows are the part of the agent that doesn't guess.
          </h1>
          <p style={{ fontSize: 18, color: C.textMuted, lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
            Why deterministic execution matters in an agentic world — and why monday is uniquely positioned to own it.
          </p>
        </div>

        {/* THE SETUP */}
        <Section id="setup">
          <SectionTag>The Setup</SectionTag>
          <H2>We've done this before.</H2>
          <P>monday.com was built on one insight: wrap software building blocks with an interface that makes anyone a builder. That's how we turned boards, automations, and integrations into tools millions of non-technical people use every day.</P>
          <P>AI is doing this again — for a new kind of worker. Cursor, Claude Code, and LangSmith are making agents accessible to technical teams. Our job is to do what we've always done: bring that to everyone else.</P>
          <P muted>We're launching an Agent Builder. But agents alone aren't enough — and the gap isn't obvious until something goes wrong.</P>
        </Section>

        {/* WHY WORKFLOWS STILL MATTER */}
        <Section id="why-workflows">
          <SectionTag>Why Workflows Still Matter</SectionTag>
          <H2>Agents are powerful. But they're probabilistic.</H2>
          <P>For most decisions, "might do the right thing" is fine. But for a growing class of work — billing, compliance, onboarding, multi-step processes where one wrong step cascades — "might" isn't acceptable.</P>
          <P muted>The industry has converged on a clear definition:</P>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '0 0 24px' }}>
            {[
              { label: 'Agents', desc: 'LLMs that dynamically direct their own process. Flexible, autonomous, unpredictable.', color: C.purple },
              { label: 'Workflows', desc: 'LLMs and tools through predefined paths. Deterministic, auditable, reliable.', color: C.indigo },
            ].map(item => (
              <div key={item.label} style={{
                background: C.card,
                border: `1px solid ${item.color}33`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 12,
                padding: '18px 20px',
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.label}</div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <P muted style={{ fontSize: 14 }}>Anthropic and LangChain both converge on this framing.[¹⁻²]</P>

          <SignalHave>The RevAI team migrated their Amanda system from Relevance AI to n8n specifically for more control. Their principle: "what doesn't require reasoning — automate deterministically."</SignalHave>
          <SignalNeeded>Structured interviews with AI Champions and Pod SEs on where they chose deterministic execution over agents, and why. Hypothesis: the majority cite control over sensitive or high-stakes steps — HR, customer-facing actions — not technical capability gaps.</SignalNeeded>

          <TypeBadge type={1} subtitle="Single agent, single task — the focus now" />

          <Card accent={C.indigo}>
            <H3 color={C.indigo}>Guarantee</H3>
            <P>A workflow always does the same thing. An agent might. Anthropic explicitly warns that agent autonomy introduces "the potential for compounding errors"[¹] — acceptable for open-ended tasks, not for process-critical ones.</P>
            <SignalHave>RevAI's Amanda is legally required to open every interaction with a disclaimer identifying herself as an AI — every single time, without exception. Agents struggle with this consistency; a workflow step guarantees it.</SignalHave>
            <SignalNeeded>Structured interviews with AI Champions and Pod SEs to surface cases where inconsistent agent behavior created legal, compliance, or trust issues. Hypothesis: this is common, not an edge case.</SignalNeeded>
          </Card>

          <Card accent={C.orange}>
            <H3 color={C.orange}>Cost</H3>
            <P>Deterministic steps don't burn AI credits. Running everything through an LLM when you don't need to is expensive at scale — and as of May 2026, monday will charge for AI Credits.</P>
            <SignalNeeded>A concrete cost comparison — same process run agentically vs. deterministically, with credit consumption per run. Best candidate: RevAI/Amanda team. One real number makes this argument airtight.</SignalNeeded>
          </Card>

          <Card accent={C.green}>
            <H3 color={C.green}>Debuggability</H3>
            <P>When an agent fails, fixing it means adjusting a prompt and hoping the next run behaves differently. When a workflow step fails, you know exactly what happened, can rerun just that step with corrected input, and can guarantee the fix holds.</P>
            <SignalHave>RevAI's team starts every morning reviewing errors across all Amanda agent runs. To check whether the agent reached a human vs. an answering machine, LLM-based evaluation proved unreliable — they ended up searching the transcript text for a known string. A workflow step would have made this a non-issue.</SignalHave>
            <Note>We don't yet fully deliver on this promise ourselves — run history in monday Workflows is currently thin, with generic error messages not surfaced to users. Closing this gap is part of raising the ceiling.</Note>
          </Card>

          <TypeBadge type={2} subtitle="Multi-agent orchestration — the emerging horizon" />

          <P>As agents proliferate, they need coordination — across tasks, tools, and teams. Workflows are the natural coordination layer: defining who does what, when, in what order, with what handoffs.</P>
          <P muted>LangChain already documents five design patterns for this[²]: prompt chaining, routing, parallelization, orchestrator-worker, and evaluator-optimizer. These are what developers reach for when a single agent isn't enough. We need to be the place where business users do the same, without writing code.</P>
          <SignalHave>The RevAI team are building Oscar, a research agent that generates leads — designed to feed off Amanda (the SDR agent) for a fully autonomous pipeline. That's Type 2 in the wild.</SignalHave>
          <SignalNeeded>Map which orchestration patterns are already being attempted inside monday — by Pods, AI Champions, or internal teams — and where they're breaking down. Hypothesis: most are still in Type 1.</SignalNeeded>
        </Section>

        {/* WHAT WORKFLOWS BECOME */}
        <Section id="what-becomes">
          <SectionTag>What Workflows Become</SectionTag>
          <H2>Workflows stop being where you go to build — and become what runs underneath everything you build.</H2>
          <P>Today, you open the Workflow Builder. You configure blocks. You think in nodes and edges. That experience has a floor that's too high — only 2–3 people per org ever get there[³], and 40% of accounts who start a workflow never run one[⁴] — and a ceiling that's too low to handle what serious use cases need.</P>
          <P>In the future state — for both Type 1 and Type 2 — you build via chat. You describe what you want, the system builds it. The canvas isn't the building experience; it's the transparency layer. Like source code you can read and edit, but don't have to write from scratch.</P>
          <P muted>The Workflow Builder doesn't disappear — power users will use it to inspect, verify, and tweak. But it becomes the transparency layer, not the front door.</P>
          <Quote attribution="LangChain founder[²]">
            The visual workflow builder as a UX is a dying category — squeezed from below by better agents, squeezed from above by code generation.
          </Quote>
          <P style={{ fontWeight: 600, color: C.indigo }}>We're not betting on the Workflow Builder. We're betting on what runs underneath it.</P>
        </Section>

        {/* THE RISK */}
        <Section id="risk">
          <SectionTag>The Risk</SectionTag>
          <H2>We're squeezed on both ends today.</H2>

          <Card accent={C.orange}>
            <H3 color={C.orange}>Floor is too high</H3>
            <BulletList items={[
              'Accounts: 40% of accounts who start a workflow never run one[⁴] — and only 2–3 builders per account ever get there[³]',
              'No-code workflow builders are consistently cited as too complex by AI Champions[⁵]',
            ]} />
            <SignalNeeded>Relevance AI is pointed out as a dramatically simpler interface — does it actually lower the bar enough for business users? Especially as user expectations rise for what natural language alone can accomplish.</SignalNeeded>
          </Card>

          <Card accent={C.red}>
            <H3 color={C.red}>Ceiling is too low</H3>
            <P muted>Only 18% of internal monday workflows are ready to migrate to monday today — 45 of 246.[⁶] Top blockers from the migration scanner:</P>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, margin: '0 0 20px' }}>
              {[
                { label: 'Loop / Batch Processing', count: 67, desc: 'doing the same action across a list of items' },
                { label: 'Webhook triggers', count: 37, desc: 'starting a workflow when an external system fires an event' },
                { label: 'Bulk Read', count: 35, desc: 'reading many records from monday in a single operation' },
                { label: 'Sub-workflow execution', count: 26, desc: 'one workflow calling another as a step' },
              ].map(b => (
                <div key={b.label} style={{
                  background: '#0c0d14',
                  borderRadius: 10,
                  padding: '14px 16px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: C.orange, lineHeight: 1 }}>{b.count}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text, margin: '4px 0 2px' }}>{b.label}</div>
                  <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.4 }}>{b.desc}</div>
                </div>
              ))}
            </div>
            <BulletList items={[
              'No public API for Workflows or Automations',
              'No versioning, no testing/simulation',
            ]} />
            <SignalNeeded>How many customer workflows are blocked today, and what's the ARR at risk? How do we compare to n8n, Make, Workato, Relevance, Manus on key capabilities?</SignalNeeded>
          </Card>

          <Card accent={C.indigo}>
            <H3 color={C.indigo}>Agents are not the rescue</H3>
            <BulletList items={[
              'Agents and Workflows solve different problems — one reasons, one executes reliably',
              'Even when agents improve beyond today\'s 3.5% completion rate[⁷] — compliance, cost, and debuggability are structural advantages of determinism that won\'t close',
            ]} />
          </Card>

          <div style={{
            textAlign: 'center',
            padding: '24px',
            background: 'rgba(251,146,60,0.06)',
            border: `1px solid rgba(251,146,60,0.2)`,
            borderRadius: 12,
            marginTop: 8,
          }}>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: C.orange }}>
              We are not well-positioned in either direction today. That is the urgency.
            </p>
          </div>
        </Section>

        {/* WHY MONDAY WINS */}
        <Section id="why-monday">
          <SectionTag>Why monday Wins This</SectionTag>
          <H2>Two moats no external platform can replicate.</H2>

          <Card accent={C.indigo}>
            <H3 color={C.indigo}>Context</H3>
            <P>monday is where work gets managed — processes, ownership, status, history. That's the system of record advantage: an agent or workflow running here inherits context that no external tool can replicate.</P>
            <P muted>In the AI era, that advantage compounds — it goes to whoever owns where work is managed, not whoever builds the smartest model.[⁸] n8n, Make, and Relevance require you to bring your own data. We already are the data.</P>
          </Card>

          <Card accent={C.purple}>
            <H3 color={C.purple}>Coordination-native</H3>
            <P>monday has always been where humans coordinate work. Coordinating agents with each other and with humans — with visibility, control, and trust — is the same problem at a new scale.</P>
          </Card>

          <SignalNeeded>What % of AI Champions and Pods executing workflows or agents in external tools (n8n, Relevance) still connect back to monday as their data source? Hypothesis: the majority do — not because they're required to, but because the process context lives here. That's the moat proving itself even where we're losing the execution layer.</SignalNeeded>
        </Section>

        {/* WHAT WE BUILD */}
        <Section id="what-we-build">
          <SectionTag>What We Build</SectionTag>
          <H2>Four bets, in order of dependency.</H2>

          {[
            {
              num: '1',
              title: 'MCP & Public APIs',
              sub: 'The connectivity unlock',
              color: C.indigo,
              body: "Two reasons this comes first: external tools — Claude, third parties — can build on monday's context and workflows. And it's the technical prerequisite for One Entry Point — Sidekick can only create or configure a workflow if there's an API beneath it. Today there is no public API.",
            },
            {
              num: '2',
              title: 'Agents ↔ Workflows',
              sub: 'The core integration',
              color: C.orange,
              items: [
                'Workflow calls agent: currently minimal — needs full integration to replace "wait for human" steps (where human judgment is replaceable, not where it\'s required) with reliable agentic judgment.',
                'Agent calls workflow: not yet possible. The goal: agent uses a workflow as a deterministic subprocess for anything that doesn\'t require reasoning — "the RevAI principle."',
              ],
            },
            {
              num: '3',
              title: 'One Entry Point',
              sub: 'The experience shift',
              color: C.purple,
              body: "Sidekick or Magic leads. Prompt in, system decides. The workflow builder exists for power users — it's not the front door. This is what makes Workflows the execution layer underneath everything, rather than a product you have to choose.",
            },
            {
              num: '4',
              title: 'Raise the Ceiling',
              sub: 'The table stakes',
              color: C.green,
              items: [
                'Goal 1: enable 90% of the AI workflows we run internally at monday.',
                'Goal 2: unblock the top 3 Pods use cases.',
                'Minimum: iterators, versioning, testing/simulation, webhook triggers.',
              ],
            },
          ].map(bet => (
            <Card key={bet.num} accent={bet.color} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: bet.color + '1a',
                  border: `1px solid ${bet.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 800,
                  color: bet.color,
                  flexShrink: 0,
                }}>
                  {bet.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 16, marginBottom: 2 }}>{bet.title}</div>
                  <div style={{ fontSize: 11, color: bet.color, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>{bet.sub}</div>
                  {bet.body && <P>{bet.body}</P>}
                  {bet.items && <BulletList items={bet.items} />}
                </div>
              </div>
            </Card>
          ))}
        </Section>

        {/* WINNING PICTURE */}
        <Section id="winning-picture">
          <SectionTag>The Winning Picture — EoQ2</SectionTag>
          <H2>Three things must be true.</H2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { icon: '🔌', title: 'MCP / APIs', body: 'External tools can build, configure, and debug workflows.', color: C.indigo },
              { icon: '⇄', title: 'Agents & Workflows', body: 'Bidirectional calls work at runtime.', color: C.orange },
              { icon: '↑', title: 'Ceiling Raised', body: 'Top use cases unblocked; key capability gaps closed.', color: C.green },
            ].map(item => (
              <div key={item.title} style={{
                background: C.card,
                border: `1px solid ${item.color}33`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 14,
                padding: '24px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* OPEN QUESTIONS */}
        <Section id="open-questions">
          <SectionTag>Open Questions</SectionTag>
          <H2>What we need to resolve.</H2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              'Do we build the higher ceiling on the current Workflow Builder, or does the infrastructure need to be rearchitected to get there?',
              "Does the Agents group co-own this narrative? It only holds if both groups tell it together — and it's also our way of expanding beyond the 2–3 power builders persona.",
              'Type 2 use cases: what does multi-agent orchestration actually look like for our users? We need real examples before we can design for it.',
            ].map((q, i) => (
              <div key={i} style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: '18px 22px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}>
                <span style={{ color: C.indigo, fontWeight: 800, fontSize: 15, flexShrink: 0, marginTop: 1 }}>Q{i + 1}</span>
                <span style={{ fontSize: 15, color: C.text, lineHeight: 1.7 }}>{q}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* CITATIONS */}
        <Section id="citations">
          <SectionTag>Citations</SectionTag>
          <div style={{ display: 'grid', gap: 8 }}>
            {[
              { ref: '¹', label: 'Anthropic — Building Effective Agents', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
              { ref: '²', label: 'LangChain — Not Another Workflow Builder', url: 'https://blog.langchain.com/not-another-workflow-builder/' },
              { ref: '³', label: 'TBD — pending data pull from Michal (Product Analyst)', url: null },
              { ref: '⁴', label: 'Workflows Main Metrics dashboard (internal)', url: 'https://redash.bigbrain.me/dashboards/4214-workflows-main-metrics' },
              { ref: '⁵', label: 'Feedback conversation with Keren Koshman, General AI Champions program lead, monday.com', url: null },
              { ref: '⁶', label: 'n8n to monday migration scanner, Apr 12 2026 (internal)', url: 'https://monday.monday.com/boards/18403030049' },
              { ref: '⁷', label: 'AI Agents Data Hub (internal)', url: 'https://redash.bigbrain.me/dashboards/5200--ai-agents-data-hub' },
              { ref: '⁸', label: 'a16z — Anatomy of an Enterprise Platform Company (Oct 2025)', url: 'https://a16z.com/anatomy-of-an-enterprise-platform-company/' },
            ].map(c => (
              <div key={c.ref} style={{ fontSize: 13, color: C.textMuted, display: 'flex', gap: 10 }}>
                <span style={{ color: C.indigo, flexShrink: 0, fontWeight: 600 }}>[{c.ref}]</span>
                {c.url
                  ? <a href={c.url} target="_blank" rel="noreferrer" style={{ color: C.textMuted, textDecoration: 'underline', textDecorationColor: C.border }}>{c.label}</a>
                  : <span>{c.label}</span>}
              </div>
            ))}
          </div>
        </Section>

      </main>
    </div>
  )
}
