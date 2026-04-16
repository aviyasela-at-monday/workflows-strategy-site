import { useState } from 'react'
import './App.css'

const COLORS = {
  bg: '#0c0d14',
  card: '#13141f',
  cardAlt: '#1a1b2e',
  border: 'rgba(99,102,241,0.15)',
  indigo: '#6366f1',
  indigoBright: '#818cf8',
  orange: '#f97316',
  green: '#10b981',
  amber: '#f59e0b',
  muted: 'rgba(255,255,255,0.45)',
  mutedMore: 'rgba(255,255,255,0.25)',
}

function Tag({ children, color = COLORS.indigo }) {
  return (
    <span style={{
      background: color + '22',
      color: color,
      border: `1px solid ${color}44`,
      borderRadius: 6,
      padding: '2px 10px',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    }}>
      {children}
    </span>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <Tag>{children}</Tag>
    </div>
  )
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: COLORS.card,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 16,
      padding: '24px 28px',
      ...style,
    }}>
      {children}
    </div>
  )
}

function SignalBlock({ type, children }) {
  const [open, setOpen] = useState(false)
  const isHave = type === 'have'
  const color = isHave ? COLORS.green : COLORS.amber
  const label = isHave ? 'Signal we have' : 'Signal needed'
  const icon = isHave ? '✓' : '○'

  return (
    <div style={{
      borderLeft: `3px solid ${color}`,
      background: color + '0d',
      borderRadius: '0 8px 8px 0',
      marginTop: 10,
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px',
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: color,
          fontSize: 12,
          fontWeight: 600,
          textAlign: 'left',
          letterSpacing: '0.04em',
        }}
      >
        <span>{icon}</span>
        <span style={{ textTransform: 'uppercase' }}>{label}</span>
        <span style={{ marginLeft: 'auto', opacity: 0.6, fontSize: 10 }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={{
          padding: '0 14px 12px 14px',
          fontSize: 13,
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.6,
        }}>
          {children}
        </div>
      )}
    </div>
  )
}

function Section({ children, style = {} }) {
  return (
    <section style={{
      maxWidth: 860,
      margin: '0 auto',
      padding: '64px 24px',
      ...style,
    }}>
      {children}
    </section>
  )
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: `1px solid ${COLORS.border}`, margin: 0 }} />
}

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: 'Poppins, sans-serif',
      fontSize: 28,
      fontWeight: 700,
      margin: '0 0 24px 0',
      color: '#fff',
      lineHeight: 1.2,
    }}>
      {children}
    </h2>
  )
}

function H3({ children, color = '#fff' }) {
  return (
    <h3 style={{
      fontSize: 13,
      fontWeight: 700,
      margin: '0 0 8px 0',
      color,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
    }}>
      {children}
    </h3>
  )
}

function Body({ children, muted = false }) {
  return (
    <p style={{
      margin: '0 0 12px 0',
      fontSize: 15,
      lineHeight: 1.7,
      color: muted ? COLORS.muted : 'rgba(255,255,255,0.85)',
    }}>
      {children}
    </p>
  )
}

function Bullet({ children }) {
  return (
    <li style={{
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.75)',
      marginBottom: 6,
    }}>
      {children}
    </li>
  )
}

