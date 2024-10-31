"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const Tab_Data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>PostgreSQL</li>
                <li>Ruby on Rails</li>
                <li>Java</li>
                <li>Go</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Master of Computer Science</li>
                <li>Master of Chemical Engineering</li>
                <li>Illinios Institute of Technology</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Full Stack Engineer at Cromatic</li>
                <li>Software Engineer at Chowbus</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
                <Image src="/images/about-image.png" alt="About" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am a full stack web developer specializing in building efficient and 
                        user-friendly web applications. I have experience working with JavaScript, 
                        TypeScript, Ruby, React, Ruby on Rails, Node.js, GraphQL, PostgreSQL, and 
                        various AWS services. I leverage my unique background in Computer Science 
                        and Chemical Engineering to bring analytical thinking and creative 
                        problem-solving to every project. I am passionate about improving user 
                        experiences and developing innovative solutions, always eager to learn new 
                        technologies and collaborate with cross-functional teams to create impactful 
                        applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("experience")} 
                            active={tab === "experience"}
                        >
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">{Tab_Data.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;
