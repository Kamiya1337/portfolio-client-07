---
name: Academic Muse
colors:
  surface: '#fdf7ff'
  surface-dim: '#dfd6f0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1ff'
  surface-container: '#f3eaff'
  surface-container-high: '#eee4ff'
  surface-container-highest: '#e8def9'
  on-surface: '#1e192b'
  on-surface-variant: '#584146'
  inverse-surface: '#332d41'
  inverse-on-surface: '#f5eeff'
  outline: '#8b7076'
  outline-variant: '#dfbec5'
  surface-tint: '#b21f5f'
  primary: '#af1b5c'
  on-primary: '#ffffff'
  primary-container: '#d03975'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c6'
  secondary: '#815065'
  on-secondary: '#ffffff'
  secondary-container: '#ffc0d9'
  on-secondary-container: '#7b4b60'
  tertiary: '#625a5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b7277'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e1'
  primary-fixed-dim: '#ffb1c6'
  on-primary-fixed: '#3f001c'
  on-primary-fixed-variant: '#8e0047'
  secondary-fixed: '#ffd8e6'
  secondary-fixed-dim: '#f3b5ce'
  on-secondary-fixed: '#330e21'
  on-secondary-fixed-variant: '#66384d'
  tertiary-fixed: '#ebdfe4'
  tertiary-fixed-dim: '#cec4c8'
  on-tertiary-fixed: '#1f1a1e'
  on-tertiary-fixed-variant: '#4c4549'
  background: '#fdf7ff'
  on-background: '#1e192b'
  surface-variant: '#e8def9'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is tailored for the modern academic who balances rigorous study with a sophisticated, gentle aesthetic. It targets students and educators in linguistics and culture, where clarity and softness are paramount.

The design style is a blend of **Minimalism** and **Tactile Softness**. It avoids the sterility of typical SaaS platforms by introducing warmth through a "luxury-cute" lens. The mood is scholarly yet approachable, professional yet personal. It leverages generous whitespace to let complex information breathe, while using thin, rose-colored borders and deep ink typography to maintain high legibility and structural authority.

## Colors

The palette is built on a foundation of **Ivory (#FFFDFB)**, which provides a warmer, more "paper-like" feel than pure white, essential for an academic context. 

- **Primary (Blush Pink):** Used sparingly for key actions, highlighted metrics, and primary accents.
- **Secondary (Soft Rose):** Dedicated to thin structural borders and decorative separators.
- **Tertiary (Pale Pink):** Applied to large containers and panel backgrounds to differentiate content sections without adding visual weight.
- **Neutral (Deep Ink):** The primary color for text and iconography, providing the high contrast necessary for comfortable reading.
- **Surface (Light Gray):** Used for non-interactive backgrounds and subtle offsets.

## Typography

Using **Plus Jakarta Sans** across all levels ensures a modern, friendly, and cohesive look. Its soft, rounded terminals align perfectly with the "cute" aspect of the design system without sacrificing the professional clarity required for academic text.

**Scale and Hierarchy:**
- **Display and Headlines:** Use heavy weights (600-700) to create clear entry points. Deep Ink color ensures they are the first thing a user sees.
- **Body Text:** Uses a standard weight with a slightly relaxed line height to facilitate long-form reading of research or journals.
- **Labels:** Small caps and increased letter spacing are used for metadata (e.g., "Môn Học", "Mã Số Sinh Viên") to distinguish technical details from narrative content.

## Layout & Spacing

This design system utilizes a **Fixed Grid** on desktop (max-width: 1200px) to maintain the "page-like" quality of a portfolio or academic paper. On mobile, it transitions to a fluid, single-column layout.

**Rhythm:**
- **Margins:** A generous 40px margin on desktop provides a sense of luxury and focus.
- **Vertical Rhythm:** Elements are stacked in 8px increments. Related items (labels and inputs) use 8px (stack-sm), while sections use 32px (stack-lg).
- **Cards:** Grouped information should always be contained within padded cards to maintain organization within the ivory background.

## Elevation & Depth

To avoid a "tech" feel, the system rejects heavy drop shadows and neon glows in favor of **Tonal Layers** and **Soft Ambient Shadows**.

- **Level 0 (Background):** Ivory (#FFFDFB). The base canvas.
- **Level 1 (Cards/Panels):** Pale Pink (#FFF3F8) or White. These are outlined with a 1px border of Soft Rose (#F4B6CF).
- **Depth:** Instead of high-offset shadows, use a very subtle "fuzz" (blur: 10px, spread: 0px, opacity: 5%) of Blush Pink to indicate slight lift on hoverable cards.
- **Separation:** Use thin horizontal rules in Soft Rose (#F4B6CF) to separate major vertical content blocks.

## Shapes

The shape language is defined by large, friendly radii that evoke a sense of approachability and "cuteness" while maintaining an organized structure.

- **Standard Containers:** Cards, image containers, and input fields use a consistent **16px** (rounded-lg) radius.
- **Buttons and Chips:** Use "Pill" shapes (**rounded-full**) for a distinct interactive feel.
- **Profile Elements:** Images should use a **24px** (rounded-xl) radius to feel softer and more personal than standard rectangular photos.

## Components

### Buttons
- **Primary:** Blush Pink background with White text. Pill-shaped.
- **Secondary:** White background, 1px Soft Rose border, Blush Pink text.
- **Ghost:** No background or border, Deep Ink text. Used for less critical navigation items.

### Cards & Panels
- Cards should have a 1px Soft Rose border. 
- Use the `label-caps` typography style at the top of the card in Blush Pink to categorize the content (e.g., "SKILLS", "CASE 01").

### Chips & Tags
- Used for categories (e.g., "Fintech", "Digital Banking").
- Styling: Soft Rose border, 12px font size, Pill-shaped.

### Input Fields
- Background: White.
- Border: 1px Soft Rose.
- Placeholder text: Muted (#6F6675).
- On focus: Border thickens to 2px Blush Pink.

### Lists
- For academic indexes, use numeric indicators in Blush Pink with a semi-bold weight to the left of the list item, separated by a vertical Soft Rose rule.