export default function App() {
  return (
    <div style={{ background: COLORS.bg, minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(160deg, #0f1022 0%, #1a1040 50%, #0c0d14 100%)',
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        <Section style={{ padding: '96px 24px 80px' }}>
          <div style={{ textAlign: 'center' }}>
            <Tag color={COLORS.indigoBright}>AI Workflows @ monday.com</Tag>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 800,
              margin: '24px 0 16px',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #fff 40%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Workflows are the part<br />of the agent that doesn't guess.
            </h1>
            <p style={{
              fontSize: 18,
              color: COLORS.muted,
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              Why deterministic execution matters in an agentic world — and why monday is uniquely positioned to own it.
            </p>
            <div style={{ marginTop: 16, fontSize: 13, color: COLORS.mutedMore }}>
              April 2026 · Internal
            </div>
          </div>
        </Section>
      </div>

      {/* THE SETUP */}
      <Divider />
      <Section>
        <SectionLabel>The Setup</SectionLabel>
        <H2>We've done this before.</H2>
        <Body>
          monday.com was built on one insight: wrap software building blocks with an interface that makes anyone a builder. That's how we turned boards, automations, and integrations into tools millions of non-technical people use every day.
        </Body>
        <Body>
          AI is doing this again — for a new kind of worker. Cursor, Claude Code, and LangSmith are making agents accessible to technical teams. Our job is to do what we've always done: bring that to everyone else.
        </Body>
        <Body muted>
          We're launching an Agent Builder. But agents alone aren't enough — and the gap isn't obvious until something goes wrong.
        </Body>
      </Section>

      {/* WHY WORKFLOWS STILL MATTER */}
      <Divider />
      <Section>
        <SectionLabel>Why Workflows Still Matter</SectionLabel>
        <H2>Agents are powerful. But they're probabilistic.</H2>
        <Body>
          For most decisions, "might do the right thing" is fine. But for a growing class of work — billing, compliance, onboarding, multi-step processes where one wrong step cascades — "might" isn't acceptable.
        </Body>
        <Body muted>
          The industry has converged on a definition: Agents = LLMs that dynamically direct their own process. Workflows = LLMs and tools through predefined paths. Deterministic, auditable, reliable. (Anthropic and LangChain both converge on this framing.[¹⁻²])
        </Body>

        <SignalBlock type="have">
          The RevAI team migrated their Amanda system from Relevance AI to n8n specifically for more control. Their principle: "what doesn't require reasoning — automate deterministically."
        </SignalBlock>
        <SignalBlock type="needed">
          Structured interviews with AI Champions and Pod SEs on where they chose deterministic execution over agents, and why. Hypothesis: the majority cite control over sensitive or high-stakes steps — HR, customer-facing actions — not technical capability gaps.
        </SignalBlock>

        {/* TYPE 1 */}
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{
              background: COLORS.indigo + '22',
              border: `1px solid ${COLORS.indigo}44`,
              borderRadius: 8,
              padding: '4px 12px',
              fontSize: 12,
              fontWeight: 700,
              color: COLORS.indigoBright,
              letterSpacing: '0.05em',
            }}>
              TYPE 1
            </div>
            <span style={{ fontSize: 14, color: COLORS.muted }}>Single agent, single task — the focus now</span>
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            {[
              {
                title: 'Guarantee',
                color: COLORS.indigo,
                body: 'A workflow always does the same thing. An agent might. Anthropic explicitly warns that agent autonomy introduces "the potential for compounding errors"[¹] — acceptable for open-ended tasks, not for process-critical ones.',
                signalHave: "RevAI's Amanda is legally required to open every interaction with a disclaimer identifying herself as an AI — every single time. Agents struggle with this consistency; a workflow step guarantees it.",
                signalNeeded: 'Structured interviews with AI Champions and Pod SEs to surface cases where inconsistent agent behavior created legal, compliance, or trust issues. Hypothesis: this is common, not an edge case.',
              },
              {
                title: 'Cost',
                color: COLORS.orange,
                body: "Deterministic steps don't burn AI credits. Running everything through an LLM when you don't need to is expensive at scale — and as of May 2026, monday will charge for AI Credits.",
                signalNeeded: 'A concrete cost comparison — same process run agentically vs. deterministically, with credit consumption per run. Best candidate: RevAI/Amanda team. One real number makes this argument airtight.',
              },
              {
                title: 'Debuggability',
                color: COLORS.green,
                body: "When an agent fails, fixing it means adjusting a prompt and hoping the next run behaves differently. When a workflow step fails, you know exactly what happened, can rerun just that step with corrected input, and can guarantee the fix holds.",
                signalHave: "RevAI's team starts every morning reviewing errors across all Amanda agent runs. To check whether the agent reached a human vs. an answering machine, LLM-based evaluation proved unreliable — they ended up searching the transcript text for a known string. A workflow step would have made this a non-issue.",
                note: "We don't yet fully deliver on this promise ourselves — run history in monday Workflows is currently thin, with generic error messages not surfaced to users. Closing this gap is part of raising the ceiling.",
              },
            ].map(item => (
              <Card key={item.title} style={{ borderLeft: `3px solid ${item.color}` }}>
                <H3 color={item.color}>{item.title}</H3>
                <Body>{item.body}</Body>
                {item.signalHave && <SignalBlock type="have">{item.signalHave}</SignalBlock>}
                {item.signalNeeded && <SignalBlock type="needed">{item.signalNeeded}</SignalBlock>}
                {item.note && (
                  <p style={{ margin: '12px 0 0', fontSize: 12, color: COLORS.amber, fontStyle: 'italic' }}>
                    ⚠ {item.note}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* TYPE 2 */}
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{
              background: '#7c3aed22',
              border: '1px solid #7c3aed44',
              borderRadius: 8,
              padding: '4px 12px',
              fontSize: 12,
              fontWeight: 700,
              color: '#a78bfa',
              letterSpacing: '0.05em',
            }}>
              TYPE 2
            </div>
            <span style={{ fontSize: 14, color: COLORS.muted }}>Multi-agent orchestration — the emerging horizon</span>
          </div>
          <Body>
            As agents proliferate, they need coordination — across tasks, tools, and teams. Workflows are the natural coordination layer: defining who does what, when, in what order, with what handoffs.
          </Body>
          <Body muted>
            LangChain already documents five design patterns for this[²]: prompt chaining, routing, parallelization, orchestrator-worker, and evaluator-optimizer. These are what developers reach for when a single agent isn't enough. We need to be the place where business users do the same, without writing code.
          </Body>
          <SignalBlock type="have">
            The RevAI team are building Oscar, a research agent that generates leads — designed to feed off Amanda (the SDR agent) for a fully autonomous pipeline. That's Type 2 in the wild.
          </SignalBlock>
          <SignalBlock type="needed">
            Map which orchestration patterns are already being attempted inside monday — by Pods, AI Champions, or internal teams — and where they're breaking down. Hypothesis: most are still in Type 1.
          </SignalBlock>
        </div>
      </Section>

      {/* WHAT WORKFLOWS BECOME */}
      <Divider />
      <Section>
        <SectionLabel>What Workflows Become</SectionLabel>
        <H2>Workflows stop being where you go to build — and become what runs underneath everything you build.</H2>
        <Body>
          Today, you open the Workflow Builder. You configure blocks. You think in nodes and edges. That experience has a floor that's too high — only 2–3 people per org ever get there[³], and 40% of accounts who start a workflow never run one[⁴] — and a ceiling that's too low to handle what serious use cases need.
        </Body>
        <Body>
          In the future state — for both Type 1 and Type 2 — you build via chat. You describe what you want, the system builds it. The canvas isn't the building experience; it's the transparency layer. Like source code you can read and edit, but don't have to write from scratch.
        </Body>
        <Body muted>
          The Workflow Builder doesn't disappear — power users will use it to inspect, verify, and tweak. But it becomes the transparency layer, not the front door.
        </Body>
        <Card style={{ marginTop: 24, borderLeft: `3px solid ${COLORS.indigoBright}` }}>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontStyle: 'italic' }}>
            "The visual workflow builder as a UX is a dying category — squeezed from below by better agents, squeezed from above by code generation."
          </p>
          <p style={{ margin: '8px 0 4px', fontSize: 12, color: COLORS.muted }}>— LangChain founder[²]</p>
          <p style={{ margin: 0, fontSize: 13, color: COLORS.indigoBright, fontWeight: 600 }}>
            We're not betting on the Workflow Builder. We're betting on what runs underneath it.
          </p>
        </Card>
      </Section>

      {/* THE RISK */}
      <Divider />
      <Section>
        <SectionLabel>The Risk</SectionLabel>
        <H2>We're squeezed on both ends today.</H2>

        <div style={{ display: 'grid', gap: 20 }}>
          <Card>
            <H3 color={COLORS.orange}>Floor is too high</H3>
            <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
              <Bullet>40% of accounts who start a workflow never run one[⁴] — and only 2–3 builders per account ever get there[³]</Bullet>
              <Bullet>No-code workflow builders are consistently cited as too complex by AI Champions[⁵]</Bullet>
            </ul>
            <SignalBlock type="needed">
              Relevance AI is pointed out as a dramatically simpler interface — does it actually lower the bar enough for business users? Especially as user expectations rise for what natural language alone can accomplish.
            </SignalBlock>
          </Card>

          <Card>
            <H3 color={COLORS.orange}>Ceiling is too low</H3>
            <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
              <Bullet>Only 18% of internal monday workflows are ready to migrate to monday today — 45 of 246[⁶]</Bullet>
              <Bullet>158 (64%) explicitly cannot migrate. Top blockers:</Bullet>
            </ul>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, marginBottom: 12 }}>
              {[
                { label: 'Loop / Batch Processing', count: 67, desc: 'doing the same action across a list of items' },
                { label: 'Bulk Read', count: 35, desc: 'reading many records from monday in a single operation' },
                { label: 'Webhook triggers', count: 37, desc: 'starting a workflow when an external system fires an event' },
                { label: 'Sub-workflow execution', count: 26, desc: 'one workflow calling another as a step' },
              ].map(b => (
                <div key={b.label} style={{
                  background: COLORS.cardAlt,
                  borderRadius: 10,
                  padding: '12px 14px',
                  border: `1px solid ${COLORS.border}`,
                }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.orange }}>{b.count}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', margin: '2px 0' }}>{b.label}</div>
                  <div style={{ fontSize: 11, color: COLORS.muted, lineHeight: 1.4 }}>{b.desc}</div>
                </div>
              ))}
            </div>
            <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
              <Bullet>No public API for Workflows or Automations</Bullet>
              <Bullet>No versioning, no testing/simulation</Bullet>
            </ul>
            <SignalBlock type="needed">
              How many customer workflows are blocked today, and what's the ARR at risk? How do we compare to n8n, Make, Workato, Relevance, Manus on key capabilities?
            </SignalBlock>
          </Card>

          <Card>
            <H3 color={COLORS.indigo}>Agents are not the rescue</H3>
            <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
              <Bullet>Agents and Workflows solve different problems — one reasons, one executes reliably</Bullet>
              <Bullet>Even when agents improve beyond today's 3.5% completion rate[⁷] — compliance, cost, and debuggability are structural advantages of determinism that won't close</Bullet>
            </ul>
          </Card>
        </div>

        <p style={{ marginTop: 28, fontSize: 15, fontWeight: 600, color: COLORS.orange, textAlign: 'center' }}>
          We are not well-positioned in either direction today. That is the urgency.
        </p>
      </Section>

      {/* WHY MONDAY WINS */}
      <Divider />
      <Section>
        <SectionLabel>Why monday Wins This</SectionLabel>
        <H2>Two moats no external platform can replicate.</H2>

        <div style={{ display: 'grid', gap: 16 }}>
          <Card style={{ borderLeft: `3px solid ${COLORS.indigoBright}` }}>
            <H3 color={COLORS.indigoBright}>Context</H3>
            <Body>
              monday is where work gets managed — processes, ownership, status, history. That's the system of record advantage: an agent or workflow running here inherits context that no external tool can replicate.
            </Body>
            <Body muted>
              In the AI era, that advantage compounds — it goes to whoever owns where work is managed, not whoever builds the smartest model[⁸]. n8n, Make, and Relevance require you to bring your own data. We already are the data.
            </Body>
          </Card>

          <Card style={{ borderLeft: `3px solid #7c3aed` }}>
            <H3 color="#a78bfa">Coordination-native</H3>
            <Body>
              monday has always been where humans coordinate work. Coordinating agents with each other and with humans — with visibility, control, and trust — is the same problem at a new scale.
            </Body>
          </Card>
        </div>

        <SignalBlock type="needed">
          What % of AI Champions and Pods executing workflows or agents in external tools (n8n, Relevance) still connect back to monday as their data source? Hypothesis: the majority do — not because they're required to, but because the process context lives here. That's the moat proving itself even where we're losing the execution layer.
        </SignalBlock>
      </Section>

      {/* WHAT WE BUILD */}
      <Divider />
      <Section>
        <SectionLabel>What We Build</SectionLabel>
        <H2>Four bets, in order of dependency.</H2>

        <div style={{ display: 'grid', gap: 16 }}>
          {[
            {
              num: '1',
              title: 'MCP & Public APIs',
              sub: 'The connectivity unlock',
              color: COLORS.indigo,
              body: "Two reasons this comes first: external tools — Claude, third parties — can build on monday's context and workflows. And it's the technical prerequisite for One Entry Point — Sidekick can only create or configure a workflow if there's an API beneath it. Today there is no public API.",
            },
            {
              num: '2',
              title: 'Agents ↔ Workflows',
              sub: 'The core integration',
              color: COLORS.orange,
              items: [
                'Workflow calls agent: currently minimal — needs full integration to replace "wait for human" steps (where human judgment is replaceable, not where it\'s required) with reliable agentic judgment.',
                'Agent calls workflow: not yet possible. The goal: agent uses a workflow as a deterministic subprocess for anything that doesn\'t require reasoning — "the RevAI principle."',
              ],
            },
            {
              num: '3',
              title: 'One Entry Point',
              sub: 'The experience shift',
              color: '#a78bfa',
              body: "Sidekick or Magic leads. Prompt in, system decides. The workflow builder exists for power users — it's not the front door. This is what makes Workflows the execution layer underneath everything, rather than a product you have to choose.",
            },
            {
              num: '4',
              title: 'Raise the Ceiling',
              sub: 'The table stakes',
              color: COLORS.green,
              items: [
                'Goal 1: enable 90% of the AI workflows we run internally at monday.',
                'Goal 2: unblock the top 3 Pods use cases.',
                'Minimum: iterators, versioning, testing/simulation, webhook triggers.',
              ],
            },
          ].map(bet => (
            <Card key={bet.num} style={{ borderLeft: `3px solid ${bet.color}` }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: bet.color + '22',
                  border: `1px solid ${bet.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 800,
                  color: bet.color,
                  flexShrink: 0,
                }}>
                  {bet.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>{bet.title}</div>
                  <div style={{ fontSize: 11, color: bet.color, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{bet.sub}</div>
                  {bet.body && <Body>{bet.body}</Body>}
                  {bet.items && (
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {bet.items.map((item, i) => <Bullet key={i}>{item}</Bullet>)}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* WINNING PICTURE */}
      <Divider />
      <Section>
        <SectionLabel>The Winning Picture — EoQ2</SectionLabel>
        <H2>Three things must be true.</H2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { icon: '🔌', title: 'MCP / APIs', body: 'External tools can build, configure, and debug workflows.' },
            { icon: '⇄', title: 'Agents & Workflows', body: 'Bidirectional calls work at runtime.' },
            { icon: '↑', title: 'Ceiling Raised', body: 'Top use cases unblocked; key capability gaps closed.' },
          ].map(item => (
            <div key={item.title} style={{
              background: 'linear-gradient(135deg, #1a1b2e, #13141f)',
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16,
              padding: '28px 24px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.6 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* OPEN QUESTIONS */}
      <Divider />
      <Section>
        <SectionLabel>Open Questions</SectionLabel>
        <H2>What we need to resolve.</H2>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            'Do we build the higher ceiling on the current Workflow Builder, or does the infrastructure need to be rearchitected to get there?',
            "Does the Agents group co-own this narrative? It only holds if both groups tell it together — and it's also our way of expanding beyond the 2–3 power builders persona.",
            'Type 2 use cases: what does multi-agent orchestration actually look like for our users? We need real examples before we can design for it.',
          ].map((q, i) => (
            <div key={i} style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: '16px 20px',
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}>
              <span style={{ color: COLORS.indigoBright, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>Q{i + 1}</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{q}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CITATIONS */}
      <Divider />
      <Section style={{ padding: '40px 24px 64px' }}>
        <div style={{ fontSize: 12, color: COLORS.mutedMore, lineHeight: 2.2 }}>
          <div style={{ fontWeight: 600, color: COLORS.muted, marginBottom: 8, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Citations</div>
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
            <div key={c.ref}>
              [{c.ref}] {c.url
                ? <a href={c.url} style={{ color: COLORS.indigoBright }}>{c.label}</a>
                : c.label}
            </div>
          ))}
        </div>
      </Section>

    </div>
  )
}
