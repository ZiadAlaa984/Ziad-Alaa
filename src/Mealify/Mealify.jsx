

import React from 'react'
import img1 from '../assets/mealify/img1.png'
import img2 from '../assets/mealify/img2.png'
import img3 from '../assets/mealify/img3.png'
import img4 from '../assets/mealify/img4.png'
import img5 from '../assets/mealify/img5.png'

import { delay, motion } from 'framer-motion';
import bootstrap from '../assets/imgs/bootstrab.svg';
import css from '../assets/imgs/css.svg';
import html from '../assets/imgs/html.svg';
import js from '../assets/imgs/js.svg';
import ts from '../assets/imgs/ts.svg';
import jq from '../assets/imgs/jq.svg';
import tailwind from '../assets/imgs/tailwindi.svg';
import react from '../assets/imgs/reacti.svg';
export default function Mealify() {
    return (
        <section className="mx-auto mt-24 md:mt-0 max-w-screen-xl p-5 md:p-10 lg:p-12">
            <div className='flex mx-auto flex-col justify-center     relative   container w-full'>
                <motion.h2
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{
                        y: '0',
                        opacity: 1,
                        transition: { duration: 1.3, ease: "easeInOut" },
                    }}
                    className='text-white text-5xl md:text-6xl lg:text-7xl  xl:text-8xl capitaliz font-bold text-center my-8'>Mealfiy</motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 2.3, ease: "easeInOut" },
                    }}
                >
                    <div


                        className='border-y gap-5 p-6 md:p-12 border-stone-800 flex flex-col justify-center items-center  '>
                        <div className='flex-row flex gap-3'>
                            <a href="https://ziadalaa984.github.io/mealfiy/" className='hover:bg-stone-900 transition-colors duration-500 rounded-full' target='_blank' rel="noopener noreferrer">
                                <span className='flex justify-center gap-3 border text-white p-2 rounded-full   items-center'><span>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </span> Demo</span> </a>
                            <a href="https://github.com/ZiadAlaa984/mealfiy" className='hover:bg-stone-900 rounded-full transition-colors duration-500' target='_blank' rel="noopener noreferrer">
                                <span className='flex justify-center gap-3 border text-white p-2 rounded-full   items-center'><span>                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                </svg></span> GitHub</span></a>
                        </div>
                        <div className='flex-row justify-center  items-center flex-wrap flex gap-3'>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2  border me-2 mb-2 rounded-md duration-700 cursor-pointer transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={js} alt="js" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-700 cursor-pointer transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={html} alt="html" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-700 cursor-pointer transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={css} alt="css" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-700 cursor-pointer transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={bootstrap} alt="bootstrap" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className='border-b gap-5 p-6 md:p-12   border-stone-800 flex flex-col justify-center items-center  '>
                        <p className='text-2xl text-center text-white font-normal'>
                            Simple responsive website with dark-mode feature

                        </p>                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 2.6, ease: "easeInOut" },
                    }}

                    className='flex flex-wrap pt-6  justify-start items-center'>
                    <div className="inner cursor-pointer p-3 w-full md:w-1/2 lg:w-1/3">
                        <img src={img1} className='w-full object-cover' alt="" />
                    </div>
                    <div className="inner cursor-pointer p-3 w-full md:w-1/2 lg:w-1/3">
                        <img src={img4} className='w-full object-cover' alt="" />
                    </div>
                    <div className="inner cursor-pointer p-3 w-full md:w-1/2 lg:w-1/3">
                        <img src={img5} className='w-full object-cover' alt="" />
                    </div>




                </motion.div>
            </div>

        </section>
    )
}
