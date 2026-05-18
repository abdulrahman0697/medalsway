# Business Requirements Document (BRD) — v2.0
## Game: **MINDSCAPE** — *Realms of Puzzle*

**Version:** 2.0 (MVP)
**Genre:** Casual Puzzle / Brain Teaser
**Platform:** Android (Google Play Store), iOS-ready for future
**Document Owner:** Abdulrahman
**Date:** May 2026
**Intended Implementer:** Claude Code

> ⚠️ **This is a GAME, not a productivity app.** Every screen, animation, sound, and interaction must feel **playful, rewarding, alive**. Think *Royal Match* x *Monument Valley* x *NYT Games* — vibrant, juicy, and full of personality.

---

## 1. Game Identity & Theme

### 1.1 Concept
**MINDSCAPE** is a cosmic puzzle adventure. The player is a **Mindwalker** journeying through a constellation of **Puzzle Realms** — each game type is a different realm in a vast, glowing universe of logic and language.

### 1.2 Tagline
> *"Wander the realms. Bend the rules. Master the mind."*

### 1.3 Realm Names (replaces "game names" everywhere in UI)
| Game | Realm Name | Visual Motif |
|---|---|---|
| Sudoku | **Grid Citadel** | Floating cube-fortress, glowing rune-numbers |
| Queens | **The Royal Court** | Marble throne board, crown icons |
| Wordle | **The Glyph Tower** | Floating letter-runes spiraling upward |
| Futoshiki | *Locked Realm* | (Under Development — shows mystical lock) |
| Nonogram | *Locked Realm* | (Under Development) |
| Crossword Mini | *Locked Realm* | (Under Development) |
| Pipe Connect | *Locked Realm* | (Under Development) |
| Numberlink | *Locked Realm* | (Under Development) |
| Logic Grid | *Locked Realm* | (Under Development) |
| Killer Sudoku | *Locked Realm* | (Under Development) |

### 1.4 Mascot (Optional, Recommended)
A small floating **owl made of constellations** — appears on the splash, after victories ("Hoo-ray!"), and in onboarding. Adds personality; can be skipped from MVP if asset budget is tight.

---

## 2. Game Modes

### 2.1 Collective Mode (MVP — ACTIVE) — *"The Trial"*
Each level is a **Trial** consisting of multiple Realms. Beat **all Realms in the Trial** to advance.

| Level Range | Realms in Trial |
|---|---|
| 1 – 9 | Grid Citadel · Royal Court · Glyph Tower |
| 10 | + Futoshiki unlocked (stub) |
| 20 | + Nonogram unlocked (stub) |
| 30 | + Crossword Mini unlocked (stub) |
| 40 | + Pipe Connect unlocked (stub) |
| 50 | + Numberlink unlocked (stub) |
| 60 | + Logic Grid unlocked (stub) |
| 70 | + Killer Sudoku unlocked (stub) |

> **MVP scope:** Only **Levels 1–10**, each with **3 Realms** (Sudoku + Queens + Wordle). Level 10 displays a "New Realm Unlocked!" celebratory cutscene → opens an "Under Development" screen.

### 2.2 Single Realm Mode (MVP — STUB) — *"Solo Quest"*
- Grid of 10 realm-portals.
- Tapping any portal opens **"Under Development"** screen.
- Visually styled like the rest of the game (no broken/half-done look).

---

## 3. Core Game Mechanics

### 3.1 Lives (Hearts) — `3 tries per Realm`
- Each Realm in the Trial starts with **3 ❤️ Hearts**.
- A heart is lost on a **verifiable wrong move**:
  - **Grid Citadel (Sudoku):** committing a number that violates Sudoku rules or contradicts the solution (notes mode does NOT cost a heart).
  - **Royal Court (Queens):** placing a 👑 that creates a rule violation (after the player confirms the placement — i.e., when the queen state is "set," not while toggling).
  - **Glyph Tower (Wordle):** each full guess that is NOT the answer costs 1 heart (3 guesses total, not 6).
- When hearts reach 0 in **any** Realm → the **entire Trial fails**.
- On fail → "Trial Failed" screen → Retry restarts ALL realms in that Trial from scratch.

### 3.2 Hints (Lanterns) — `3 hints per Realm`
- Each Realm starts with **3 💡 Lanterns**.
- Using a Lantern reveals a guaranteed-correct piece of info:
  - **Sudoku:** auto-fills the selected cell (or a random empty cell if none selected) with its correct number.
  - **Queens:** places one correct 👑 on its solution square, OR marks one definitely-wrong square as ❌.
  - **Wordle:** reveals one letter in the answer at its correct position (in a special "ghost" color on the next empty row).
