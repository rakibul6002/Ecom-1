'use client'
import { know, service, shoping } from '@/constants/Data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full h-60 bg-gray-900 text-gray-300 flex justify-between items-start pt-10 px-14'>
            <div >
                <h2 className='font-semibold uppercase text-2xl'>
                    Contact Info 
                </h2>
                <p className='mt-5'>Barishal Sadar-8200,Barishal,Bangladesh</p>
                <p>+8801787-175184</p>
                <p>ecommerce@gmail.com</p>
            </div>
            <div >
                <h2 className='font-semibold uppercase text-2xl'>Know us</h2>
                <ul className='mt-5 flex flex-col'>
                    {
                        know.map((item)=>(
                            <Link href={item.href} key={item.title}>
                                {item.title}
                            </Link>                                    
                        ))
                    }
                </ul>
                
            </div>
            <div>
                    <h2 className='font-semibold uppercase text-2xl'>Shopping info</h2>
                    <ul className='mt-5 flex flex-col'>
                        {
                            shoping.map((item)=>(
                                <Link href={item.href} key={item.title}>
                                    {item.title}
                                </Link>
                            ))
                        }
                    </ul>
            </div>
            <div>
                <h2 className='font-semibold uppercase text-2xl'>service Info</h2>
                <ul className='mt-5' >
                    {
                        service.map((item)=>(
                            <Link href={item.href} key={item.title}>
                                <li className='mt-2 hover:text-pink-600  text-md duration-300 cursor-pointer '>
                                    {item.title}
                                   
                                   
                                </li>
                                
                            </Link>
                        ))
                    }
                </ul>
            </div>
            
        </div>
        <div className='w-full h-14 bg-gray-950 text-gray-200 flex items-center justify-center'>
            All right Reserved @ Md.Rakibul Islam.
        </div>
    </div>
  )
}

export default Footer