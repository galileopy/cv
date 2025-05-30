import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

// Explicit type for RESUME_DATA
export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  resumeUrl: string;
  contact: {
    email: string;
    social: {
      name: string;
      url: string;
      icon: React.ComponentType<{ className?: string }>;
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    start: string;
    end: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }[];
};

export const RESUME_DATA: ResumeData = {
  name: "Galileo Sanchez",
  initials: "GS",
  location: "Asunción, Paraguay, America/Asuncion (GMT-4)",
  locationLink: "https://www.google.com/maps/place/Asunción",
  about:
    "Full Stack Engineer focused on building reliable and scalable products.",
  summary:
    "Currently, I primarily work with TypeScript, React, and Node.js. I bring 10 years of experience in application development, along with over 4 years of experience in remote collaboration with companies globally.",
  avatarUrl: "https://avatars.githubusercontent.com/u/7267587?v=4",
  personalWebsiteUrl: "galileopy.com.py",
  resumeUrl: "cv.galileopy.com.py",
  contact: {
    email: "galileo@galileopy.com.py",
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
      company: "Glui",
      link: "",
      badges: ["Remote"],
      title: "Lead Technologist",
      start: "Feb 2025",
      end: "Present",
      description:
        "I drive technical innovation by evaluating and selecting cutting-edge technologies, designing solutions to meet strategic company goals, delivering hands-on expertise. I plan detailed technical investments and collaborate with teams to align efforts, bridging vision with execution to propel our success.",
    },
    {
      company: "Glui",
      link: "",
      badges: ["Remote", "Asunción, Paraguay"],
      title: "Lead Backend Engineer",
      start: "Oct 2024",
      end: "Feb 2025",
      description:
        "Established great developer ownership practices by implementing trunk based development and E2E testing practices that led to atomic and production ready contributions with every commit.",
    },
    {
      company: "Glui",
      link: "",
      badges: ["Asunción, Paraguay"],
      title: "Software Engineer",
      start: "May 2024",
      end: "Sep 2024",
      description:
        "Implemented a CI/CD pipeline with several tiers of testing and fully automated deployments of containerized applications.\nCollaborated in the design of a microservice architecture, and implemented container based applications, using NestJS and Typescript.\nActively documented the software development process and best practices, including writing technical design documents, technology selection and implementation.",
    },

    {
      company: "Clipboard Health",
      link: "https://www.clipboardhealth.com",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "Dec 2022",
      end: "Nov 2023",
      description:
        "Led a team in implementing event-driven microservices utilizing Change Data Capture (CDC) and probability models to predict unfulfilled demand in advance. This allowed for proactive offer pre-allocation, ensuring swift offer replacements and delivering an exceptional user experience.\nLed multiple technical experiments aimed at reducing customer churn and improving offer availability. Oversaw initiatives to monitor significant market shifts and prioritize them, using strategies such as personalized notifications, automated incentives, and user targeting based on preferences and behavior. Managed microservices projects from inception to completion, covering design, planning, and execution.\nCollaborated across diverse teams to ensure the successful delivery of projects.\nActively participated in the engineering team’s hiring process, encompassing interviewing and onboarding new hires. Conducted over 50 interviews and reviewed more than 100 technical challenges.",
    },
    {
      company: "Clipboard Health",
      link: "https://www.clipboardhealth.com",
      badges: ["Paraguay"],
      title: "Software Development Engineer",
      start: "Nov 2021",
      end: "Feb 2023",
      description:
        "Established and led a new developer team, representing the product interests of the finance and billing team. Prioritized and addressed mission critical bugs related to invoicing.\nCompletely revamped the infrastructure supporting invoicing, migrating mission critical sub-systems from error prone, low-code services into in-house event-driven microservices, with 0 downtime.\nAssisted in the migration of a large monolithic application into independent repositories. I took full ownership of the front-end extraction during this process.",
    },

    {
      company: "Jijo",
      badges: ["Remote", "React"],
      link: "",

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
};