- Hints do **NOT** cost a heart.
- Hints do **NOT** carry across Realms or Trials.

### 3.3 Stars (Reward Score)
Each Realm awards stars based on performance:

| Stars | Condition |
|---|---|
| ⭐⭐⭐ | Solved with 3 hearts intact AND 0 hints used |
| ⭐⭐ | Solved with hearts intact OR 0 hints used (one of the two) |
| ⭐ | Solved (any state) |
| ☆ | Not yet solved |

Trial total = sum of Realm stars (max **9 stars per Trial** in MVP since each Trial has 3 Realms).

The level map shows star count earned on each level node — incentivizes replays.

### 3.4 Difficulty Curve (Reference for Future Levels)
| Level Number (last digit) | Difficulty |
|---|---|
| 1, 3, 4, 6, 7, 9 | Easy |
| 2, 8 | Hard |
| 5, 0 | Super-Hard |
| All Levels 1–10 | Easy (MVP) |

---

## 4. Visual Design — *"Cosmic Glass"*

### 4.1 Design Pillars
1. **Vibrant, never flat.** Gradients, glows, and soft shadows everywhere.
2. **Juicy feedback.** Every tap = a particle, a sound, a tiny bounce.
3. **Glassmorphism + Neon.** Frosted surfaces with neon glow accents.
4. **Atmospheric backgrounds.** Slowly-drifting starfields and nebula gradients.
5. **Rounded everything.** No sharp corners. Friendly, inviting forms.

### 4.2 Color Palette

#### Dark Mode (Primary / Hero Theme)
| Token | Hex | Use |
|---|---|---|
| `cosmos_deep` | `#0B0420` | App background base |
| `cosmos_mid` | `#1A0B3D` | Mid-layer gradient |
| `nebula_purple` | `#7C3AED` | Primary brand color |
| `nebula_pink` | `#EC4899` | Brand gradient end |
| `aurora_cyan` | `#06B6D4` | Cool accents (water/ice realms, links) |
| `star_gold` | `#FCD34D` | Stars, hints, victory glow |
| `heart_red` | `#F43F5E` | Lives, errors |
| `success_green` | `#34D399` | Correct placement |
| `text_primary` | `#F8FAFC` | Headings |
| `text_secondary` | `#CBD5E1` | Body |
| `glass_surface` | `rgba(255,255,255,0.08)` | Glassmorphic cards |
| `glass_border` | `rgba(255,255,255,0.16)` | Card edges |

**Signature gradient:** `linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F59E0B 100%)` — used on the main CTA, level-complete banners, and the logo.

#### Light Mode (*"Daybreak"*)
| Token | Hex | Use |
|---|---|---|
| `daybreak_bg` | `#FFF7ED` | Warm parchment background |
| `daybreak_mid` | `#FED7AA` | Mid-layer gradient |
| `royal_purple` | `#6D28D9` | Primary |
| `coral_pink` | `#DB2777` | Brand gradient end |
| `ocean_blue` | `#0891B2` | Cool accents |
| `sun_gold` | `#D97706` | Stars, hints |
| `heart_red` | `#E11D48` | Lives, errors |
| `success_green` | `#059669` | Correct |
| `text_primary` | `#1E1B4B` | Headings |
| `text_secondary` | `#4C1D95` | Body |
| `glass_surface` | `rgba(255,255,255,0.55)` | Frosted cards |
| `glass_border` | `rgba(109,40,217,0.20)` | Card edges |

> Both modes keep the **same gameplay layout**, only colors and ambient backgrounds change. Dark mode = a starlit night sky. Light mode = a magical sunlit dawn.

### 4.3 Typography
| Use | Font | Weight | Size |
|---|---|---|---|
| Display / Game Title / Headlines | **Fredoka** (Google Fonts) — rounded, friendly, game-feel | 600–700 | 28–40 |
| Level Numbers / Big Numbers | **Fredoka** | 700 | 48–72 |
| Body / Instructions | **Inter** | 400–500 | 14–16 |
| Caption / Stats | **Inter** | 500 | 12–13 |
| Sudoku digits in cells | **JetBrains Mono** | 600 | 22–26 |

