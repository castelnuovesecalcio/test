# Smash Tag — Design System

Smash Tag is a fast-food chain born in **Rome**, specialised in **smash burgers** — beef pressed thin on the flat-top, melted cheddar, brioche bun. The brand talks like a Roman street kitchen with a comic-book face: black and yellow, oversized condensed lettering, a burger mascot called **Bob**, and photography that is close, greasy and impossible to ignore.

Two sub-brands appear in the supplied material:
- **Smash Tag — Let's Burger** — the beef line and the master brand (round badge with Bob).
- **Smash Tag — Let's Chick** — the chicken line (rooster mascot, seen on the Smashbox packaging). *No vector artwork for the Let's Chick mark was supplied — see Gaps.*

Menu families evidenced by the material: eight **Smash** burgers named by colour (White, Yellow, Red, Green, Orange, Black, Brown, Pink), **Fries** and **Fries Cheddar**, **Frikies** (crinkle-cut) plain / cheddar / cheddar & bacon, **Nuggets**, the **Smashbox** combo, and drinks (Coca-Cola, bottled beer). Two house sauces are branded on the packaging: **Smash Tag Sauce** (yellow label) and **Baddie Sauce** (pink label).

---

## Sources given

| Source | Status |
|---|---|
| Brand guide (visual tone, tone of voice, audience, component rules, don'ts) — pasted in chat | Used as primary specification |
| `uploads/Brice-*.woff2` — the complete Brice family by Zetafonts (6 weights × 5 widths) | **Read and shipped in full** (30 WOFF2; the earlier OTF set has been replaced) |
| `uploads/logo smash tag vettoriale_Tavola disegno 1.svg`, `logo smash tag nero.svg`, `logo smash tag nero e bianco.svg`, `logo smash tag bianco e nero.svg` | **Read and shipped as vectors.** The Illustrator export had lost its `<style>` block (all paths defaulted to black) and carried a large C2PA metadata blob; both were stripped and the two colour groups re-assigned to `#1D1D1B` / `#FFFFFF` / `#FFCD1C` |
| `uploads/Copia di 4x4_circolare logo.pdf`, `…logo giallo.pdf`, `…4x4_fustellato smash.pdf`, `…7x3_rettangolare claim.pdf`, `…2,5x2,5 piccolo bob.pdf`, `…2,5x2,5 piccolo taste it.pdf` | **Read.** Vector stickers — rasterised at high resolution into `assets/logo/` |
| 27 studio photographs (`SMASH *.jpg`, `FRIES*.jpg`, `FRIKIES*.jpg`, `NUGGETS.jpg`, `SMASHBOX.jpg`, `ALE*.jpg`, ChatGPT-named hero shots) | **Read.** Resized into `assets/photography/` |
| `uploads/colori sociali smash tag.ai` | **NOT AVAILABLE** — named in the brief, never landed on the filesystem |
| `uploads/Smash Tag bozze adv.ai` | **Out of scope** — client instruction: disregard |
| Website / app / Figma / codebase | **None supplied** |

### Gaps to close (asks for the client)
1. **Re-upload `colori sociali smash tag.ai`** (or the hex list) so the social palette can be verified against the two yellows in the guide.
2. **Supply the Let's Chick logo** (the rooster lockup on the Smashbox lid) as vector — it is the only mark still missing.
3. **Supply the claim lockup as vector** — `claim-we-make-it-better.png` is the only mark still raster (1400px, rasterised from `7x3_rettangolare claim.pdf`).
4. ~~Confirm the secondary text face.~~ **Settled:** **Inter Tight**, loaded from Google Fonts, for body, prices, UI and micro labels.
5. **Confirm the icon set.** None was supplied; **Lucide** (CDN, 2px stroke) is substituted.
6. **Real menu data** — descriptions, prices, store addresses and hours in the UI kits are placeholders.
7. ~~Confirm the yellow.~~ **Settled:** #FFCD1C is the yellow for everything; #FFDD00 belongs to the logo artwork alone (the sticker vectors shipped with `#FFCF0A`/`#FFCF12` and were normalised to #FFDD00). The photography backdrop keeps #FFDD00 by instruction — say the word and I re-fill the 25 shots to #FFCD1C.

---

## Content fundamentals

**Language.** Italian, always. English appears only as brand lettering — `LET'S BURGER`, `LET'S CHICK`, `TASTE IT`, `SMASH`, and the claim *"We didn't create burger, we make it better."* Never write a full Italian sentence in English, and never translate the claim.

**Person.** Second person singular, informal — *tu*, never *lei*. The brand speaks as *noi* about itself: "Facciamo smash burger", "Le nostre salse", "Ci pensiamo noi". Never "l'azienda", never the passive.

**Sentence length.** Short. Often one word. The rhythm is claim → beat → claim:
> *Manzo schiacciato sulla piastra. Cheddar che cola. Pane brioche. Basta.*
> *Fame? Ci pensiamo noi.*
> *2,90€. Croccanti. Non ci pensare troppo.*

Full stops do the work commas would do elsewhere. A visual carries **one** message; if it needs two sentences to land, cut one.

**Casing.** Headlines and buttons are UPPERCASE (applied in CSS, written normally in the source so the copy stays editable). Body copy is sentence case. Micro-labels are uppercase with 0.08em tracking. Never Title Case Every Word.

**Numbers and offers.** The offer is written as the shortest possible token and set as the largest thing on the frame: `2x1`, `-30%`, `9,50€`. Italian decimal comma, euro sign after the number, no space.

**Humour.** Simple, immediate, product-focused, a bit cocky — never sarcastic about the customer, never an in-joke. It can dare you (*"Taste it o rimpiangilo"*), it can nudge (*"Prendi anche le frikies. Fidati, è il nostro lavoro."*). It never explains itself.

**Do not write:** press-release language ("siamo orgogliosi di annunciare"), technical or supply-chain detail unless it sells (*"manzo 100% italiano"* is fine, provenance essays are not), gourmet vocabulary ("selezione", "esperienza culinaria", "eccellenza"), long copy inside a visual, or a CTA softer than an imperative.

**CTAs.** Imperative, two or three words: *Ordina ora · Trova un locale · Provala · Aggiungi · Attiva la promo · Swipe up.*

**Emoji.** Not used. The mascot, the stickers and the lettering carry the personality instead.

---

## Visual foundations

**Palette.** Two colours and paper. **`--st-yellow` #FFCD1C is the yellow** — every field, panel, button, keyline, cast shadow and piece of brand lettering. **`--st-yellow-logo` #FFDD00 exists only inside the logo artwork**: it is not a UI or layout colour, never fills a background, and never appears in type. That difference is what keeps the mark readable when it sits on a yellow field. Plus `--st-black` #1D1D1B and `--st-white`. (`--st-yellow-bg` and `--st-yellow-alt` are aliases of `--st-yellow`, kept for older markup.)

One deliberate exception: the **photography backdrop is #FFDD00** (`--st-photo-yellow`), because the studio shots were normalised to that value on instruction. It is the only place outside the logo where #FFDD00 appears. Sanctioned pairings: yellow on black, black on yellow, black on white. **White type on yellow is forbidden.** Neutrals (`--st-ink-90` → `--st-ink-08`) are the black stepped toward paper — warm, never bluish — and exist for rules, muted copy and disabled states, never as a decorative colour. `--st-ui-positive/warning/negative` exist for order states and form errors only and never appear in campaign work. Maximum two background colours per deck or campaign. No pastels, no third accent, no gradients as decoration.

**Type.** **Brice** (Zetafonts) is the brand face — a high-contrast display sans with flared, slab-like stem terminals, which is exactly the lettering used in the printed claim artwork. The complete family ships here as WOFF2: six weights (200/300/400/600/700/900) in five widths, each width exposed as its own CSS family (`Brice`, `Brice SemiCondensed`, `Brice Condensed`, `Brice SemiExpanded`, `Brice Expanded`). This release carries the **full accented Latin set** (à è é ì ò ù, and the rest) — an earlier cut supplied for this project did not, so **use these files and no others**: an Italian headline set in the old cut loses its accents. Used as:
- `--st-font-display` → *Brice Condensed Black*, uppercase, `line-height: 0.88`, `-0.01em` tracking. Every headline and every promo number.
- `--st-font-display-wide` → *Brice Expanded Black* — **Display 2**. One or two words only, and **only when explicitly requested**; it is never the default headline face.
- `--st-font-heading` → *Brice SemiCondensed **Bold** (700)*, h1–h4 and card titles. Sizes: h1 40 / h2 32 / h3 24 / h4 20.
- `--st-font-brand` → *Brice* regular widths, for product names in running text.
- `--st-font-body` → **Inter Tight** (Google Fonts) for paragraphs, prices, UI, micro labels and legal copy.

Display type is set tight enough that lines lock together; it may be tilted `-3deg` (`--st-tilt`), overlapped, or given a black keyline (`--st-text-stroke`) when it sits on photography. One tilted element per composition. Minimum sizes: 24px on a 1920×1080 slide, 12pt in print, 12px in UI.

**Backgrounds.** Flat colour, full-bleed. Yellow is the default field; black is the contrast field; white is the utility field for menus and forms. **No gradients, no textures, no patterns, no photographic wallpaper behind text.** The only gradient in the system is `--st-scrim-bottom`, a black-to-transparent protection scrim used when type must sit over a photo.

**Photography.** Studio, single flat **#FFDD00** ground — no exceptions. The supplied shots arrived with drifting backdrops (#FEE006, #FCC705, #FBC407…); all 25 have been flood-filled to #FFDD00, and any new shot must match. Product centred and shot close, hard enough light to read the grease and the crumb. Bare hands appear in about half the shots and are the scale device — no props, no boards, no styling, no ingredients scattered around, no cool or "gourmet" grading. Warm, saturated, contrasty. The product is often the largest element on the frame and is allowed to bleed off the edge.

**Layout.** Product → message/promotion → CTA, in that visual order, every time. `--st-container` 1200px with a 24px gutter; a 4px spacing grid (`--st-space-*`); 64px between sections; 20px card padding; 16px grid gaps. Sticky elements: the site header (72px, `--st-header-h`) and the menu category bar. Mobile hit targets never below 44px (`--st-tap-min`).

**Borders and corners.** The keyline is the brand's defining graphic device, not a border. Its colour comes from `--st-keyline-ink` — black by default, **flipped to #FFCD1C inside the same dark scopes that flip the shadow**, so a control on black gets a **yellow** outline and a yellow shadow together. Weights: 2px on small chips, **3px is the standard** on buttons, cards and inputs, 5px on hero images and dialogs, 8px for poster-scale frames. Corners are hard by default — `0`, `4px` and `5px` (`--st-radius-btn`, buttons and icon buttons) are the norm, `8px` for cards, `14px` maximum, `999px` only on tags, tabs and round icon buttons. Nothing in this system has a 16px+ "app card" radius.

**Shadows.** Offset, **zero blur**: `3px 3px 0`, `6px 6px 0`, `10px 10px 0`. The colour comes from `--st-shadow-ink`, which is black by default and **flips to #FFCD1C inside any dark scope** — `.st-nav`, `.st-card--inverse`, `.st-promo--inverse`, dark toasts, or anything carrying `[data-theme="inverse"]` — so a yellow button on black still throws a readable shadow. This is a comic drop shadow, not depth. The one soft shadow, `--st-shadow-float`, is reserved for transient UI (dialogs, menus, toasts) — never on a brand surface.

**Cast shadows (the continuous kind).** A `box-shadow` traces the bounding box, which is fine on a rectangle and wrong on everything else — glyphs, cut-out artwork, starbursts. For those, the system uses a **cast**: many 1px shadow layers stacked so the extrusion is solid from the shape to its full depth, following the real silhouette.
- On any element: `.st-cast--sm` / `.st-cast` / `.st-cast--lg` / `.st-cast--xl` (2 / 4 / 6 / 10px), built from `--st-cast-*` and applied through `filter`.
- On display type: `<Display treatment="cast-sm|cast|cast-lg">` (4 / 8 / 14px), built from `--st-text-cast-*`. Cast lettering **must have a contrasting fill** — it defaults to white, and `tone="yellow"` is the brand alternative; a black fill merges into its own cast.
- The cast colour follows `--st-shadow-ink`, so it is black on light grounds and turns yellow inside a dark scope with no extra markup.
- `stroke` on `<Display>` adds a keyline around the glyphs (3px, or 5px with `stroke="lg"`) via `-webkit-text-stroke` with `paint-order: stroke fill`, so the corners stay mitered and the letterform keeps its full weight. Cast + stroke together is the full comic treatment.
- `press` makes lettering interactive: on hover the words sink +3px and drop their cast — the same gesture as a button. Only for words that are genuinely a link or trigger.
Prefer the cast over the single offset for lettering and artwork; keep the plain offset for rectangular surfaces (cards, buttons, panels).

**Transparency and blur.** Effectively unused. Two exceptions: the dialog scrim (`rgba(29,29,27,0.72)`) and the photo protection scrim. No frosted glass, no translucent cards, no backdrop-filter.

**Motion.** Snappy and short — 120ms for state changes, 180ms default, 320ms maximum, `--st-ease-snap` (`cubic-bezier(.2,.9,.2,1)`). `--st-ease-pop` adds a small overshoot for toggles and badge entrances. No fades from nothing, no long parallax, no easing-in slides. Things arrive quickly or they don't move.

**Hover / press / focus.**
- **The ground decides the button, not the variant.** On black: black fill, #FFCD1C text, keyline and shadow. On yellow: yellow fill, black text, black keyline, black shadow — always, whichever variant was requested. Only on white does the `variant` prop choose the treatment.
- Hover: the element **sinks into its own shadow** — it shifts +3px (`--st-press-shift`), the hard shadow drops away, the fill stays #FFCD1C. It reads as already being pushed down. Never an opacity fade, never a lift.
- Press: same +3px sunken geometry as hover, but the fill **flips to black with a yellow keyline** and yellow text — hover pushes the button down, press confirms it.
- Focus: a 3px solid black outline, 2px offset (yellow fill inside inputs). Never removed.
- Disabled: `--st-ink-15` fill, `--st-ink-50` text, no shadow.

**Graphic accents.** Black outlines, hard shadows, the `-3deg` tilt, comic starbursts (`Starburst`), and the supplied stickers (Bob, the smash hand, Taste It). Use **one** accent per composition — the guide is explicit that too many accents hide the offer. Never draw new mascot art or redraw the marks.

---

## Files

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper.

**`tokens/`** — `fonts.css` (the Brice `@font-face` set + the Inter Tight import), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` (element defaults, link colours).

**`assets/`**
- `fonts/` — the complete Brice family, 30 WOFF2 files (ExtraLight → Black in Condensed, SemiCondensed, Normal, SemiExpanded, Expanded).
- `logo/` — **all vector except the claim.** Logo marks: `smashtag-badge-color.svg` (primary), `smashtag-badge-black.svg`, `smashtag-badge-white.svg`, `smashtag-lockup-black.svg`. Die-cut stickers: `sticker-badge-circle.svg`, `sticker-smash.svg`, `sticker-taste-it.svg`, `sticker-burger-reloaded.svg`, `mascot-bob.svg`. Raster: `claim-we-make-it-better.png` (1400px, from the print PDF — the only mark without a vector).
- `photography/` — 25 studio shots at 1400px, every backdrop normalised to #FFDD00: `smash-{white,yellow,red,green,orange,black,brown,pink}.jpg`, `fries.jpg`, `fries-cheddar.jpg`, `frikies-cheddar.jpg`, `frikies-cheddar-bacon.jpg`, `nuggets.jpg`, `smashbox.jpg`, `drink-coca-cola.jpg`, `drink-beer.jpg`, `hand-*.jpg`.

**`guidelines/`** — 21 specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.

**`components/`** — see below. `components/components.css` holds the shared component CSS and is imported by `styles.css`.

**`ui_kits/`** — `campaign/` (social + adv formats), `web/` (marketing + ordering site), `app/` (mobile ordering). Each has its own `README.md` with provenance and caveats.

### Components

`components/core/` — **Button**, **IconButton**, **Card**, **Badge**, **Tag**, **Display**, **Starburst**, **Logo**
`components/forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**, **QuantityStepper**
`components/navigation/` — **NavBar**, **Tabs**
`components/feedback/` — **Dialog**, **Toast**, **Tooltip**
`components/commerce/` — **ProductCard**, **MenuItemRow**, **PromoBanner**

No component library, Figma file or codebase defined an inventory, so this is a standard set sized to what the brand guide asks for (CTAs, cards, promo badges, oversized type, product photography, graphic accents) plus what a burger chain's surfaces need.

**Intentional additions**
- **Logo** — wraps the supplied artwork so nobody hand-places or recolours a mark.
- **Starburst** — the guide calls for comic bursts; no vector burst was supplied, so it is a CSS `clip-path` shape.
- **QuantityStepper** — the ordering flows need it and no generic number input fits the brand.
- **MenuItemRow / ProductCard / PromoBanner** — the brand guide specifies "cards", "promo badges" and product-led promo layouts; these are those patterns made concrete.

### Iconography

No icon font, sprite or SVG set was supplied with the brand material. **Lucide 0.469.0** is substituted, loaded from CDN (`https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js`) and initialised with `lucide.createIcons()`. It is the closest match to the brand's needs: a single 2px uniform stroke, square terminals, geometric construction — it sits next to a 3px black keyline without looking thin or fussy. Icons are always `currentColor`, never filled, never coloured independently, and never larger than the text they accompany (20–24px in UI, 16px inline).

Glyphs actually used across the kits: `shopping-bag`, `plus`, `minus`, `x`, `check`, `chevron-down`, `arrow-left`, `user`, `bell`, `info`, `home`, `utensils`, `list`, `layout-grid`, `navigation`, `bike`, `alert-triangle`, `instagram`, `facebook`, `music-2`.

The brand's *own* iconography is illustrative, not systematic: the Bob mascot, the smash hand, the rooster, the sauce-cup marks on the labels. These are **artwork** (`assets/logo/`), placed via `Logo` or as an `<img>` — never redrawn, never recoloured, never used at icon size (48px minimum). Emoji are not used. Unicode glyphs are not used as icons.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```
```jsx
const { Button, Display, ProductCard, Logo } = window.SmashTagDesignSystem_921f7f;
```

Rules that matter more than the tokens: **two colours only**; **the product is the hero**; **one message, one badge, one CTA**; **hard edges and hard shadows**; **nothing gourmet, nothing minimal, nothing institutional.**
