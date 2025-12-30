"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    logo?: string;
    credentialUrl?: string;
}

interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 h-full">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                            {certification.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            {certification.issuer}
                        </p>
                    </div>
                    {certification.logo && (
                        <div className="w-12 h-12 relative flex-shrink-0">
                            <Image
                                src={certification.logo}
                                alt={certification.issuer}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{certification.date}</p>
                    {certification.credentialUrl && (
                        <Link
                            href={certification.credentialUrl}
                            target="_blank"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                            View Credential
                            <ExternalLink className="w-3 h-3" />
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