### 4.4 Iconography
- Custom SVG icons for hearts (❤️ with a soft inner glow), lanterns (💡 with a flickering filament), crowns (👑), stars (⭐ with a 4-pointed sparkle), runes.
- No emoji in final UI — emoji used in this BRD are placeholders for designed SVG assets.
- Recommended icon source: **Lucide icons** + custom-drawn for game-specific items.

### 4.5 Animation Language
| Event | Animation |
|---|---|
| Button press | Scale 0.94 + slight downward translate, spring back |
| Card appearing | Slide-up + fade, with 100ms stagger if multiple |
| Cell tap (Sudoku/Queens) | Soft pulse + ripple on touch point |
| Correct entry | Green flash + subtle scale-up + sparkle particles |
| Wrong entry | Red flash + screen shake (4px, 200ms) + heart shatter |
| Hint used | Lantern fades, gold sparkle showers the target cell |
| Realm solved | Full-screen confetti + scale-bounce of star icons (3 stars pop in sequentially) |
| Trial complete | Confetti + fireworks particles + camera-zoom on level node |
| Trial failed | Screen desaturates briefly + "shatter" effect on the broken hearts |
| Page transitions | Shared-axis transition (250ms ease-out) |
| Background | Slow-drifting starfield (parallax, 2 layers), subtle nebula color shift over 30s loop |

### 4.6 Level Map Visual
The level map is **NOT a vertical list**. It's a **stylized starpath**:
- Levels are **glowing orbs** floating in space, connected by a softly-glowing dotted path.
- The path winds (S-curves) down a scrollable view.
- Completed levels: bright orb with stars beneath it.
- Current level: pulsing orb with the Mindwalker mascot hovering near it.
- Locked levels (11+): dim orbs with a padlock icon.
- Background: parallax stars + occasional shooting star animation.

### 4.7 Home Screen Layout
Hero composition:
- **Top:** Large logo "MINDSCAPE" with the cosmic gradient + a subtle floating animation.
- **Middle:** Two big mode cards stacked:
  - **"The Trial"** (Collective Mode) — primary, glowing border, gradient background. Subtitle: *"A bundle of realms. One mind to rule them all."*
  - **"Solo Quest"** (Single Game Mode) — secondary, slightly dim, "Coming Soon" badge.
- **Bottom:** Player stats strip — "⭐ 12 stars · ❤️ Streak: 3 · 🌍 Level 4".
- **Top-right:** Settings gear icon.
- **Top-left:** Theme toggle (sun/moon).

---

## 5. Sound Design

### 5.1 Philosophy
Every interaction has audio feedback. Sounds are **short (<300ms)**, **playful**, and **non-fatiguing**. Background music is **soft, ambient, looping** — never intrusive.

### 5.2 Sound Effect List

| Asset Filename | Trigger | Description |
|---|---|---|
| `ui_tap.mp3` | Any UI button press | Light, clicky pop — 60ms |
| `ui_back.mp3` | Back/close navigation | Soft swoosh — 120ms |
| `cell_select.mp3` | Sudoku/Queens cell tap | Subtle "tick" — 50ms |
| `number_place.mp3` | Number placed in Sudoku | Soft "plink" — 80ms |
| `queen_place.mp3` | Queen placed in Queens | Royal "ding" — 120ms |
| `key_tap.mp3` | Wordle keyboard tap | Mechanical key sound — 50ms |
| `correct.mp3` | Correct placement / Wordle letter green | Bright chime — 200ms |
| `wrong.mp3` | Wrong move (any game) | Soft negative tone — 200ms |
| `heart_lost.mp3` | Heart lost / shatter | Glass shatter + heart-thud — 350ms |
| `hint_used.mp3` | Hint consumed | Magical chime + sparkle — 400ms |
| `realm_solved.mp3` | A single mini-puzzle complete | Triumphant short fanfare — 800ms |
| `trial_complete.mp3` | Entire Trial (level) complete | Full victory fanfare — 1.8s |
| `trial_failed.mp3` | Trial failed (0 hearts) | Sad, soft descending tone — 1.2s |
| `unlock.mp3` | New realm unlocks (level 10, etc.) | Mystical reveal — 1.5s |
| `star_earned.mp3` | Each star pops in on victory screen | Sparkle — 200ms (played 3x staggered) |
| `bg_ambient_dark.mp3` | Background music (dark mode) | Looping ambient pad with soft synth pulses — 90s loop |
| `bg_ambient_light.mp3` | Background music (light mode) | Looping warm acoustic + soft chimes — 90s loop |

