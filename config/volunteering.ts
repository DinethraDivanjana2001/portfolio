export interface Volunteering {
    id: string;
    title: string;
    organization: string;
    role: string;
    startDate: string;
    endDate: string;
    description?: string;
    achievements?: string[];
}

export const volunteeringData: Volunteering[] = [
    {
        id: "career-fair-2023",
        title: "Career Fair 2023",
        organization: "University of Moratuwa",
        role: "Company Coordinator - ADL (Axiata Digital Lab)",
        startDate: "2023",
        endDate: "2023",
    },
    {
        id: "robotic-challenge-2023",
        title: "Sri Lanka Robotic Challenge 2023",
        organization: "University of Moratuwa",
        role: "Coordinator - Video Streaming",
        startDate: "2023",
        endDate: "2023",
    },
    {
        id: "abhina-2023",
        title: "Abhina 2023",
        organization: "University of Moratuwa",
        role: "Coordinator - Video Streaming",
        startDate: "2023",
        endDate: "2023",
    },
    {
        id: "exmo-exhibition",
        title: "Exmo Exhibition",
        organization: "University of Moratuwa",
        role: "Coordinator",
        startDate: "2023",
        endDate: "2023",
    },
    {
        id: "rotaract-club",
        title: "Rotaract Club of University of Moratuwa",
        organization: "University of Moratuwa",
        role: "General Member",
        startDate: "Jun 2022",
        endDate: "April 2023",
        description: "Engaged as an organizing committee member for various projects (Professional Development projects, Membership Development projects, Community Service projects)",
    },
    {
        id: "science-society",
        title: "Science Society",
        organization: "Bandaranayake College, Gampaha",
        role: "Coordinator",
        startDate: "2019",
        endDate: "2020",
        description: "Organized and led various science-related activities and events, including the Xban Exhibition.",
    },
    {
        id: "scout-association",
        title: "Scout Association",
        organization: "Bandaranayake College, Gampaha",
        role: "Committee Member",
        startDate: "2015",
        endDate: "2020",
    },
    {
        id: "buddhist-society",
        title: "Buddhist Society",
        organization: "Bandaranayake College, Gampaha",
        role: "Committee Member",
        startDate: "2015",
        endDate: "2020",
    },
    {
        id: "xban-2018",
        title: "Xban Exhibition 2018",
        organization: "Bandaranayake College, Gampaha",
        role: "Coordinator",
        startDate: "2018",
        endDate: "2018",
        description: "Managed and coordinated a project related to pyramid technology, facilitating team collaboration, guiding project execution.",
    },
    {
        id: "xban-2014",
        title: "Xban Exhibition 2014",
        organization: "Bandaranayake College, Gampaha",
        role: "Coordinator",
        startDate: "2014",
        endDate: "2014",
        description: "Led the coordination of an astronomy-related project, organizing team activities, overseeing project development, and ensuring the successful presentation of the project.",
    },
];
