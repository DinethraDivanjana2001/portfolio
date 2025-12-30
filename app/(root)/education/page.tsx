import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import EducationCard from "@/components/education/education-card";
import { educationData } from "@/config/education";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Education | Academic Journey",
    description:
        "Dinethra Rajapaksha's educational background and academic achievements in Electronic and Telecommunication Engineering.",
    keywords: [
        "education",
        "academic background",
        "University of Moratuwa",
        "engineering education",
        "academic achievements",
    ],
    alternates: {
        canonical: `${siteConfig.url}/education`,
    },
};

export default function EducationPage() {
    return (
        <PageContainer
            title="Education"
            description="Academic journey and qualifications"
        >
            <div className="grid gap-6 md:gap-8">
                {educationData.map((edu, index) => (
                    <EducationCard key={edu.id} education={edu} index={index} />
                ))}
            </div>
        </PageContainer>
    );
}
