# 🎬 CINESYNC — MASTER STUDY DOCUMENT
## v4 | Status: ALL DECISIONS LOCKED ✓
(આ file = project નો એક જ સત્ર source; દરેક નવો નિર્ણય આમાં update)

═══════════════════════════════════════
# 1. VISION & PHILOSOPHY (Final)
═══════════════════════════════════════
- ભારતીય film industry માટે બનેલી app (પછી international-ready)
- Scope: PRE-PRODUCTION + SHOOTING (Post/Marketing = future version)
- Direction + Production team → એક જ project પર real-time કામ
- કોઈ competitor ની copy નહીં

> CORE PHILOSOPHY: "Extremely powerful features, but as easy to use as water."

Tagline: "Sync Your Story. Sync Your Crew. Sync Your Production."
Category: PWA (installable — Android/iOS/laptop/tablet, offline-capable)

═══════════════════════════════════════
# 2. FINAL DECISIONS (LOCKED ✓)
═══════════════════════════════════════
✓ UI ભાષા: ENGLISH ONLY (script translation feature માં)
✓ Menu structure: BEST-OF-BOTH merge (17-menu + PRD 14-module — નીચે final)
✓ OFFLINE WRITES: હા — offline માં edit ાય, નેટ આવે એટલે sync
  (PRD નું "write requires reconnection" REJECTED)
✓ AI features: હમણાં નહીં — OFFLINE-first પછી, cloud AI Stage2 માં
✓ Build: Stage 1 MVP (single-file HTML, LocalStorage, copy-paste-save)
  → Stage 2 PRO (Next.js PWA, server, real-time) — Stage 1 ની lessons વપરાશે
⏳ Theme: Dark default જેવું લાગે (PRD), Light/System option — build માં જોઈશું

═════════════════════════════════════
# 3. ભારતીય USP FEATURES (કોઈ competitor પાસે નથી)
═══════════════════════════════════════
⭐ Star Date Management — schedule નો પાય (TOP priority)
⭐ Songs Module — અલગ schedule section
⭐ ભારતીય script format (દ્રશ્ય - અંદર/બહાર - દિવસ/રા) + INTL (INT./EXT.)
⭐ Call Sheet: "Shot Starting" style + PDF/IMAGE export (WhatsApp manual share;
   Business API + read receipts = Stage 2)
⭐ Payments & Advances (નગદ/UPI/advance)
⭐ Rental vendors (camera/lights ભાડે)
⭐ Offline-first (weak internet + shooting locations reality)
⭐ Colors automatic — user ને color codes નું જ્ાન ન જોઈએ

═══════════════════════════════════════
# 4. FINAL MENU STRUCTURE (BEST-OF-BOTH MERGE — LOCKED ✓)
═══════════════════════════════════════
Merge logic: PRD ની collaboration/permission/UX પ્રથાઓ + તમારી
workflow-આધારિત ઊંડી structure. Workspace-level અલગ, Project-level અલગ.

── WORKSPACE LEVEL ──
🏠 Dashboard ▶ Projects grid, Setup Checklist widget, Quick Stats,
   Notifications/Activity feed
📊 Projects ▶ All (search/sort/filter), Create New (+ templates),
   Join with Code
👥 Team & Contacts ▶ Members & Roles (Owner/Admin/Dept Head/Crew/Viewer/Guest),
   Master Contacts Directory (workspace-level, no duplicate re-entry,
   assign to projects single-click), Permissions
✅ Tasks ▶ Kanban Board, Calendar view, List view, My Tasks
📝 Notes ▶ Rich text notes list + editor
⚙️ Workspace Settings ▶ My Account, Billing & Plan, Appearance
 (Light/Dark/System), Language & Region, Data Export/Backup

