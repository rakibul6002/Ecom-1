'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/Assets/lg.png'
import Link from 'next/link';
import { navigation } from '@/constants/Data';
import { usePathname } from 'next/navigation';
// import { FaShoppingCart,FaUserCircle,FaSearch } from 'react-icons/fa';

const Header = () => {
    const [searchdata,setSearchdata]= useState('')
    console.log(searchdata);
    const pathname = usePathname();

    const resetData = (e)=>{
        e.preventDefault();
        setSearchdata("");

    }
  return (
    <div className='px-10 flex w-full h-20 bg-gray-900 text-gray-300  items-center justify-between sticky top-0 z-50'>
        {/* Logo Section */}
        <div >
            <Link href={'/'}>
                <Image src={Logo} className='w-32 h-16 rounded-md' alt='LOGO'></Image>
            
            </Link>
        </div>
        {/* Logo Section End */}

        {/* Searchbar Section */}
        <div className='w-[600px] relative'>
                <input 
                    type='text'
                    placeholder='Search your items...'
                    className='w-full h-10 focus-visible:outline-red-600 rounded-full pr-10 pl-3 border-[3px] border-yellow-500 text-black'
                    onChange={(e)=>setSearchdata(e.target.value)}
                    value={searchdata}
                    >
                       
                </input>
                {
                            searchdata && (
                            <h2 
                                className='text-black absolute right-4 top-1 cursor-pointer font-semibold text-2xl ' 
                                onClick={resetData}
                                >x</h2>)
                        }
               {/* <FaSearch className='absolute right-2 top-3 cursor-pointer '/> */}
               
        </div>
        {/* Searchbar Section End*/}

        {/* Navbar Section */}
        <ul className=" hidden md:flex items-center text-sm uppercase gap-5 font-semibold text-zinc-300 ">
            {
                navigation.map((item)=>(
                    <Link key={item.title} href={item.href}>
                        <li className={`hover:text-pink-600 font-semibold text-md duration-300 cursor-pointer relative group overflow-hidden ${pathname === item.href && "text-pink-600"} `}>{item.title}
                        <span className={`h-[1px] w-full bg-pink-600 inline-flex absolute left-0 bottom-0 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ${pathname === item.href && "translate-x-0"}`}/>
                        </li>
                    </Link>
                ))
            }
        </ul>
        {/* Navbar Section End*/}
    </div>
  )
}

export default Header;