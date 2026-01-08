# Quick Reference Guide

## File Locations

### Components

- Sections: `src/components/sections/`
- UI/Shared: `src/components/ui/`
- Barrel exports: `index.ts` in each folder

### Data/Constants

- Profile info: `src/constants/profile.ts`
- Skills: `src/constants/skills.ts`
- Work experience: `src/constants/experience.ts`
- Projects: `src/constants/projects.ts`
- Blogs: `src/constants/blogs.ts`

### Main Page

- Entry point: `src/app/page.tsx`

## Common Tasks

### 1. Update Profile Name/Title

**File**: `src/constants/profile.ts`

```tsx
export const PROFILE = {
  name: 'Your Name',
  title: 'Your Title',
  // ...
};
```

### 2. Add a Skill

**File**: `src/constants/skills.ts`

```tsx
{
  label: 'Skill Name',
  icon: '/skills/icon.svg',
  ariaLabel: 'Skill Name',
}
```

### 3. Add Work Experience

**File**: `src/constants/experience.ts`

```tsx
{
  role: 'Job Title',
  company: 'Company Name',
  period: 'Date Range',
  description: 'What you did',
  achievements: [
    { projectName: 'Project', projectDescription: 'Description' }
  ],
}
```

### 4. Add a Project

**File**: `src/constants/projects.ts`

```tsx
{
  id: 'project-id',
  name: 'Project Name',
  description: 'Description',
  image: 'image-url',
  demoUrl: 'optional-url',
  githubUrl: 'optional-url',
}
```

### 5. Add a Blog Post

**File**: `src/constants/blogs.ts`

```tsx
{
  id: 'blog-id',
  title: 'Blog Title',
  url: 'https://medium.com/...',
  ariaLabel: 'Read blog: Blog Title',
}
```

### 6. Update Section Style

**Files**: `src/components/sections/*.tsx`

```tsx
// Modify Tailwind classes in the component
// Look for className attributes
```

### 7. Change Button Style

**File**: `src/components/ui/Layout.tsx`

```tsx
export const Button = ({...}) => (
  <a className="flex items-center ..." // Modify here
  >
    {children}
  </a>
);
```

### 8. Update Icon

**File**: `src/components/ui/Icons.tsx`

```tsx
export const MyIcon = () => <svg>{/* Update SVG here */}</svg>;
```

## Import Patterns

### Import Section Components

```tsx
import { Header, Hero, Skills } from '@/components/sections';
```

### Import UI Components

```tsx
import { Button, Container, Section } from '@/components/ui';
```

### Import Icons

```tsx
import { GitHubIcon, MailIcon } from '@/components/ui';
```

### Import Data

```tsx
import { PROFILE } from '@/constants/profile';
import { SKILLS } from '@/constants/skills';
import { WORK_EXPERIENCE } from '@/constants/experience';
import { PROJECTS } from '@/constants/projects';
import { BLOGS } from '@/constants/blogs';
```

## Component Props (Reference)

### Button Component

```tsx
<Button
  href="url"
  target="_blank"
  rel="noopener noreferrer"
  className="additional-classes"
  ariaLabel="accessibility-label"
>
  Button Content
</Button>
```

### Section Component

```tsx
<Section className="extra-classes" id="section-id">
  Content here
</Section>
```

### Container Component

```tsx
<Container className="extra-classes">Content here</Container>
```

## Styling

### Tailwind Classes Used

- Colors: `text-white`, `text-gray-400`, `text-[#8ab4f8]`
- Spacing: `px-4`, `py-2`, `gap-3`
- Effects: `hover:border-[#c766ff]`, `transition`
- Responsive: `sm:`, `md:` prefixes
- Sizing: `w-full`, `h-auto`, `rounded-lg`

### Dark Theme Colors

- Background: `bg-[#0e0e0e]`, `bg-[#18181b]`
- Borders: `border-[#27272a]`, `border-[#35353a]`
- Text: `text-white`, `text-gray-400`
- Accent: `text-[#c766ff]`, `text-[#8ab4f8]`

## Component Tree

```
Home (page.tsx)
├── Header
├── Hero
├── CTAButtons
├── SocialLinks
├── Skills
├── WorkExperience
├── Projects
├── Blogs
├── SpotifySection
├── InteractiveExperience
└── Footer
```

## Data Structure Examples

### SkillCategory

```tsx
interface SkillCategory {
  title: string;
  subtitle?: string;
  skills: Skill[];
}
```

### Skill

```tsx
interface Skill {
  label: string;
  icon: string;
  ariaLabel: string;
}
```

### Project

```tsx
interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}
```

### Blog

```tsx
interface Blog {
  id: string;
  title: string;
  url: string;
  ariaLabel: string;
}
```

## Troubleshooting

### Component not showing?

1. Check if exported in `index.ts`
2. Verify import path in `page.tsx`
3. Check data is provided in constants file

### Styling looks wrong?

1. Check Tailwind classes in component
2. Verify responsive prefixes (sm:, md:)
3. Check color values in constants

### Icon not displaying?

1. Check icon file path in `Icons.tsx`
2. Verify SVG is valid
3. Check aria-hidden attribute

### Link not working?

1. Verify URL in constants file
2. Check target and rel attributes
3. Test URL directly in browser

## Performance Tips

- Use Next.js Image optimization for images
- Lazy load iframes (already implemented)
- Keep components focused and small
- Memoize components if rendering frequently
- Use dynamic imports for heavy components

## Accessibility

✅ Semantic HTML used throughout
✅ aria-label on icons and buttons
✅ Focus states on interactive elements
✅ Color contrast adequate
✅ Keyboard navigable
✅ Mobile responsive

## Version Control

Helpful git commit messages:

```bash
git commit -m "feat: add new skill to portfolio"
git commit -m "chore: update work experience"
git commit -m "style: update button colors"
git commit -m "docs: add new blog post"
```

## Additional Resources

📚 See documentation files:

- `REFACTORING_SUMMARY.md` - Overview
- `REFACTORING_GUIDE.md` - Detailed guide
- `ARCHITECTURE.md` - Visual diagrams
