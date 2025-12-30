"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { ExperienceInterface } from "@/config/experience";

// Helper function to format date range
const formatDateRange = (
    startDate: Date,
    endDate: Date | "Present"
): string => {
    const formatMonth = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    };

    const start = formatMonth(startDate);
    const end = typeof endDate === "string" ? endDate : formatMonth(endDate);
    return `${start} - ${end}`;
};

interface EnhancedExperienceCardProps {
    experience: ExperienceInterface;
}

const EnhancedExperienceCard: React.FC<EnhancedExperienceCardProps> = ({
    experience,
}) => {
    return (
        <div className="group relative overflow-hidden rounded-xl border-2 border-border bg-background hover:border-primary/50 transition-all duration-300">
            <div className="p-6 space-y-4">
                {/* Header with Logo and Company Info */}
                <div className="flex items-start gap-4">
                    {experience.logo && (
                        <div className="w-16 h-16 rounded-xl border-2 border-border overflow-hidden bg-white flex-shrink-0 shadow-sm">
                            <Image
                                src={experience.logo}
                                alt={experience.company}
                                width={64}
                                height={64}
                                className="w-full h-full object-contain p-2"
                            />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {experience.company}
                                </h3>
                                <p className="text-base font-semibold text-muted-foreground mt-1">
                                    {experience.position}
                                </p>
                            </div>
                            {experience.companyUrl && (
                                <a
                                    href={experience.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                                >
                                    <Icons.externalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            {experience.location}
                        </p>
                    </div>
                </div>

                {/* Date Badge */}
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground">
                        {formatDateRange(experience.startDate, experience.endDate)}
                    </span>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {experience.description[0]}
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {experience.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* View Details Link */}
                <div className="pt-2">
                    <Link
                        href={`/experience/${experience.id}`}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                        View Details
                        <Icons.chevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Decorative gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
};

export default EnhancedExperienceCard;
