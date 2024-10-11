import React, { useState } from "react";
import Image from "next/image";
import sampleData from "@/pages/api/sampleData";

const Card: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sampleData.length);
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + sampleData.length) % sampleData.length);
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Left arrow */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 z-30 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            {/* Left arrow end */}
            {/* Carousel Cards */}
            <div className="relative flex items-center justify-center overflow-hidden">
                {sampleData.map((card, index) => (
                <div
                    key={index}
                    className={`transition-transform duration-500 ease-in-out transform ${
                    index === activeIndex ? 'translate-x-0 scale-100' : index === (activeIndex + 1) % sampleData.length ? 'translate-x-1/2 scale-' : 'translate-x-full scale-75'
                    } mx-2`}
                    style={{ width: '250px' }} // Set width sesuai kebutuhan
                >
                    <div className="relative bg-white rounded-xl shadow-lg p-4 text-center">
                    {/* Salary Tag */}
                    <div className="absolute -top-6 bg-green-300 rounded-full px-4 py-1 text-sm font-semibold text-green-800 shadow-md">
                        {card.salary}
                    </div>

                    {/* Profile Image */}
                    <Image src={card.imgSrc} alt={card.name} width={100} height={100} className="mx-auto rounded-full" />

                    {/* Name & Job */}
                    <h3 className="text-xl font-bold mt-4">{card.name}</h3>
                    <p className="text-blue-500">{card.job} - {card.experience}</p>

                    {/* Skills */}
                    <div className="mt-4 space-y-2">
                        {card.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 inline-block">
                            {skill}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            {/* Carousel Cards end */}
            {/* Right arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-0 z-30 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            {/* Right arrow end */}
        </div>
    );
}

// interface CardProps {
//     name: string;
//     job: string;
//     experience: string;
//     skills: string[];
//     salary: string;
//     imgSrc: string;
// }

// const Card: React.FC<CardProps> = ({ name, job, experience, skills, salary, imgSrc }) => {
//     return(
//         <div className="card border rounded-lg shadow-md p-4 hover:bg-gray-100 transition-all duration-300">
//             <Image src={imgSrc} alt={name} width={100} height={100} className="card-img" />
//             <h3 className="card-title yellow-animated-text">{name}</h3>
//             <p className="card-text">{job} - {experience}</p>
//             <div className="skills">
//                 {skills.map(skill => (
//                 <span key={skill} className="skill badge bg-primary">{skill}</span>
//                 ))}
//             </div>
//             <div className="salary text-lg font-semibold text-success">{salary}</div>
//         </div>
//     );
// };

export default Card;