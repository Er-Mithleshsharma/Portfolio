import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full text-white bg-gradient-to-b from-gray-800 to-black h-auto md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center md:justify-center w-full  h-auto md:h-full '>
       <div className='pb-8'>
        <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
            About
        </p>
        </div>
        <p className='text-xl mt-10'>
       A dedicated BTech student 
        with a passion for technology and innovation. I'm currently
         immersed in my studies, focusing on mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack.
Driven by a thirst for knowledge and a love for problem-solving, I 
also possess a strong understanding of Data Structures and Algorithms
 (DSA). I believe in the importance of not just learning, but truly 
 understanding the core concepts to build robust and efficient software
  solutions.</p>
        <br />
        <p className='text-xl mt-10'>
        Outside of my academic pursuits, I enjoy diving into coding challenges,
 exploring new technologies, and contributing to open-source projects.
  I thrive in dynamic environments where I can apply my skills and continue 
  to grow both personally and professionally.

I'm excited about the endless possibilities that the world of technology
 offers and look forward to making a positive impact with my skills and expertise.
        </p>
        </div>
        </div>
  )
}

export default About;