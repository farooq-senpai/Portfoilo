import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/farooq-senpai",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shaikabdulfarooq/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:farooqshaik3906@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "SHAIK ABDUL FAROOQ",
  title: "Web and App Developer,Software Engineer & Machine Learning Engineer",
  description: "Building Intelligent Systems & Automation Projects",
};
