import Image from "next/image";
import { ProjectInterface } from "@/config/projects";

interface CompactProjectCardProps {
    project: ProjectInterface;
}

export default function CompactProjectCard({ project }: CompactProjectCardProps) {
    return (
        <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-md">
            {/* Small Image */}
            <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                    className="rounded-md border border-border object-cover"
                    src={project.companyLogoImg}
                    alt={project.companyName}
                    fill
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h5 className="text-sm font-bold text-foreground truncate mb-1">
                    {project.companyName}
                </h5>
                <p className="text-xs text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                </p>
            </div>
        </div>
    );
}
