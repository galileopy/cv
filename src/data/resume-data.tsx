import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Galileo Sanchez",
  initials: "GS",
  location: "Asunción, Paraguay, America/Asuncion (GMT-4)",
  locationLink: "https://www.google.com/maps/place/Asunción",
  about:
    "Full Stack Engineer focused on building reliable and scalable products.",
  summary:
    "Currently, I primarily work with TypeScript, React, and Node.js. I bring 10 years of experience in application development, along with over 4 years of experience in remote collaboration with companies globally.",
  avatarUrl: "https://avatars.githubusercontent.com/u/7267587?v=4",
  personalWebsiteUrl: "blog.galileopy.com.py",
  contact: {
    social: [
      {
        name: "GitHub",
        url: "https://github.com/galileopy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/galileopy/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/galileopy",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National University of Asunción",
      degree: "Software Engineer",
      start: "2009",
      end: "2013 - 60% completion",
    },
  ],
  work: [
    {
      company: "Clipboard Health",
      link: "https://www.clipboardhealth.com",
      badges: ["Remote", "AWS"],
      title: "Software Engineer → Senior Software Engineer",
      start: "2021",
      end: "2023",
      description: `
      Assisted in the migration of a large monolithic application into independent repositories. I took full ownership of the front-end extraction during this process.
      Led multiple backend and microservice projects from conception to completion, including design, planning, and execution.
      Performed tech lead responsibilities as needed, which included writing weekly updates for stakeholders.
      Collaborated across diverse teams to ensure the successful delivery of projects.
      Actively participated in the engineering team's hiring process, encompassing interviewing and onboarding new hires.
      Conducted over 50 interviews and reviewed more than 100 technical challenges.
      `,
    },
    {
      company: "Jijo",
      badges: ["Remote", "React"],
      title: "Software Engineer",
      start: "2021",
      end: "2021",
      description: `Front-end engineer in a 2-sided marketplace that matches remote trainers with trainees. We featured a web and mobile applications with support for video calls, payments, scheduling.
         Built with React, Next.js, and Chime SDK."`,
    },
    {
      company: "National Computing Center",
      link: "https://www.cnc.una.py",
      badges: ["React"],
      title: "Fullstack Software Engineer",
      start: "2018",
      end: "2020",
      description:
        "Fully owned the development and timely release for a paperless personnel clock in/out platform with modules for leave requests and compliance with leave policy.",
    },
    {
      company: "Trivellini Tech",
      link: "https://wwww.trivellinitech.com",
      badges: ["QT/C++", "RPI"],
      title: "Software Engineer",
      start: "2017",
      end: "2018",
      description:
        "Built the front-end of a surgical device using RPI and C++/Qt, implementing event driven patterns with QT/Signals and its event system.",
    },
    {
      company: "Freelancer",
      badges: ["Freelance", "C#", "Java", "Python"],
      link: "https://galileopy.com.py",
      title: "Full Stack Engineer",
      start: "2014",
      end: "2017",
      description:
        "Helped several companies to bootstrap products working with a wide range of technologies like C#, Java, Python (Django)",
    },

    ,
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "NestJS",
    "AWS",
    "Terraform",
    "Docker",
    "Aurora RDS",
    "SQS and EventBridge",
    "PostgreSQL",
    "ECS",
    "Datadog",
    "Stripe",
  ],
  projects: [
    {
      title: "Buses 365",
      techStack: ["Side Project", "TypeScript", "Next.js", "Vercel"],
      description:
        "A platform to help people find the long distance bus schedules from my country and surrounding countries. Built with Next.js and Vercel.",
      link: {
        label: "buses365.com.py",
        href: "https://buses365.com.py/",
      },
    },
    {
      title: "Jaikuaamina",
      techStack: [
        "ReactNative",
        "Node.js",
        "CouchDB",
        "Ministry of Technology and Communication (MITIC)",
        "hackathon",
      ],
      description:
        "Award winning open source application that helps citizens generate public data requests. Built with React Native, Node.js, and CouchDB.",
    },
    {
      title: "Uppy Trip Search",
      techStack: [
        "FireStore",
        "Node.js",
        "Event Streams",
        "docker",
        "contract",
      ],
      description:
        "Backend system to find the closest driver based on GPS location using Fire Store and Event Streams",
    },
    {
      title: "Electronic Prescription System",
      techStack: ["Remote", "React", "Node.js", "PostgreSQL", "contract"],
      description:
        "During the pandemic I helped Itaipu Binacional to build an electronic, paperless, and contactless prescription system for their clinics. Built with React, Node.js, and PostgreSQL.",
    },
    {
      title: "Shopify Order PDF Generator",
      techStack: ["electron.js", "React", "Node.js", "contract"],
      description:
        "Fetch Shopify orders and generate a PDF with the order details. Built with React, Node.js, and Electron.js.",
    },
  ],
} as const;
