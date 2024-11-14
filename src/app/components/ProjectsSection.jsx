"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { ProjectURLs } from "../constants/constants";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "React Prtfolio Website",
        description: "This is a portfolio website built using React.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: ProjectURLs.PORTFOLIO_GITHUB,
        previewUrl: ProjectURLs.PORTFOLIO_PREVIEW
    },
    {
        id: 2,
        title: "Yiroad Website",
        description: "This is a website built and design by me.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: ProjectURLs.YIROAD_GITHUB,
        previewUrl: ProjectURLs.YIROAD_PREVIEW
    },
    {
        id: 3,
        title: "To dos Application",
        description: "This is an application build with Java, Spring booths.",
        image: "/images/projects/3.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: ProjectURLs.TO_DO_APP_GITHUB,
        previewUrl: ProjectURLs.TO_DO_APP_PREVIEW
    },
    // {
    //     id: 4,
    //     title: "React Prtfolio Website",
    //     description: "This is a portfolio website built using React.",
    //     image: "/images/projects/1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 5,
    //     title: "Yiroad Website",
    //     description: "This is a website built and design by me.",
    //     image: "/images/projects/2.png",
    //     tag: ["All", "Mobile"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 6,
    //     title: "To dos Application",
    //     description: "This is an application build with Java, Spring booths.",
    //     image: "/images/projects/3.png",
    //     tag: ["All", "Web", "Mobile"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"} 
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate": "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
};

export default ProjectsSection;
