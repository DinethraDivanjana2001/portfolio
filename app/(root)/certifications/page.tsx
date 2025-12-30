import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Certifications | Professional Credentials",
    description:
        "Dinethra Rajapaksha's professional certifications and credentials in AI, Machine Learning, and Software Development.",
    keywords: [
        "certifications",
        "professional credentials",
        "AI certifications",
        "machine learning certificates",
        "software development",
    ],
    alternates: {
        canonical: `${siteConfig.url}/certifications`,
    },
};

export default function CertificationsPage() {
    return (
        <PageContainer
            title="Certifications"
            description="Professional certifications and credentials"
        >
            <div className="grid gap-6 md:gap-8">
                <div className="rounded-xl border bg-card p-8 shadow-sm text-center">
                    <p className="text-muted-foreground">
                        Certifications section coming soon. This page will showcase professional
                        credentials and completed courses.
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}
