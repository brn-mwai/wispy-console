/**
 * Quick Action — Context-sensitive shortcut.
 * Behavior changes based on the active application:
 *   - VS Code: "Fix this error" (sends current file context)
 *   - Browser: "Summarize this page" (sends current URL)
 *   - Terminal: "Explain this output" (sends last command output)
 *   - Default: "What should I do next?" (general assistant)
 *
 * Uses the Actions Ring app-awareness to detect active application.
 */
import type { WispyClient } from "../wispy-client.js";

export class QuickAction {
  readonly name = "wispy_quick";
  readonly displayName = "Quick Action";
  readonly description = "Context-sensitive AI shortcut — adapts to your active application";
  readonly groupName = "Wispy AI";

  private client: WispyClient;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    // In production: detect active application via Actions Ring API
    // For now, send a general-purpose quick command
    console.log("[Wispy Console] Quick action triggered");
    await this.client.send("/quick — Analyze my current context and suggest the best next action.");
  }
}
