"use client"

import Title from "@/app/admin/_components/titles/Title"
import { motion, Variants } from "motion/react"
import Link from "next/link"
import Button from "../buttons/Button"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay,
        },
    }),
}

export default function Banner() {
    return (
        <section
            className="relative h-130 w-full overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'url("/assets/img/banner/01_bg.jpg")',
                // Added a fallback linear gradient in case the image fails to load
                backgroundAttachment: 'fixed' 
            }}
        >
            {/* 1. Dark Overlay: Ensures text readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* 2. Content Container */}
            <div className="container__primary relative z-10 h-full flex items-center">
                <div className="max-w-2xl px-4">
                    
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.1}
                    >
                        <Title name="Moving healthcare workers to where they are needed." css="text-white text-shadow-lg" />
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl font-light mb-8 mt-4 text-white text-shadow-md"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.25}
                    >
                        Tools designed to help healthcare organizations and workers thrive.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.4}
                    >
                        <Link href='/about' className="inline-block">
                            <Button
                                name="View More"
                                css="text-lg py-3.5 px-9 text-white ease-in transition-all rounded-full"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}