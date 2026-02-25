/**
 * Thinking Depth Dial — Adjustment action for the MX Creative Console dial.
 * Rotate clockwise to increase thinking depth (deeper, slower reasoning).
 * Rotate counter-clockwise for faster, lighter responses.
 * Press to reset to auto mode.
 *
 * Maps to Wispy's thinking levels:
 *   0-20:   Flash (instant, light reasoning)
 *   21-50:  Standard (balanced)
 *   51-80:  Deep (extended thinking, chain-of-thought)
 *   81-100: Marathon (multi-step, exhaustive analysis)
 */
import type { WispyClient } from "../wispy-client.js";

export class ThinkingDialAction {
  readonly name = "wispy_thinking_dial";
  readonly displayName = "Thinking Depth";
  readonly description = "Turn the dial to adjust AI reasoning depth — faster or deeper";
  readonly groupName = "Wispy AI";
  readonly hasReset = true;

  private client: WispyClient;
  private currentDepth = 50; // Default: standard mode

  constructor(client: WispyClient) {
    this.client = client;
  }

  async execute(event: { tick: number }): Promise<void> {
    // Each tick adjusts depth by 5 points
    this.currentDepth = Math.max(0, Math.min(100, this.currentDepth + event.tick * 5));

    const label = this.getDepthLabel();
    console.log(`[Wispy Console] Thinking depth: ${this.currentDepth} (${label})`);

    await this.client.setThinkingDepth(this.currentDepth);

    // Update dial display with current depth level
    // In production: render depth gauge on dial screen
  }

  async onReset(): Promise<void> {
    this.currentDepth = 50;
    console.log("[Wispy Console] Thinking depth reset to Auto");
    await this.client.setThinkingDepth(this.currentDepth);
  }

  private getDepthLabel(): string {
    if (this.currentDepth <= 20) return "Flash";
    if (this.currentDepth <= 50) return "Standard";
    if (this.currentDepth <= 80) return "Deep Think";
    return "Marathon";
  }
}