### 5.3 Audio Settings
- Toggle: **Sound Effects** (on/off)
- Toggle: **Background Music** (on/off)
- Both default **ON**. Music volume should be ~30% relative to SFX.
- Music **fades out** during the level-complete and level-failed sequences (so the victory/failure stinger is heard clearly), then fades back in.

### 5.4 Audio Asset Sourcing
Recommended royalty-free sources for Claude Code to fetch initial assets:
- **Mixkit** (mixkit.co/free-sound-effects) — game sounds, free for commercial use.
- **Freesound.org** — community-curated, check CC0/CC-BY licenses.
- **Pixabay Music** (pixabay.com/music) — for the looping ambient tracks.
- Alternative: generate with AI music tools like Suno or Mubert for unique tracks.

### 5.5 Implementation
- Use Flutter package **`audioplayers`** (or `just_audio` for more control).
- Preload all SFX on app startup to avoid playback delay.
- Implement a centralized `AudioService` singleton — every UI component calls `AudioService.play(Sfx.tap)`.
- Haptic feedback paired with key sounds: light haptic on `ui_tap`, medium haptic on `heart_lost`, success haptic on `realm_solved`.

---

## 6. UX Flow

```
[Splash 1.5s with logo animation + sting]
   ↓
[First Launch?]
   ├── YES → [Onboarding 4 slides] → [Home]
   └── NO  → [Home]

[Home]
   ├── "The Trial" → [Level Map (starpath)]
   │     └── Tap orb → [Trial Screen]
   │           ├── Tap Realm card → [Realm Game Screen (Sudoku/Queens/Wordle)]
   │           │     ├── Solve → back to [Trial Screen] with that realm marked ✓
   │           │     └── 0 hearts → [Trial Failed Screen] → Retry or Map
   │           └── All 3 realms ✓ → [Trial Complete Screen] → Next or Map
   ├── "Solo Quest" → [Realm Grid] → tap any → [Under Development Screen]
   └── Settings icon → [Settings Screen]
```

### 6.1 Onboarding (4 Slides)

| # | Headline | Body | Visual |
|---|---|---|---|
| 1 | **Welcome, Mindwalker.** | A universe of puzzles awaits you. | Starfield with logo orbiting + owl mascot |
| 2 | **Conquer the Trials.** | Each Trial bundles multiple Realms. Solve them all to advance. | 3 floating realm cards animating in |
| 3 | **Mind your Hearts.** | 3 hearts. 3 hints. Choose every move wisely. | Animated hearts + lanterns demo |
| 4 | **Begin your Journey.** | The cosmos remembers every step. | Big "Start" button with gradient glow |

### 6.2 Trial Screen (Level Screen)

**Layout:**
- Top bar: ← back arrow · "TRIAL — LEVEL 3" · Difficulty pill (Easy)
- Below: a horizontal strip of star indicators (☆☆☆ → ⭐⭐⭐ as Realms complete)
- 3 large **Realm Cards** stacked vertically:
  - Each card shows: realm icon, realm name, mini preview thumbnail, status indicator (Locked/In Progress/✓ Solved with stars earned), Hearts/Hints status if started.
  - Solved cards: green checkmark, dimmed but tappable for replay.
- Bottom: progress bar "X of 3 Realms solved"
- Floating "Complete Trial" button — only enabled when all 3 are ✓.

### 6.3 Realm Game Screen (Universal Top Bar)
Every gameplay screen has the same top bar:
- ← Back arrow
- Realm name centered
- **❤️ ❤️ ❤️** (hearts remaining) on the left of bottom-bar
- **💡 💡 💡** (hints remaining) on the right of bottom-bar
- Hearts/hints decrement with animation

### 6.4 Trial Complete Screen
- Confetti fills the screen
- Large "TRIAL COMPLETE" headline with gradient
- 3 star sequences pop in (one per Realm, staggered, with `star_earned` SFX)
- Total stars summary (e.g., "8 / 9 stars")
- Time stat
- Buttons: **Next Trial** (primary, large) · **Back to Map** (secondary)

### 6.5 Trial Failed Screen
- Screen desaturates briefly
- Shattered heart icon in the center
- Headline: "Trial Failed"
- Subtext: *"Even Mindwalkers stumble. Try again?"*
- Buttons: **Retry Trial** (primary) · **Back to Map** (secondary)
- Note: on retry, ALL Realms reset to fresh state (3 hearts, 3 hints, blank board).

---

