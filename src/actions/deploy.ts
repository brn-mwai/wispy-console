/**
 * Deploy Action — One-tap project deployment.
 * Triggers Wispy to build, test, and deploy the current project.
 * Uses Marathon mode for multi-step deployment pipeline.
 */
import type { WispyClient } from "../wispy-client.js";

export class DeployAction {
  readonly name = "wispy_deploy";
  readonly displayName = "Deploy";
  readonly description = "Build, test, and deploy the current project via Wispy Marathon";
  readonly groupName = "Wispy AI";

  private client: WispyClient;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    console.log("[Wispy Console] Deploy initiated");
    await this.client.startMarathon(
      "Build the project, run tests, and deploy to production. Report status at each step."
    );
    // Trigger haptic: happy_alert
  }
}
