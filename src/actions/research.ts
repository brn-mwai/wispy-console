/**
 * Research Action — Button press triggers Wispy's Researcher agent.
 * Launches web search, data analysis, or fact-checking mode.
 */
import type { WispyClient } from "../wispy-client.js";

export class ResearchAction {
  readonly name = "wispy_research";
  readonly displayName = "Research";
  readonly description = "Start Wispy Researcher agent — web search, analysis, fact-checking";
  readonly groupName = "Wispy AI";

  private client: WispyClient;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    console.log("[Wispy Console] Research button pressed");
    await this.client.switchAgent("researcher");
    await this.client.send("/research — Ready to research. What do you need?");
  }
}
