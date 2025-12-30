"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

import { Education } from "@/config/education";
import { cn } from "@/lib/utils";

interface EducationCardProps {
    education: Education;
    index: number;
}

export default function EducationCard({ education, index }: EducationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "relative group",
                "rounded-xl border bg-card p-6 shadow-sm",
                "hover:shadow-lg transition-all duration-300",
                "hover:border-primary/50"
            )}
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                    {education.logo ? (
                        <div className="w-14 h-14 rounded-full border-2 border-border overflow-hidden bg-white flex items-center justify-center shadow-sm">
                            <Image
                                src={education.logo}
                                alt={education.institution}
                                width={56}
                                height={56}
                                className="w-full h-full object-contain p-1"
                            />
                        </div>
                    ) : (
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="w-7 h-7 text-primary" />
                        </div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                        {education.institution}
                    </h3>
                    <p className="text-base font-medium text-primary mb-1">
                        {education.degree}
                    </p>
                    {education.field && (
                        <p className="text-sm text-muted-foreground mb-2">
                            {education.field}
                        </p>
                    )}
                </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                        {education.startDate} - {education.endDate}
                    </span>
                </div>
            </div>

            {/* GPA or Z-Score */}
            {education.gpa && (
                <div className="mb-4">
                    <div className="inline-block px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
                        <span className="text-sm font-semibold text-primary">
                            CGPA: {education.gpa}
                        </span>
                    </div>
                </div>
            )}
            {education.zScore && (
                <div className="mb-4">
                    <div className="inline-block px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
                        <span className="text-sm font-semibold text-primary">
                            Z-Score: {education.zScore}
                        </span>
                    </div>
                </div>
            )}

            {/* Credential Information */}
            {education.credentialId && (
                <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">
                        Credential ID: <span className="font-mono text-foreground">{education.credentialId}</span>
                    </p>
                    {education.credentialUrl && (
                        <a
                            href={education.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                            Show credential
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    )}
                </div>
            )}

            {/* Achievements */}
            {education.achievements && education.achievements.length > 0 && (
                <div className="mb-4">
                    <ul className="space-y-1">
                        {education.achievements.map((achievement, idx) => (
                            <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Key Courses */}
            {education.courses && education.courses.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Courses:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
