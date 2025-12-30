"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";

import { Volunteering } from "@/config/volunteering";
import { cn } from "@/lib/utils";

interface VolunteeringCardProps {
    volunteering: Volunteering;
    index: number;
}

export default function VolunteeringCard({ volunteering, index }: VolunteeringCardProps) {
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
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-7 h-7 text-primary" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                        {volunteering.title}
                    </h3>
                    <p className="text-base font-medium text-primary mb-1">
                        {volunteering.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {volunteering.organization}
                    </p>
                </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>
                    {volunteering.startDate} - {volunteering.endDate}
                </span>
            </div>

            {/* Description */}
            {volunteering.description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {volunteering.description}
                </p>
            )}

            {/* Achievements */}
            {volunteering.achievements && volunteering.achievements.length > 0 && (
                <div>
                    <ul className="space-y-1">
                        {volunteering.achievements.map((achievement, idx) => (
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
        </motion.div>
    );
}