── PROJECT LEVEL (કામ ના ક્રમ પ્રમાણે) ──
✍️ STORY & SCRIPT ▶ Synopsis & Pitch, Beat Board (+ templates:
   3-Act/5-Act/Save the Cat/Hero's Journey), Index Cards,
   Characters, Screenplay Editor (ભારતીય + INTL format, auto-format,
   autocomplete), Revisions & Color Drafts (+ version history),
   Multi-language translation (script content માટે)

🔍 BREAKDOWN ▶ Scene Breakdown Sheets, Script Tagging (inline quick-tag
   popover — text select → tag), Elements Database, Department Summaries,
   Scene Filter builder + PDF, Color legend chip strip (auto)

🎭 CASTING & CREW ▶ Character Requirements, Auditions & Screen Tests
   (pipeline), Talent Directory & Contracts, ⭐ Actor Dates & Fees
   (calendar + per-day/full/sign), Crew List & Department Hierarchy,
   Relationship graph (character links)

📍 LOCATIONS ▶ Scouting/Recce, Location Directory (photos/contact/
   ભાડું/linked scenes), Tech Checklists, Permits & Clearances

🖼️ VISUALS ▶ Storyboard (AI generation = Stage 2; manual now),
   Shot List (angle/lens/movement/duration), Mood Boards,
   Camera Plots & Floor Plans, Aspect Ratio selector (16:9, 2.39:1 etc.)

🔧 EQUIPMENT & GEAR ▶ Camera & Lens Package, Lighting & Grip List,
   Sound Gear Checklist, Rental Directory (vendors + rates)

📅 SCHEDULING ▶ Stripboard (drag-drop, color-coded, Boneyard for
   unscheduled scenes, "Create Strips" wizard, bulk actions),
   ⭐ Song Schedule (song no., choreographer, dancers, set, status),
   Production Calendar (day-by-day, drag-drop, non-working days manager),
   DOOD Report (SW/W/WF/H/TR legend), ⭐ Conflict Detection
   (cast/crew/location double-booking auto-warning),
   Schedule Versions (multiple Active/Inactive)

📄 CALL SHEETS ▶ Builder (auto-populated from breakdown + schedule —
   no manual re-entry; sections: header, weather, location, schedule table,
   cast times, extras/costume/makeup/camera sections, contacts,
   customise/reorder sections), ⭐ ભારતીય times (Crew call/Shot Starting/
   Lunch/Pack-up), Export PDF + IMAGE, Distribution log
   (Stage 2: Email/SMS/WhatsApp + read receipts)

🎬 ON-SET & OPERATIONS ▶ Script Supervisor/Continuity Logs (+ photos),
   Take Logs, Daily Progress Report (DPR)

💰 BUDGET & ACCOUNTS ▶ Budget Dashboard (charts: Estimated vs Actual
   vs Paid vs Variance), Top Sheet, Detailed Breakdown
   (sticky category, search, filter by dept/status),
   Fringes & Globals manager, Petty Cash, ⭐ Payments & Advances,
   Vendors, Currency selector (INR default + others)

📈 REPORTS ▶ Project overview (scenes done vs remaining, budget burn
   rate, schedule adherence %), Exportable PDF summary (producers/investors)

⚖️ LEGAL & VAULT ▶ Contracts & NDAs, Talent Release Forms,
   Music/Rights, Secure Document Storage

📋 Project Settings ▶ General (name/dates/poster), Team & Roles
   (granular per project), Departments Config, Calendar defaults
  non-working days), Custom Tag Categories, Integrations (Stage 2)

⭐ GLOBAL: Command Palette (Ctrl+K) — jump anywhere, quick actions

═══════════════════════════════════════
# 5. USER ROLES (PRD-approved ✓)
═══════════════════════════════════════
Owner (full+billing) | Admin | Producer/Dept Head (scoped access)
| Crew Member (view schedule/call sheets/own tasks) | Client/Viewer
(read-only, watermarked) | Guest (invite link, time-limited)
Key: Workspace master Contacts → assign to any project, no duplicates

═══════════════════════════════════════
#6. FEATURE DETAILS (Approved ✓)
═══════════════════════════════════════
## Screenplay
- ભારતીય + INTL format; auto-format; element toolbar; scene list sidebar
  (search, drag-re); version history; pages/8ths
## Breakdown
- 15 categories auto-color: Cast, Extras/BG, Stunt, Props, Vehicles,
  Animals, Costume, Makeup/Hair, SFX, VFX, Sound, Equipment, Set,
  Security, Notes; inline quick-tag popover (top 5 recent + more)
## Scheduling
- Stripboard: location-wise grouping, night shoots ભેગા, pages/day
  target (ભારતીય 2-4), Boneyard, bulk actions
- Conflict detection mandatory; DOOD grid (cast × days)
- Non-working days set once at project level, auto-applied everywhere
- Songs: અલગ block scheduling
## Call Sheet
- Auto-populate from breakdown (mandatory); drag-reorder sections;
  hide/show sections; ભારતીય times; weather; hospital/safety note;
  PDF + IMAGE export
## Budget
- Dashboard charts top; detailed table below; fringes (%/flat),
  globals; estimate vs actual vs paid vs variance colors;
  daily cost report; INR default
## Casting
- Date calendar + fees structures; audition pipeline
  અરજી→Shortlist→Audition→Screen Test→Final
## Locations
- Card: photos, contact, ભાડું, linked scenes, power/toilet/parking;
  tech recce checklist; permits
