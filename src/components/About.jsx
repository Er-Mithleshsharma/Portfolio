import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full  h-screen text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center md:justify-center w-full  h-auto md:h-full '>
       <div className='pb-8'>
        <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
            About
        </p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Dolore ea nisi,
              aut doloremque autem sequi, veri
              tatis quaerat vel, eum beatae exce
              pturi eligendi labore corrupti? Sed

        </p>
        <br />
        <p>
        sunt cumque vitae est voluptas por
            ro optio autem quae ea quisquam perfe
            rendis consectetur magni quis et, cor
            rupti pariatur eum sint numquam neque
             architecto? Officia, officiis.
        </p>
        </div>
        </div>
  )
}

export default About;