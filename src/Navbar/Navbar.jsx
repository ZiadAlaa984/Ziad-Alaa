import React, { useState } from 'react';
import './Navbar.css';
import { delay, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const variance = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                delay: 1,
                ease: "easeInOut",

            }
        }
    }
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                delay: 1,
                duration: 2,
                ease: "easeInOut",

            }
        }
    }
    return (
        <div className="mx-auto max-w-screen-xl  w-full  p-5 md:p-10 lg:p-12 ">
            <div className='flex mx-auto   relative justify-between container items-center w-full'>
                <span className='cursor-pointer '>
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0,512) scale(0.1,-0.1)"
                            fill="#FFFFFF"
                            stroke="none"
                        >
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M1229 5103 c155 -276 809 -1396 815 -1397 7 -1 126 201 677 1157 l148 257 -825 0 c-783 0 -824 -1 -815 -17z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M3688 4416 c224 -387 411 -706 417 -708 7 -2 549 923 805 1375 l21 37 -824 0 -825 0 406 -704z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M605 4293 c-224 -389 -410 -711 -412 -715 -2 -5 365 -8 816 -8 452 0 821 4 821 8 0 4 -180 321 -401 703 -220 381 -404 700 -408 707 -5 8 -160 -251 -416 -695z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M2663 4287 l-411 -712 408 -3 c225 -1 595 -1 824 0 l415 3 -410 709 c-225 391 -411 711 -412 712 -1 2 -187 -318 -414 -709z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M2260 3324 c0 -18 814 -1414 820 -1407 5 4 184 314 400 688 215 374 398 690 406 703 l14 22 -820 0 c-451 0 -820 -3 -820 -6z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M1902 2968 c-77 -134 -262 -453 -410 -710 l-270 -468 819 0 c450 0 819 3 819 6 0 7 -799 1394 -810 1407 -4 5 -71 -101 -148 -235z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M1237 1518 c11 -18 196 -340 413 -715 216 -376 395 -682 396 -680 1 1 178 308 394 682 216 374 401 695 412 713 l20 32 -827 0 -827 0 19 -32z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M3294 1533 c6 -14 802 -1399 811 -1411 2 -2 782 1346 822 1421 2 4 -366 7 -817 7 -779 0 -822 -1 -816 -17z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M997 1399 c-8 -13 -183 -314 -387 -669 -205 -355 -384 -664 -397 -687 l-25 -43 825 0 825 0 -405 703 c-223 386 -409 706 -413 711 -5 4 -15 -2 -23 -15z" />
                            <motion.path variants={pathVariants} initial='hidden' animate="visible" d="M3041 1369 c-17 -30 -201 -349 -409 -709 l-378 -655 414 -3 c227 -1 597 -1 822 0 l408 3 -404 699 c-222 385 -408 704 -413 709 -6 6 -21 -11 -40 -44z" />
                        </g>
                    </svg>
                </span>
                <motion.div variants={variance} initial='hidden' animate="visible">
                    <motion.nav
                        className=' z-50 '
                        initial={{ width: "5rem", height: "5rem", borderRadius: "5rem" }}
                        animate={{
                            width: isToggled ? "23rem" : "5rem",
                            height: isToggled ? "32rem" : "5rem",
                            borderRadius: isToggled ? "3rem" : "5rem",
                            transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                    >
                        <motion.button
                            id="toggleButton"
                            className="circle"
                            onClick={handleToggle}
                            style={{ position: 'relative', top: isToggled ? "1vh" : "0vh", right: isToggled ? "0vh" : "0vh" }}
                        >
                            <motion.div
                                className="toggle-line"
                                id="toggleButtonLine1"
                                initial={{ top: "37%", left: "25%", rotate: 0 }}
                                animate={{
                                    rotate: isToggled ? 45 : 0,
                                    top: "37%",
                                    left: "25%",
                                    transition: { duration: 0.2, ease: "easeInOut" },
                                }}

                            ></motion.div>
                            <motion.div
                                className="toggle-line"
                                id="toggleButtonLine2"
                                initial={{ top: "57%", left: "25%", rotate: 0 }}
                                animate={{
                                    rotate: isToggled ? -45 : 0,
                                    top: "57%",
                                    left: "25%",
                                    transition: { duration: 0.2, ease: "easeInOut" },
                                }}
                            ></motion.div>
                        </motion.button>
                        <motion.ul
                            className="menu"
                            initial={{ visibility: "hidden", opacity: 0 }}
                            animate={{
                                visibility: isToggled ? "visible" : "hidden",
                                opacity: isToggled ? 1 : 0,
                                transition: { duration: 0.4, ease: "easeInOut" },
                            }}
                        >
                            <li><NavLink className='transition-colors duration-300' to=''>Home</NavLink> <span>&#9679;</span></li>
                            <li><NavLink className='transition-colors duration-300' to='About'>About</NavLink><span>&#9679;</span></li>
                            <li><NavLink className='transition-colors duration-300' to='Skills'>Skills</NavLink><span>&#9679;</span></li>
                            <li><NavLink className='transition-colors duration-300' to='Projects'>Projects</NavLink><span>&#9679;</span></li>
                        </motion.ul>
                    </motion.nav>
                </motion.div>
            </div>
        </div>
    );
}



