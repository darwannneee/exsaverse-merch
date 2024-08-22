"use client"
import '@/app/globals.css'
import { Nunito, Passion_One } from 'next/font/google'
import LogoExsa from "@/public/assets/img/EXSA_LOGO_BRAND.png"
import { useState } from 'react'
// Import Font Google

const NunitoFont = Nunito({
    weight: '400',
    subsets: ['latin']
})

const PassionFont = Passion_One({
    weight: '400',
    subsets: ['latin']
})

const NunitoFontBold = Nunito({
    weight: '900',
    subsets: ['latin']
})

export default function Navbar() {
    // Initiati Const
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
    <main className='bg-white h-14 md:h-16 w-full px-10 md:px-20 flex justify-between items-center'>

    {/* Category */}
    <div className='flex items-center'>
        <div className={`space-x-10 text-sm hidden md:flex ${NunitoFont.className}`}>
            <h1 className='underline font-bold'>Clothes</h1>
            <h1>Hoodie</h1>
            <h1>Bags</h1>
            <h1>Hats</h1>
        </div>
    </div>


    {/* Logo */}
    <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center'>
        <img src={LogoExsa.src} className='w-12 h-12 md:w-14 md:h-14' alt="" />
        {/* <h1 className={`${PassionFont.className} text-xl md:text-3xl`}>EXVRS.</h1> */}
    </div>
    
    
    
    {/* Search Input */}
    <div className={`relative items-center hidden md:flex ${NunitoFont.className}`}>
        <input type="text" className='shadow-sm text-sm w-80 h-8 border border-[#f0f0f0] bg-[#f0f0f0] rounded-md pl-10' placeholder='Type any product here'/>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='ml-5' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
    </div>
    
    {/* Hamburger */}
    <div className='md:hidden' onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </div>

    {/* Background shadow */}
    {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>}

    {/* Sidebar */}
    <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        {/* Sidebar content here */}
        <div className='p-4'>
            <div className='flex items-center justify-center'>
                <img src={LogoExsa.src} className='w-12 h-12 md:w-16 md:h-16' alt="" />
                <h1 className={`${NunitoFontBold.className} text-xl md:text-2xl`}>EXVRS.</h1>
            </div>
            <ul className={`pt-5 ${NunitoFont.className}`}>
                <li className='pt-4 pb-4 border-t-[1px] border-b-[1px] border-gray flex justify-between items-center'>
                    Hoodie
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </li>
                <li className='pt-4 pb-4 border-b-[1px] border-gray flex justify-between items-center'>
                    Bags
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </li>
                <li className='pt-4 pb-4 border-b-[1px] border-gray flex justify-between items-center'>
                    Hats
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </li>
            </ul>
            </div>
        </div>


</main>

    )

}