import React from 'react';
import { MdOutlineArrowRight } from "react-icons/md";
import heroimg  from '../assets/heroimg.jpg'
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800

     '>
           <div className="max-w-screen-lg mx-auto flex flex-col 
           items-center  h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-auto'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white pt-5 md:pt-32 lg:pt-5'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4'>
                I'm a passionate BTech student and MERN stack developer with a strong foundation in computer 
                science and programming. My journey into the world of 
                technology began with a curiosity-driven exploration
               
                </p>
                <Link to='portfolio' smooth duration={500}>
                <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowRight size={25} className='ml-1 '/>
                        </span>
                    </button>
                </div>
              </Link>
            </div>
            <div className='pt-10 md:pt:0'>
                    <img src={heroimg} alt="" className='rounded-2xl mx-auto w-2/3 md:w-9/12 '/>
                </div>
           </div>
    </div>
  )
}

export default Home