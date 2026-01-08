export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProjectCategory {
  category: string;
  projects: Project[];
}

export const PROJECTS: ProjectCategory[] = [
  {
    category: 'Web',
    projects: [
      {
        id: 'socialx',
        name: 'SocialX',
        description:
          'SocialX - An Instagram scheduler that lets you plan, schedule, and post with ease.',
        image: '/_next/image?url=%2FProjects%2FsocialX.png&w=828&q=75',
        demoUrl: '#',
        githubUrl: '#',
      },
      {
        id: 'polaroid',
        name: 'Polaroid',
        description: 'Polaroid - A free polaroid photo generator app',
        image: '/_next/image?url=%2FProjects%2Fpolaroid.png&w=828&q=75',
      },
      {
        id: 'musicbass',
        name: 'MusicBass',
        description:
          'A web app that turns sheet music into sound and insight, helping musicians learn faster and play smarter.',
        image: '/_next/image?url=%2FProjects%2FMusic%20bass.png&w=828&q=75',
        githubUrl: '#',
      },
      {
        id: 'studybro',
        name: 'StudyBro',
        description:
          'A study app that combines all of the prove studying technique to help you study better.',
        image: '/_next/image?url=%2FProjects%2FstudyBro.png&w=828&q=75',
        githubUrl: '#',
      },
      {
        id: 'ecolens',
        name: 'Ecolens',
        description:
          'A smart app that unites air and water quality tracking to help you make eco-friendly choices effortlessly.',
        image: '/_next/image?url=%2FProjects%2Fecolens.png&w=828&q=75',
        githubUrl: '#',
      },
    ],
  },
  {
    category: 'Chrome Extension',
    projects: [
      {
        id: 'bagthat',
        name: 'BagThat',
        description:
          'A browser extension that automatically finds and applies the best coupons, making online shopping effortless and affordable.',
        image: '/_next/image?url=%2FProjects%2FBag%20That.png&w=828&q=75',
        githubUrl: '#',
      },
    ],
  },
  {
    category: 'VSCode Extension',
    projects: [
      {
        id: 'icetea',
        name: 'Icetea',
        description:
          'Enjoy a collection of unique, dark, and vibrant themes inspired by popular anime series and characters.',
        image: '/_next/image?url=%2FProjects%2Ficetea.png&w=828&q=75',
        githubUrl: '#',
      },
    ],
  },
];
