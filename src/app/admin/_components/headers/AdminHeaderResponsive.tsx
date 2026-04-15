"use client"

import IconDefault from "@/components/icons/IconDefault"
import Logo from "../../../(main)/_components/logos/Logo"
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useAdminNavStore } from "@/app/admin/_data/store/useAdminNavStore";
import Link from "next/link";


export default function AdminHeaderResponsive() {
    const [isMenu, setIsMenu] = useState(false);
    const toggleMenu = () => {
        setIsMenu(prev => !prev);
    }
    
    
  return (
    <>
     <header className="block pt-4 lg:hidden bg-green-700 border-b-10 border-white drop-shadow-xl">
        <section className="w-full text-white pb-5">
            <div className="container__primary flex items-center justify-between"> 
                <Logo />

                <motion.button
                    className="rounded-full flex items-center justify-center w-8 h-8 bg-green-600"
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                    <AnimatePresence mode="wait" initial={false}>
                        {isMenu ? (
                        <motion.span
                            key="menu"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <IconDefault type="close" css="text-2xl" />
                        </motion.span>
                        ) : (
                        <motion.span
                            key="close"
                            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <IconDefault type="menu" css="text-xl" />
                        </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </section>

        
        <NavList isMenu={isMenu} />
        

     </header>
    </>
  )
}



const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 }
};

interface NavListProps {
    isMenu: boolean;
}

function NavList({ isMenu }: NavListProps) {
    const { rightNavList, setIsOpen } = useAdminNavStore()

    return (
        <AnimatePresence initial={false}>
            {isMenu && (
                <motion.section
                    key="nav-menu"
                    className="text-white border-t border-green-600 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    <ul className="w-full">
                        {rightNavList.map((item, key) => (
                            <li key={key}>
                                <button
                                    onClick={() => setIsOpen(!item.isOpen, item)}
                                    className="w-full cursor-pointer hover:bg-green-800 ease-in-out duration-200"
                                >
                                    <div className="container__primary flex items-center justify-between gap-2 py-2">
                                        <p className="flex items-center justify-start gap-1">
                                            <IconDefault type={item.icon} css="text-xl" />
                                            {item.name}
                                        </p>
                                        <motion.span
                                            animate={{ rotate: item.isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <IconDefault type="down" />
                                        </motion.span>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {item.isOpen && item.items.length > 0 && (
                                        <motion.ul
                                            key={`dropdown-${key}`}
                                            className="w-full bg-green-800 overflow-hidden"
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            {item.items.map((subItem, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="w-full hover:bg-green-900 cursor-pointer"
                                                    initial={{ x: -8, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{
                                                        delay: idx * 0.05,
                                                        duration: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                >
                                                    <Link href={subItem.href}>
                                                        <div className="container__primary px-5 py-1.5">
                                                            {subItem.name}
                                                        </div>
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>
                </motion.section>
            )}
        </AnimatePresence>
    )
}
