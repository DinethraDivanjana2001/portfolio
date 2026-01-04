import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

export default function ProjectsPage() {
  // Separate projects by category
  const finalYearProject = Projects.find((p) => p.projectCategory === "Final Year");
  const internshipProjects = Projects.filter((p) => p.projectCategory === "Internship");
  const otherProjects = Projects.filter((p) => !p.projectCategory || p.projectCategory === "Academic" || p.projectCategory === "Mini Project");

  return (
    <PageContainer
      title="Featured Projects"
      description="Innovative solutions and technical implementations"
    >
      <div className="space-y-16">
        {/* Final Year Project - LARGE HERO SECTION */}
        {finalYearProject && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Final Year Project</h2>
            <div className="relative bg-gradient-to-br from-card/50 to-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-[45%_55%] gap-0">
                {/* Project Image - Left Side */}
                <div className="relative h-[500px] lg:h-[600px]">
                  <Image
                    src={finalYearProject.companyLogoImg}
                    alt={finalYearProject.companyName}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:to-background/60" />
                </div>

                {/* Project Details - Right Side */}
                <div className="relative flex flex-col justify-center p-8 lg:p-12 space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    {finalYearProject.companyName}
                  </h3>

                  <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                    {finalYearProject.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    {finalYearProject.descriptionDetails.bullets.slice(0, 3).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">Technologies</h4>
                    <ChipContainer textArr={finalYearProject.techStack} />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {finalYearProject.githubLink && (
                      <Link href={finalYearProject.githubLink} target="_blank">
                        <Button variant="default" size="lg" className="text-base">
                          <Icons.gitHub className="w-5 h-5 mr-2" />
                          View Code
                        </Button>
                      </Link>
                    )}
                    {finalYearProject.youtubeLink && (
                      <Link href={finalYearProject.youtubeLink} target="_blank">
                        <Button variant="outline" size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-600 text-base">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          Watch Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Internship Projects */}
        {internshipProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Internship Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {internshipProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Other Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageContainer>
  );
}
