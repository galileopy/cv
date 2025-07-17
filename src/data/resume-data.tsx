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
  philosophy: string[];
};

export const RESUME_DATA: ResumeData = {
  name: "Galileo Sanchez",
  initials: "GS",
  location: "Remote, from Asunción, Paraguay",
  locationLink: "https://www.google.com/maps/place/Asunción",
  about:
    "Unblocking and speeding up teams through strategic optimization of systems and processes.",
  summary:
    "Unblocking and speeding up teams through strategic optimization of systems and processes. Whether it's speeding up tests that take too long, sorting out root causes for release delays from conflicts, or setting up ways for everyone to deliver work independently with strong confidence even when the team is blocked on releases. Let's team up and speed up!",
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
      degree: "Software Engineering - Completed core CS curriculum (excluding advanced mathematics). Focus on software development, algorithms, and backend systems.",
      start: "2009",
      end: "2013",
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
        "Shipped test-context helpers and tooling for test environments.\nGuided and oversaw k6 load testing to validate event capturing setup up to 80M requests/day.",
    },
    {
      company: "Glui",
      link: "",
      badges: ["Remote"],
      title: "Lead Backend Engineer",
      start: "Oct 2024",
      end: "Feb 2025",
      description:
        "Built 10-minute deployment pipeline via GitHub Actions, Docker, Cycle.io.\nDelivered core backend services using NestJS for a real-time marketplace.",
    },
    {
      company: "Glui",
      link: "",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "May 2024",
      end: "Sep 2024",
      description:
        "Created container-based CI pipelines and deployment flows with fast feedback cycles.\nDeployed Keycloak for centralized auth."
    },
    {
      company: "Clipboard Health",
      link: "https://www.clipboardhealth.com",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "Dec 2022",
      end: "Nov 2023",
      description:
        "Migrated invoicing to event-driven microservices, reducing processing time from 2 days to 2 hours.\nLed debugging of CDC performance issues and live-stream bottlenecks.\nInstrumented and iterated k6 load testing to optimize delivery workflows.",
    },
    {
      company: "Clipboard Health",
      link: "https://www.clipboardhealth.com",
      badges: ["Remote"],
      title: "Software Development Engineer",
      start: "Nov 2021",
      end: "Feb 2023",
      description:
        "Extracted React front-end from monolith into standalone repo. With 0 downtime for over 100 collaborators.\nRefactored low-code invoicing logic into maintainable services.",
    },
    {
      company: "Galileo Sanchez, freelancer",
      badges: ["Remote"],
      link: "",
      title: "Jijo",
      start: "2021",
      end: "2021",
      description:
        "Developed Stripe payments, class booking UI, and conference integration using Chime SDK.\nDelivered complete feature flows in weekly iterations with autonomy.",
    },
    {
      company: "Galileo Sanchez, freelancer",
      link: "https://www.cnc.una.py",
      badges: ["Remote"],
      title: "National Computing Center",
      start: "2018",
      end: "2020",
      description:
        "Built React-based personnel tracking platform for 500+ users.\nFully owned feature delivery and compliance workflows.",
    },
    {
      company: "Galileo Sanchez, freelancer",
      link: "https://wwww.trivellinitech.com",
      badges: ["Remote"],
      title: "Trivellini Tech",
      start: "2016",
      end: "2018",
      description:
        "Built real-time Qt/C++ UI for surgical device monitors with responsive protocol layer.\nWorked closely with hardware teams on cross-functional integration.",
    },
    {
      company: "Galileo Sanchez, freelancer",
      badges: ["Remote"],
      link: "https://galileopy.com.py",
      title: "Alien Milling Co",
      start: "2014",
      end: "2016",
      description:
        "Created Electron/React Shopify label generator.\nDelivered backend services, UIs, and integrations using Django and AngularJS.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript", 
    "React/Next.js",
    "Node.js",
    "NestJS",
    "C++/Qt",
    "Docker",
    "AWS (ECS, RDS, SQS, EventBridge)",
    "Terraform",
    "GitHub Actions",
    "k6",
    "PostgreSQL",
    "Aurora RDS",
    "CouchDB",
    "Datadog",
    "Stripe",
  ],
  philosophy: [
    "Biased toward action: quick iteration cycles and small wins that compound",
    "Deep focus on fast feedback loops and system observability",
    "Comfortable owning CI/CD and system plumbing work others avoid",
    "Thrive when collaborating with thoughtful PMs and clear goals",
    "Struggle with premature planning, vague deliverables, or performative coordination",
    "Seek ownership over implementation, not politics or layers of indirection",
  ],
};