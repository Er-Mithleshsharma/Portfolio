import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import cplus from '../assets/c++.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'
import vscode from '../assets/vscode.png'
import node from '../assets/node.png'
import mongo from '../assets/mongodb (1).png'
import express from '../assets/express.png'
const Experience = () => {
  const tech = [
    {
        id: 1,
        src: cplus,
        title: 'C++',
        style: 'shadow-green-400',
        link: ''
    },
    {
        id: 2,
        src: github,
        title: 'Github',
        style: 'shadow-red-400',
        link: ''
    },
    {
        id: 3,
        src: mongo,
        title: 'MongoDB',
        style: 'shadow-blue-300',
        link: ''
    },
    {
        id: 4,
        src: python,
        title: 'Python',
        style: 'shadow-yellow-300',
        link: ''
    },
    {
        id: 5,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
        link: ''
    },
    {
        id: 6,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
        link: ''

    },
    {
        id: 7,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
        link: ''
    },
    {
        id: 8,
        src: node,
        title: 'NodeJS',
        style: 'shadow-lime-600',
        link: ''
    },
    {
        id: 9,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-600',
        link: ''
    },
    {
        id: 10,
        src: express,
        title: 'ExpressJs',
        style: 'shadow-blue-600',
        link: ''
    },
    {
        id: 11,
        src: vscode,
        title: 'VsCode',
        style: 'shadow-blue-600',
        link: ''
    },
    {
        id: 12,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-blue-600',
        link: ''
    },
    
  ]
    
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-auto'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
            <div>
                <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                {tech.map(({id, src, title, style}) => (
                    <div 
                    key={id}
                    className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience