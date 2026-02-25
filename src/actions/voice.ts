/**
 * Voice Action — Push-to-talk voice command input.
 * Hold the button to speak, release to send the voice command to Wispy.
 * Wispy transcribes and executes the spoken instruction.
 */
import type { WispyClient } from "../wispy-client.js";

export class VoiceAction {
  readonly name = "wispy_voice";
  readonly displayName = "Voice";
  readonly description = "Push-to-talk — hold to speak a command, release to send to Wispy";
  readonly groupName = "Wispy AI";

  private client: WispyClient;
  private isRecording = false;

  constructor(client: WispyClient) {
    this.client = client;
  }

  async onKeyDown(): Promise<void> {
    if (!this.isRecording) {
      console.log("[Wispy Console] Voice recording started");
      this.isRecording = true;
      await this.client.startVoice();
      // Button LED: solid red (recording)
    } else {
      console.log("[Wispy Console] Voice recording stopped, sending...");
      this.isRecording = false;
      await this.client.stopVoice();
      // Button LED: back to default
      // Trigger haptic: sharp_state_change
    }
  }
}
