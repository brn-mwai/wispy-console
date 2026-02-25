/**
 * Reject Action — One-tap rejection for autonomous agent actions.
 * Tells Wispy to cancel the current pending action and try a different approach.
 */
import type { WispyClient } from "../wispy-client.js";

export class RejectAction {
  readonly name = "wispy_reject";
  readonly displayName = "Reject";
  readonly description = "Reject Wispy's pending action — cancel and try a different approach";
  readonly groupName = "Wispy AI";

  private client: WispyClient;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    console.log("[Wispy Console] Reject pressed");
    const res = await this.client.reject();
    if (res.ok) {
      console.log("[Wispy Console] Action rejected");
      // Trigger haptic: angry_alert
    }
  }
}
