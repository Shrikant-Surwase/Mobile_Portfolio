# Portfolio Component Architecture - Visual Guide

## Before Refactoring

```
page.tsx (1000+ lines)
├── All HTML in one file
├── Mixed concerns (layout, styling, data)
├── Duplicated SVG icons throughout
├── Hardcoded data in JSX
└── Difficult to maintain
```

## After Refactoring

```
page.tsx (32 lines) ✓ CLEAN
│
├── Header
│   └── LocationIcon (from UI)
│
├── Hero
│   └── Image + profile info
│
├── CTAButtons
│   ├── PulseIndicator
│   └── DownloadIcon
│
├── SocialLinks
│   ├── MailIcon
│   ├── TwitterIcon
│   ├── GitHubIcon
│   └── LinkedInIcon
│
├── Skills
│   ├── SectionTitle
│   └── Skill badges
│       └── Skill icons (from /skills)
│
├── WorkExperience
│   ├── SectionTitle
│   └── Job cards (from WORK_EXPERIENCE constant)
│
├── Projects
│   ├── ProjectCard components
│   │   └── GitHubIcon, PlayIcon
│   └── Projects from PROJECTS constant
│
├── Blogs
│   ├── Blog links (from BLOGS constant)
│   └── ExternalLinkIcon
│
├── SpotifySection
│   └── Spotify embed (from SPOTIFY_EMBED constant)
│
├── InteractiveExperience
│   └── Patatap embed (from PATATAP_EMBED constant)
│
└── Footer
    └── Copyright info

```

## Data Flow

```
Constants (src/constants/)
├── profile.ts → Header, Hero, CTAButtons, SpotifySection
├── skills.ts → Skills component
├── experience.ts → WorkExperience component
├── projects.ts → Projects component
└── blogs.ts → Blogs component

      ↓

Sections (src/components/sections/)
├── Each section imports needed data
└── Uses UI components for rendering

      ↓

UI Components (src/components/ui/)
├── Icons.tsx → Reusable SVG icons
└── Layout.tsx → Container, Section, Button, etc.

      ↓

Main Page (src/app/page.tsx)
└── Imports all sections
    └── Clean, readable, maintainable
```

## Dependency Graph

### High-Level

```
page.tsx
  ├── @/components/sections (11 components)
  │   ├── Each imports UI components
  │   └── Each imports relevant constants
  └── No direct imports of constants or UI
```

### Icon Usage Pattern

```
Icons defined once in:
  src/components/ui/Icons.tsx

Used by:
  ├── Header.tsx (LocationIcon)
  ├── CTAButtons.tsx (DownloadIcon, PulseIndicator)
  ├── SocialLinks.tsx (MailIcon, TwitterIcon, GitHubIcon, LinkedInIcon)
  ├── Projects.tsx (GitHubIcon, PlayIcon)
  └── Blogs.tsx (ExternalLinkIcon)

✓ No duplication
✓ Easy to update icons globally
```

### Layout Components Usage

```
Layout helpers defined once in:
  src/components/ui/Layout.tsx

Used by all sections:
  ├── Container (wraps content with max-width & padding)
  ├── Section (full-width section wrapper)
  ├── SectionTitle (consistent heading style)
  ├── Button (consistent button styling)
  ├── GlassCard (card with hover effects)
  └── Badge (skill badges)

✓ Consistent styling across sections
✓ Easy to make global style changes
```

## File Statistics

| Category           | Before     | After    |
| ------------------ | ---------- | -------- |
| Main page.tsx      | 1023 lines | 32 lines |
| Component files    | 1          | 18       |
| Data files         | 0          | 4        |
| UI component files | 0          | 2        |
| Index/barrel files | 0          | 2        |

## Import Examples

### Before (Monolithic)

```tsx
// Everything in page.tsx
import dp from '../../public/dp.jpeg';
// ... then 1000+ lines of JSX
```

### After (Organized)

```tsx
// Clean, semantic imports
import {
  Header,
  Hero,
  CTAButtons,
  SocialLinks,
  Skills,
  WorkExperience,
  Projects,
  Blogs,
  SpotifySection,
  InteractiveExperience,
  Footer,
} from '@/components/sections';

// In page.tsx - just render!
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* ... */}
    </main>
  );
}
```

## Scaling Example

### Adding a New Section (e.g., "Certifications")

```
1. Create src/components/sections/Certifications.tsx
   ├── Import { Section, SectionTitle } from '@/components/ui'
   ├── Import { CERTIFICATIONS } from '@/constants/certifications'
   └── Build component

2. Create src/constants/certifications.ts
   ├── Define CertificationItem interface
   └── Export CERTIFICATIONS array

3. Update src/components/sections/index.ts
   ├── Add: export { Certifications } from './Certifications'

4. Update src/app/page.tsx
   ├── Import Certifications from sections
   └── Add <Certifications /> to JSX

✓ Minimal changes
✓ No existing code modified
✓ Clear location for each concern
```

## Maintenance Benefits

| Task                      | Before                         | After                        |
| ------------------------- | ------------------------------ | ---------------------------- |
| Update a skill            | Search through 1000+ lines     | Edit `constants/skills.ts`   |
| Change button style       | Find & replace 5+ places       | Edit `ui/Layout.tsx`         |
| Add social link           | Duplicate HTML block           | Edit `constants/profile.ts`  |
| New project               | Copy project card, change text | Edit `constants/projects.ts` |
| Fix icon SVG              | Search in huge file            | Edit `ui/Icons.tsx`          |
| Understand page structure | Read entire file               | Look at 30-line page.tsx     |
