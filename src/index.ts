/**
 * Wispy Console — AI Agent Control Center for Logitech MX Creative Console
 *
 * Plugin entry point. Registers all actions with the Logi Plugin Service.
 *
 * Architecture:
 *   [MX Creative Console] <-- Actions SDK --> [Wispy Console Plugin]
 *          |                                          |
 *          |  Button press / Dial turn                | REST API calls
 *          v                                          v
 *   [Logi Options+]                           [Wispy Gateway :3120]
 *                                                     |
 *                                              [Gemini AI Engine]
 *                                                     |
 *                                              [Tools, Memory, Wallet]
 *
 * Button Layout (MX Creative Console 3x3 grid):
 *   ┌──────────┬──────────┬──────────┐
 *   │  🧠 Code │ 🔍 Rsrch │ 📤 Deploy│
 *   ├──────────┼──────────┼──────────┤
 *   │  ✅ Yes  │ ❌ No    │ 🎤 Voice │
 *   ├──────────┼──────────┼──────────┤
 *   │  📊 Info │ ⚡ Quick │ 🔄 Dial  │
 *   └──────────┴──────────┴──────────┘
 *
 * Dial: Thinking Depth (rotate to adjust, press to reset)
 * Actions Ring: Context-aware agent switching per active app
 *
 * Haptic Feedback (MX Master 4):
 *   - happy_alert:       Task completed
 *   - completed:         Action approved
 *   - angry_alert:       Error / action rejected
 *   - sharp_state_change: Agent switched
 *   - subtle_collision:   Dial tick
 */

// In production with @logitech/plugin-sdk:
// import { PluginSDK } from '@logitech/plugin-sdk';

import { WispyClient } from "./wispy-client.js";
import { CodeAction } from "./actions/code.js";
import { ResearchAction } from "./actions/research.js";
import { ApproveAction } from "./actions/approve.js";
import { RejectAction } from "./actions/reject.js";
import { VoiceAction } from "./actions/voice.js";
import { DeployAction } from "./actions/deploy.js";
import { ThinkingDialAction } from "./actions/thinking-dial.js";
import { StatusAction } from "./actions/status.js";
import { QuickAction } from "./actions/quick.js";

async function main() {
  const client = new WispyClient("http://localhost:3120");

  // Instantiate all actions
  const actions = [
    new CodeAction(client),
    new ResearchAction(client),
    new DeployAction(client),
    new ApproveAction(client),
    new RejectAction(client),
    new VoiceAction(client),
    new StatusAction(client),
    new QuickAction(client),
    new ThinkingDialAction(client),
  ];

  // In production:
  // const pluginSDK = new PluginSDK();
  // actions.forEach(action => pluginSDK.registerAction(action));
  // await pluginSDK.connect();

  console.log("╔══════════════════════════════════════════════╗");
  console.log("║  👻 Wispy Console — AI Agent Control Center  ║");
  console.log("╠══════════════════════════════════════════════╣");
  console.log("║  9 actions registered:                       ║");
  for (const action of actions) {
    const icon = getIcon(action.name);
    console.log(`║  ${icon} ${action.displayName.padEnd(20)} ${action.name.padEnd(21)}║`);
  }
  console.log("╠══════════════════════════════════════════════╣");
  console.log("║  Connecting to Wispy at localhost:3120...     ║");
  console.log("╚══════════════════════════════════════════════╝");

  // Health check
  try {
    const status = await client.getStatus();
    console.log(`\n✓ Wispy is ${status.status} (agent: ${status.agent})`);
  } catch {
    console.log("\n⚠ Wispy gateway not running. Start with: wispy gateway");
  }
}

function getIcon(name: string): string {
  const icons: Record<string, string> = {
    wispy_code: "🧠",
    wispy_research: "🔍",
    wispy_deploy: "📤",
    wispy_approve: "✅",
    wispy_reject: "❌",
    wispy_voice: "🎤",
    wispy_status: "📊",
    wispy_quick: "⚡",
    wispy_thinking_dial: "🔄",
  };
  return icons[name] ?? "•";
}

main().catch(console.error);
