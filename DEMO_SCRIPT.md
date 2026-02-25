# Wispy Console -- Production Demo Script

**Total Runtime:** 55-60 seconds
**Resolution:** 1920x1080 (1080p minimum, 4K preferred)
**Frame Rate:** 60fps
**Audio:** Voiceover recorded separately, mixed in post
**Music:** Subtle ambient electronic, royalty-free
**Style:** Dark theme, sky blue (#00DDFF) accents, cinematic

---

## Pre-Recording Checklist

- [ ] Open `demo.html` in Chrome (fullscreen, F11)
- [ ] Verify all nanobanana images exist in `images/` folder (Images 1-12)
- [ ] Test keyboard shortcuts: `1`-`9` for buttons, `Arrow Left/Right` for dial, `R` for auto-demo, `E` for end card, `Space` to dismiss intro overlay
- [ ] Run through `R` (auto-demo) once to verify all terminal output renders correctly
- [ ] Audio: USB microphone ready, quiet environment, pop filter recommended
- [ ] Screen recorder: OBS or similar, 1080p60 minimum, CRF 18 or higher bitrate
- [ ] Browser zoom: 100%, no extensions visible, bookmarks bar hidden
- [ ] Disable system notifications (Windows Focus Assist / Do Not Disturb)
- [ ] Have nanobanana images open in a separate image viewer for quick reference during editing
- [ ] SVG diagrams from `assets/` folder available: `architecture.svg`, `thinking-dial.svg`, `actions-ring.svg`, `data-flow.svg`
- [ ] Prepare end card: either use demo.html built-in (`E` key) or a custom Figma/Canva export
- [ ] Color reference: Primary accent `#00DDFF`, Magenta `#FF00E9`, Orange `#FF7000`, Yellow `#FFB800`, Background `#0a0a0f`

---

## Scene 1: The Problem (0:00 -- 0:10)

### Narration

> "AI agents can write code, research anything, and deploy projects. But the way we control them? We're still just typing. Meanwhile, this sits on your desk doing nothing."

**Word count:** 30 | **Pace:** Measured, slightly frustrated tone on "just typing"

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:00 - 0:03 | 3s | Nanobanana Image 5 (Split Reality) -- show LEFT half only: frustrated developer typing, MX Console dark/off, harsh white screen light |
| 0:03 - 0:06 | 3s | Screen recording: terminal with AI approval prompts scrolling rapidly. Quick flash of text overlays quoting developer complaints (0.5s each, 6 quotes) |
| 0:06 - 0:08 | 2s | Text card overlay on dark background: "66% spend more time correcting AI code than they save" (Stack Overflow 2025). White text, Inter font, subtle fade-in |
| 0:08 - 0:10 | 2s | Nanobanana Image 1 (Hero Shot) -- the MX Creative Console sitting idle on a desk, all LCD buttons dark. Horizontal wipe transition into Scene 2 |

### Visual Direction

- Open with frustration. The first 3 seconds should feel uncomfortable -- a developer drowning in text prompts.
- At 0:03, cut hard (no transition) to a screen recording of a terminal scrolling approval prompts. Layer 2-3 text overlays in quick succession over the terminal: GitHub issue quotes from the Devpost story ("single largest flaw", "every 15 seconds", "utterly miserable"). Each quote stays for 0.5s. Use Inter Light 14px, white text with 60% opacity dark background pill.
- The stat card at 0:06 should land like a punch. Center-screen. White on dark. Let it sit for the full 2 seconds.
- Image 1 at 0:08 is the hook. The console is there, on the desk, but idle. The viewer should be thinking "why isn't it doing anything?"
- End with a left-to-right horizontal wipe revealing Scene 2. The wipe should feel like turning a page -- the solution arriving.

### Asset References

- **Images:** #5 Split Reality (left half crop), #1 Hero Shot
- **Animations:** None
- **demo.html:** Not used
- **Text overlays:** GitHub issue quotes (from DEVPOST_PROJECT_STORY.md inspiration section)
- **Stat source:** Stack Overflow Developer Survey 2025

---

## Scene 2: The Solution (0:10 -- 0:18)

### Narration

> "What if you could control your AI agent with a button press? Wispy Console turns your MX Creative Console into an AI command center."

**Word count:** 25 | **Pace:** Confident, forward-leaning. Emphasis on "button press" and "command center"

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:10 - 0:12 | 2s | Nanobanana Image 2 (Approve Moment) -- extreme close-up of finger pressing a glowing cyan checkmark button on the keypad. The LCD casts blue light onto the fingertip |
| 0:12 - 0:15 | 3s | Screen: demo.html -- press `Space` to dismiss intro overlay, then press `1` (Code button). Agent activates, terminal shows "Switched to Coder agent" |
| 0:15 - 0:18 | 3s | Quick montage (1s each): (a) Image 2 button glow detail, (b) terminal text appearing, (c) haptic feedback log in the right panel. Lower-third text appears |

### Visual Direction

- Image 2 is the hero moment. Dramatic, cinematic close-up. The glow from the LCD button should fill the bottom third of the frame.
- Smooth cross-dissolve (0.3s) from Image 2 into the screen recording at 0:12.
- In demo.html, the intro overlay needs to be dismissed first (press `Space`), then press `1`. Time these so the terminal output appears right as the narration says "command center."
- Lower-third bar appears at 0:15 and persists through Scene 6:
  - Left-aligned: "WISPY CONSOLE" in Inter SemiBold 13px, white
  - Right-aligned: "hausorlabs.tech" in Inter Regular 11px, `#8888aa`
  - Thin 1px cyan line separator above text
  - Background: `#0a0a0f` at 80% opacity, 40px tall, full width
- The montage at 0:15-0:18 should feel rhythmic: cut-cut-cut on the beat of the music.

### Asset References

- **Images:** #2 Approve Moment
- **Animations:** None (Scene 1 Button Press animation is optional as overlay if available)
- **demo.html:** `Space` (dismiss intro), then key `1` (Code button)

---

## Scene 3: Demo -- Buttons in Action (0:18 -- 0:30)

### Narration

> "Press Code -- the agent writes. Press Research -- it searches. Press Approve -- it ships. Nine buttons. Nine superpowers."

**Word count:** 22 | **Pace:** Rhythmic, one beat per action. Pause slightly between each pair ("Press Code" [beat] "the agent writes"). The final line "Nine buttons. Nine superpowers." should land with weight.

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:18 - 0:21 | 3s | demo.html: Press `1` (Code). Left panel button glows green. Terminal shows: "Switched to Coder agent" then prompt "Build a REST API with auth and rate limiting" then code output |
| 0:21 - 0:24 | 3s | demo.html: Press `2` (Research). Button glows blue. Terminal shows: "Switched to Researcher agent" then search query and results |
| 0:24 - 0:27 | 3s | demo.html: Press `4` (Approve). Button glows green. Terminal shows: "Action approved" and success confirmation. Haptic log in right panel updates |
| 0:27 - 0:30 | 3s | Quick cuts (1s each): Press `3` (Deploy, orange glow), press `6` (Voice, purple glow), press `7` (Status, blue glow). Each shows the button press and one line of terminal output |

### Visual Direction

- Primary view: demo.html in fullscreen. The three-column layout (hardware panel, terminal, feedback panel) is already the right composition.
- For each button press (0:18-0:27), the camera framing should emphasize the left panel (keypad buttons) and center panel (terminal output). The right panel (haptic/wallet) is secondary context.
- At each button press, the corresponding button in the keypad grid should visibly glow. The demo.html handles this with the `.pressed` CSS class animation. Make sure the glow is visible in the recording.
- For the Code button (0:18-0:21): let the terminal output scroll organically. The code block with syntax highlighting is the money shot. Do not rush past it.
- For Research (0:21-0:24): the search results appearing should feel like instant intelligence.
- For Approve (0:24-0:27): the haptic log updating in the right panel ("happy_alert" or "completed" waveform) should be visible. This connects the approval to physical feedback.
- The quick cuts at 0:27-0:30 are rapid: 1 second per button, hard cuts, no transitions. This conveys speed and capability without dwelling on any one.
- Optional: between button sequences, insert a 0.5s cutaway to Nanobanana Image 10 (LCD Grid) showing the physical buttons. This grounds the demo in real hardware.

### Asset References

- **Images:** #10 LCD Grid (optional 0.5s cutaway between buttons)
- **Animations:** None
- **demo.html:** Keys `1`, `2`, `4`, `3`, `6`, `7` in sequence. Wait for terminal output between each press.

### demo.html Interaction Script

```
1. Ensure intro overlay is dismissed (press Space if needed)
2. Press 1 (Code) -- wait 2s for terminal output
3. Press 2 (Research) -- wait 2s for terminal output
4. Press 4 (Approve) -- wait 2s for success + haptic
5. Press 3 (Deploy) -- wait 1s, cut
6. Press 6 (Voice) -- wait 1s, cut
7. Press 7 (Status) -- wait 1s, cut
```

---

## Scene 4: Demo -- The Thinking Dial (0:30 -- 0:38)

### Narration

> "The dial controls how deeply the AI thinks. Quick answer? Turn left. Complex problem? Turn right. You feel the tradeoff between speed and depth."

**Word count:** 28 | **Pace:** Slower, more contemplative. This is the novel interaction. Let the words breathe. "You feel the tradeoff" should be almost whispered -- intimate.

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:30 - 0:32 | 2s | Nanobanana Image 3 (Thinking Dial) -- cinematic close-up of a hand on the brushed aluminum dial, LED ring glowing cyan-to-magenta gradient |
| 0:32 - 0:35 | 3s | demo.html: Use `Arrow Right` key repeatedly to sweep dial from current position toward 75 (Deep Think). The dial gauge in the left panel animates smoothly. Zone labels light up: FLASH > STANDARD > DEEP THINK |
| 0:35 - 0:38 | 3s | Terminal output changes: at low dial values, a one-liner response. At high dial values, a multi-line detailed analysis with numbered findings. Show the contrast |

### Visual Direction

- Image 3 opens the scene. The brushed aluminum texture of the dial should be almost tactile on screen. The LED gradient (cyan left to magenta right) is the visual metaphor for reasoning depth. Hold this shot for the full 2 seconds.
- Cross-dissolve (0.3s) to demo.html. Frame the left panel so the dial gauge is prominent.
- In demo.html, the dial section has a circular gauge with zone labels. As you press `Arrow Right` repeatedly, the dial value increases and the zone label changes. Press slowly enough that the viewer can read each zone: "FLASH" > "STANDARD" > "DEEP THINK".
- The terminal contrast at 0:35 is critical. If using the auto-demo (`R` key), the demo naturally shows the dial moving from 35 to 75 and the terminal output changing from short to detailed. For manual recording, first show a quick one-line response at low dial, then sweep right and show the 3-point detailed analysis.
- Optional 1s cutaway: Nanobanana Image 9 (Night Coding) at 0:37, showing Marathon mode (far-right dial, magenta LED ring, developer leaning back). This teases the autonomous capability without fully explaining it.

### Asset References

- **Images:** #3 Thinking Dial, #9 Night Coding (optional 1s cutaway)
- **Animations:** `assets/thinking-dial.svg` can be overlaid as reference graphic
- **demo.html:** `Arrow Right` key pressed 6-8 times to sweep dial from ~35 to ~75

### demo.html Interaction Script

```
1. Starting position: dial at ~35 (Standard)
2. Press Arrow Right slowly (every 0.4s), 8 times, reaching ~75 (Deep Think)
3. Terminal will show thinking depth change notification
4. If using auto-demo (R), the dial animation happens automatically at this point
```

---

## Scene 5: Demo -- Voice + Haptics (0:38 -- 0:46)

### Narration

> "Hold Voice to speak your command. When the agent finishes, your MX Master buzzes. You don't even need to look at the screen."

**Word count:** 23 | **Pace:** Natural, conversational. "You don't even need to look at the screen" is the punchline -- deliver it with a slight smile in the voice.

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:38 - 0:40 | 2s | Nanobanana Image 6 (Voice Command) -- developer speaking, magenta-glowing microphone button, sound wave ripple effect visible |
| 0:40 - 0:43 | 3s | demo.html: Press `6` (Voice). Terminal shows "Listening..." then voice waveform, then transcript: "Build me a REST API with auth." Agent processes. |
| 0:43 - 0:46 | 3s | Nanobanana Image 7 (Haptic Feedback) -- MX Master 4 with cyan glow ripples emanating outward. Overlay: concentric pulse rings animated at 0.5s intervals |

### Visual Direction

- Image 6: intimate, warm. The magenta glow from the microphone button on the developer's face creates a moment of connection between human and machine. The sound wave ripple effect in the nanobanana image should feel alive.
- Screen recording (0:40-0:43): When Voice is pressed in demo.html, the terminal shows "Listening..." with a pulsing indicator, then a voice transcription appears. The demo simulates this with the `pressKey('voice')` function which runs through listening > transcript > agent response.
- Image 7 (0:43-0:46): The haptic moment. The MX Master 4 mouse with concentric cyan light rings pulsing outward. In post-production, add a semi-transparent animated overlay of expanding circles (2-3 rings, radiating from the mouse center, fading as they expand). Time the rings to pulse at 0.5-second intervals for 3 total pulses during this shot.
- The haptic visual is abstract but powerful. The viewer should understand: "the mouse tells you the agent is done, without you needing to see the screen." This is the accessibility story condensed into one image.

### Asset References

- **Images:** #6 Voice Command, #7 Haptic Feedback
- **Animations:** Create a simple concentric-ring pulse overlay in After Effects or similar. Alternatively, use `assets/data-flow.svg` patterns as inspiration. If an `animations/` directory contains a haptic pulse animation, use that.
- **demo.html:** Key `6` (Voice)

### demo.html Interaction Script

```
1. Press 6 (Voice)
2. Terminal shows: "Listening..." -> voice waveform -> "Transcript: Build me a REST API with auth"
3. Agent processes and responds
4. Haptic feedback log updates in right panel: "happy_alert" waveform triggered
5. Cut to Image 7 before terminal output completes (the point is the haptic, not the text)
```

---

## Scene 6: The Vision (0:46 -- 0:55)

### Narration

> "Wispy Console. The first AI plugin for Logitech. Because the future of AI isn't typing. It's touching."

**Word count:** 19 | **Pace:** Slow, cinematic. Pause after "Wispy Console." Pause after "for Logitech." The final line is the tagline -- deliver it with quiet conviction. "It's touching" should hang in the air.

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:46 - 0:49 | 3s | Nanobanana Image 12 (Developer in Flow) -- wide environmental shot, developer at standing desk at dusk, both devices active, sunset through floor-to-ceiling windows. Slow 5% zoom in over 3s |
| 0:49 - 0:52 | 3s | Quick montage (1s each): (a) Nanobanana Image 8 (Actions Ring) -- thumb on MX Master 4 with radial overlay, (b) `assets/architecture.svg` diagram card with dark background, (c) Text card: "40M+ MX Users. 0 AI Plugins." in Inter Bold on dark background |
| 0:52 - 0:55 | 3s | Slow zoom into Nanobanana Image 11 (Dual Device Hero) -- console keypad, dial unit, and MX Master 4 on seamless dark gradient, cyan light particles flowing between devices. Hold as tagline lands |

### Visual Direction

- Image 12 is the aspirational lifestyle shot. This is the "what your life looks like when you use this" moment. The warm sunset light mixed with cool screen glow creates the teal-and-orange cinematic grade. Apply a slow push-in (Ken Burns effect) -- start at 100% and end at 105% over 3 seconds. This subtle motion keeps the shot alive.
- The montage at 0:49 is fast and impactful:
  - (a) Image 8: The Actions Ring radial overlay is visually distinctive -- a glowing circular menu with 5 options. 1 second.
  - (b) Architecture diagram: Use `assets/architecture.svg` placed on a dark card with rounded corners and a thin cyan border. The diagram shows Hardware > SDK > Plugin > Adapter > Multiple Agents. 1 second. This is a credibility moment: the architecture is real.
  - (c) Stat card: "40M+ MX Users. 0 AI Plugins." in Inter Bold 32px, white on `#0a0a0f`. Cyan accent on the "0". 1 second. This is the market opportunity -- let it land.
- Image 11 is the final product hero. The two devices with glowing cyan particles flowing between them. This image should resolve visually and emotionally: the hardware and the AI, connected. Hold steady (no zoom) as the tagline delivers: "It's touching."

### Asset References

- **Images:** #12 Developer Flow, #8 Actions Ring, #11 Dual Device Hero
- **Animations:** None required. Ken Burns on Image 12 only.
- **SVG:** `assets/architecture.svg` for the architecture card
- **demo.html:** Not used

### Text Overlay Specs

**Stat card (0:51 - 0:52):**
- Background: `#0a0a0f` solid
- Text line 1: "40M+ MX Users." in Inter Bold 32px, `#e8e8f0`
- Text line 2: "0 AI Plugins." in Inter Bold 32px, `#00DDFF`
- Center-aligned, vertically centered
- Fade in 0.15s, hold 0.7s, fade out 0.15s

---

## Scene 7: End Card (0:55 -- 1:00)

### Narration

> "Wispy Console by Hausor Labs."

**Word count:** 5 | **Pace:** Calm, final. A signature line. Let the music resolve underneath.

### Timing

| Mark | Duration | Visual |
|------|----------|--------|
| 0:55 - 0:58 | 3s | End card fade-in (0.5s fade from black). Display centered end card with all elements below |
| 0:58 - 1:00 | 2s | Hold on end card. Music resolves to silence. No motion. Clean hold. |

### Visual Direction

Custom end card. Dark background `#0a0a0f`. All elements centered vertically and horizontally.

**End card layout (top to bottom):**

1. **Ghost emoji / Wispy logo** -- large, centered. If using the demo.html end card (press `E`), it renders the ghost emoji at ~48px. For a custom card, use a white/cyan Wispy ghost icon at 80x80px.
2. **"WISPY CONSOLE"** -- Inter Bold 36px, `#e8e8f0`, letter-spacing 2px. 16px below logo.
3. **"AI Agent Control Center"** -- Inter Regular 18px, `#e8e8f0`. 8px below title.
4. **"for Logitech MX Creative Console"** -- Inter Regular 13px, `#8888aa`. 4px below subtitle.
5. **Links line** -- 24px below subtitle. Inter Regular 12px, `#8888aa`. Content: "wispy-ai on npm  |  hausorlabs.tech". Use a `middot` separator.
6. **Team line** -- Inter Regular 12px, `#8888aa`. 8px below links. Content: "Brian Mwai & Joy Lang'at"
7. **Hackathon badge** -- Inter Regular 11px, `#555566`. 16px below team. Content: "DevStudio 2026"

**Option A: Use demo.html built-in end card.**
Press `E` to trigger `showEndCard()`. The demo.html end card has all of the above except the team line and hackathon badge. Acceptable for a quick recording.

**Option B: Custom end card (recommended for final submission).**
Create in Figma or similar at 1920x1080. Export as PNG. Drop into timeline at 0:55 with a 0.5s fade-in from the previous scene.

### Asset References

- **demo.html:** Press `E` for built-in end card (Option A)
- **Custom:** Figma/Canva export at 1920x1080 (Option B)

---

## Post-Production Notes

### Transitions

| Between | Transition | Duration |
|---------|-----------|----------|
| Scene 1 to Scene 2 | Horizontal wipe (left to right) | 0.5s |
| Scene 2 to Scene 3 | Cross-dissolve | 0.3s |
| Scene 3 to Scene 4 | Cross-dissolve | 0.3s |
| Scene 4 to Scene 5 | Cross-dissolve | 0.3s |
| Scene 5 to Scene 6 | Cross-dissolve | 0.3s |
| Scene 6 to Scene 7 | Fade to black, then fade in end card | 0.5s + 0.5s |
| Within any scene | Hard cut (no transition) | 0s |

**Rule of thumb:** Cross-dissolve between scenes. Hard cut within scenes (between button presses, between montage shots). The only exceptions are the Scene 1-to-2 wipe and the Scene 6-to-7 fade.

### Audio

**Music:**
- Style: Ambient electronic, minimal. Think Tycho or Kiasmos at low volume. No drums heavier than a soft kick. No vocals.
- Start: Fade in at 0:00, barely audible under the voiceover.
- Build: Gradually increase presence through Scenes 3-5 as the demo gets more dynamic.
- Swell: Brief swell at 0:46 (Scene 6 opening, the aspirational shot).
- Resolve: Music fades to a held chord or pad at 0:55, resolves to silence by 0:58.
- Level: Music should sit 12-15dB below voiceover at all times. Voiceover is always dominant.
- Suggested royalty-free sources: Artlist, Epidemic Sound, or YouTube Audio Library. Search terms: "ambient tech", "minimal electronic", "cinematic future".

**Sound effects:**
| Cue | Sound | When |
|-----|-------|------|
| Button press | Soft mechanical click (Cherry MX or membrane keyswitch) | Every button press in Scenes 2-5. Sync to the visual button glow. |
| Dial rotation | Subtle notched tick/ratchet sound | Scene 4, 0:32-0:35 as dial sweeps right. One tick per Arrow Right press. |
| Haptic pulse | Low "whoosh" or sub-bass pulse | Scene 5, 0:43-0:46 on each concentric ring expansion |
| Terminal output | Soft typewriter/teletype clicks (very quiet, mixed low) | Scenes 3-5 when code/text appears in terminal. Optional -- test if it adds or clutters. |
| Transition wipe | Subtle "swoosh" | Scene 1 to Scene 2 horizontal wipe only |
| End card | None | Let music resolve naturally |

**Sound effect levels:** Mix at 18-20dB below voiceover. They should be felt more than heard.

**Voiceover:**
- Tone: Clear, confident, measured. Not a sales pitch. More like a developer explaining something they built and believe in.
- Pace: Approximately 2.5-3 words per second. Not rushed. Not slow. Conversational with intention.
- Emphasis words (hit these slightly harder): "button press" (Scene 2), "nine superpowers" (Scene 3), "feel the tradeoff" (Scene 4), "don't even need to look" (Scene 5), "touching" (Scene 6).
- Recording: Record in one session. Do 3-4 full takes. Pick the best natural take rather than stitching together phrases.
- Post: Light compression (3:1 ratio, -18dB threshold), high-pass filter at 80Hz, de-ess if needed. No reverb.

### Color Grading

- **Base grade:** Cool teal-blue tint matching the dark UI theme (`#0a0a0f` background, `#00DDFF` accents).
- **Saturation:** Slightly desaturated overall (-10%), then selectively boost cyan/teal channel (+15%) and magenta channel (+10%) for brand color pop.
- **Contrast:** Medium-high. Lift blacks slightly to `#0a0a0f` (not true black) for a cinematic feel.
- **Nanobanana images:** These are already graded per their prompts (cinematic, teal-and-orange). Apply only a light color match to ensure consistency across all 12 images.
- **Screen recordings:** demo.html already uses the correct dark theme. No additional grading needed on screen captures -- apply grade only to the overall composite.
- **Consistency:** All 7 scenes should feel like they belong to the same visual world. The cyan accent (`#00DDFF`) should be the brightest color in every frame.

### Lower Thirds

**Brand bar (visible in Scenes 2 through 6):**
- Position: Bottom of frame, full width, 40px tall
- Background: `#0a0a0f` at 80% opacity
- Top border: 1px solid `#00DDFF` (thin cyan line)
- Left text: "WISPY CONSOLE" in Inter SemiBold 13px, `#e8e8f0`, 24px from left edge
- Right text: "hausorlabs.tech" in Inter Regular 11px, `#8888aa`, 24px from right edge
- Fade in: 0.3s at 0:15 (mid-Scene 2)
- Fade out: 0.3s at 0:55 (start of end card)
- Do NOT show during Scene 1 (problem statement) or Scene 7 (end card)

### Recording Workflow

**Step 1: Record voiceover (audio only)**
- Read the full script 3-4 times
- Pick the best natural take
- Export as 48kHz 24-bit WAV
- Total should be 50-55 seconds of speech (leaving room for pauses)

**Step 2: Record demo.html interactions (screen capture, no system audio)**
- Open demo.html in Chrome, fullscreen (F11)
- Press `Space` to dismiss intro overlay
- Record each scene's interaction separately:
  - Take A: Press `1` (Code), wait 3s, press `2` (Research), wait 3s, press `4` (Approve), wait 3s
  - Take B: Press `3` (Deploy), wait 1.5s, press `6` (Voice), wait 1.5s, press `7` (Status), wait 1.5s
  - Take C: Dial sweep -- press `Arrow Right` slowly 8 times
  - Take D: Press `6` (Voice), wait for full voice simulation
  - Take E: Press `E` for end card
- Alternatively, press `R` to run the auto-demo and record the entire automated sequence in one take. The auto-demo runs through Code > Approve > Dial > Research > Deploy > Voice > End Card automatically.
- Export as MP4, 1080p60, no audio track

**Step 3: Prepare nanobanana images**
- Verify all 12 images are generated from NANOBANANA_PROMPTS.md
- Required for video: #1, #2, #3, #5 (left crop), #6, #7, #8, #9 (optional), #10 (optional), #11, #12
- Minimum needed (if time is short): #2, #3, #5, #7, #11, #12
- All images should be 16:9 except #4 and #10 (4:3). Scale 4:3 images to fill 16:9 with a dark background.

**Step 4: Prepare SVG/diagram assets**
- `assets/architecture.svg` -- for the architecture card in Scene 6
- `assets/thinking-dial.svg` -- optional overlay reference in Scene 4
- `assets/actions-ring.svg` -- optional overlay reference in Scene 6
- Export SVGs as PNG at 2x resolution for sharp rendering in video

**Step 5: Assemble timeline**
- Import voiceover as the master track. All visuals sync to voice timing marks.
- Layer 1 (bottom): Music bed, full duration, faded in/out
- Layer 2: Voiceover, placed to start at 0:00
- Layer 3: Screen recordings, cut and placed per scene timing
- Layer 4: Nanobanana images, placed per scene timing
- Layer 5: Text overlays, stat cards, lower thirds
- Layer 6 (top): Transitions, haptic pulse overlay animation

**Step 6: Add sound effects**
- Sync button clicks to visible button presses in demo.html
- Sync dial ticks to arrow key presses
- Sync haptic whoosh to Image 7 pulse rings
- Test mix: mute music and effects, listen to voiceover alone (should be clear). Then add music (should support, not compete). Then add effects (should punctuate, not clutter).

**Step 7: Color grade**
- Apply base LUT or manual grade to all clips
- Match nanobanana images to screen recording color temperature
- Verify cyan accent consistency across all scenes

**Step 8: Export**
- Format: MP4 (H.264 or H.265)
- Resolution: 1920x1080 minimum. 3840x2160 preferred.
- Frame rate: 60fps
- Bitrate: 20 Mbps (1080p) or 50 Mbps (4K)
- Audio: AAC 320kbps stereo
- Total duration: 55-60 seconds
- YouTube upload: Public or Unlisted. Title: "Wispy Console -- AI Agent Control Center for Logitech MX Creative Console"

---

## Nanobanana Image Reference Summary

| # | Name | Scenes Used | Required? |
|---|------|-------------|-----------|
| 1 | Hero Shot -- The Command Center | Scene 1 (0:08-0:10) | Yes |
| 2 | The Approve Moment -- Finger on Button | Scene 2 (0:10-0:12, 0:15 montage) | Yes |
| 3 | The Thinking Dial -- Turning Up Intelligence | Scene 4 (0:30-0:32) | Yes |
| 4 | Overhead Layout -- Full Workstation | Not used in video | No |
| 5 | Split Reality -- Before and After | Scene 1 (0:00-0:03, left crop) | Yes |
| 6 | Voice Command -- Push to Speak | Scene 5 (0:38-0:40) | Yes |
| 7 | Haptic Feedback -- The Mouse Buzzes | Scene 5 (0:43-0:46) | Yes |
| 8 | Actions Ring -- Context-Aware Overlay | Scene 6 (0:49 montage, 1s) | Yes |
| 9 | Night Coding Session -- Marathon Mode | Scene 4 (optional 1s cutaway) | Optional |
| 10 | The Grid -- LCD Buttons Close-Up | Scene 3 (optional cutaway) | Optional |
| 11 | Dual Device Hero -- Console + Mouse | Scene 6 (0:52-0:55) | Yes |
| 12 | Developer in Flow -- Wide Environmental | Scene 6 (0:46-0:49) | Yes |

**Minimum images needed for a complete video:** 1, 2, 3, 5, 6, 7, 8, 11, 12 (9 images)

---

## demo.html Keyboard Shortcut Reference

| Key | Action | Description |
|-----|--------|-------------|
| `Space` | Start | Dismisses the intro overlay |
| `1` | Code | Activates Coder agent |
| `2` | Research | Activates Researcher agent |
| `3` | Deploy | Triggers deployment pipeline |
| `4` | Approve | Approves pending agent action |
| `5` | Reject | Rejects pending agent action |
| `6` | Voice | Starts voice command simulation |
| `7` | Status | Cycles through agent status |
| `8` | Quick | Context-aware shortcut |
| `9` | Dial Info | Shows dial/thinking info |
| `Arrow Left` | Dial Down | Decreases thinking depth by 5 |
| `Arrow Right` | Dial Up | Increases thinking depth by 5 |
| `A` | Approve | Alternate approve shortcut |
| `R` | Auto Demo | Runs the full automated demo sequence |
| `E` | End Card | Shows the end card overlay |

---

## Timing Summary

| Scene | Time | Duration | Primary Visual |
|-------|------|----------|---------------|
| 1. The Problem | 0:00 - 0:10 | 10s | Split Reality + terminal + stat card |
| 2. The Solution | 0:10 - 0:18 | 8s | Approve Moment + demo.html Code button |
| 3. Buttons in Action | 0:18 - 0:30 | 12s | demo.html: Code, Research, Approve, Deploy, Voice, Status |
| 4. The Thinking Dial | 0:30 - 0:38 | 8s | Thinking Dial image + demo.html dial sweep |
| 5. Voice + Haptics | 0:38 - 0:46 | 8s | Voice Command + demo.html + Haptic Feedback |
| 6. The Vision | 0:46 - 0:55 | 9s | Developer Flow + montage + Dual Device Hero |
| 7. End Card | 0:55 - 1:00 | 5s | Custom end card or demo.html end card |
| **Total** | | **60s** | |

---

## Contingency: No Nanobanana Images

If nanobanana images are not generated in time, the video can still be produced using demo.html exclusively:

1. **Scene 1:** Screen record a terminal with rapid approval prompts. Add text overlay stat card.
2. **Scene 2:** demo.html button press, zoomed into the keypad panel.
3. **Scene 3:** demo.html full interface, buttons in sequence.
4. **Scene 4:** demo.html dial panel, zoomed in.
5. **Scene 5:** demo.html voice button press. For haptic, use an animated circle overlay.
6. **Scene 6:** `assets/architecture.svg` diagram + stat text card + demo.html wide view.
7. **Scene 7:** demo.html end card (press `E`).

This produces a functional 60-second video using only screen recordings and text cards. The nanobanana images elevate it from functional to cinematic, but they are not blockers for submission.

---

## Contingency: Auto-Demo One-Take

If time is extremely short, press `R` in demo.html to run the full automated demo. This sequence runs through:

1. Code agent activates, writes a REST API
2. Approve action confirms the code
3. Dial sweeps from 35 to 75 (Standard to Deep Think)
4. Deep analysis runs with 3 findings
5. Research agent finds API key rotation best practices
6. Deploy pipeline runs
7. Voice command simulates
8. End card appears

Record this entire auto-demo as a single screen capture (approximately 25 seconds). Then overlay the voiceover and add nanobanana image cutaways in post. This is the fastest path to a complete video.

---

*Production script by Brian Mwai & Joy Lang'at. Hausor Labs. DevStudio 2026.*
