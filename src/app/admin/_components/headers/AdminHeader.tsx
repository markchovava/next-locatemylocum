"use client"
import Logo from '../../../(main)/_components/logos/Logo'
import IconDefault from '@/_components/icons/IconDefault'
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useState, useEffect, useRef, FC } from 'react';
import AdminHeaderResponsive from './AdminHeaderResponsive';
import { useAdminNavStore } from '@/app/admin/_data/store/useAdminNavStore';
import Link from 'next/link';


const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 }
};

export default function AdminHeader() {
  return (
    <>
    <header className="lg:block hidden w-full bg-green-700 text-white py-4 border-b-6 drop-shadow-xl relative z-50">
            <div className="container__primary flex items-center justify-between"> 
                <Logo />
                <nav>
                    <RightNav />
                </nav>
            </div>
    </header>

        <AdminHeaderResponsive />
    </>
  )
}





type MenuType = 'notif' | 'settings' | 'user' | null;

function RightNav() {
    const { rightNavList} = useAdminNavStore()
    const [openMenu, setOpenMenu] = useState<MenuType>(null);
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = (menuName: MenuType): void => {
        setOpenMenu(prev => (prev === menuName ? null : menuName));
    };

    return (
        <ul ref={navRef} className='flex items-center justify-end gap-4 z-100 relative'>
            
            {/* Notification Menu */}
            <li className='relative'>
                <button 
                    onClick={() => toggleMenu('notif')} 
                    className={`cursor-pointer p-2 rounded-full transition-colors ${openMenu === 'notif' ? 'bg-white/20' : 'hover:bg-white/20'}`} // ✅ white-tinted for green bg
                >
                    <IconDefault type={rightNavList[0]?.icon} css='text-2xl' />
                </button>
                <AnimatePresence>
                    {openMenu === 'notif' && rightNavList[0] && (
                        <motion.ul 
                            variants={dropdownVariants}
                            initial="hidden" animate="visible" exit="exit"
                            className='absolute top-[120%] w-[20rem] right-0 bg-white shadow-xl rounded-lg text-gray-700 overflow-hidden z-50 border border-gray-100'
                        >
                            {rightNavList[0].items.map((i, key) => (
                                <Link key={key} href={i.href}>
                                    <li key={key} className='cursor-pointer flex items-start justify-start p-4 hover:bg-gray-50 border-b border-gray-100'>
                                        <div className='w-[20%] text-green-600'>
                                            <IconDefault type='time' css='text-5xl' />
                                        </div>
                                        <div className='w-[70%]'>
                                            <p className='text-sm font-medium'>
                                                {i.name}
                                            </p>
                                        </div>
                                        <div className='w-[10%] text-right'>
                                            <button className='text-gray-400 hover:text-gray-600'>
                                                <IconDefault type='right' css='text-xl' />
                                            </button>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>

            {/* Settings Menu */}
            <li className='relative'>
                <button 
                    onClick={() => toggleMenu('settings')} 
                    className={`cursor-pointer p-2 rounded-full transition-colors ${openMenu === 'settings' ? 'bg-white/20' : 'hover:bg-white/20'}`} >
                    <IconDefault type={rightNavList[1]?.icon} css='text-2xl' />
                </button>
                <AnimatePresence>
                    {openMenu === 'settings' && rightNavList[1]?.icon && (
                        <motion.ul 
                            variants={dropdownVariants}
                            initial="hidden" animate="visible" exit="exit"
                            className={`overflow-hidden text-gray-700 absolute top-[120%] right-0 bg-white shadow-xl rounded-lg 
                                w-48 z-50 border border-gray-100`}>
                            {rightNavList[1].items.map((i, key) => (
                                <Link href={i.href} key={key}>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium'>
                                        {i.name}
                                    </li>
                                </Link>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>

            {/* User Menu */}
            <li className='relative'>
                <button 
                    onClick={() => toggleMenu('user')} 
                    className={`cursor-pointer p-2 rounded-full transition-colors ${openMenu === 'user' ? 'bg-white/20' : 'hover:bg-white/20'}`} // ✅
                >
                    <IconDefault type='user' css='text-xl' />
                </button>
                <AnimatePresence>
                    {openMenu === 'user' && rightNavList[2] && (
                        <motion.ul 
                            variants={dropdownVariants}
                            initial="hidden" animate="visible" exit="exit"
                            className='overflow-hidden text-gray-700 absolute top-[120%] right-0 bg-white shadow-xl rounded-lg w-48 z-100 border border-gray-100'
                        >
                            {rightNavList[2].items.map((i, key) => (
                                <Link href={i.href} key={key}>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium'>
                                        {i.name}
                                    </li>
                                </Link>
                            ))}
                            <hr className="my-1 border-gray-100" />
                            <li className='px-4 py-2 hover:bg-red-50 text-red-600 cursor-pointer text-sm font-medium'>Log Out</li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>
        </ul>
    );
};