export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: Array<{
    projectName: string;
    projectDescription: string;
  }>;
}

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    role: 'SDE 1 • React Native Developer',
    company: 'Greytip Software Pvt Ltd',
    period: 'Present',
    description:
      'Working as a Software Development Engineer 1, specializing in React Native mobile app development.',
    achievements: [
      {
        projectName: 'Greythr',
        projectDescription:
          'HRMS platform - A comprehensive human resource management system mobile application.',
      },
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Freelance',
    period: 'Present',
    description:
      'Developed a car booking mobile application as a freelance project, delivering a complete solution for seamless car rental bookings and management.',
    achievements: [
      {
        projectName: 'Drively',
        projectDescription:
          'Car booking app - A mobile application for booking and managing car rentals.',
      },
    ],
  },
];
