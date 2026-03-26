# Peppwise — Project Brief & AI Context File

> Feed this file to any AI model (Claude Code, Cursor, Windsurf, etc.) at the start of a session to get full context on the Peppwise project without re-explaining everything.

---

## 1. What Is Peppwise

**Peppwise** is an independent compliance consulting brand operated by a single expert consultant. It is a deliberately incognito brand — no personal name, no photo, no employer references anywhere.

The brand covers **two distinct, separate specialisations**:

| # | Specialisation | Audience |
|---|---------------|----------|
| 1 | **Malaysia e-Invoice Compliance** (LHDN / MyInvois mandate) | Malaysian businesses — CFOs, Finance Directors, IT/ERP teams, SMEs |
| 2 | **Peppol Network Integration** (cross-border B2B e-invoicing) | Regional companies expanding into Peppol countries, multinationals, shared service centres |

These are **not the same thing** and must always be presented as two separate, independent specialisations — never merged or conflated.

---

## 2. Brand Identity

| Attribute | Value |
|-----------|-------|
| **Brand name** | Peppwise |
| **Tone** | Bold, premium, high-end agency — not corporate, not generic SaaS |
| **Personal info on site** | None — fully incognito |
| **NDA policy** | Available on request — mention in footers and contact sections |
| **Contact email** | hello@peppwise.co *(update when domain is registered)* |
| **Suggested domain** | peppwise.co |

---

## 3. Website — Current State

**File:** `peppwise.html` (single-file HTML/CSS/JS, no framework dependencies)

### Design System

| Token | Value |
|-------|-------|
| Background | `#0C0A09` |
| Surface | `#1C1917` |
| Surface 2 | `#292524` |
| Border | `rgba(255,255,255,0.07)` |
| Gold accent | `#A16207` / light `#CA8A04` |
| e-Invoice accent | `#0EA5E9` (sky blue) |
| Peppol accent | `#A16207` (gold) |
| Heading font | EB Garamond (Google Fonts) |
| Body font | Lato (Google Fonts) |
| Grain texture | Inline SVG noise overlay, `opacity: 0.4` |

### Page Structure

1. **Fixed nav** — logo + links + gold CTA button
2. **Split-screen hero** — full viewport, two equal panels
   - Left panel: Malaysia e-Invoice (blue identity)
   - Right panel: Peppol (gold identity)
   - Hover = subtle expand preview
   - Click = dominant expand + collapse other side to slim strip
   - Click collapsed strip = reset to 50/50
3. **Malaysia e-Invoice section** (`#einvoice`) — dark blue gradient, 4 service items + feature card
4. **Peppol section** (`#peppol`) — dark amber gradient, 4 service items + feature card
5. **Engagement Models section** (`#engage`) — 3 cards: Full-Time / Part-Time Retainer / Project-Based
6. **Contact section** (`#contact`) — email link + two CTA buttons
7. **Footer** — confidentiality note

### Interaction Logic (vanilla JS)

- `expandPanel(side)` — expands left or right panel
- Hover intent: `mouseenter/mouseleave` on each panel adjusts `gridTemplateColumns` softly
- Collapsed side shows rotated label (e.g. "← e-Invoice MY")
- Smooth scroll on all anchor links

---

## 4. Engagement Models (always offer all three)

| Model | Description |
|-------|-------------|
| **Full-Time** | Embedded dedicated specialist, ongoing compliance |
| **Part-Time / Retainer** | Monthly or weekly hour packages, no full-time overhead |
| **Project-Based** | Fixed scope, timeline, deliverable — fixed-price or milestone billing |

---

## 5. Malaysia e-Invoice — Key Technical Context

- Regulatory body: **LHDN (Inland Revenue Board of Malaysia)**
- Portal: **MyInvois**
- Standard: **UBL 2.1 XML**
- Classification codes: **MSIC codes**
- Rollout phases:
  - **Phase 1** — companies with turnover > RM100M (already live)
  - **Phase 2** — companies with turnover > RM25M (deadline approaching)
  - **Phase 3** — all remaining businesses
