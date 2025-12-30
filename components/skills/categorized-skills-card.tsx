import { AnimatedText } from "@/components/common/animated-text";
import { skillsInterface } from "@/config/skills";

interface CategorizedSkillsCardProps {
    skills: skillsInterface[];
}

// Define skill categories
const skillCategories = {
    "Languages": ["Python", "Java", "C/C++", "JavaScript", "React", "MATLAB", "SQL"],
    "Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "ROS/ROS2", "React.js", "Node.js"],
    "Developer Tools": ["MATLAB", "Git & GitHub", "Altium Designer", "SolidWorks", "LTspice", "Arduino", "CUDA"],
    "Cloud & Databases": ["MySQL", "Firebase"],
    "Areas of Interest": ["Machine Learning", "Deep Learning", "Software Development", "Computer Vision", "IoT Development", "Embedded Systems", "Robotic Automation"],
};

export default function CategorizedSkillsCard({ skills }: CategorizedSkillsCardProps) {
    // Create a map for quick skill lookup
    const skillMap = new Map(skills.map(skill => [skill.name, skill]));

    return (
        <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skillCategories).map(([category, skillNames], categoryIndex) => (
                    <AnimatedText
                        key={category}
                        delay={0.1 * (categoryIndex + 1)}
                        className="relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm p-6"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                {category === "Languages" && (
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                )}
                                {category === "Frameworks" && (
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                )}
                                {category === "Developer Tools" && (
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                )}
                                {category === "Cloud & Databases" && (
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                    </svg>
                                )}
                                {category === "Areas of Interest" && (
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                )}
                                <h3 className="text-lg font-bold text-foreground">{category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillNames.map((skillName) => {
                                    const skill = skillMap.get(skillName);
                                    return (
                                        <span
                                            key={skillName}
                                            className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                                            title={skill?.description || skillName}
                                        >
                                            {skillName}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </AnimatedText>
                ))}
            </div>
        </div>
    );
}
