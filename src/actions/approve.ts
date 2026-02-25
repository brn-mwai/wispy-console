/**
 * Approve Action — One-tap approval for autonomous agent actions.
 * When Wispy is in Standard mode, it waits for human approval before
 * writing files, running code, or making payments. This button says "yes".
 */
import type { WispyClient } from "../wispy-client.js";

export class ApproveAction {
  readonly name = "wispy_approve";
  readonly displayName = "Approve";
  readonly description = "Approve Wispy's pending action — file write, code execution, or payment";
  readonly groupName = "Wispy AI";

  private client: WispyClient;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    console.log("[Wispy Console] Approve pressed");
    const res = await this.client.approve();
    if (res.ok) {
      console.log("[Wispy Console] Action approved");
      // Trigger haptic: completed
    } else {
      console.log("[Wispy Console] Nothing to approve");
      // Trigger haptic: subtle_collision
    }
  }
}
