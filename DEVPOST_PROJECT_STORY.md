<div align="center">

<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/wispy-console-logo.svg" alt="Wispy Console" height="48" />

<br /><br />

<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/hardware-blueprint.svg" alt="Wispy Console Hardware Blueprint" width="100%" />

<br /><br />

**Wispy Console by [Hausor Labs](https://hausorlabs.tech)**

[GitHub](https://github.com/brn-mwai/wispy-console) | [npm: wispy-ai](https://www.npmjs.com/package/wispy-ai) | [Website](https://hausorlabs.tech)

</div>

---

## Inspiration

We did not invent this problem. Developers have been screaming about it for months.

### "The single largest flaw"

In November 2025, a Claude Code user filed [GitHub Issue #11380](https://github.com/anthropics/claude-code/issues/11380) with 30+ upvotes:

> *"This is incredibly frustrating, especially when working with long files. I will often ask Claude Code to read a file, switch to a different task, and come back only to find it has been sitting there waiting for permission... The workflow disruption is significant. Having to babysit permission prompts defeats the purpose of having an AI assistant handle these tasks autonomously."*
> -- @cmwalton

Another user on the same thread:

> *"This has been a problem since day one. This is the single largest flaw in Claude Code, and it should really be Anthropic's highest priority."*
> -- @cruftyoldsysadmin

This is not one tool's problem. It is every AI agent's problem. On [Issue #2560](https://github.com/anthropics/claude-code/issues/2560), a developer describes approving the same command **every 15 seconds**:

> *"It is very annoying. I have multiple claude.json files set up to allow them but it still asks me to approve them manually, like every 15 seconds."*
> -- @keithslater

### The YOLO Trap

Developers got so frustrated that they started running agents with all safety controls disabled. On Hacker News, one developer admitted:

> *"AI tools are honestly unusable without running in yolo mode. You have to baby every single little command. It is utterly miserable and awful."*
> -- @forrestthewoods, [HN](https://news.ycombinator.com/item?id=46268222)

The result? A developer's entire Mac home directory was deleted when Claude Code ran `rm -rf ~/` in YOLO mode. No approval prompt. No guardrail. Gone. ([GitHub #12637](https://github.com/anthropics/claude-code/issues/12637))

The choice today is binary: **babysit every command** or **disable all safety and pray**. There is no middle ground.

### Context Switching Is Killing Productivity

On Hacker News, developers describe the cognitive cost:

> *"What am I supposed to do while I wait? I could just sit and watch, or context switch to another task then forget the details on what I was originally doing."*
> -- @PetahNZ, [HN](https://news.ycombinator.com/item?id=43927914)

> *"With the fully agentic editors, it takes more like 15 to 30 minutes, and now it is a full on interruption."*
> -- @ak217, [HN](https://news.ycombinator.com/item?id=44596472)

And one developer managing **12 simultaneous AI agents**:

> *"If I accidentally press Shift+Tab while checking on an agent, they drop out of dontAsk mode and there is no way to get back without restarting Claude Code."*
> -- @midlifedad, [GitHub #15898](https://github.com/anthropics/claude-code/issues/15898)

### The Trust Crisis

The 2025 Stack Overflow Developer Survey confirmed what we were seeing:

- **66%** of developers spend more time correcting "almost-right" AI code than they save
- **45%** cite "AI solutions that are almost right, but not quite" as their #1 frustration
- Trust in AI accuracy **dropped from 40% to 29%** year-over-year
- **75%** prefer asking a human over relying on AI when uncertain

([Source](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here))

### The Accessibility Gap

CHI 2025 research found that AI coding assistants **"exacerbated existing accessibility barriers and introduced new ones"** for visually impaired developers. Screen readers cannot navigate AI output mixed with code. Developers with RSI cannot type dozens of approvals per session. The text-only interface excludes them entirely.

([Source: ACM Digital Library](https://dl.acm.org/doi/10.1145/3706598.3714008))

### Meanwhile, On Your Desk

Through all of this, millions of developers have an MX Creative Console sitting idle. Nine LCD buttons with individual displays. A wireless precision dial. Up to 15 pages of programmable shortcuts. Connected to an MX Master 4 with haptic feedback and a thumb-activated Actions Ring.

It controls Photoshop beautifully. But it cannot control the most important tool of 2026.

**What if it could?**

---

## What It Does

Wispy Console is a Logitech Actions SDK plugin that turns the MX Creative Console into a **universal AI agent control center**. Not for one agent. For any agent -- Wispy, OpenClaw, Claude Code, Aider, or any CLI tool that exposes an API.

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/button-pages.svg" alt="Button Layout -- 9 LCD Keys with Agent-Specific Icons" width="100%" />
</div>

### The Keypad: 9 LCD Buttons (USB-C Wired)

Each button has its own mini-display that updates in real-time to show the connected agent's state:

| | Column 1 | Column 2 | Column 3 |
|---|---|---|---|
| **Row 1** | **Code** -- Activate the coding agent | **Research** -- Activate the research agent | **Deploy** -- One-tap deployment pipeline |
| **Row 2** | **Approve** -- Accept the pending action | **Reject** -- Cancel and try another approach | **Voice** -- Push-to-talk voice commands |
| **Row 3** | **Status** -- Cycle through agent state | **Quick** -- Context-sensitive shortcut | **Mode** -- Thinking depth indicator |

With 2 paging buttons and up to **15 pages** of shortcuts, power users can map every tool their agent offers to a physical button. An agent with 45 tools? That is 5 pages of 9 buttons each. The LCD screens update per page to show each tool's icon and name.

**What each button solves:**

- **Approve / Reject** -- The #1 complaint. No more typing "y" or clicking confirm. A physical button with haptic feedback. You know you pressed it. The agent knows you meant it.
- **Code / Research / Deploy** -- No more typing "switch to coder agent" or navigating menus. One press. The LCD updates to show the active agent.
- **Voice** -- Hold to speak, release to send. For developers with RSI, carpal tunnel, or anyone tired of typing prompts.
- **Status** -- One button cycles through: agent state, tokens used, wallet balance, task progress. No terminal scrolling.

### The Dial: Thinking Depth (Wireless)

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/thinking-dial.svg" alt="Thinking Depth Dial" width="100%" />
</div>

The MX Creative Console's wireless precision dial controls **how deeply the AI reasons**:

| Rotation | Mode | Behavior |
|---|---|---|
| **Far left (0-20)** | Flash | Instant, lightweight responses. One-liner answers. |
| **Center (21-50)** | Standard | Balanced reasoning. Default for most tasks. |
| **Right (51-80)** | Deep Think | Extended chain-of-thought. Detailed analysis. |
| **Far right (81-100)** | Marathon | Multi-step, exhaustive reasoning. Hours or days. |
| **Press dial** | Auto | Reset to automatic mode selection. |

This is the **middle ground** between YOLO and babysitting. Instead of a binary on/off for safety, you have a physical dial that controls the agent's autonomy level. Turn left for quick, supervised tasks. Turn right for deep, autonomous work. You physically feel the tradeoff.

Quick question about a function? Dial left. Flash mode. Instant answer.
Redesigning the authentication system? Dial right. Marathon mode. Let the agent think for hours.

We have not seen anyone map AI reasoning intensity to a physical rotary control before.

### Actions Ring (MX Master 4)

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/actions-ring.svg" alt="Actions Ring -- Context-Aware Agent Switching" width="100%" />
</div>

The thumb-activated on-screen radial overlay provides **context-aware agent switching**:

| Active App | Agent | Ring Actions |
|---|---|---|
| **VS Code** | Coder | Fix, Refactor, Test, Docs, Review |
| **Chrome** | Researcher | Summarize, Analyze, Fact-check, Save |
| **Terminal** | DevOps | Build, Deploy, Monitor, Debug |
| **Figma** | Analyst | Review, Export, Optimize, Annotate |

The AI adapts to what you are doing. Switch from VS Code to Chrome and the agent switches from Coder to Researcher automatically. Haptic taps confirm each selection as you hover.

This directly solves @midlifedad's problem of managing 12 AI agent instances. The Actions Ring becomes the agent switcher -- thumb down, select agent, thumb up. Done.

### Haptic Feedback

Physical vibrations communicate agent state **without looking at the screen**:

| Event | Waveform | What You Feel |
|---|---|---|
| Task completed | `happy_alert` | Quick celebratory pulse |
| Needs your approval | `completed` | Firm attention tap |
| Error occurred | `angry_alert` | Sharp buzz |
| Agent switched | `sharp_state_change` | Clean transition click |
| Thinking in progress | `wave` | Smooth ongoing rhythm |
| Payment confirmed | `knock` | Double-tap |

The developer who context-switches to another task (@PetahNZ) no longer needs to check back. When the agent finishes, the MX Master 4 buzzes. When it needs approval, it taps. When it errors, it buzzes sharply. **You feel the agent's state in your hand.**

For visually impaired developers (CHI 2025 findings), this is transformative. Haptic patterns encode agent state into touch. No screen required.

---

## Agent-Agnostic Architecture

This is the key design decision. Wispy Console is **not locked to one AI agent**. It connects through a universal adapter layer.

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/architecture.svg" alt="Architecture -- Universal Agent Adapter Layer" width="100%" />
</div>

```
[MX Creative Console]                [MX Master 4]
   Keypad (USB-C)                     Actions Ring (thumb overlay)
   9 LCD buttons + 2 paging           Haptic motor
   15 pages of shortcuts              Context-aware switching
   Dial (wireless, precision)
         |                                 |
         v                                 v
   [Logi Options+ / Plugin Service]
         |
         |  Actions SDK (Node.js / TypeScript)
         |  CommandAction (buttons) + AdjustmentAction (dial)
         v
   [Wispy Console Plugin]
         |
         v
   [Universal Agent Adapter]
         |
    +---------+----------+----------+
    v         v          v          v
 [Wispy]  [OpenClaw]  [Claude    [Any Agent]
  REST      REST      Code CLI]   REST/WS/CLI
  :3120     :4000     stdio       adapter
```

### The Adapter Interface

Every AI agent, regardless of how it works internally, gets normalized to one interface:

```typescript
interface AgentAdapter {
  // Core
  send(message: string): Promise<AgentResponse>;
  approve(): Promise<void>;
  reject(): Promise<void>;
  getStatus(): Promise<AgentStatus>;

  // Agent switching
  switchAgent(role: string): Promise<void>;
  getAvailableAgents(): Promise<AgentRole[]>;

  // Thinking depth
  setThinkingDepth(level: number): Promise<void>;

  // Tool discovery (for LCD button mapping)
  getTools(): Promise<Tool[]>;

  // Voice
  sendVoice(audioBuffer: Buffer): Promise<AgentResponse>;
}
```

### Supported Agents

| Agent | Connection | Tools | Status |
|---|---|---|---|
| **[Wispy](https://npmjs.com/package/wispy-ai)** | REST API (localhost:3120) | 32+ tools, Marathon mode, USDC wallet, Gemini 2.5 Pro | Reference implementation |
| **[OpenClaw](https://openclaw.ai)** | REST API | Browser automation, web tasks, autonomous execution | Adapter ready |
| **Claude Code** | CLI stdio wrapper | File ops, bash, code analysis | Planned adapter |
| **Aider** | CLI wrapper | Git-aware code editing, multi-file refactoring | Planned adapter |
| **Any REST agent** | HTTP | Varies -- auto-discovered via `/tools` endpoint | Generic adapter |

The plugin auto-discovers each agent's available tools and maps them to the 15-page LCD button grid. When you switch agents, the keypad buttons update their LCD displays to show that agent's tool icons and names.

---

## How We Built It

### Plugin Layer

TypeScript using the Logitech Actions SDK for Node.js (`@logitech/plugin-sdk`, currently in alpha). The plugin registers 9 actions with the Logi Plugin Service:

| Action | SDK Type | Hardware Control |
|---|---|---|
| Code | `CommandAction` | Keypad button (Row 1, Col 1) |
| Research | `CommandAction` | Keypad button (Row 1, Col 2) |
| Deploy | `CommandAction` | Keypad button (Row 1, Col 3) |
| Approve | `CommandAction` | Keypad button (Row 2, Col 1) |
| Reject | `CommandAction` | Keypad button (Row 2, Col 2) |
| Voice | `CommandAction` | Keypad button (Row 2, Col 3) |
| Status | `CommandAction` | Keypad button (Row 3, Col 1) |
| Quick | `CommandAction` | Keypad button (Row 3, Col 2) |
| Thinking Dial | `AdjustmentAction` | Wireless dial (rotation + press) |

Each `CommandAction` implements `onKeyDown()` which triggers a REST call to the connected agent through the adapter layer. The `AdjustmentAction` implements `execute(event)` where `event.tick` maps to thinking depth increments.

### Agent Communication

The plugin communicates via REST API. For Wispy (the reference implementation):

```
POST /api/chat          -- Send message to agent
POST /api/agent/switch  -- Switch active agent role
POST /api/approve       -- Approve pending action
POST /api/reject        -- Reject pending action
PUT  /api/thinking      -- Set thinking depth (0-100)
GET  /api/status        -- Get agent state, tokens, task progress
POST /api/voice         -- Send voice audio for transcription
GET  /api/tools         -- List available tools (for LCD mapping)
```

### AI Engine (Wispy)

Wispy is a real, working product on npm (v1.4.1, MIT license):

| Component | Technology |
|---|---|
| **AI Model** | Google Gemini 2.5 Pro (reasoning), Flash (routing) |
| **Tools** | 32+ (file ops, bash, web search, git, code analysis, browser) |
| **Marathon** | Multi-step autonomous tasks over hours or days |
| **Wallet** | USDC on Base/SKALE via x402 protocol |
| **Memory** | SQLite vector store with text-embedding-004 |
| **Channels** | CLI, Telegram, REST API, and now MX Creative Console |
| **Voice** | Edge TTS + Whisper transcription |

### Data Flow

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/data-flow.svg" alt="Data Flow -- From Hardware Input to AI Response" width="100%" />
</div>

### WebMCP Integration

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/webmcp-integration.svg" alt="WebMCP Integration" width="100%" />
</div>

### Setup Wizard

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/wizard-setup.svg" alt="Setup Wizard" width="100%" />
</div>

### Interactive Demo

Three.js + SVG visualization showing the hardware responding to AI agent commands in real-time. The demo simulates:
- LCD button updates on agent switch
- Dial rotation with thinking depth gauge
- Actions Ring context switching
- Haptic feedback pulse animations
- Full Code to Approve to Deploy workflow

---

## The Problems We Solve (With Evidence)

| Problem | Evidence | Wispy Console Solution |
|---|---|---|
| **Permission prompt fatigue** (approve 15+ times/session) | [GitHub #2560](https://github.com/anthropics/claude-code/issues/2560) (36+ upvotes), [#11380](https://github.com/anthropics/claude-code/issues/11380) (30+ upvotes) | Physical approve/reject buttons. One press. Haptic confirmation. |
| **Binary YOLO-or-nothing** | [HN](https://news.ycombinator.com/item?id=46268222): "AI tools are honestly unusable without running in yolo mode" | Thinking depth dial. Graduated control from Flash to Marathon. |
| **Catastrophic YOLO failures** (rm -rf ~/) | [GitHub #12637](https://github.com/anthropics/claude-code/issues/12637), [GIGAZINE](https://gigazine.net/gsc_news/en/20251216-claude-code-cli-mac-deleted/) | Physical "danger zone" on dial. Haptic warning. No binary switch. |
| **Context switching** between agent and IDE | [HN](https://news.ycombinator.com/item?id=43927914): "context switch to another task then forget the details" | Dedicated hardware. Eyes stay on code. Hands on console. Haptic buzz when done. |
| **Multi-agent management** (12+ instances) | [GitHub #15898](https://github.com/anthropics/claude-code/issues/15898): "no way to get back without restarting" | Actions Ring agent switcher. Per-agent LCD buttons. |
| **Accessibility barriers** for impaired developers | [CHI 2025](https://dl.acm.org/doi/10.1145/3706598.3714008): "exacerbated existing accessibility barriers" | Haptic state encoding. Voice input. Physical buttons. No screen required. |
| **Trust crisis** (66% spend more time correcting AI) | [Stack Overflow 2025](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here) | Graduated autonomy dial. Review at your comfort level. |

---

## Challenges We Ran Into

**The Actions SDK is in alpha.** The Node.js SDK (`@logitech/plugin-sdk`) is Windows-only with a limited API surface. We designed the architecture to be production-ready for the full SDK while working within current constraints. The `CommandAction`/`AdjustmentAction` pattern is stable and maps cleanly to our use case.

**Mapping abstract AI concepts to physical hardware.** "Thinking depth" is invisible. Making it a dial turn makes it tangible, but finding the right breakpoints took iteration. We tested Flash at 0-20, Standard at 21-50, Deep Think at 51-80, and Marathon at 81-100. The physical detent of the dial at each zone boundary needed to feel meaningful.

**Agent normalization is harder than it sounds.** Every AI agent has different tool names, different approval flows, different state models. Wispy has 32+ tools with Marathon mode. OpenClaw has browser automation with task trees. Claude Code has file operations with diff review. The adapter layer has to be flexible enough to handle all of them while keeping the 9-button experience consistent.

**15 pages is a lot of surface area.** Power users want every tool mapped. New users want simplicity. We solved this with a smart default layout (Page 1: core actions, Pages 2-3: tools sorted by frequency) and per-agent page templates that populate automatically on connection.

**The YOLO paradox.** We are building graduated control, not binary on/off. But we had to be careful that the "Marathon" end of the dial does not become another YOLO mode. The solution: thinking depth controls reasoning intensity, not safety. The approve/reject buttons remain active at every dial position. Deep thinking does not mean blind trust.

---

## Accomplishments We Are Proud Of

**Agent-agnostic by design.** This is not a Wispy-only plugin. Any AI agent that implements the adapter interface gets hardware controls for free. We built the universal layer first, then the Wispy integration.

**The thinking depth dial.** A genuinely new interaction paradigm. The physical rotation creates a tangible link between the user and the AI's reasoning process that a software slider never could.

**Real evidence, real problems.** Every feature maps to a documented developer complaint. We did not invent a problem to solve. We read hundreds of GitHub issues, HN threads, and research papers, then designed hardware solutions for each one.

**Wispy is a real product.** v1.4.1 on npm. 32+ tools. Autonomous execution. Blockchain wallet. Multi-day Marathon tasks. This plugin connects to real AI infrastructure, not a mockup.

**Zero AI plugins on the Logitech Marketplace.** Out of ~28 plugins today, every single one targets creative apps. The developer/AI market is completely unserved. Wispy Console would be the first.

---

## What We Learned

**Logitech's Actions SDK is well-designed for this.** The `CommandAction`/`AdjustmentAction` split maps perfectly to AI agent workflows: buttons for discrete actions (approve, reject, switch), dial for continuous adjustment (thinking depth). The per-button LCD displays are the killer feature -- they transform generic hardware into context-aware AI controls.

**Physical hardware adds a dimension that software cannot replicate.** The tactile feedback from a dial turn creates a connection to the AI's reasoning process. When you feel the dial click past "Standard" into "Deep Think," you understand what is happening in a way a progress bar never communicates.

**The 15-page system is perfect for AI tools.** Most agents have 20-50 tools. That is 2-6 pages. The paging buttons let you flip through tool categories like chapters in a book. Page 1: Core actions. Page 2: File tools. Page 3: Web tools. Page 4: Git tools.

**Accessibility is an untapped market.** The CHI 2025 research was eye-opening. AI tools are creating new barriers for impaired developers at the exact moment they should be removing them. A hardware console with haptic feedback, voice input, and physical buttons is inherently more accessible than a text terminal.

---

## What is Next for Wispy Console

**Phase 1 (Now):** Plugin architecture, adapter layer, interactive demo, Wispy + OpenClaw adapters

**Phase 2 (Post-SDK GA):** Full LCD rendering with agent status icons, thinking depth gauges, and live token counters on each button's mini-display

**Phase 3:** More agent adapters -- Claude Code, Aider, Continue.dev, Cursor, and a generic REST adapter for any agent

**Phase 4:** Team mode -- shared MX Creative Console profiles where a team's agents coordinate across multiple consoles

**Phase 5:** Marketplace distribution as free + pro tiers. MX Ink integration for spatial AI interactions in VR.

### Business Model

| Tier | Price | Features |
|---|---|---|
| **Free** | $0 | Core buttons (Code, Research, Approve, Reject, Status), 1 agent |
| **Pro** | $4.99/mo | Voice, custom button mappings, multi-agent, Marathon controls, wallet dashboard |
| **Team** | $9.99/mo | Shared profiles, team agent coordination, admin controls |

**Market size:** 40M+ Logitech MX users. 73% of developers use AI tools daily (Stack Overflow 2025). The intersection is massive and completely unserved.

---

## Tech Stack

| Component | Technology |
|---|---|
| **Plugin** | TypeScript, Logi Actions SDK (`@logitech/plugin-sdk`, Node.js) |
| **AI Engine** | [Wispy](https://npmjs.com/package/wispy-ai) v1.4.1 (Gemini 2.5 Pro, 32+ tools) |
| **Adapter Layer** | TypeScript interfaces, REST/WebSocket/CLI bridges |
| **Demo** | Three.js + SVG (interactive hardware visualization) |
| **Communication** | REST API (localhost, zero-config) |
| **Wallet** | USDC on Base/SKALE (x402 protocol) |
| **Voice** | Edge TTS + Whisper transcription |
| **Haptics** | MX Master 4 waveform API |

---

## Team

**Brian Mwai** -- Full-stack developer, AI agent researcher. Creator of Wispy. Based in Nairobi, Kenya.

**Joy Lang'at** -- Software engineer. Wispy contributor. Based in Nairobi, Kenya.

We are [Hausor Labs](https://hausorlabs.tech), building autonomous AI tools for developers.

---

## Links

- **Wispy on npm:** [npmjs.com/package/wispy-ai](https://npmjs.com/package/wispy-ai)
- **Source code:** [github.com/brn-mwai/wispy-console](https://github.com/brn-mwai/wispy-console)
- **Website:** [hausorlabs.tech](https://hausorlabs.tech)
- **X/Twitter:** [x.com/hausorlabs](https://x.com/hausorlabs)

---

*Built by Brian Mwai and Joy Lang'at at Hausor Labs. DevStudio 2026 by Logitech, February 2026.*