## 7. Game Engines — Updated Specs (with Hearts & Hints)

### 7.1 Grid Citadel (Sudoku) Engine
```pseudo
state: { board, solution, selectedCell, notesMode, hearts: 3, hints: 3 }

onCellTap(r,c):
  if cell is prefilled: ignore (subtle shake)
  else: selectedCell = (r,c); play cell_select

onNumberInput(n):
  if no selectedCell: ignore
  if notesMode: toggle note n; play number_place (soft)
    return
  // Commit mode
  if n == solution[r][c]:
    place n; play correct + sparkle
    if board complete: emit REALM_SOLVED
  else:
    flash red on cell; screen shake
    hearts -= 1; play heart_lost
    do NOT place the wrong number (or place + auto-clear after 600ms — designer's choice; default: do NOT place)
    if hearts == 0: emit TRIAL_FAILED

onHintTap:
  if hints == 0: disable
  cell = selectedCell or random empty cell
  fill cell with solution value; hints -= 1
  play hint_used + sparkle animation
  if board complete: emit REALM_SOLVED

REALM_SOLVED → award stars based on (hearts, hints used) → save → pop to Trial Screen
TRIAL_FAILED → navigate to Trial Failed Screen
```

### 7.2 Royal Court (Queens) Engine
```pseudo
state: { regions, solution, cells[][], hearts: 3, hints: 3 }
cell state: EMPTY → MARKED_X → QUEEN → EMPTY (3-way cycle on tap)

onCellTap(r,c):
  play cell_select
  cycle cell state
  validate()

validate():
  conflicts = findRuleViolations(queens)
  flash conflict cells red briefly
  // Heart loss rule:
  // Lose a heart only when a QUEEN is placed in a cell that is definitively wrong
  // (i.e., the placed queen creates an unresolvable conflict OR is not in the solution set).
  // Implementation: when cell becomes QUEEN and solution[r][c] != 1 → lose heart.
  // This avoids penalizing the player for the X-marking exploration phase.
  if board fully placed AND no conflicts: emit REALM_SOLVED

onHintTap:
  if hints == 0: disable
  pick a solution cell that is not yet QUEEN; place a queen there (locked)
  hints -= 1; play hint_used
  if board fully placed AND no conflicts: emit REALM_SOLVED
```

### 7.3 Glyph Tower (Wordle) Engine
```pseudo
state: { answer, rows: List<List<Letter>>, currentRow: 0, currentCol: 0, hearts: 3, hints: 3 }
// Display only 3 rows (not 6) — aligns with the 3-tries system

onLetterKey(letter):
  if currentCol < 5: rows[currentRow][currentCol++] = letter; play key_tap

onBackspace:
  if currentCol > 0: rows[currentRow][--currentCol] = null

onEnter:
  if currentCol < 5: shake row; return
  // Optional: validate against word list (skipped in MVP)
  evaluate(rows[currentRow]) → colors[5] (green/yellow/grey)
  animate row reveal (flip-stagger 300ms)
  if guess == answer:
    play correct + realm_solved
    emit REALM_SOLVED
  else:
    hearts -= 1; play heart_lost
    if currentRow == 2 (3rd row used): emit TRIAL_FAILED
    else: currentRow++; currentCol = 0

onHintTap:
  if hints == 0: disable
  // Reveal one not-yet-revealed correct letter at its correct position
  // on the next empty row, as a "ghost" tile that the player must still type to commit
  hints -= 1; play hint_used
```

---

## 8. Data Models

```dart
class Trial {
  final int id;                          // 1..10 in MVP
  final String difficulty;               // 'easy' for MVP
  final List<RealmInstance> realms;
}

class RealmInstance {
  final String type;                     // 'sudoku' | 'queens' | 'wordle'
  final dynamic puzzleData;              // SudokuLevel | QueensLevel | WordleLevel
}

class TrialProgress {
  final int trialId;
  final Map<String, RealmProgress> realmProgress;  // key: 'sudoku' | 'queens' | 'wordle'
  final bool completed;
  final int totalStars;                  // 0..9
  final DateTime? completedAt;
}

class RealmProgress {
  final bool solved;
  final int starsEarned;                 // 0..3
  final int heartsRemaining;             // for in-progress runs
  final int hintsRemaining;
  final dynamic boardState;              // serialized current state for resume
}

class PlayerProfile {
  final int currentTrial;                // 1..10
  final Map<int, TrialProgress> trials;
  final int totalStars;
  final int streak;
  final ThemeMode themeMode;
  final bool sfxEnabled;
  final bool musicEnabled;
}
```

