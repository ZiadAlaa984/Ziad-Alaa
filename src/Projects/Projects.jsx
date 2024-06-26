import React from 'react';
import img from '../assets/cube-fallback.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import bootstrap from '../assets/imgs/bootstrab.svg';
import css from '../assets/imgs/css.svg';
import html from '../assets/imgs/html.svg';
import js from '../assets/imgs/js.svg';
import ts from '../assets/imgs/ts.svg';
import jq from '../assets/imgs/jq.svg';
import tailwind from '../assets/imgs/tailwindi.svg';
import react from '../assets/imgs/reacti.svg';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <section className="mx-auto mt-24 md:mt-0 max-w-screen-xl p-5 md:p-10 lg:p-12">
            <motion.h1
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{
                    y: '0',
                    opacity: 1,
                    transition: { duration: 1.3, ease: "easeInOut" },
                }}
                className='text-transparent pb-8 md:pb-16 bg-clip-text bg-gradient-to-r my-4 text-left from-stone-200 via-stone-500  to-stone-800  text-5xl md:text-6xl lg:text-7xl  xl:text-9xl capitaliz'> Projects</motion.h1>
            <div className=' mx-auto   projects relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   container  w-full'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 1.3, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box">
                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>
                                Fresh Cart
                            </h1>
                            <span className='border border-stone-800 hover:bg-stone-900 transition-colors duration-500 icon rounded-md p-1'>
                                <a href="https://fresh-card-chi.vercel.app/" target='_blank' rel="noopener noreferrer">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <Link to='/FreshCard' className='cursor-pointer'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    E-Commerce website comes equipped with a range of features that...
                                </p>
                                <span className='rounded-full px-4 py-2 border text-white'>feb 26 2024</span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-300 transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={js} alt="js" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-300 transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={html} alt="html" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-300 transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={css} alt="css" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-300 transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={tailwind} alt="css" />
                                </figure>
                                <figure className="p-2 border me-2 mb-2 rounded-md duration-300 transition-all">
                                    <img className="link-technology filter grayscale hover:filter-none transition-all" width={20} src={react} alt="react" />
                                </figure>
                            </div>
                        </Link>
                    </div>


                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 1.8, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >
                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>Recipes Website</h1>

                            <span className=' border border-stone-800 icon hover:bg-stone-900 transition-colors duration-500 cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/Yummy/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/Recipes' className='cursor-pointer'>

                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    A recipe website is a platform where users discover diverse...


                                </p>
                                <span className='rounded-full px-4 py-2 border text-white'>Jan 28 2023 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={jq}
                                        alt="jq"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 2.3, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >

                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>To-Do-List</h1>

                            <span className=' border  hover:bg-stone-900 transition-colors duration-500  border-stone-800 icon cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/to-do-list/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/ToDoList'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    A simple Todo List application. The app allows users to...
                                </p>
                                <span className='rounded-full px-4 py-2 border text-white'>Mar 14 2024 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 1.3, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >

                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>Games API</h1>

                            <span className=' border  hover:bg-stone-900 transition-colors duration-500  border-stone-800 icon cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/games-/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/Games'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    The Games JS app is a user-friendly web tool for searching games and details game and you can filter by category ...                                </p>
                                <span className='rounded-full px-4 py-2 border text-white'>Jan 12 2024 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={jq}
                                        alt="jq"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 1.8, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >

                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>Weather Forecast</h1>

                            <span className=' border  hover:bg-stone-900 transition-colors duration-500  border-stone-800 icon cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/weather-app/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/Weather'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    The Weather-Forecast JS app is a user-friendly web tool for checking real-time weather forecasts...</p>                                <span className='rounded-full px-4 py-2 border text-white'>Jan 6 2023 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 2.3, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >

                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>Login System</h1>

                            <span className=' border  hover:bg-stone-900 transition-colors duration-500  border-stone-800 icon cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/login/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/Login'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    The website consists of three main sections: Bookmark, Todo, and...</p>
                                <span className='rounded-full px-4 py-2 border text-white'>Mar 17 2023 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 1.3, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >

                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>Bookmark</h1>

                            <span className=' border  hover:bg-stone-900 transition-colors duration-500  border-stone-800 icon cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/crud-/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/Crud'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    Application on CRUD operations, A user-friendly website URL bookmarker that...</p>
                                <span className='rounded-full px-4 py-2 border text-white'>Des 23 2023 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    animate={{

                        opacity: 1,
                        transition: { duration: 1.3, delay: 1.3, ease: "easeInOut" },
                    }}
                    className="col-span-3 border border-stone-800 rounded-md    md:col-span-1">
                    <div className="inner p-5 h-full box cursor-pointer" >

                        <div className='flex mb-5 justify-between items-center'>
                            <h1 className='text-3xl font-bold text-white'>Mealify</h1>

                            <span className=' border  hover:bg-stone-900 transition-colors duration-500  border-stone-800 icon cursor-pointer rounded-md p-1 '>
                                <a href="https://ziadalaa984.github.io/mealfiy/" target='_blank'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <Link to='/Mealify'>
                            <div className='border-y flex min-h-[112px] flex-col py-6 justify-start items-start border-stone-800'>
                                <p className='text-xl font-md py-4 text-white'>
                                    Simple responsive website with dark-mode feature...</p>
                                <span className='rounded-full px-4 py-2 border text-white'>Nov 18 2023 </span>
                            </div>
                            <div className="flex flex-row justify-start items-center pt-3 gap-6">
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={html}
                                        alt="html"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={css}
                                        alt="css"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={bootstrap}
                                        alt="bootstrap"
                                    />
                                </figure>
                                <figure className="p-2 border me-2 mb-2  rounded-md   duration-300 transition-all">
                                    <img
                                        className="link-technology filter grayscale hover:filter-none transition-all"
                                        width={20}
                                        src={js}
                                        alt="js"
                                    />
                                </figure>

                            </div>
                        </Link>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
