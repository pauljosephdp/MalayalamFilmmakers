# Malayalam Filmmakers

A dark cinematic single-page website for the Malayalam Filmmakers community — bringing together directors, cinematographers, scriptwriters, crew, agencies, and production houses across the Malayalam film and content industry. Founded by Paul, operating under LowLightKing Productions Pvt Ltd, Kochi.

## Site Structure

### Sections (top to bottom)

| Section | ID | Description |
|---|---|---|
| Sticky Header | `#siteHeader` | Fixed top bar with logo and "Join Community" WhatsApp link. Fades in after scrolling 25% of the hero. |
| Hero | `#hero` | Full-screen centered section with logo, tagline "Celebrating Malayalam Talent", meetup subtext, and WhatsApp CTA button. Includes animated scroll indicator. |
| About | `#about` | "What is Malayalam Filmmakers?" — editorial body copy describing the community's purpose. |
| Community Values | `#values` | Three cards: Good Vibes Only, Bridge Builders, Celebrate Talent. Gold top-bar reveal on hover. |
| Join | `#join` | Two side-by-side CTAs — "Join WhatsApp Community" and "Follow Our Channel". |
| Contact | `#contact` | Three-column grid: Phone (+91 99953 70707), Email (productions@lowlightking.com), Address (LowLightKing Productions, Ernakulam). |
| Social | `#social` | Icon row linking to Facebook, Instagram, X, YouTube, LinkedIn. |
| Sister Brands | — | Footer strip with links to LowLightKing Productions and FullFrameGear Pre-owned. |
| Footer | — | © 2026 Malayalam Filmmakers. Built by Gallivant. |

## File Structure

```
├── index.html          # Page structure and content
├── css/
│   └── style.css       # All styles (tokens, layout, components, animations)
├── js/
│   └── main.js         # Scroll behaviour, fade-in observer, smooth anchors
├── _headers            # Cloudflare Pages response headers
├── _redirects          # Cloudflare Pages redirect rules
└── wrangler.jsonc      # Cloudflare Workers config
```

## Design System

**Typography**
- Headings: Playfair Display (serif, Google Fonts)
- Body: DM Sans (Google Fonts)

**Colour Palette**
- Background: `#0A0A0A`
- Text: `#F5F0E8`
- Accent (gold): `#D4A017`
- Card background: `#141414`
- Border: `#242424`

**Visual Details**
- Animated film grain overlay (fixed, CSS SVG feTurbulence)
- CRT scan-line texture on hero
- IntersectionObserver scroll fade-in on all sections
- Sticky header with frosted glass (`backdrop-filter: blur`) on scroll
- Mobile-first, responsive down to 375 px

## Links

- WhatsApp Community: https://chat.whatsapp.com/GiJkOdolUGG9RzI9HG8bSz
- WhatsApp Channel: https://whatsapp.com/channel/0029VbAQwZPGU3BIptBv841T
- Facebook: https://www.facebook.com/MalayalamFilmmakers
- Instagram: https://www.instagram.com/malayalamfilmmakers/
- X: https://x.com/malayalammakers
- YouTube: https://www.youtube.com/@malayalamfilmmakers
- LinkedIn: https://www.linkedin.com/company/malayalamfilmmakers/
