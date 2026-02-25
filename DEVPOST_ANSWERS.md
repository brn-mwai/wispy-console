# Devpost Submission -- Copy-Paste Answers

**Hackathon:** DevStudio 2026 by Logitech
**Submission URL:** https://devstudiologitech2026.devpost.com/submissions/new
**Deadline:** 25 Feb 2026, 5:00 PM GMT+1 (7:00 PM GMT+3)

---

## Project Name

Wispy Console

---

## Tagline / Short Description (one line)

AI agent control center for MX Creative Console -- one button to code, one to research, a dial to think.

---

## Category / Challenge Track

MX Creative Console + MX Master4 & Actions Ring: Innovate with the Actions SDK

---

## Video URL

(Upload to YouTube first, then paste link here)

Title: "Wispy Console -- AI Agent Control Center for Logitech MX Creative Console"

---

## Project Description / What it does

Wispy Console is an Actions SDK plugin that turns the Logitech MX Creative Console into a physical command center for AI agents.

Today, AI agents can write code, research the web, deploy projects, and make autonomous decisions. But we control them by typing into a chat box. That's the wrong interface for a tool this powerful.

The MX Creative Console is a two-part system: a USB-C wired keypad with 9 LCD buttons (each with its own mini-display) and 2 paging buttons supporting up to 15 pages, plus a wireless precision dial. Wispy Console maps this hardware to AI agent commands:

**The 9 LCD Buttons (Keypad):**
Each button has an individual screen that shows a custom icon and real-time status. Press a button and the LCD updates to reflect the active state.
- Code -- Activate the Coder agent to write, debug, and review code
- Research -- Activate the Researcher agent for web search, analysis, and fact-checking
- Deploy -- One-tap project deployment via a multi-step pipeline
- Approve -- Accept the agent's pending action (file write, payment, or command)
- Reject -- Cancel the current action and try a different approach
- Voice -- Push-to-talk voice commands. Hold to speak, release to send.
- Status -- Cycle through agent state, token usage, wallet balance, and task progress
- Quick Action -- Context-sensitive shortcut that adapts to your active application

**The Dial -- Thinking Depth (wireless unit):**
The large precision dial maps to AI reasoning intensity:
- Rotate left: Flash mode (instant, lightweight responses)
- Center: Standard mode (balanced reasoning)
- Rotate right: Deep Think (extended chain-of-thought analysis)
- Far right: Marathon mode (multi-step, exhaustive reasoning)
- Press to reset to Auto

**Actions Ring (MX Master 4):**
The thumb-activated on-screen radial overlay provides context-aware agent switching. In VS Code, it activates the Coder. In Chrome, the Researcher. In Terminal, DevOps. Haptic taps confirm each selection as you hover. The AI adapts to what you're doing.

**Haptic Feedback (MX Master 4):**
Physical vibrations communicate agent state without looking at the screen. A pulse when a task completes. A buzz when the agent needs approval. A tap when a payment goes through.

The plugin connects to Wispy (wispy-ai on npm), an autonomous AI agent platform powered by Google Gemini 2.5 Pro. Wispy handles the intelligence -- 32+ tools, web search, file operations, code execution, crypto wallet, and multi-day task automation. The MX Creative Console handles the control.

---

## How we built it

Wispy Console is built with TypeScript using the Logitech Actions SDK for Node.js. It communicates with the Wispy AI agent platform via a local REST API.

Architecture:
- Plugin layer: TypeScript Actions SDK plugin. 8 CommandActions (one per LCD button on the keypad) + 1 AdjustmentAction (for the wireless precision dial).
- Hardware: MX Creative Console keypad (9 LCD buttons with per-button displays, 2 paging buttons, USB-C wired) + dial unit (wireless, precision rotary). MX Master 4 (Actions Ring radial overlay, haptic motor).
- Communication: REST API calls to Wispy's gateway server (localhost:3120)
- AI engine: Wispy v1.4.1 (Google Gemini 2.5 Pro, 32+ tools, autonomous execution)
- Haptics: MX Master 4 waveform mapping for agent state feedback

The plugin registers 9 actions with the Logi Plugin Service via @logitech/plugin-sdk. Each keypad button press triggers a REST call to Wispy's gateway, which routes the command to the appropriate AI agent. The per-button LCD screens show custom icons that update in real-time (agent status, thinking depth gauge, task progress). The wireless dial's AdjustmentAction maps to Wispy's thinking depth configuration, letting users physically control reasoning intensity by rotating the dial.

We built Wispy as an open-source npm package (wispy-ai) with a modular architecture specifically designed for multi-channel integration. Adding the MX Creative Console as a hardware channel was a natural extension of Wispy's existing CLI, Telegram, and REST channel system.

---

## Challenges we ran into

- The Node.js Actions SDK is currently in alpha (Windows-only, limited API surface), so we designed the architecture to be ready for the full SDK while working within current constraints
- Mapping abstract AI concepts (thinking depth, agent switching) to physical hardware interactions required careful UX thinking -- we wanted each control to feel intuitive, not arbitrary
- Balancing the 9-button layout to cover the most common AI workflows without overwhelming new users

---

## Accomplishments that we're proud of

- Wispy is a real, working product on npm (v1.4.1) with 32+ tools, multi-agent orchestration, and blockchain wallet integration
- The thinking depth dial is a genuinely new interaction paradigm -- we haven't seen anyone map AI reasoning intensity to a physical rotary control before
- The haptic feedback layer means you can control an AI agent without looking at a screen -- a first for accessibility in AI tooling

---

## What we learned

- Logitech's Actions SDK for Node.js is well-designed for TypeScript developers. The CommandAction/AdjustmentAction pattern maps cleanly to AI agent commands.
- Physical hardware controls add a dimension to AI interaction that software alone can't replicate. The tactile feedback from a dial turn creates a connection between the user and the AI's reasoning process.
- The MX Creative Console's per-button displays open the door for rich AI status visualization that doesn't compete for screen real estate.

---

## What's next for Wispy Console

- Full Actions SDK integration with button display rendering (agent status icons, thinking depth gauge)
- Multi-model support (bring your own AI: Gemini, Claude, GPT, local models)
- Team mode: shared MX Creative Console profiles where a team's agents coordinate
- Marketplace distribution as both free and pro tiers
- MX Ink integration for spatial AI interactions in VR (drawing commands in 3D space)

---

## Built With (tags)

typescript, nodejs, logitech-actions-sdk, google-gemini, ai-agents, wispy

---

## Links

- GitHub: https://github.com/hausorlabs/wispy
- npm: https://www.npmjs.com/package/wispy-ai
- Website: https://hausorlabs.tech
- Try it: npm install -g wispy-ai

---

## Team Members (Devpost usernames)

- Brian Mwai (add Devpost username)
- Joy Lang'at (add Devpost username)

---

# CHECKLIST BEFORE SUBMITTING

- [ ] Create/login to Devpost account
- [ ] Register for the hackathon at devstudiologitech2026.devpost.com
- [ ] Record 1-minute video (see VIDEO_SCRIPT.md)
- [ ] Upload video to YouTube (public or unlisted)
- [ ] Create project on Devpost
- [ ] Fill in all fields above
- [ ] Paste YouTube link
- [ ] Double-check: Category = "MX Creative Console + MX Master4"
- [ ] Submit before 25 Feb 2026, 5:00 PM GMT+1
