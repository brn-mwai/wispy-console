<div align="center">

<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/wispy-console-logo-animated.svg" alt="Wispy Console" width="520" />

<br /><br />

**AI Agent Control Center for Logitech MX Creative Console**

[![npm: wispy-ai](https://img.shields.io/npm/v/wispy-ai?style=flat-square&label=wispy-ai&color=00d4aa)](https://www.npmjs.com/package/wispy-ai)
[![License: MIT](https://img.shields.io/badge/license-MIT-white?style=flat-square)](LICENSE)

[GitHub](https://github.com/brn-mwai/wispy-console) | [npm](https://www.npmjs.com/package/wispy-ai) | [Website](https://hausorlabs.tech)

**Built by [Hausor Labs](https://hausorlabs.tech)**

</div>

---

## Inspiration

I spend most of my day with AI agents. They write code for me, research things, deploy projects. They are genuinely useful. But there is one problem nobody has solved: the way we control them.

Every few seconds, the agent stops and asks: *"Are you sure? (y/n)"*. I type "y". It does something. It stops again. *"Run this command? (y/n)"*. I type "y" again. And again. And again.

I am not the only one frustrated by this.

### "The single largest flaw"

In November 2025, a Claude Code user filed [GitHub Issue #11380](https://github.com/anthropics/claude-code/issues/11380) with 30+ upvotes:

> *"This is incredibly frustrating, especially when working with long files. I will often ask Claude Code to read a file, switch to a different task, and come back only to find it has been sitting there waiting for permission... The workflow disruption is significant."*
> — @cmwalton

Another user on the same thread:

> *"This has been a problem since day one. This is the single largest flaw in Claude Code, and it should really be Anthropic's highest priority."*
> — @cruftyoldsysadmin

On [Issue #2560](https://github.com/anthropics/claude-code/issues/2560), a developer describes approving the same command **every 15 seconds**:

> *"It is very annoying. I have multiple claude.json files set up to allow them but it still asks me to approve them manually, like every 15 seconds."*
> — @keithslater

### The YOLO Trap

Some developers got so tired of clicking "yes" that they turned off all safety checks entirely. On Hacker News:

> *"AI tools are honestly unusable without running in yolo mode. You have to baby every single little command. It is utterly miserable and awful."*
> — @forrestthewoods, [HN](https://news.ycombinator.com/item?id=46268222)

Then a developer's entire home directory was deleted. The agent ran `rm -rf ~/` with no safety check. No prompt. No guardrail. Everything gone. ([GitHub #12637](https://github.com/anthropics/claude-code/issues/12637))

So the options today are: **click "yes" a hundred times a day** or **turn off safety and hope nothing breaks**. There is nothing in between.

### We Cannot Focus

> *"What am I supposed to do while I wait? I could just sit and watch, or context switch to another task then forget the details on what I was originally doing."*
> — @PetahNZ, [HN](https://news.ycombinator.com/item?id=43927914)

> *"With the fully agentic editors, it takes more like 15 to 30 minutes, and now it is a full on interruption."*
> — @ak217, [HN](https://news.ycombinator.com/item?id=44596472)

One developer was managing **12 AI agents at once**:

> *"If I accidentally press Shift+Tab while checking on an agent, they drop out of dontAsk mode and there is no way to get back without restarting Claude Code."*
> — @midlifedad, [GitHub #15898](https://github.com/anthropics/claude-code/issues/15898)

### Developers Do Not Trust AI Yet

The 2025 Stack Overflow Developer Survey found:

- **66%** of developers spend more time correcting AI-generated code than they save
- Trust in AI accuracy **dropped from 40% to 29%** year-over-year
- **75%** still prefer asking a human when they are uncertain

([Source](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here))

### It Is Even Worse for Some Developers

CHI 2025 research found that AI coding tools **"exacerbated existing accessibility barriers and introduced new ones"** for visually impaired developers. Screen readers cannot parse AI output mixed with code. Developers with RSI cannot type dozens of approvals per session.

([Source: ACM Digital Library](https://dl.acm.org/doi/10.1145/3706598.3714008))

### The Moment It Clicked

Through all of this, I had a Logitech MX Creative Console sitting on my desk. Nine LCD buttons with their own little screens. A wireless precision dial. I used it for Photoshop shortcuts.

One night I was stuck in another approval loop with my AI agent and I looked over at the console. Nine buttons. A dial. Haptic feedback on the mouse.

*Why am I typing "y" when I could just press a button?*

That is how Wispy Console started.

---

## What It Does

Wispy Console turns the MX Creative Console into a physical control center for AI agents. Instead of typing commands in a chat window, you press buttons and turn a dial.

### The 9 Buttons

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/button-pages.svg" alt="Button Layout" width="100%" />
</div>

<br />

Each button on the keypad has its own tiny LCD screen that shows what it does:

| | Column 1 | Column 2 | Column 3 |
|---|---|---|---|
| **Row 1** | **Code** — Switch to the coding agent | **Research** — Switch to the research agent | **Deploy** — Ship the project |
| **Row 2** | **Approve** — Say yes to the agent | **Reject** — Say no, try something else | **Voice** — Hold and speak a command |
| **Row 3** | **Status** — See what the agent is doing | **Quick** — Smart shortcut for your current app | **Mode** — Shows thinking depth |

There are also paging buttons at the bottom. You can have up to **15 pages** of shortcuts. If your agent has 45 tools, that is 5 pages of 9 buttons each.

The **Approve** button alone solves the biggest complaint in AI coding. No more typing "y". One press. Done. The button lights up. You feel it click. The agent moves on.

### The Thinking Dial

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/thinking-dial.svg" alt="Thinking Dial" width="100%" />
</div>

<br />

The wireless dial controls how hard the AI thinks:

| Turn | Mode | What Happens |
|---|---|---|
| **Far left** | Flash | Quick one-line answers |
| **Middle** | Standard | Normal reasoning |
| **Right** | Deep Think | Detailed analysis |
| **Far right** | Marathon | Multi-step work over hours |
| **Press it** | Auto | Let the AI decide |

This is the middle ground nobody built. You do not have to choose between "babysit everything" and "turn off all safety." You just turn a dial. Quick question? Turn left. Complex architecture decision? Turn right.

You feel the dial click between zones. You know exactly how much autonomy you are giving the AI.

### The Actions Ring (MX Master 4)

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/actions-ring.svg" alt="Actions Ring" width="100%" />
</div>

<br />

The MX Master 4 mouse has a thumb-activated radial menu. We mapped it to agent switching:

| What You Are Using | What Agent Activates | Actions Available |
|---|---|---|
| **VS Code** | Coder | Fix, Refactor, Test, Docs, Review |
| **Chrome** | Researcher | Summarize, Analyze, Fact-check, Save |
| **Terminal** | DevOps | Build, Deploy, Monitor, Debug |
| **Figma** | Analyst | Review, Export, Optimize, Annotate |

You switch from VS Code to Chrome. The AI agent switches from Coder to Researcher automatically. You do not have to tell it.

### Haptic Feedback

The MX Master 4 has a vibration motor. We use it to tell you what the agent is doing without you needing to look at the screen:

| What Happened | What You Feel |
|---|---|
| Task finished | Quick celebratory pulse |
| Agent needs your approval | Firm tap |
| Something went wrong | Sharp buzz |
| Agent switched | Clean click |
| AI is thinking | Smooth rhythm |

You are reading code. The mouse buzzes gently. The agent is done. You did not have to check. You did not lose focus.

For developers with visual impairments, this changes everything. The state of the AI is encoded in touch.

---

## It Works With Any AI Agent

This was important to us. We did not want to build something that only works with one tool.

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/architecture.svg" alt="Architecture" width="100%" />
</div>

<br />

Wispy Console has an adapter layer. Any AI agent that can receive messages and send responses can be plugged in:

| Agent | How It Connects | Status |
|---|---|---|
| **[Wispy](https://npmjs.com/package/wispy-ai)** | REST API on your computer | Working now |
| **[OpenClaw](https://openclaw.ai)** | REST API | Adapter ready |
| **Claude Code** | Terminal wrapper | Planned |
| **Aider** | Terminal wrapper | Planned |
| **Any agent with a REST API** | Auto-detected | Generic adapter |

When you switch agents, the LCD buttons update to show that agent's tools. The hardware adapts to whatever AI you are using.

---

## How We Built It

### The Plugin

TypeScript, using the Logitech Actions SDK for Node.js. Each button is a `CommandAction` that sends a REST call to the connected agent. The dial is an `AdjustmentAction` where each tick changes the thinking depth.

### How Data Flows

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/data-flow.svg" alt="Data Flow" width="100%" />
</div>

<br />

You press a button. The plugin sends a command to the agent. The agent responds. The LCD screen updates. The mouse buzzes. All of this happens locally on your computer. No cloud. No latency.

### Browser Integration

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/webmcp-integration.svg" alt="WebMCP Integration" width="100%" />
</div>

### First-Run Setup

<div align="center">
<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/wizard-setup.svg" alt="Setup Wizard" width="100%" />
</div>

<br />

The setup wizard detects which AI agents are running on your machine and connects to them automatically.

### The AI Engine

Wispy is our AI agent platform, available on npm as `wispy-ai` (v1.4.1, MIT license):

| What | How |
|---|---|
| **AI Model** | Google Gemini 2.5 Pro for reasoning, Flash for routing |
| **Tools** | 32+ including file operations, terminal, web search, git, code analysis |
| **Long Tasks** | Marathon mode for multi-step work over hours or days |
| **Payments** | USDC wallet on Base/SKALE |
| **Memory** | Remembers context across sessions |
| **Channels** | CLI, Telegram, REST API, and now the MX Creative Console |

---

## What Problems This Solves

| The Problem | Where Developers Reported It | How We Solve It |
|---|---|---|
| Clicking "approve" dozens of times a day | [#2560](https://github.com/anthropics/claude-code/issues/2560), [#11380](https://github.com/anthropics/claude-code/issues/11380) | A physical approve button. One press. |
| Only two options: babysit or YOLO | [HN](https://news.ycombinator.com/item?id=46268222) | A dial with graduated control. |
| Agents deleting files with no warning | [#12637](https://github.com/anthropics/claude-code/issues/12637) | Safety stays on at every dial position. |
| Losing focus every time the agent asks a question | [HN](https://news.ycombinator.com/item?id=43927914) | Haptic feedback. The mouse tells you. |
| Managing multiple agents at once | [#15898](https://github.com/anthropics/claude-code/issues/15898) | Actions Ring to switch between agents. |
| AI tools being inaccessible | [CHI 2025](https://dl.acm.org/doi/10.1145/3706598.3714008) | Haptics, voice input, physical buttons. |

---

## Challenges

**The Actions SDK is in alpha.** We designed the plugin to work within the current constraints while being ready for the full SDK when it ships.

**AI reasoning is invisible.** Turning it into a physical dial turn took iteration. We tested different zone breakpoints until the transitions felt right.

**Every AI agent is different.** The adapter layer had to handle different tool names, approval flows, and state models while keeping the 9-button experience consistent.

**The YOLO paradox.** We had to make sure the far-right dial position does not become another "turn off all safety" mode. Thinking depth controls how deeply the AI reasons. The approve/reject buttons stay active at every position.

---

## What We Are Proud Of

**It works with any AI agent**, not just ours. The adapter layer means any tool that exposes an API gets hardware controls for free.

**The thinking dial is new.** We have not seen anyone map AI reasoning intensity to a physical rotary control before. The tactile feedback makes AI thinking feel tangible.

**Every feature comes from a real complaint.** We did not guess what developers need. We read hundreds of GitHub issues and Hacker News threads, then built solutions for the problems people actually reported.

**Wispy is real.** v1.4.1 on npm. 32+ tools. It works today.

**There are zero AI plugins on the Logitech Marketplace.** Every one of the ~28 existing plugins is for creative apps. Developers and AI users are completely unserved.

---

## What Is Next

| Phase | What We Are Building |
|---|---|
| **Now** | Plugin architecture, adapter layer, interactive demo |
| **After SDK ships** | Full LCD rendering with live status on each button |
| **Next** | Adapters for Claude Code, Aider, Cursor, and a generic REST adapter |
| **Then** | Team mode with shared console profiles |
| **Future** | Logitech Marketplace distribution. MX Ink for spatial AI in VR. |

### Pricing

| Tier | Price | What You Get |
|---|---|---|
| **Free** | $0 | Core buttons, 1 agent |
| **Pro** | $4.99/mo | Voice, custom buttons, multi-agent, Marathon controls |
| **Team** | $9.99/mo | Shared profiles, team coordination |

---

## Tech Stack

| Part | Technology |
|---|---|
| **Plugin** | TypeScript, Logi Actions SDK, Node.js |
| **AI** | [Wispy](https://npmjs.com/package/wispy-ai) v1.4.1, Gemini 2.5 Pro |
| **Adapters** | TypeScript interfaces, REST/WebSocket/CLI bridges |
| **Demo** | Three.js + SVG interactive visualization |
| **Payments** | USDC on Base/SKALE |
| **Voice** | Edge TTS + Whisper |
| **Haptics** | MX Master 4 waveform API |

---

## Team

**Brian Mwai** — Full-stack developer. Creator of Wispy. Nairobi, Kenya.

**Joy Lang'at** — Software engineer. Wispy contributor. Nairobi, Kenya.

We are [Hausor Labs](https://hausorlabs.tech). We build autonomous AI tools for developers.

---

## Links

- **npm:** [npmjs.com/package/wispy-ai](https://npmjs.com/package/wispy-ai)
- **Source:** [github.com/brn-mwai/wispy-console](https://github.com/brn-mwai/wispy-console)
- **Website:** [hausorlabs.tech](https://hausorlabs.tech)

---

<div align="center">

<img src="https://raw.githubusercontent.com/brn-mwai/wispy-console/main/assets/wispy-console-logo-animated.svg" alt="Wispy Console" width="320" />

<br />

*Built by Brian Mwai and Joy Lang'at at Hausor Labs.*
*DevStudio 2026 by Logitech, February 2026.*

</div>
