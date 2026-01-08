export interface Blog {
  id: string;
  title: string;
  url: string;
  ariaLabel: string;
}

export const BLOGS: Blog[] = [
  {
    id: 'vscode-extension',
    title: 'How to Create Your First Vs Code Extension',
    url: 'https://medium.com/@EvapourtedSoul/how-to-build-publish-your-first-vs-code-theme-extension-20668e8a0b30',
    ariaLabel: 'Read blog: How to Create Your First Vs Code Extension',
  },
  {
    id: 'free-domain',
    title: 'Get Your Own Free Domain via GitHub',
    url: 'https://medium.com/@EvapourtedSoul/get-your-own-free-domain-via-github-ed6785f86817',
    ariaLabel: 'Read blog: Get Your Own Free Domain via GitHub',
  },
  {
    id: 'leaving',
    title: "I've Always Been Good at Leaving (a non-tech read)",
    url: 'https://medium.com/@EvapourtedSoul/ive-always-been-good-at-leaving-1facafa610af',
    ariaLabel: "Read blog: I've Always Been Good at Leaving (a non-tech read)",
  },
];
