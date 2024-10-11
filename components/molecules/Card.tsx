import React from "react";
import Image from "next/image";

interface CardProps {
    name: string;
    job: string;
    experience: string;
    skills: string[];
    salary: string;
    imgSrc: string;

}

const Card: React.FC<CardProps> = ({ name, job, experience, skills, salary, imgSrc }) => {
    return(
        <div className="card border rounded-lg shadow-md p-4 hover:bg-gray-100 transition-all duration-300">
            <Image src={imgSrc} alt={name} width={100} height={100} className="card-img" />
            <h3 className="card-title yellow-animated-text">{name}</h3>
            <p className="card-text">{job} - {experience}</p>
            <div className="skills">
                {skills.map(skill => (
                <span key={skill} className="skill badge bg-primary">{skill}</span>
                ))}
            </div>
            <div className="salary text-lg font-semibold text-success">{salary}</div>
        </div>
    );
};

export default Card;