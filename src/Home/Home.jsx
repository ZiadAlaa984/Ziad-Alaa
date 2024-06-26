import React from 'react';
import img from '../assets/cube-fallback.jpg';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
    return (
        <section className="mx-auto mt-24 md:mt-0 max-w-screen-xl p-5 md:p-10 lg:p-12">
            <div className='flex mx-auto flex-col md:flex-row   hero relative justify-start md:justify-between   container items-center w-full'>
                <div className='text-3xl w-full  md:w-3/4 text-white '>
                    <motion.div
                        initial={{ x: " -100vw" }}
                        animate={{
                            x: '0',
                            transition: { duration: 1.5, delay: 1.3, ease: "easeInOut" },
                        }}
                        className='flex items-center justify-start gap-8'>
                        <h2

                            className='font-bold  name'>Ziad Alaa</h2>
                        <button className=' font-light hover:bg-stone-900 transition-colors duration-500 text-[15px] px-6 py-2  border-[1px] rounded-full '> <a href="https://flowcv.com/resume/rp9g5omhik" target='_blank' rel='noopener noreferrer'>Resume</a> </button>
                    </motion.div>
                    <motion.div
                        initial={{ y: "-100vh", opacity: 0 }}
                        animate={{
                            y: '0',
                            opacity: 1,
                            transition: { duration: 1.5, ease: "easeInOut" },
                        }}
                    >
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-500 my-4 to-stone-800  text-5xl md:text-6xl lg:text-7xl  xl:text-9xl capitaliz'> Front-End Dev</h1>
                        <p className='max-w-[500px]  text-xl md:text-3xl font-light '>Elevating digital experiences through code.
                            Explore my portfolio to see innovation in action.</p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ y: "-n100vh", opacity: 0 }}
                    animate={{
                        y: '0',
                        opacity: 1,
                        transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    className=' order-1 w-full  md:w-1/4 flex items-center justify-center'>
                    <img src={img} className='w-full ' alt="" />
                </motion.div>
            </div>
        </section>
    );
}
