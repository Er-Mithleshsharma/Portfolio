import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import pdf from "../assets/Mithlesh_resume.pdf"
const SocialLinks = () => {
    const links =[
        {
             id :1 , 
             child :(
                <>
                Linkedin <FaLinkedin size ={30}/>
                </>
             ),
             href: 'https://www.linkedin.com/in/ermithleshsharma/',
             styles: 'rounded-tr-md'
        },
        {
            id :2 , 
            child :(
               <>
               Github <FaGithub size ={30}/>
               </>
            ),
            href: 'https://github.com/Er-Mithleshsharma',
            styles: 'rounded-tr-md'
       },
       {
        id :3 , 
        child :(
           <>
           Mail <HiOutlineMail size ={30}/>
           </>
        ),
        href: 'mailto:foo2gmail.com',
        styles: 'rounded-tr-md'
   },
   {
    id :4 , 
    child :(
       <>
       Resume <BsFillPersonBadgeFill size ={30}/>
       </>
    ),
    href: pdf,

    styles: 'rounded-br-md',
    download:true,
},
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
       <ul> 

        {links.map(({id,child,href,style,download})=>(
            <li key = {id} className={"flex justify-between items-center w-40 h-14 px-4  bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " "+style}>
            <a href={href} className='flex justify-between items-center  w-full text-white'
            download={download}
            target='_blank'
            rel ="noreferrer">
         
            {child}
            </a> </li>
        ))}
        
      
            </ul>
    </div>
  )
}

export default SocialLinks