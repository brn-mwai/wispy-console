# Wispy Console -- AI Agent Control Center for Logitech MX Creative Console

**Category:** MX Creative Console + MX Master 4 & Actions Ring: Innovate with the Actions SDK

**Team:** Brian Mwai & Joy Lang'at ([Hausor Labs](https://hausorlabs.tech))

---

## The Problem

AI agents are powerful but the interface is wrong. Today, controlling an AI agent means typing commands, reading walls of text, and clicking "approve" dozens of times. The interaction model is 100% keyboard-and-screen -- exactly where it was in 1985.

Meanwhile, you have a $200 hardware console on your desk designed for creative control. It has a precision dial, programmable keys with displays, and haptic feedback. It controls Photoshop beautifully. But it can't control the most important tool of 2026: your AI.

## The Solution: Wispy Console

A Logitech Actions SDK plugin that turns the MX Creative Console into a physical command center for AI agents.

**One button to code. One button to research. A dial to control how deep the AI thinks. A haptic buzz when it's done.**

Wispy Console connects the MX Creative Console and MX Master 4 to [Wispy](https://www.npmjs.com/package/wispy-ai), an autonomous AI agent platform powered by Google Gemini. The hardware becomes the steering wheel for AI.

### Button Layout (3x3 Grid)

| | Column 1 | Column 2 | Column 3 |
|---|---|---|---|
| **Row 1** | **Code** -- Switch to Coder agent. Writes, debugs, reviews code. | **Research** -- Switch to Researcher. Web search, analysis, fact-checking. | **Deploy** -- One-tap deploy. Build, test, ship via Marathon mode. |
| **Row 2** | **Approve** -- Accept the agent's pending action (file write, payment, command). | **Reject** -- Cancel current action, try a different approach. | **Voice** -- Push-to-talk. Speak your command instead of typing. |
| **Row 3** | **Status** -- Cycle through agent state, tokens, wallet balance, task progress. | **Quick** -- Context-aware shortcut that adapts to your active app. | **Dial** -- Thinking depth indicator (see below). |

### The Dial: Thinking Depth Control

The MX Creative Console dial controls how deeply the AI reasons:

- **Rotate left (0-20):** Flash mode -- instant, lightweight responses
- **Center (21-50):** Standard mode -- balanced reasoning
- **Rotate right (51-80):** Deep Think -- extended chain-of-thought
- **Far right (81-100):** Marathon -- multi-step, exhaustive analysis
- **Press dial:** Reset to Auto

This maps to Wispy's thinking levels, letting you physically feel the tradeoff between speed and depth. Quick question? Dial left for instant answers. Complex architecture decision? Dial right for deep analysis.

### Actions Ring (MX Master 4)

The Actions Ring overlay provides context-aware agent switching:

- **In VS Code:** Coder agent activates. Ring shows code actions (fix, refactor, test).
- **In Chrome:** Researcher agent activates. Ring shows research actions (summarize, analyze, fact-check).
- **In Terminal:** DevOps agent activates. Ring shows deploy actions (build, test, ship).
- **In Figma:** Analyst agent activates. Ring shows design actions (review, export, optimize).

The AI adapts to what you're doing -- automatically.

### Haptic Feedback (MX Master 4)

Physical sensations that communicate agent state without looking at the screen:

| Event | Waveform | Sensation |
|---|---|---|
| Task completed | `happy_alert` | Quick celebratory pulse |
| Action approved | `completed` | Firm confirmation tap |
| Error / rejection | `angry_alert` | Sharp attention-grab |
| Agent switched | `sharp_state_change` | Clean transition click |
| Thinking started | `wave` | Smooth ongoing rhythm |
| Payment made | `knock` | Double-tap confirmation |

## Hardware Integration

The MX Creative Console is a two-part system:

- **Keypad** (USB-C wired): 9 LCD buttons with individual mini-displays that show custom icons per action, plus 2 paging buttons for up to 15 pages of shortcuts. Each button screen updates in real-time to reflect agent state, token counts, or task progress.
- **Dial** (wireless, AAA batteries, 18-month life): Large smooth precision dial for continuous adjustment, plus additional side buttons and a roller. Maps naturally to thinking depth control.

The MX Master 4 adds:

- **Actions Ring**: Thumb-activated on-screen radial overlay that provides context-aware shortcuts. Haptic taps as you hover each option. Auto-switches agent based on the active application (VS Code = Coder, Chrome = Researcher, Terminal = DevOps).
- **Haptic motor**: Physical vibration feedback for agent state changes. You feel when a task completes, when approval is needed, or when a payment goes through -- without looking at the screen.

## Architecture

```
[MX Creative Console]                [MX Master 4]
     |  Keypad: 9 LCD buttons             |  Actions Ring (thumb overlay)
     |  + 2 paging buttons (15 pages)     |  Haptic motor
     |  Dial: wireless precision dial     |  Context-aware switching
     v                                     v
[Logi Options+ / Plugin Service]
     |
     |  Actions SDK (Node.js / TypeScript)
     |  CommandAction (buttons) + AdjustmentAction (dial)
     v
[Wispy Console Plugin]
     |
     |  REST API (localhost:3120)
     v
[Wispy AI Agent Platform]
     |
     |--- Gemini 2.5 Pro (reasoning)
     |--- 32+ tools (file, bash, web, git)
     |--- Marathon mode (multi-step tasks)
     |--- Wallet (USDC micro-payments)
     |--- Memory (cross-session context)
     |--- Channels (CLI, Telegram, REST)
```

## Why This Matters

### For Developers
Stop context-switching between your code editor and a chat window. The MX Creative Console sits next to your keyboard. Press Code. Speak your intent. Watch it build. Press Approve. Ship.

### For Non-Technical Users
AI agents are intimidating when they're all text. A physical button that says "Research" is not. Press it. Ask your question. Get your answer. The hardware makes AI approachable.

### For Logitech
This is the first AI plugin for the Logitech Marketplace. It positions the MX Creative Console not just as a creative tool but as the universal AI control surface. Every knowledge worker will want one.

## Tech Stack

| Component | Technology |
|---|---|
| Plugin | TypeScript, Logi Actions SDK (Node.js) |
| AI Engine | [Wispy](https://npmjs.com/package/wispy-ai) v1.4.1 |
| AI Model | Google Gemini 2.5 Pro |
| Communication | REST API (localhost, zero-config) |
| Wallet | USDC on Base/SKALE (x402 protocol) |
| Voice | Edge TTS + Whisper transcription |

## Business Model & Viability

**Distribution:** Logitech Marketplace (free tier + pro features)

**Free tier:** Core buttons (Code, Research, Approve, Reject, Status)

**Pro tier ($4.99/month):**
- Voice commands
- Custom button mappings
- Multi-agent orchestration
- Marathon (multi-day task) controls
- Wallet / payment dashboard
- Team shared configurations

**Market size:** 40M+ Logitech MX users. 73% of developers use AI tools daily (Stack Overflow 2025). The intersection is massive and completely unserved.

**Maintenance:** Wispy is actively maintained on npm (v1.4.1, MIT license). Plugin updates via Logi Marketplace auto-update. Zero ongoing infrastructure cost -- everything runs locally.

## Team

**Brian Mwai** -- Full-stack developer, AI agent researcher. Creator of Wispy. Based in Nairobi, Kenya.

**Joy Lang'at** -- Software engineer. Wispy contributor. Based in Nairobi, Kenya.

We are [Hausor Labs](https://hausorlabs.tech), building autonomous AI tools for developers.

## Links

- **Wispy on npm:** [npmjs.com/package/wispy-ai](https://npmjs.com/package/wispy-ai)
- **Source code:** [github.com/hausorlabs/wispy](https://github.com/hausorlabs/wispy)
- **Plugin source:** [github.com/hausorlabs/wispy-console](https://github.com/hausorlabs/wispy-console) (will be published)
- **Demo video:** (1-minute pitch video link)
