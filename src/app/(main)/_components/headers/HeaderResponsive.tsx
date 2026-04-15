"use client"

import { useState } from "react";
import Logo from "../logos/Logo";
import { AnimatePresence, motion, Variants } from "motion/react";
import IconDefault from "@/_components/icons/IconDefault";
import Link from "next/link";
import { MainNavData } from "../../_data/sample/NavData";

// Define animation variants for the dropdown container
const menuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// Define animation variants for individual list items
const itemVariants: Variants = {
  closed: { x: -16, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

export default function HeaderResponsive() {
  const [isMenu, setIsMenu] = useState(false);
  
  const toggleMenu = () => setIsMenu((prev) => !prev);

  return (
    <header className="lg:hidden block w-full bg-green-800 text-white pt-5 border-b-6 drop-shadow-xl">
      <div className="container__primary flex items-center justify-between pb-5">
        <Logo />

        <motion.button
          className="rounded-full flex items-center justify-center w-8 h-8 bg-green-700"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenu ? (
              <motion.span
                key="close-icon"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <IconDefault type="close" css="text-2xl" />
              </motion.span>
            ) : (
              <motion.span
                key="menu-icon"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <IconDefault type="menu" css="text-xl" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenu && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="w-full border-t border-green-700 overflow-hidden bg-green-800"
          >
            <motion.ul>
              {MainNavData.map((i, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="border-b border-green-700"
                >
                  <Link
                    href={i.href}
                    className="uppercase font-medium text-center flex items-center justify-center py-4 hover:bg-green-700 transition-colors"
                    onClick={() => setIsMenu(false)}
                  >
                    {i.name}
                  </Link>
                </motion.li>
              ))}
              
              <motion.li 
                variants={itemVariants}
                className="py-6 flex items-center justify-center gap-4"
              >
                <button className="cursor-pointer font-medium uppercase hover:text-amber-200 transition-all duration-200">
                  Login
                </button>
                <button className="uppercase text-sm font-medium cursor-pointer bg-amber-200 hover:bg-amber-300 text-green-950 py-2 px-6 rounded-full transition-colors">
                  Getting started
                </button>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}