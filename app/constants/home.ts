import { FaGithub, FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";

import profileImg from "@/app/assets/images/bngz.jpeg";
import modernTechImg from "@/app/assets/images/modern-engineering.webp";
import impervaImg from "@/app/assets/images/imperva.webp";

import devopsAwsImg from "@/app/assets/images/DEVOPS-ON-AWS.webp";
import containerSecImg from "@/app/assets/images/CONTAINER-SECURITY.webp";
import lambdaImg from "@/app/assets/images/LAMBDA.webp";

export const profileData = {
  name: "Kevin Nkemchor",
  role: "Application Support Engineer.",
  img: profileImg,
  links: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Articles",
      url: "#articles",
    },
    {
      name: "Certifications",
      url: "#certifications",
    },
  ],
};

export const aboutData = {
  description: `Application Support Engineer with hands-on experience ensuring high availability, low latency, and optimal performance of critical enterprise services. I manage end-to-end service reliability through efficient monitoring, change management, capacity planning, and rapid incident response. 

Skilled in deep-dive investigations to uncover root causes, drive corrective actions, and improve long-term system resilience and support processes.

Committed to continuous learning and excited about the opportunity to tackle new challenges that come with collaboration and shaping the future of technology in Finance.`,
};

export const experienceData = {
  role: "Application Support Engineer",
  duration: "Jan 2024 - Present",
  company: "UBA Group",
  activities: [
    `Implemented end-to-end monitoring and observability (logs, metrics, traces), increasing incident detection speed by 40% and improving system visibility across 100% of critical services`,
    `Maintained 99.9%+ uptime for mission-critical VAS and remittance platforms handling millions of transactions daily across retail and corporate customers`,
    `Monitored system performance (latency, throughput, error rates), reducing P95 response time by 25% through proactive performance tuning`,
    `Leveraged observability tools to perform root cause analysis, reducing recurring incidents by 30% and improving system reliability`,
    `Onboarded 500+ billers via secure, high-availability API integrations, improving SLO compliance and reducing onboarding time by 40%`,
    `Reduced Recovery Time Objective (RTO) by 20% by enhancing failover readiness and conducting dependency risk assessments aligned with ISO 22301`,
    `Led root cause analysis for high-severity production incidents, restoring services within SLA and consistently improving incident resolution efficiency`,
    `Automated certificate renewal processes, eliminating downtime risks and ensuring secure, uninterrupted service communication`,
    `Supported distributed microservices integration across remittance platforms, ensuring reliability and secure inter-service communication`,
  ],
};

export const articlesData = {
  articleProfile: "https://medium.com/@kevinekene",
  articles: [
    {
      id: 1,
      image: modernTechImg,
      date: "Nov 24, 2025",
      title:
        "The Hidden Superpower Behind Modern Engineering: How I Learned to See Systems as Stories",
      url: "https://medium.com/@kevinekene/the-hidden-superpower-behind-modern-engineering-how-i-learned-to-see-systems-as-stories-358053439831",
    },
    {
      id: 2,
      image: impervaImg,
      date: "Nov 3, 2025",
      title: "Imperva Cloud WAF Integration on RHEL 8 — Key Steps & Insights",
      url: "https://medium.com/@kevinekene/imperva-cloud-waf-integration-on-rhel-8-key-steps-insights-a3243261143c",
    },
  ],
};

export const certificationsData = [
  {
    id: 1,
    image: devopsAwsImg,
    title: "Getting Started with Devops On AWS",
  },
  {
    id: 2,
    image: lambdaImg,
    title: "Introduction to AWS Lambda",
  },
  {
    id: 3,
    image: containerSecImg,
    title: "Deep Dive On Container Security",
  },
];

export const socials = [
  {
    id: 1,
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/kevin-ekene-nkemchor-29661885/",
  },
  {
    id: 2,
    icon: FaGithub,
    url: "https://github.com/bangz-me",
  },
  {
    id: 3,
    icon: FaTwitter,
    url: "twitter.com/kevinkenee",
  },
  {
    id: 4,
    icon: FaEnvelope,
    url: "mailto:kevinekwems@gmail.com",
  },
];
