import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "magicbits",
    position: "Software / IoT Engineering Intern",
    company: "Magicbits (PVT) Ltd",
    location: "On-site",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2025-06-30"),
    description: [
      "Worked on Software and embedded firmware development, including micro controller based systems, sensor interfacing, hardware integration, and cloud-connected device functionality.",
      "Involved in system testing and field deployments.",
    ],
    achievements: [
      "Developed embedded firmware for micro controller based systems",
      "Implemented sensor interfacing and hardware integration solutions",
      "Worked on cloud-connected device functionality",
      "Participated in system testing and field deployments",
      "Contributed to IoT product development lifecycle",
    ],
    skills: ["IoT", "Embedded Systems", "C++", "Python"],
    companyUrl: "https://magicbit.cc/",
    logo: "/experience/magicbits-logo.png",
  },
];