- Common ERPs involved: SAP, Oracle, Xero, SQL Accounting, custom systems
- Key deliverables: LHDN API integration, middleware, QR code generation, rejection handling, team training, SOPs

---

## 6. Peppol — Key Technical Context

- Global B2B e-invoicing interoperability network
- **50+ countries** on the network (growing every quarter)
- Key markets: Singapore (IMDA), Australia (ATO), Japan, Vietnam, Thailand, EU (EN16931)
- Malaysia authority: **MDEC** (designated Peppol authority)
- Malaysia's MyInvois has a Peppol interoperability roadmap
- Technical components: **4-Corner Model**, **Access Point**, **SMP/SML**, **AS4 Protocol**, **BIS 3.0 document types** (invoices, orders, credit notes, catalogues)
- Key deliverables: Access Point selection & onboarding, SMP registration, BIS document mapping, cross-border trading readiness, market expansion advisory

---

## 7. Target Clients

### For Malaysia e-Invoice
- Mid-size manufacturers (turnover > RM25M, Phase 2 targets)
- Logistics & freight companies
- Trading companies with high B2B invoice volume
- Professional services firms (audit, legal, consulting)
- Healthcare distributors
- Retail chains with supplier invoicing

### For Peppol
- Malaysian companies exporting to Singapore, Australia, EU
- Multinational subsidiaries in Malaysia
- Shared Services Centres (SSCs) managing regional AP/AR
- Companies in countries newly joining the Peppol network

### Where to Find Clients
- **LinkedIn** — Search "Finance Manager Malaysia", "CFO Malaysia", "ERP Manager Malaysia", filter by company size
- **Bursa Malaysia** — All listed companies need compliance
- **SSM / CTOS** — Companies with revenue above RM25M
- **Malaysian business directories** — e.g. bizdirectory.com.my

---

## 8. Cold Email Strategy

### AI Prompt (use this to generate cold emails)

```
You are a cold email copywriter specializing in B2B compliance consulting.

Write a cold email for an independent consultant who specializes in:
1. Malaysia e-Invoice compliance (LHDN / MyInvois mandate)
2. Peppol network integration for cross-border e-invoicing

Target recipient: [CFO / Finance Director / IT Manager] at a [company type] company in Malaysia with approximately [X] employees.

The consultant offers: full-time hire, part-time retainer, or project-based engagements.

Requirements:
- Subject line must create urgency without being clickbait (reference the compliance deadline or Peppol expansion)
- Keep the email under 150 words
- Do NOT mention the consultant's name or current employer
- Do NOT use generic phrases like "I hope this email finds you well"
- Open with a specific pain point relevant to their industry
- One clear CTA: a 20-minute discovery call
- Tone: professional, direct, peer-to-peer (not salesy)
- Sign off with brand name only: Peppwise

Write 3 variations:
- Version A: urgency angle (deadline approaching)
- Version B: opportunity angle (Peppol expansion = competitive advantage)
- Version C: risk angle (penalties for non-compliance)
```

---

## 9. Privacy & Operational Security

- **No personal name** anywhere on the website, social profiles, or outreach
- Use **hello@peppwise.co** as the sole contact point
- Create a **separate LinkedIn** under the Peppwise brand (not personal profile)
- **NDA available** — mention proactively to build client trust
- All client data handled with full discretion

---

## 10. Pending / To-Do

- [ ] Register domain `peppwise.co`
- [ ] Set up `hello@peppwise.co` email
- [ ] Create Peppwise LinkedIn page
- [ ] Deploy website (Netlify / Vercel recommended — free tier, no backend needed)
- [ ] Add real testimonials or case study snippets (anonymised) once available
- [ ] Add WhatsApp or Calendly link to contact section
- [ ] Build a separate landing page per specialisation for ad targeting (future)

---

*Last updated: 2025 · Peppwise · Independent Compliance Advisory · Malaysia*
