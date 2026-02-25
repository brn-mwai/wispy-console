/**
 * Status Action — Display current agent status on the button screen.
 * Press to cycle through status views:
 *   1. Agent state (thinking/idle/working)
 *   2. Token usage
 *   3. Wallet balance
 *   4. Active task / marathon progress
 */
import type { WispyClient } from "../wispy-client.js";

export class StatusAction {
  readonly name = "wispy_status";
  readonly displayName = "Status";
  readonly description = "View agent status — press to cycle through status pages";
  readonly groupName = "Wispy AI";

  private client: WispyClient;
  private currentPage = 0;
  private pages = ["agent", "tokens", "wallet", "task"] as const;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    this.currentPage = (this.currentPage + 1) % this.pages.length;
    const page = this.pages[this.currentPage];

    const status = await this.client.getStatus();
    console.log(`[Wispy Console] Status page: ${page}`, status);

    // In production: render status info on the button's 80x80 display
    // Page 0: Agent icon + state (green=idle, yellow=thinking, blue=working)
    // Page 1: Token count + cost estimate
    // Page 2: USDC balance + daily spend
    // Page 3: Current task name + progress %
  }
}