## On-Set
- Continuity logs + photos; take logs; DPR (pages done, scenes, pending)
## UX Rules (from PRD audit — mandatory)
- Empty states: illustration + description + tutorial link + primary CTA
- Search + filter for >20 rows lists
- Export PDF minimum everywhere; Excel/CSV where useful
- Persistent breadcrumb; project switcher with role badge
- Responsive: desktop-first → tablet → mobile; virtualize 100+ row tables
 Keyboard accessible; ARIA labels

═══════════════════════════════════════
# 7. OFFLINE-FIRST ARCHITECTURE (REDESIGNED ✓)
═══════════════════════════════════════
PRD નું "offline read-only" REJECTED. નવું model:
- Service Worker: app shell cache + background sync
- Local database (IndexedDB) = primary write store
- Writes પહેલા local માં → નેટ હોય તો server sync (queue + conflict rules)
- Conflict resolution: last-write-wins per field + change log
- Offline status indicator (banner) + sync pending count
- Stage 1: LocalStorage જ (તે જ offline-first નો પાયો)

═══════════════════════════════════════
# 8. AI STRATEGY (Stage 2 — offline પહેલા ✓)
═══════════════════════════════════════
હમણાં: બધું manual + fast UX (quick-tag, wizards, auto-populate)
Stage 2: AI auto-breakdown (OpenAI), AI storyboards, AI Dude chat,
script translation, AI schedule re-organizer
Note: AI = cloud + cost વાળું; offline-first foundation પછી જ

═══════════════════════════════════════
# 9. BUILD PLAN
═════════════════════════════════════
### STAGE 1 — MVP (single-file HTML,Storage, English UI)
Phase 0: Design System (colors/fonts/buttons/dark-light)
Phase 1: Shell + Dashboard + Projects (setup checklist) ⭐ પહેલો ડિલિવરી
Phase 2: Story & Script (Screenplay + Beats + Index Cards + Characters)
Phase 3: Breakdown (tagging + elements + filters)
Phase 4: Scheduling (stripboard + songs + calendar + DOOD + conflicts)
Phase 5: Call Sheets (auto-populate + PDF/image)
Phase 6: Budget (dashboard + top sheet + detailed + payments)
Phase 7: Casting & Crew + Locations
Phase 8: Equipment + Team/Contacts + Tasks + Notes + Legal
Phase 9: On-Set module + Reports
Phase 10: Polish + Exports + Backup + PWA wrap

### STAGE 2 — PRO (Next.js 14 + TypeScript + PostgreSQL + Prisma
+ Socket.io real-time + Serwist PWA + Cloudflare R2 + NextAuth)
(જૂની files ની ભૂલો fixed — decisions log માં નોંધેલી)

═══════════════════════════════════════
# 10. TECHNICAL FIXES LOG (Stage 2 માટે નોંધ)
═══════════════════════════════════════
- "dnd-kit" ❌ → @dnd-kit/core + @dnd-kit/sortable
- next.config.js: `import path from "path"` ખૂટતું
- tsconfig include path ખોટો; orientation: portrait ❌ → any/landscape-friendly
- next-pwa → Serwist; PDF: એક જ tool (pdf-lib or Puppeteer)
- State: Zustand જ; Storage: Cloudflare R2 default
- Manifest theme_color: app brand color (white ❌)

═══════════════════════════════════════
# 11. DECISIONS LOG (સંપૂર્ણ ઇતિહાસ)
═══════════════════════════════════════
✓ Scope = Pre-production + Shooting; Post/Marketing future
✓ UI = English only; script translation = feature
✓ Menus = best-of-both merge (Workspace/Project split + workflow order)
✓ Offline WRITES mandatory; PRD read-only rejected
✓ AI = Stage 2 (offline પહેલા)
✓ Songs = Scheduling sub-menu; Star Dates = Casting sub-menu
✓ "Payments & Advances" (Payroll નહીં)
✓ Continuity photos → logs ની અંદર
✓ Dark mode default (PRD), Light/System options
✓ Roles: 6-role granular system; workspace master contacts
✓ Conflict detection mandatory; Boneyard; non-working days manager
✓ Command Palette Ctrl+K; Setup Checklist widget; Reports module
✓ Build = Stage 1 MVP → Stage 2 Pro
✓ Seed/demo data mandatory per phase (demo-able immediately)

═════════════════════════════════════
# 12. RULES (દરેક session માટે)
═══════════════════════════════════════
1. આ file = single source of truth; નવો નિર્ણય → file update
2. તમારી approval વગર કોઈ નવી file/code નહીં
3. દરેક delivery = complete working file (<100KB), copy-paste-save-replace
4. Stage 1: કોઈ server/database — LocalStorage only, offline-first
5. દરેક phase પહેલા તમારી OK લઈને જ આગળ
6. ઉતાવળ નહીં — અભ્યાસ પહેલા, code પછી
