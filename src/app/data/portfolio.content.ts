export type ProjectTheme = 'meetza' | 'qwizzy' | 'tasknest';
export type SkillColor = 'mint' | 'yellow' | 'peach' | 'blue';

export interface Project {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  role: string;
  theme: ProjectTheme;
  problem: string;
  solution: string;
  challenges: string;
  learned: string;
}

export interface SkillGroup {
  icon: 'code-2' | 'layers-3' | 'database' | 'wrench';
  label: string;
  color: SkillColor;
  skills: string[];
}

export interface Certification {
  badge: string;
  badgeClass?: string;
  title: string;
  meta: string;
  link: string;
}

export const personal = {
  name: 'Aya Helal',
  role: 'Frontend Developer',
  stackLine: 'React · Angular · TypeScript · JavaScript · Tailwind CSS',
  availability: 'Available for meaningful work',
  intro:
    'Building responsive and user-focused web applications with React, Angular & TypeScript.',
  about:
    "I'm a Frontend Developer passionate about building responsive and user-focused web applications. I work mainly with React, Angular, TypeScript, JavaScript, and modern frontend technologies, while continuously improving my problem-solving and development skills.",
  location: 'Cairo, Egypt',
  education: 'B.Sc. in Computer Science',
};

export const projects: Project[] = [
  {
    number: '01',
    name: 'Meetza',
    type: 'AI Video Conferencing Platform',
    description:
      'AI-powered video conferencing with real-time meetings, messaging, and screen sharing.',
    stack: ['React', 'WebRTC', 'Socket.IO', 'REST APIs', 'Bootstrap'],
    role: 'Frontend Developer · Project Manager',
    theme: 'meetza',
    problem:
      'Remote teams needed a focused space to meet, communicate, and share context without stitching several tools together.',
    solution:
      'A real-time collaboration platform that brings video calls, instant messaging, screen sharing, and meeting flows into one clear experience.',
    challenges:
      'Keeping meeting states predictable while synchronizing media, chat, and responsive interfaces across more than 20 screens.',
    learned:
      'How thoughtful state boundaries and clear ownership make complex real-time products easier to build and explain.',
  },
  {
    number: '02',
    name: 'Qwizzy',
    type: 'Interactive Quiz Platform',
    description:
      'An online quiz platform with instant result generation and a responsive user interface.',
    stack: ['React', 'Bootstrap', 'REST APIs' , 'Jira' , 'Agile Scrum' , 'SOLID Principles'],
    role: 'Project Manager · Frontend Developer',
    theme: 'qwizzy',
    problem:
      'Quiz experiences can feel slow and confusing when users cannot understand their progress or results immediately.',
    solution:
      'A simple, responsive flow that keeps questions readable, actions obvious, and results available as soon as the quiz ends.',
    challenges:
      'Designing flexible question states and feedback patterns that work consistently across screen sizes.',
    learned:
      'How much clarity comes from reducing friction in the small moments between one answer and the next.',
  },
  {
    number: '03',
    name: 'TaskNest',
    type: 'Task Management Application',
    description:
      'Task management with authentication, CRUD operations, analytics, and user profiles.',
    stack: ['Angular 21', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: 'Frontend Developer',
    theme: 'tasknest',
    problem:
      'Personal productivity tools often bury the next action inside noisy dashboards and complicated workflows.',
    solution:
      'A calm task space with clear ownership, protected routes, useful analytics, and fast CRUD interactions.',
    challenges:
      'Building a scalable Angular structure with lazy loading, route guards, and Signals while keeping the interface approachable.',
    learned:
      "How Angular's architecture and Signals can create a strong foundation for products that grow beyond a prototype.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: 'code-2',
    label: 'Frontend',
    color: 'mint',
    skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: 'layers-3',
    label: 'UI & Styling',
    color: 'yellow',
    skills: ['Tailwind CSS', 'Bootstrap', 'Responsive UI', 'Design Systems'],
  },
  {
    icon: 'database',
    label: 'State & Data',
    color: 'peach',
    skills: ['Redux','RxJS', 'REST APIs'],
  },
  {
    icon: 'wrench',
    label: 'Tools',
    color: 'blue',
    skills: ['Git', 'GitHub', 'Postman', 'Jira'],
  },
];

export const certifications: Certification[] = [
  {
    badge: 'ITI',
    title: 'React.js Summer Code Camp',
    meta: 'ITI · 120 Hours',
    link: 'https://drive.google.com/file/d/1n7S7_jHl00tWPn0CIMnHCBn8YKsJwEE3/view?usp=sharing'
  },
  {
    badge: 'SFC',
    badgeClass: 'cert-scrum',
    title: 'Scrum Fundamentals Certified',
    meta: 'Scrum Study · SFC™',
    link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1176594'
  },
  {
    badge: 'TS',
    title: 'TypeScript',
    meta: 'MaharaTech · ITI',
    link: 'https://maharatech.gov.eg/mod/customcert/view.php?id=8663&downloadown=1',
  },
];
