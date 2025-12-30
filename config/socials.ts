import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@DinethraDivanjana2001",
    icon: Icons.gitHub,
    link: "https://github.com/DinethraDivanjana2001",
  },
  {
    name: "LinkedIn",
    username: "Dinethra Rajapaksha",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/dinethra-rajapaksha-7224b3365/",
  },
  {
    name: "Gmail",
    username: "divanjanad",
    icon: Icons.gmail,
    link: "mailto:divanjanad@gmail.com",
  },
];
