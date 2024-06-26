import { motion } from 'framer-motion'
import React from 'react'
import img from '../assets/about.svg'
export default function About() {
    return (
        <section className="mx-auto mt-24 md:mt-0 max-w-screen-xl p-5 md:p-10 lg:p-12">
            <div className='flex mx-auto flex-col lg:flex-row   about gap-10 lg:gap-0 relative justify-start md:justify-between   container w-full'>
                <div className='text-3xl  w-full flex lg:justify-start justify-center h-full  lg:w-3/4 text-white '>
                    <motion.div
                        initial={{ x: " -100vw" }}
                        animate={{
                            x: '0',
                            transition: { duration: 1.5, delay: 1.3, ease: "easeInOut" },
                        }}
                        className='flex items-center justify-start gap-8'>
                    </motion.div>
                    <div

                    >
                        <motion.h1
                            initial={{ y: "-100vh", opacity: 0 }}
                            animate={{
                                y: '0',
                                opacity: 1,
                                transition: { duration: 1.3, ease: "easeInOut" },
                            }}
                            className='text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-500 my-4 to-stone-800  text-5xl md:text-6xl lg:text-7xl  xl:text-9xl capitaliz'> About Me</motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{

                                opacity: 1,
                                transition: { duration: 1.4, delay: 1, ease: "easeInOut" },
                            }}

                            className='text-4xl md:text-5xl font-bold py-4'>Who am I ?</motion.p>
                        <motion.p
                            initial={{ x: "-100vw", opacity: 0 }}
                            animate={{
                                x: '0',
                                opacity: 1,
                                transition: { duration: 1.5, delay: 1.4, ease: "easeInOut" },
                            }}
                            className='max-w-[500px]   font-extralight text-3xl md:text-4xl   '>
                            Hello again! I am happy to see you here. My name is <span className='text-stone-500 '>Ziad alaa</span>, 20 years old,I study at the Suez Canal University of Computers and Information, Passionate about creating engaging user experiences, translates designs into functional websites and applications with creativity and expertise. Committed to staying updated with industry trends.</motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{
                        y: '0',
                        opacity: 1,
                        transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    className=' order-1 w-full   flex items-center justify-center lg:justify-end'>
                    <img src={img} className='w-full md:w-3/4 -z-10 ' alt="" />
                </motion.div>

            </div>
        </section >
    )
}