Persisted via Hive (boxes: `playerProfile`, `trialProgress`).

---

## 9. Tech Stack (Recommended)

| Layer | Choice |
|---|---|
| Framework | **Flutter 3.x (Dart 3)** |
| State | **Riverpod 2.x** |
| Routing | **go_router** |
| Local Storage | **Hive** |
| Audio | **audioplayers** (preferred) or **just_audio** |
| Animation | **flutter_animate** + **lottie** (for confetti/celebration) |
| Particles | **flutter_animate** custom emitters, or **simple_animations** |
| Confetti | **confetti** package |
| Fonts | **google_fonts** (Fredoka + Inter + JetBrains Mono) |
| Haptics | **flutter (built-in HapticFeedback)** |
| Min Android | API 24 (Android 7.0) |
| Target Android | API 34 |

`pubspec.yaml` core dependencies:
```yaml
flutter_riverpod: ^2.5.0
go_router: ^14.0.0
hive: ^2.2.3
hive_flutter: ^1.1.0
audioplayers: ^6.0.0
google_fonts: ^6.2.0
flutter_animate: ^4.5.0
lottie: ^3.1.0
confetti: ^0.7.0
flutter_svg: ^2.0.0
```

---

## 10. Puzzle Content — 10 Levels per Realm

### 10.1 Grid Citadel (Sudoku) — Easy × 10
**Target clue count for easy:** 40–50 of 81 cells pre-filled.

```dart
const sudokuEasyLevels = [
  // Level 1
  {
    'puzzle':   '530070000600195000098000060800060003400803001700020006060000280000419005000080079',
    'solution': '534678912672195348198342567859761423426853791713924856961537284287419635345286179',
  },
  // Level 2
  {
    'puzzle':   '120000087006090050000700300508040600007030400003070802004001000080050700750000049',
    'solution': '123456987456893251987721346518942673697138425243576812374261598869354712752687439',
  },
  // Level 3
  {
    'puzzle':   '100489006730000040000001295000127600500703008006950000914600000000000037800512004',
    'solution': '152489376738256149469371295385127649521743968476958321914635782692874513837512964',
  },
  // Level 4
  {
    'puzzle':   '040100050107003960520008000000000017000906800803050620090060543600080700250097100',
    'solution': '346179852187523964529648371462385217715296834893751626974862543631485799258937116',
  },
  // Level 5
  {
    'puzzle':   '600120384008459072000006005000264030070080006940003000310000050089700000502000190',
    'solution': '695127384138459672724836915851264739273981546946573821317698452489712563562345198',
  },
  // Level 6
  {
    'puzzle':   '497200000100400005000016098620300040300900000001072600002005870000600004530097061',
    'solution': '497258136186439725253716498629381547375964812841572369962145873718623954534897261',
  },
  // Level 7
  {
    'puzzle':   '005030000800007020027000400600059030004000200030640005002000760040800009000020800',
    'solution': '465938172813467529927215438681759342754183296239642815592381764146876953378524681',
  },
  // Level 8
  {
    'puzzle':   '009000004000050000045097103006000089073050460980000600702680510000040000600000300',
    'solution': '129876534873254916645397128516423789273158467984769652792683514358941276467512381',
  },
  // Level 9
  {
    'puzzle':   '300200000000107000706030500070009080900020004010800050009040301000702000000008006',
    'solution': '358261497492187635716435528574369182968521734213874956829546371641792853375918246',
  },
  // Level 10
  {
    'puzzle':   '030500804050803010008010500083000050000605000040000730005060300070908060306004080',
    'solution': '731529864956843217428716593183274659792685421645391738815467329274938165369152487',
  },
];
```
> **Implementer:** validate each pair with a Sudoku solver at build time. If any pair fails, regenerate using the `sudoku_solver_generator` Dart package with `Difficulty.easy`.

### 10.2 Royal Court (Queens) — Easy × 10
Board sizes: **5×5** for levels 1–5, **6×6** for levels 6–10.

Two seed boards provided below. **Claude Code must generate the remaining 8** at build time using a constraint-satisfaction backtracking algorithm: (1) generate a valid queens placement, (2) flood-fill the grid into N connected colored regions each containing exactly one queen, (3) verify the resulting puzzle has a unique solution.

