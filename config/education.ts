export interface Education {
    id: number;
    institution: string;
    degree: string;
    field?: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    zScore?: string;
    achievements?: string[];
    courses?: string[];
    logo?: string;
    category: "Higher Education" | "School Education" | "Coursework & Certifications";
    credentialId?: string;
    credentialUrl?: string;
}

export const educationData: Education[] = [
    {
        id: 1,
        institution: "University of Moratuwa",
        degree: "B.Sc. Engineering (Hons.)",
        field: "Electronic and Telecommunication Engineering",
        location: "Moratuwa, Sri Lanka",
        startDate: "Aug 2022",
        endDate: "Present",
        gpa: "3.67/4.0",
        courses: [
            "Deep Learning for Computer Vision",
            "Autonomous Systems",
            "Engineering Optimization",
            "Embedded Systems and Applications",
            "Data Structures and Algorithms",
            "Software Design Competition",
        ],
        category: "Higher Education",
        logo: "/education/university-of-moratuwa-logo.png",
    },
    {
        id: 2,
        institution: "Bandaranayake College",
        degree: "G.C.E. Advanced Level",
        field: "Physical Science",
        location: "Gampaha, Sri Lanka",
        startDate: "2012",
        endDate: "2020",
        zScore: "2.5516",
        achievements: ["Combined Mathematics, Physics, and Chemistry"],
        category: "School Education",
        logo: "/education/bandaranayake-college-logo.png",
    },
    {
        id: 3,
        institution: "DeepLearning.AI",
        degree: "Convolutional Neural Networks",
        location: "Online",
        startDate: "Jun 2025",
        endDate: "Jun 2025",
        credentialId: "VRNDBMR3C3N4",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VRNDBMR3C3N4",
        category: "Coursework & Certifications",
        logo: "/certifications/deeplearning-ai-logo.png",
    },
    {
        id: 4,
        institution: "DeepLearning.AI",
        degree: "Structuring Machine Learning Projects",
        location: "Online",
        startDate: "Jun 2025",
        endDate: "Jun 2025",
        credentialId: "EGX8WD4KYJFL",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EGX8WD4KYJFL",
        category: "Coursework & Certifications",
        logo: "/certifications/deeplearning-ai-logo.png",
    },
    {
        id: 5,
        institution: "DeepLearning.AI, Stanford University",
        degree: "Supervised Machine Learning: Regression and Classification",
        location: "Online",
        startDate: "Sep 2024",
        endDate: "Sep 2024",
        credentialId: "1JF11DPVT72D",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/1JF11DPVT72D",
        category: "Coursework & Certifications",
        logo: "/certifications/deeplearning-ai-logo.png",
    },
    {
        id: 6,
        institution: "HackerRank",
        degree: "Problem Solving (Basic)",
        location: "Online",
        startDate: "Jun 2024",
        endDate: "Jun 2024",
        credentialId: "db7d9313c35c",
        credentialUrl: "https://www.hackerrank.com/certificates/db7d9313c35c",
        category: "Coursework & Certifications",
        logo: "/certifications/hackerrank-logo.png",
    },
    {
        id: 7,
        institution: "HackerRank",
        degree: "Problem Solving (Intermediate)",
        location: "Online",
        startDate: "Jun 2024",
        endDate: "Jun 2024",
        credentialId: "216ea190808c",
        credentialUrl: "https://www.hackerrank.com/certificates/216ea190808c",
        category: "Coursework & Certifications",
        logo: "/certifications/hackerrank-logo.png",
    },
    {
        id: 8,
        institution: "HackerRank",
        degree: "Python (Basic)",
        location: "Online",
        startDate: "Jun 2024",
        endDate: "Jun 2024",
        credentialId: "f197bc1d4e27",
        credentialUrl: "https://www.hackerrank.com/certificates/f197bc1d4e27",
        category: "Coursework & Certifications",
        logo: "/certifications/hackerrank-logo.png",
    },
];
