import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            company: "EssayChecker.ai",
            title: "Web Developer Intern",
            duration: "April 2024 – Present",
            location: "Jalandhar, Punjab",
            responsibilities: [
                "Redesigned Mock Test page into dynamic tables, improving functionality and user experience for 10,000+ users.",
                "Developed full-length interactive Listening and Reading tests for IELTS Mock Tests, utilized by 3,000+ users.",
                "Implemented performance tracking, real-time audio integration for Listening tests, and resolved bugs, enhancing user experience and system stability."
            ],
            techStack: "ReactJS, Material-UI, Git"
        },
        {
            company: "GTBComputerEducation",
            title: "Web Designing Trainee",
            duration: "Feb 2023 – July 2023",
            location: "Jalandhar, Punjab",
            responsibilities: [
                "Developed a fully functional e-commerce website as a part of the training curriculum.",
                "Demonstrated proficiency in front-end development by completing all tasks and assignments within designated timelines.",
                "Acquired practical skills in web development and gained hands-on experience in building responsive and interactive web applications."
            ],
            techStack: "HTML, CSS, JS, Bootstrap, JQuery"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const { company, title, duration, location, responsibilities, techStack } = experiences[currentIndex];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };

    return (
        <div name='experience' className='bg-gradient-to-b from-black to-gray-900 w-full h-auto'>
            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
                <div>
                    <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full py-8 text-center flex flex-col items-center relative'>
                    <FaArrowLeft 
                        onClick={goToPrevious} 
                        className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-2xl md:text-4xl cursor-pointer text-gray-300 hover:text-white' 
                    />
                    <div className='w-full md:w-1/2 py-10 px-6 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg duration-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-600 transform transition'>
                        <p className='mt-0 font-bold text-2xl text-blue-400'>{company}</p>
                        <p className='italic text-lg text-gray-300'>{title}</p>
                        <p className='py-2 text-gray-400'>{duration}</p>
                        <p className='pb-2 text-gray-400'>{location}</p>
                        <ul className='text-left list-disc list-inside space-y-2'>
                            {responsibilities.map((responsibility, index) => (
                                <li key={index} className='text-gray-300'>{responsibility}</li>
                            ))}
                        </ul>
                        <p className='pt-4 text-gray-400'>Tech Stack: <span className='text-blue-300'>{techStack}</span></p>
                    </div>
                    <FaArrowRight 
                        onClick={goToNext} 
                        className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-2xl md:text-4xl cursor-pointer text-gray-300 hover:text-white' 
                    />
                    <div className='flex justify-center mt-4'>
                        {experiences.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-600'}`}
                                onClick={() => setCurrentIndex(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
