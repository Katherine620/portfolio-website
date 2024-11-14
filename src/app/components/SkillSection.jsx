"use client";
import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useInView } from "framer-motion";
// Database
import PostgreSQLIcon from "../../../public/images/skills/database/postgresql.svg";
import MongoDBIcon from "../../../public/images/skills/database/mongodb-icon.svg";
import RedisIcon from "../../../public/images/skills/database/redis.svg";
import PrismaIcon from "../../../public/images/skills/database/prisma.svg";
import GraphQLIcon from "../../../public/images/skills/database/graphql.svg";

// Styling
import CSSIcon from "../../../public/images/skills/styling/css.svg";
import TailwindCSSIcon from "../../../public/images/skills/styling/tailwind-css.svg";
import MaterialUIIcon from "../../../public/images/skills/styling/material-ui.svg";
import BootstrapIcon from "../../../public/images/skills/styling/bootstrap.svg";

// Languages
import JavaScriptIcon from "../../../public/images/skills/languages/javascript.svg";
import TypeScriptIcon from "../../../public/images/skills/languages/typescript.svg";
import RubyIcon from "../../../public/images/skills/languages/ruby.svg";
import GolangIcon from "../../../public/images/skills/languages/golang.svg";
import JavaIcon from "../../../public/images/skills/languages/java.svg";
import PythonIcon from "../../../public/images/skills/languages/python.svg";

// Frameworks
import ReactIcon from "../../../public/images/skills/framework/react.svg";
import NodeJsIcon from "../../../public/images/skills/framework/nodejs.svg";
import NextJsIcon from "../../../public/images/skills/framework/next-js.svg";
import RailsIcon from "../../../public/images/skills/framework/rails.svg";
import HtmlIcon from "../../../public/images/skills/framework/html.svg";
import SpringIcon from "../../../public/images/skills/framework/spring.svg";

// Services
import GithubIcon from "../../../public/github-icon.svg";
import AWSIcon from "../../../public/images/skills/service/aws.svg";
import DataDogIcon from "../../../public/images/skills/service/datadog.svg";
import HerokuIcon from "../../../public/images/skills/service/heroku.svg";
import SentryIcon from "../../../public/images/skills/service/sentry.svg";
import JiraIcon from "../../../public/images/skills/service/jira.svg";
import ConfluenceIcon from "../../../public/images/skills/service/confluence.svg";
import BitbucketIcon from "../../../public/images/skills/service/bitbucket-icon.svg";


const skillsData = [
    {
        id: 1,
        name: "JavaScript",
        path: JavaScriptIcon,
        tag: ["All", "Languages"],
    },
    {
        id: 2,
        name: "TypeScript",
        path: TypeScriptIcon,
        tag: ["All", "Languages"],
    },
    {
        id: 3,
        name: "React",
        path: ReactIcon,
        tag: ["All", "Framework"],
    },
    {
        id: 4,
        name: "NodeJs",
        path: NodeJsIcon,
        tag: ["All", "Framework"],
    },
    {
        id: 5,
        name: "NextJs",
        path: NextJsIcon,
        tag: ["All", "Framework"],
    },
    {
        id: 6,
        name: "CSS",
        path: CSSIcon,
        tag: ["All", "Styling"],
    },
    {
        id: 7,
        name: "Tailwind CSS",
        path: TailwindCSSIcon,
        tag: ["All", "Styling"],
    },
    {
        id: 8,
        name: "Ruby",
        path: RubyIcon,
        tag: ["All", "Languages"],
    },
    {
        id: 9,
        name: "Rails",
        path: RailsIcon,
        tag: ["All", "Framework"],
    },
    {
        id: 10,
        name: "Go",
        path: GolangIcon,
        tag: ["All", "Languages"],
    },
    {
        id: 11,
        name: "PostgreSQL",
        path: PostgreSQLIcon,
        tag: ["All", "Database"],
    },
    {
        id: 12,
        name: "Java",
        path: JavaIcon,
        tag: ["All", "Languages"],
    },
    {
        id: 13,
        name: "GraphQL",
        path: GraphQLIcon,
        tag: ["All", "Database"],
    },
    {
        id: 14,
        name: "HTML",
        path: HtmlIcon,
        tag: ["All", "Framework"],
    },
    {
        id: 15,
        name: "Bootstrap",
        path: BootstrapIcon,
        tag: ["All", "Styling"],
    },
    {
        id: 16,
        name: "Material UI",
        path: MaterialUIIcon,
        tag: ["All", "Styling"],
    },
    {
        id: 17,
        name: "GitHub",
        path: GithubIcon,
        tag: ["All", "Services"],
    },
    {
        id: 18,
        name: "DataDog",
        path: DataDogIcon,
        tag: ["All", "Services"],
    },
    {
        id: 19,
        name: "AWS",
        path: AWSIcon,
        tag: ["All", "Services"],
    },
    {
        id: 20,
        name: "Python",
        path: PythonIcon,
        tag: ["All", "Languages"],
    },
    {
        id: 21,
        name: "Heroku",
        path: HerokuIcon,
        tag: ["All", "Services"],
    },
    {
        id: 22,
        name: "Sentry",
        path: SentryIcon,
        tag: ["All", "Services"],
    },
    {
        id: 23,
        name: "Prisma",
        path: PrismaIcon,
        tag: ["All", "Database"],
    },
    {
        id: 24,
        name: "MongoDB",
        path: MongoDBIcon,
        tag: ["All", "Database"],
    },
    {
        id: 25,
        name: "Redis",
        path: RedisIcon,
        tag: ["All", "Database"],
    },
    {
        id: 26,
        name: "Spring",
        path: SpringIcon,
        tag: ["All", "Framework"],
    },
    {
        id: 27,
        name: "Jira",
        path: JiraIcon,
        tag: ["All", "Services"],
    },
    {
        id: 28,
        name: "Confluence",
        path: ConfluenceIcon,
        tag: ["All", "Services"],
    },
    {
        id: 29,
        name: "Bitbucket",
        path: BitbucketIcon,
        tag: ["All", "Services"],
    },

];

const SkillSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="text-white mb-8" id="skills">
            <h1 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
                Skills
            </h1>
            <div ref={ref} className="grid grid-cols-3 md:grid-cols-9 gap-4 justify-items-center">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate": "initial"}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <SkillCard key={skill.name} name={skill.name} path={skill.path} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
};

export default SkillSection;
