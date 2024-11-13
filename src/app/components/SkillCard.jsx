import React from "react";
import Image from "next/image";

const SkillCard = ({ path, name }) => {
    return (
        <div className="h-16 w-16 mr-2 border-2 relative rounded-full border-gray-500 bg-gray-500">
            <Image src={path} alt={name} className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-xl" />
        </div>
    )
};

export default SkillCard;
