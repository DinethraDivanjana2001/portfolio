import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContactInfo from "@/components/contact/contact-info";
import EducationCard from "@/components/education/education-card";
import EnhancedExperienceCard from "@/components/experience/enhanced-experience-card";
import { SimpleContactForm } from "@/components/forms/simple-contact-form";
import ProjectCard from "@/components/projects/project-card";
import CompactProjectCard from "@/components/projects/compact-project-card";
import CategorizedSkillsCard from "@/components/skills/categorized-skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import VolunteeringCard from "@/components/volunteering/volunteering-card";
import { volunteeringData } from "@/config/volunteering";
import { educationData } from "@/config/education";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "AI & Machine Learning | Computer Vision | Software Development",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="relative pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 min-h-screen flex items-center overflow-hidden">
        <div className="container max-w-[90rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
              <AnimatedText
                as="h3"
                delay={0.2}
                className="text-sm sm:text-base font-medium text-primary uppercase tracking-wider"
              >
                Engineering Student | Software & AI
              </AnimatedText>

              <AnimatedText
                as="h1"
                delay={0.3}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              >
                Dinethra Rajapaksha
              </AnimatedText>

              <AnimatedText
                as="h2"
                delay={0.4}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
              >
                AI & Machine Learning | Computer Vision | Software Development
              </AnimatedText>

              <AnimatedText
                as="div"
                delay={0.5}
                className="max-w-[42rem]"
              >
                <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                  I am a final year Electronics and Telecommunication Engineering undergraduate with a strong interest in AI, machine learning, computer vision, and software development. I enjoy building intelligent software systems, applying data-driven approaches to solve real-world problems and deliver impactful engineering solutions.
                </p>
              </AnimatedText>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                <AnimatedText delay={0.6}>
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    className={cn(
                      "inline-flex items-center justify-center rounded-md bg-background border border-input hover:bg-accent hover:text-accent-foreground h-11 w-11 transition-colors"
                    )}
                    aria-label="GitHub Profile"
                  >
                    <Icons.gitHub className="w-5 h-5" />
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.65}>
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    className={cn(
                      "inline-flex items-center justify-center rounded-md bg-background border border-input hover:bg-accent hover:text-accent-foreground h-11 w-11 transition-colors"
                    )}
                    aria-label="LinkedIn Profile"
                  >
                    <Icons.linkedin className="w-5 h-5" />
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.7}>
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.links.email}`} target="_blank" rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center rounded-md bg-background border border-input hover:bg-accent hover:text-accent-foreground h-11 w-11 transition-colors"
                    )}
                    aria-label="Email"
                  >
                    <Icons.gmail className="w-5 h-5" />
                  </Link>
                </AnimatedText>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-2">
                <AnimatedText delay={0.75}>
                  <Link
                    href="/#projects"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-md w-full sm:w-auto"
                    )}
                    aria-label="Explore Projects"
                  >
                    Explore Projects
                    <Icons.arrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.8}>
                  <Link
                    href="/#contact"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "rounded-md w-full sm:w-auto"
                    )}
                    aria-label="Contact Me"
                  >
                    Contact Me
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.85}>
                  <Link
                    href="/cv.pdf"
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "rounded-md w-full sm:w-auto"
                    )}
                    aria-label="Download CV"
                  >
                    Download CV
                    <Icons.download className="w-4 h-4 ml-2" />
                  </Link>
                </AnimatedText>
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <AnimatedText delay={0.2} className="relative">
                <div className="relative">
                  <Image
                    src={profileImg}
                    height={500}
                    width={500}
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
                    className="rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover border-8 border-primary shadow-2xl"
                    alt="Dinethra Rajapaksha - AI & Machine Learning Portfolio"
                    priority
                  />
                  {/* Decorative gradient blur effect */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                </div>
              </AnimatedText>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <AnimatedText delay={1.0}>
              <Icons.chevronDown className="h-6 w-6 animate-bounce" />
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AnimatedSection
        className="container space-y-6 py-16 md:py-24"
        id="about"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            About <span className="text-primary">Me</span>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.2} className="mx-auto max-w-[75rem]">
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              I am a final-year Electronics and Telecommunication Engineering undergraduate at the{" "}
              <span className="text-primary font-semibold">University of Moratuwa, Sri Lanka</span>,
              with a strong focus on machine learning, artificial intelligence, computer vision, and
              software development. My academic training and project experience have allowed me to work
              across the full lifecycle of intelligent systems, from data preparation and model development
              to software integration, deployment, and evaluation in real-world environments.
            </p>

            <p>
              My primary interests lie in developing intelligent software systems that are practical,
              scalable, and grounded in real engineering constraints. I have worked extensively on{" "}
              <span className="text-primary font-semibold">
                vision-based inspection systems, deep learning models for detection and tracking
              </span>,
              and end-to-end AI pipelines deployed on both desktop and edge platforms. Alongside this,
              my background in{" "}
              <span className="text-primary font-semibold">embedded systems and IoT</span>{" "}
              has shaped the way I approach problem-solving, with a strong emphasis on reliability,
              system integration, and usability beyond pure algorithmic performance.
            </p>

            <p>
              While I also explore applications in{" "}
              <span className="text-primary font-semibold">robotics and autonomous systems</span>,
              my long-term focus is on building technology that understands and serves the user.
              I am particularly interested in engineering solutions where machine learning and perception
              enhance real-world decision-making, rather than existing in isolation as theoretical models.
              I am driven to create systems that are not only intelligent, but also usable, maintainable,
              and impactful in practical settings.
            </p>
          </div>
        </AnimatedText>
      </AnimatedSection>


      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            <span className="text-primary">Technical</span> Skills
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <CategorizedSkillsCard skills={skills} />
      </AnimatedSection>

      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Work <span className="text-primary">Experience</span>
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Professional journey and contributions
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full max-w-7xl">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <EnhancedExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>

        {/* Final Year Project - LARGE HERO */}
        {(() => {
          const finalYearProject = Projects.find((p) => p.projectCategory === "Final Year");
          return finalYearProject ? (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-cyan-400 text-center">Final Year Project</h3>
              <div className="relative bg-gradient-to-br from-card/50 to-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-[45%_55%] gap-0">
                  <div className="relative h-[400px] lg:h-[500px]">
                    <Image
                      src={finalYearProject.companyLogoImg}
                      alt={finalYearProject.companyName}
                      fill
                      unoptimized                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:to-background/60" />
                  </div>
                  <div className="relative flex flex-col justify-center p-6 lg:p-10 space-y-4">
                    <h4 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                      {finalYearProject.companyName}
                    </h4>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                      {finalYearProject.shortDescription}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {finalYearProject.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {finalYearProject.githubLink && (
                        <Link href={finalYearProject.githubLink} target="_blank">
                          <Button variant="default">
                            <Icons.gitHub className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })()}

        {/* Internship Projects */}
        {(() => {
          const internshipProjects = Projects.filter((p) => p.projectCategory === "Internship");
          const miniInternshipIds = ["hmi-project", "thingsboard-dashboard", "motion-controller-study", "fish-tank-monitoring"];
          const mainInternships = internshipProjects.filter(p => !miniInternshipIds.includes(p.id));
          const miniInternships = internshipProjects.filter(p => miniInternshipIds.includes(p.id));

          return internshipProjects.length > 0 ? (
            <div className="space-y-8 pt-12">
              <h3 className="text-3xl font-bold text-cyan-400 text-center">Internship Projects</h3>

              {/* Main Internship Projects - 3 column grid */}
              <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3">
                {mainInternships.map((project, index) => (
                  <AnimatedSection
                    key={project.id}
                    delay={0.1 * (index + 1)}
                    direction="up"
                  >
                    <ProjectCard project={project} />
                  </AnimatedSection>
                ))}
              </div>

              {/* Mini Internship Projects - 4 column grid of compact cards BELOW */}
              {miniInternships.length > 0 && (
                <div className="space-y-4 pt-6">
                  <h4 className="text-lg font-semibold text-muted-foreground text-center">Additional Projects</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {miniInternships.map((project, index) => (
                      <AnimatedSection
                        key={project.id}
                        delay={0.1 * (index + 4)}
                        direction="up"
                      >
                        <CompactProjectCard project={project} />
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null;
        })()}

        {/* Other Projects */}
        {(() => {
          const otherProjects = Projects.filter(
            (p) => !p.projectCategory || p.projectCategory === "Academic" || p.projectCategory === "Mini Project"
          );
          return otherProjects.length > 0 ? (
            <div className="space-y-8 pt-12">
              <h3 className="text-3xl font-bold text-cyan-400 text-center">Other Projects</h3>
              <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <AnimatedSection
                    key={project.id}
                    delay={0.1 * (index + 1)}
                    direction="up"
                  >
                    <ProjectCard project={project} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ) : null;
        })()}
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection
        className="container space-y-6 py-16 md:py-24"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            <span className="text-primary">Education</span>
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Academic journey and qualifications
          </AnimatedText>
        </div>

        {/* Higher Education */}
        <div className="max-w-[70rem] mx-auto space-y-6">
          <AnimatedText delay={0.3}>
            <h3 className="text-2xl font-heading text-primary">Higher Education</h3>
          </AnimatedText>
          <div className="grid gap-6 md:gap-8">
            {educationData
              .filter((edu) => edu.category === "Higher Education")
              .map((edu, index) => (
                <EducationCard key={edu.id} education={edu} index={index + 2} />
              ))}
          </div>
        </div>

        {/* School Education */}
        <div className="max-w-[70rem] mx-auto space-y-6 mt-12">
          <AnimatedText delay={0.4}>
            <h3 className="text-2xl font-heading text-primary">School Education</h3>
          </AnimatedText>
          <div className="grid gap-6 md:gap-8">
            {educationData
              .filter((edu) => edu.category === "School Education")
              .map((edu, index) => (
                <EducationCard key={edu.id} education={edu} index={index + 2} />
              ))}
          </div>
        </div>

        {/* Coursework & Certifications */}
        <div className="max-w-[70rem] mx-auto space-y-6 mt-12">
          <AnimatedText delay={0.5}>
            <h3 className="text-2xl font-heading text-primary">Coursework & Certifications</h3>
          </AnimatedText>
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {educationData
              .filter((edu) => edu.category === "Coursework & Certifications")
              .map((edu, index) => (
                <EducationCard key={edu.id} education={edu} index={index + 2} />
              ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications Section */}
      {/* Volunteering Section */}
      <AnimatedSection
        className="container space-y-6 py-16 md:py-24"
        id="volunteering"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            <span className="text-primary">Volunteering</span>
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Community engagement and leadership experiences
          </AnimatedText>
        </div>

        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-2 max-w-6xl">
          {volunteeringData.map((volunteering, index) => (
            <AnimatedSection
              key={volunteering.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <VolunteeringCard volunteering={volunteering} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        className="container space-y-6 py-16 md:py-24 bg-muted"
        id="contact"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Get In <span className="text-primary">Touch</span>
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <AnimatedText delay={0.3}>
            <ContactInfo />
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <div className="bg-background rounded-xl p-6 shadow-sm border">
              <h3 className="text-2xl font-heading mb-6">Send a Message</h3>
              <SimpleContactForm />
            </div>
          </AnimatedText>
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
