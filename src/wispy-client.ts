/**
 * Wispy Gateway Client
 * Communicates with the Wispy AI agent running locally via REST API.
 */

export interface WispyStatus {
  agent: string;
  status: "idle" | "thinking" | "working" | "blocked";
  message?: string;
  task?: string;
  tokenCount?: number;
}

export interface WispyResponse {
  ok: boolean;
  message?: string;
  data?: unknown;
}

const DEFAULT_BASE_URL = "http://localhost:3120";

export class WispyClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? DEFAULT_BASE_URL;
  }

  /** Send a chat message / command to Wispy */
  async send(message: string): Promise<WispyResponse> {
    return this.post("/api/chat", { message });
  }

  /** Get current agent status */
  async getStatus(): Promise<WispyStatus> {
    const res = await this.get("/api/status");
    return res as WispyStatus;
  }

  /** Approve the agent's pending action */
  async approve(): Promise<WispyResponse> {
    return this.post("/api/action/approve", {});
  }

  /** Reject the agent's pending action */
  async reject(): Promise<WispyResponse> {
    return this.post("/api/action/reject", {});
  }

  /** Switch active agent role */
  async switchAgent(agent: string): Promise<WispyResponse> {
    return this.post("/api/agent/switch", { agent });
  }

  /** Adjust thinking depth (0-100) */
  async setThinkingDepth(depth: number): Promise<WispyResponse> {
    return this.post("/api/config/thinking-depth", { depth: Math.max(0, Math.min(100, depth)) });
  }

  /** Start a marathon (multi-step task) */
  async startMarathon(goal: string): Promise<WispyResponse> {
    return this.post("/api/marathon/start", { goal });
  }

  /** Get wallet balance */
  async getWalletBalance(): Promise<WispyResponse> {
    return this.get("/api/wallet/balance") as Promise<WispyResponse>;
  }

  /** Trigger voice input mode */
  async startVoice(): Promise<WispyResponse> {
    return this.post("/api/voice/start", {});
  }

  /** Stop voice input */
  async stopVoice(): Promise<WispyResponse> {
    return this.post("/api/voice/stop", {});
  }

  private async get(path: string): Promise<unknown> {
    try {
      const res = await fetch(`${this.baseUrl}${path}`);
      return await res.json();
    } catch {
      return { ok: false, message: "Wispy not reachable" };
    }
  }

  private async post(path: string, body: unknown): Promise<WispyResponse> {
    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      return await res.json();
    } catch {
      return { ok: false, message: "Wispy not reachable" };
    }
  }
}