```dart
const queensEasyLevels = [
  // Level 1 — 5x5
  {
    'size': 5,
    'regions': [
      [0, 0, 0, 1, 1],
      [0, 0, 2, 1, 1],
      [0, 2, 2, 2, 1],
      [3, 3, 2, 4, 4],
      [3, 3, 3, 4, 4],
    ],
    'solution': [
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
    ],
  },
  // Level 2 — 5x5
  {
    'size': 5,
    'regions': [
      [0, 0, 1, 1, 1],
      [0, 0, 2, 1, 1],
      [0, 2, 2, 2, 3],
      [4, 4, 2, 3, 3],
      [4, 4, 4, 3, 3],
    ],
    'solution': [
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
    ],
  },
  // Levels 3–10: generated by Claude Code (see note above)
];
```

### 10.3 Glyph Tower (Wordle) — Easy × 10

```dart
const wordleEasyLevels = [
  'APPLE',   // Level 1
  'BREAD',   // Level 2
  'CHAIR',   // Level 3
  'DREAM',   // Level 4
  'EARTH',   // Level 5
  'FLAME',   // Level 6
  'GRAPE',   // Level 7
  'HEART',   // Level 8
  'LIGHT',   // Level 9
  'MUSIC',   // Level 10
];
```
> All 5 letters. Common, recognizable. No guess-validation dictionary in MVP — accept any 5-letter input on Enter.

---

## 11. Settings Screen

| Setting | Type | Default | Notes |
|---|---|---|---|
| Theme | Segmented (Light / Dark / System) | System | Persisted |
| Sound Effects | Toggle | On | Persisted |
| Background Music | Toggle | On | Persisted |
| Haptics | Toggle | On | Persisted |
| Reset Progress | Destructive button | — | Confirmation modal |
| About | Static section | — | App version + credits |
| Privacy Policy | Link | — | Placeholder URL |

Settings screen visual: same Cosmic Glass styling — frosted card list with neon accents on the toggle thumbs.

---

## 12. File / Folder Structure (Flutter)

```
mindscape/
├── android/
├── pubspec.yaml
├── assets/
│   ├── fonts/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── mascot_owl.svg
│   │   ├── realms/
│   │   │   ├── grid_citadel.svg
│   │   │   ├── royal_court.svg
│   │   │   └── glyph_tower.svg
│   │   ├── onboarding/
│   │   └── nebula_bg.png
│   ├── animations/
│   │   ├── confetti.json
│   │   ├── star_pop.json
│   │   └── heart_shatter.json
│   └── audio/
│       ├── sfx/
│       │   ├── ui_tap.mp3
│       │   ├── ui_back.mp3
│       │   ├── cell_select.mp3
│       │   ├── number_place.mp3
│       │   ├── queen_place.mp3
│       │   ├── key_tap.mp3
│       │   ├── correct.mp3
│       │   ├── wrong.mp3
│       │   ├── heart_lost.mp3
│       │   ├── hint_used.mp3
│       │   ├── realm_solved.mp3
│       │   ├── trial_complete.mp3
│       │   ├── trial_failed.mp3
│       │   ├── unlock.mp3
│       │   └── star_earned.mp3
│       └── music/
│           ├── bg_ambient_dark.mp3
│           └── bg_ambient_light.mp3
└── lib/
    ├── main.dart
    ├── app.dart
    ├── core/
    │   ├── theme/
    │   │   ├── app_theme.dart
    │   │   ├── colors.dart
    │   │   ├── gradients.dart
    │   │   └── typography.dart
    │   ├── routes/app_router.dart
    │   ├── audio/audio_service.dart
    │   ├── haptics/haptic_service.dart
    │   └── constants/
    ├── data/
    │   ├── models/
    │   ├── repositories/progress_repository.dart
    │   └── puzzles/
    │       ├── sudoku_easy_levels.dart
    │       ├── queens_easy_levels.dart
    │       ├── queens_generator.dart
    │       └── wordle_easy_levels.dart
    ├── features/
    │   ├── splash/
    │   ├── onboarding/
    │   ├── home/
    │   ├── collective_mode/
    │   │   ├── level_map_screen.dart
    │   │   ├── trial_screen.dart
    │   │   ├── trial_complete_screen.dart
    │   │   └── trial_failed_screen.dart
    │   ├── single_mode/
    │   │   └── solo_quest_screen.dart
    │   ├── games/
    │   │   ├── sudoku/
    │   │   ├── queens/
    │   │   ├── wordle/
    │   │   └── under_development_screen.dart
    │   └── settings/
    └── shared/
        └── widgets/
            ├── glass_card.dart
            ├── primary_button.dart
            ├── heart_indicator.dart
            ├── lantern_indicator.dart
            ├── star_row.dart
            ├── starfield_background.dart
            └── difficulty_pill.dart
```

