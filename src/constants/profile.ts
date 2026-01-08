export const PROFILE = {
  name: 'Shrikant Survase',
  title: 'React Native Developer • SDE 1 at Greytip Software',
  location: 'Maharashtra, India',
  timezone: new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }),
  email: 'heysurvase@gmail.com',
  bio: [
    "I'm Shrikant Survase, a React Native Developer currently working as SDE 1 at Greytip Software Pvt. I love building mobile applications that make a difference.",
    "I've worked on three mobile apps including Greythr (an HRMS platform), Drively (a car booking app), and a college mobile app for students to view notices and timetables.",
    "I'm passionate about React Native development and always eager to learn new technologies and best practices to build better mobile experiences.",
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shrikant-survase-5211531b1/',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Shrikant-Surwase',
      icon: 'github',
    },
    {
      label: 'Twitter',
      url: 'https://x.com/SuvaseShrikant',
      icon: 'twitter',
    },
    {
      label: 'Email Me',
      url: 'mailto:heysurvase@gmail.com',
      icon: 'mail',
    },
  ],
};

export const CTA_BUTTONS = [
  {
    id: 'opportunity',
    label: 'Available for new opportunities',
    href: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit',
    showPulse: true,
    icon: 'linkedin-svg',
  },
  {
    id: 'cv',
    label: 'Download CV',
    href: 'https://drive.google.com/file/d/1u4u70fgH880BDfA5F4m6MlsVlrDQuENx/view',
    showPulse: false,
    icon: 'download',
  },
];

export const SPOTIFY_EMBED = {
  src: 'https://open.spotify.com/embed/track/5fFQBL8Pnvnc9uszdadT7i?utm_source=generator&theme=0',
  title: 'Spotify Embed',
  height: 152,
};

export const PATATAP_EMBED = {
  src: 'https://patatap.com/',
  title: 'Patatap - Interactive Audio Visual Experience',
};
