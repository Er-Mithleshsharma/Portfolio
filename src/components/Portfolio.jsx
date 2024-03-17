import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import socketsphere from '../assets/portfolio/socketsphere.png'
import portfolio from "../assets/portfolio/portfolio.png"
import reactOmeal from '../assets/portfolio/reactomeal.png'
import movieMentor from '../assets/portfolio/movie-mentor.png'

const Portfolio = () => {
// Can add a link to each part of the array to go to onclick
  const portfolios = [
    {
        id: 1,
        src: socketsphere,
        link:"https://socketsphere.onrender.com/",
        code:"https://github.com/Er-Mithleshsharma/SocketSphere"
    }, 
    {
        id: 2,
        src: portfolio,
        link:"https://mithleshsharma.netlify.app/",
        code:"https://github.com/Er-Mithleshsharma/Portfoilo"

    },
    {
        id: 3,
        src: reactOmeal,
        link:"https://reactomealv2.netlify.app",
        code:"https://github.com/Er-Mithleshsharma/ReactOmeal"

    },
    {
        id: 4,
        src: movieMentor,
        link:"https://movie-mentor.netlify.app",
        code:"https://github.com/Er-Mithleshsharma/Movie-Mentor"

    },
  ]  

  return (
    <div name='portfolio' className='w-full text-white bg-gradient-to-b from-black to-gray-800 sm:h-fit md:h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pb-16 mx-auto'>
            <div>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
            {
            portfolios.map(({id,src,link,code}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
                    <img src={src} alt="" className='duration-200 rounded-md hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button onClick={()=>window.open(link, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Demo
                        </button >
                        <button 
                        onClick={()=>window.open(code, '_blank')}
                  
                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Code
                        </button>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio