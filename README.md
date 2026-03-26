# Peppwise

**Independent Compliance Advisory — Malaysia e-Invoice & Singapore Peppol**

> [peppwise.co](https://peppwise.co) · hello@peppwise.co

---

## What Is Peppwise

Peppwise is an independent compliance consulting brand specialising in two distinct areas:

| Specialisation | Scope |
|---|---|
| **Malaysia e-Invoice Compliance** | LHDN / MyInvois mandate — IRBM API integration, all 5 document types, Phase 2 (1 Jul 2025) & Phase 3 (1 Jan 2026) readiness |
| **Singapore InvoiceNow & Peppol** | IMDA-certified Access Point onboarding, 5-Corner Model (IRAS C5), cross-border MY↔SG document exchange |

---

## Website

Single-file HTML/CSS/JS website (`peppwise.html`) — no framework dependencies, no build step.

### Page Sections

1. **Split-screen hero** — dual-panel with expand/collapse interaction
2. **Malaysia e-Invoice** (`#einvoice`) — 5 services, 8 tech pills, compliance feature card
3. **Singapore InvoiceNow & Peppol** (`#peppol`) — 5 services, 8 tech pills, mandate feature card
4. **Compliance Roadmap** (`#roadmap`) — 5-node timeline (MY Phase 1–3, SG InvoiceNow mandates)
5. **Technical Architecture** (`#techstack`) — e-Invoice document lifecycle + Peppol 4-Corner → 5-Corner flow
6. **Engagement Models** (`#engage`) — Full-Time / Part-Time Retainer / Project-Based
7. **Contact** (`#contact`)

### Design System

| Token | Value |
|---|---|
| Background | `#0C0A09` |
| e-Invoice accent | `#0EA5E9` (sky blue) |
| Peppol accent | `#CA8A04` (gold) |
| Heading font | EB Garamond |
| Body font | Lato |

### Features

- Scroll-triggered reveal animations (IntersectionObserver)
- Mobile hamburger menu with full-screen overlay
- Responsive: desktop / tablet / mobile breakpoints
- Pure vanilla JS — no dependencies

---

## Deployment

Recommended: **Netlify** or **Vercel** (free tier, static hosting)

1. Connect this repo to Netlify/Vercel
2. Set publish directory to `/` (root)
3. Point custom domain `peppwise.co` to deployment

---

## Pending Tasks

- [ ] Register domain `peppwise.co`
- [ ] Set up `hello@peppwise.co` email
- [ ] Deploy to Netlify / Vercel
- [ ] Create Peppwise LinkedIn page
- [ ] Add Calendly / WhatsApp link to contact section
- [ ] Add anonymised testimonials / case study snippets
- [ ] Build separate landing pages per specialisation (for ad targeting)
- [ ] Add meta tags & Open Graph (social sharing previews)
- [ ] Add favicon

---

*© 2026 Peppwise · Independent Compliance Advisory · Malaysia · All engagements strictly confidential · NDA available on request*
