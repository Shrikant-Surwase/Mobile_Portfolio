# Portfolio Refactoring - Component Architecture

## Overview

The portfolio page has been refactored from a single monolithic component into a well-organized, maintainable component structure following the Single Responsibility Principle.

## Folder Structure

```
src/
├── app/
│   ├── page.tsx                 # Clean entry point - imports all sections
│   ├── layout.tsx
│   ├── globals.css
│   ├── fonts.tsx
│   └── ...
├── components/
│   ├── sections/                # Feature sections
│   │   ├── index.ts            # Barrel export
│   │   ├── Header.tsx          # Top navigation with time & location
│   │   ├── Hero.tsx            # Profile card & intro
│   │   ├── CTAButtons.tsx       # Call-to-action buttons
│   │   ├── SocialLinks.tsx      # Social media links
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── WorkExperience.tsx   # Employment history
│   │   ├── Projects.tsx         # Portfolio projects
│   │   ├── Blogs.tsx            # Blog links
│   │   ├── SpotifySection.tsx   # Spotify embed
│   │   ├── InteractiveExperience.tsx  # Patatap embed
│   │   └── Footer.tsx           # Footer
│   └── ui/                      # Reusable UI components
│       ├── index.ts            # Barrel export
│       ├── Icons.tsx           # SVG icon components
│       └── Layout.tsx          # Layout helpers & components
└── constants/                   # Data & configuration
    ├── profile.ts              # Profile info & CTAs
    ├── skills.ts               # Skills data
    ├── experience.ts           # Work experience
    ├── projects.ts             # Projects data
    └── blogs.ts                # Blog entries
```

## Component Breakdown

### Section Components (`src/components/sections/`)

Each section is a self-contained, focused component:

- **Header**: Displays timezone and location info
- **Hero**: User profile image, name, title, and bio
- **CTAButtons**: LinkedIn and CV download buttons
- **SocialLinks**: Contact links (Email, Twitter, GitHub, LinkedIn)
- **Skills**: Technology skills organized by category
- **WorkExperience**: Employment history with achievements
- **Projects**: Portfolio projects organized by category (Web, Chrome Extension, VSCode)
- **Blogs**: Medium blog links
- **SpotifySection**: Spotify embed showcase
- **InteractiveExperience**: Patatap interactive embed
- **Footer**: Copyright and credits

### UI Components (`src/components/ui/`)

**Icons.tsx**: Reusable SVG icon components

- LocationIcon, MailIcon, DownloadIcon
- GitHubIcon, LinkedInIcon, TwitterIcon
- ExternalLinkIcon, PlayIcon, PulseIndicator

**Layout.tsx**: Shared layout utilities

- `Container`: Manages max-width and padding
- `Section`: Wrapper for full-width sections
- `SectionTitle`: Styled section heading
- `Button`: Consistent button styling
- `GlassCard`: Card with hover effects
- `Badge`: Skill/tag badge component

### Data/Constants (`src/constants/`)

Separated all static data into dedicated files:

- **profile.ts**: Profile info, social links, Spotify/Patatap embeds
- **skills.ts**: All skill categories and icons
- **experience.ts**: Work history and achievements
- **projects.ts**: Portfolio projects with images and links
- **blogs.ts**: Blog posts and URLs

## Usage & Imports

### Main Page Entry Point

```tsx
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

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center antialiased">
      <Header />
      <Hero />
      {/* ... other sections ... */}
    </main>
  );
}
```

### Importing Components & Utils

```tsx
// Import UI components
import { Container, Section, Button } from '@/components/ui';

// Import icons
import { GitHubIcon, MailIcon } from '@/components/ui';

// Import data
import { SKILLS } from '@/constants/skills';
import { PROJECTS } from '@/constants/projects';
```

## Benefits of This Architecture

✅ **Single Responsibility**: Each component handles one concern
✅ **Maintainability**: Easy to locate and update specific sections
✅ **Reusability**: UI components can be used across different sections
✅ **Scalability**: Easy to add new sections or modify existing ones
✅ **Data Separation**: Constants are decoupled from presentation
✅ **Clean Page File**: Main `page.tsx` is clean and readable (32 lines vs 1000+)
✅ **Type Safety**: Interfaces defined for all data structures
✅ **No Duplication**: Icons and components are defined once

## How to Modify

### Add a New Skill

Edit `src/constants/skills.ts`:

```tsx
const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      {
        label: 'Python',
        icon: '/skills/python.svg',
        ariaLabel: 'Python',
      },
      // ... add new skill
    ],
  },
];
```

### Add a New Project

Edit `src/constants/projects.ts`:

```tsx
{
  id: 'new-project',
  name: 'Project Name',
  description: 'Description',
  image: '/_next/image?url=%2FProjects%2Fimage.png&w=828&q=75',
  githubUrl: 'https://github.com/...',
}
```

### Create a New Section

1. Create `src/components/sections/NewSection.tsx`
2. Import required UI components and data
3. Add export in `src/components/sections/index.ts`
4. Import in `src/app/page.tsx`
5. Add to main component JSX

### Modify UI Components

Edit files in `src/components/ui/` to change:

- Styling (Tailwind classes)
- Layout structure
- Icon definitions

## Design Principles Applied

- **DRY (Don't Repeat Yourself)**: Icons and common patterns are reused
- **Separation of Concerns**: Data, UI, and layout are separated
- **Composition**: Complex UIs are built from smaller components
- **Naming**: Clear, descriptive names for files and components
- **Type Safety**: TypeScript interfaces for data structures

## Notes

- All icons are self-contained components to avoid external dependencies
- Data structures include TypeScript interfaces for type safety
- Tailwind CSS classes are used consistently throughout
- Components are fully responsive with sm: breakpoints
- No props drilling - each component gets what it needs from constants

## Future Enhancements

- Extract theme colors into CSS variables or constants
- Add component props for customization
- Create a reusable `ProjectCard` component for projects
- Add animation/transition utilities
- Consider adding a `useNavigation` hook for smooth scrolling