---

## 13. Acceptance Criteria

MVP is **done** when all the following pass:

1. ✅ App installs and runs without crashes on Android 7.0+.
2. ✅ Splash screen plays with logo animation and sound sting.
3. ✅ Onboarding shows on first launch only; player can complete or skip.
4. ✅ Home screen displays both mode cards with correct styling.
5. ✅ "The Trial" entry leads to the starpath level map.
6. ✅ Levels 1–10 are playable; levels 11+ visible but locked.
7. ✅ Each Trial contains 3 Realms (Sudoku, Queens, Wordle); all 3 fully playable.
8. ✅ Hearts: each Realm starts with 3, decrements on wrong moves, depletes → Trial Failed.
9. ✅ Hints: each Realm starts with 3, decrements on use, gives correct hint.
10. ✅ Trial Failed → Retry resets all 3 Realms in that Trial.
11. ✅ Trial Complete plays victory animation + stars and unlocks next level.
12. ✅ Stars awarded per the rule in Section 3.3.
13. ✅ All sound effects play on their triggers; background music loops; both can be muted in settings.
14. ✅ Haptic feedback works on key events.
15. ✅ Solo Quest opens the realm grid; all 10 tiles open "Under Development."
16. ✅ Settings persist across app restarts (theme, audio toggles, progress).
17. ✅ Light mode and Dark mode both pass visual QA across all screens.
18. ✅ Reset Progress clears all data and returns the player to first-launch state (with confirmation).
19. ✅ Signed APK uploaded to Google Play Internal Testing track.

---

## 14. Development Phases (Recommended Order)

| Phase | Deliverable |
|---|---|
| 1 | Project scaffold, theming (Cosmic Glass), Hive, routing, AudioService, HapticService, font loading |
| 2 | Reusable widgets (GlassCard, PrimaryButton, HeartIndicator, LanternIndicator, StarRow, StarfieldBackground) |
| 3 | Splash → Onboarding (4 slides) → Home screen |
| 4 | Level Map (starpath) + Trial Screen + Trial Complete + Trial Failed screens |
| 5 | Grid Citadel (Sudoku) — engine, UI, 10 levels, hearts/hints integration, sounds |
| 6 | Royal Court (Queens) — generator run + engine, UI, hearts/hints, sounds |
| 7 | Glyph Tower (Wordle) — engine, UI, hearts/hints, sounds |
| 8 | Solo Quest stub + Under Development screen + Settings screen |
| 9 | Polish pass: animations, particles, audio mixing, haptics tuning, visual QA on both themes |
| 10 | Build signed release APK, smoke-test on real device, upload to Play Internal Testing |

---

## 15. Out of Scope (Future Roadmap)

- Levels 11+ with full difficulty curve (easy/hard/super-hard).
- The other 7 Realms (Killer Sudoku, Nonogram, Pipe Connect, Crossword Mini, Futoshiki, Logic Grid, Quordle, Numberlink).
- Solo Quest functional gameplay.
- Daily Challenges, streaks, push notifications.
- In-app purchases (extra hearts, hint packs, ad-free).
- Cloud sync / Google Play Games sign-in.
- iOS release.
- Localization (Arabic — high-priority v2.0 feature given user base).
- Mascot animations / cinematic cutscenes for realm unlocks.

---

## 16. Quick-Start Notes for Claude Code

1. Create the Flutter project:
   ```
   flutter create mindscape --org com.mindscape.game
   ```
2. Install dependencies from Section 9.
3. Download initial audio assets from Mixkit / Pixabay Music; place into `assets/audio/`.
4. Implement `AudioService` first — every UI element will call it.
5. Build the shared widgets in Section 12 before any screen.
6. Always test BOTH light and dark mode at the end of each phase.
7. Run the Queens generator (`lib/data/puzzles/queens_generator.dart`) to produce levels 3–10.
8. Validate all 10 Sudoku puzzle/solution pairs at build time.
9. The "Cosmic Glass" aesthetic is mandatory: glassmorphic surfaces, gradient accents, glowing edges, drifting starfield background. **No flat boring rectangles. No corporate-app look. This is a GAME.**

---

**End of BRD v2.0 — Mindscape: Realms of Puzzle**
