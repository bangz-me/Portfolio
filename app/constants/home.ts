import { FaGithub, FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";

import profileImg from "@/app/assets/images/bngz.jpeg";
import modernTechImg from "@/app/assets/images/modern-engineering.webp";
import impervaImg from "@/app/assets/images/imperva.webp";

import devopsAwsImg from "@/app/assets/images/DEVOPS-ON-AWS.webp";
import containerSecImg from "@/app/assets/images/CONTAINER-SECURITY.webp";
import lambdaImg from "@/app/assets/images/LAMBDA.webp";

export const profileData = {
  name: "Kevin Kemchor",
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
    `Oversee and implement proper stakeholder's management activities for effective execution, and timely delivery as the product owner for all collections and remittance applications`,
    `Liaise with vendors on escalated issues by providing issue synopsis, review of application logs to aid root cause identification and resolution`,
    `Design and implement information systems that optimize organizational efficiency together with developing new processes to ensure business improvements`,

    `Participate in initiatives to implement new business requirements, platform upgrades and new releases on the collections platforms, patch and system upgrade, ensuring high availability of applications within scope`,

    `Actively resolve all service desk incidents raised on GRP as second level support and following standard procedures to escalate unresolved issues to the appropriate internal teams for prompt resolution`,

    `Ensure 100% failover and switch-over success for all services to the DR whenever requested`,
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
