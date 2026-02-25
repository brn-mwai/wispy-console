/**
 * Code Action — Button press triggers Wispy's Coder agent.
 * Sends the current clipboard or a preset prompt to start coding.
 */
import type { WispyClient } from "../wispy-client.js";

// Note: In production, extends CommandAction from @logitech/plugin-sdk
// For the hackathon pitch, we define the interface to show architecture

export class CodeAction {
  readonly name = "wispy_code";
  readonly displayName = "Code";
  readonly description = "Start Wispy Coder agent — writes, debugs, and reviews code";
  readonly groupName = "Wispy AI";

  private client: WispyClient;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    console.log("[Wispy Console] Code button pressed");
    await this.client.switchAgent("coder");
    await this.client.send("/code — Ready for coding. What should I build?");
  }
}
