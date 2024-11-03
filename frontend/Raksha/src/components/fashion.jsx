import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

// Modal component
const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background with blur and red hue */}
            <div className="absolute inset-0 bg-white-500 bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-[#000000] p-6 rounded-lg shadow-lg max-w-5xl w-full relative z-10 shadow-custom">
                {/* Close button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-800 focus:outline-none">
                    &times; {/* Close symbol */}
                </button>
                <div className="text-gray-700">{children}</div>
            </div>
        </div>
    );
};

// Define animation variants for both sections
const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
};

const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
};

const Fashion = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fashionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Disconnect once the component is visible
                }
            });
        });

        if (fashionRef.current) {
            observer.observe(fashionRef.current); // Observe the component for intersection
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex h-screen bg-[#eedada] majorSection" ref={fashionRef}>
            {/* Left Section - Photo with Spiral Edge */}
            <motion.div
                className="w-3/6 overflow-hidden flex items-center"
                variants={fadeIn("right",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport = {{once:false,amount: 0.1}}
            >
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="spiralClipFashion" clipPathUnits="objectBoundingBox">
                            <path
                                d="M0,0 H0.8 Q1,0.3 0.8,0.6 T0.8,1 H0 V0"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>

                <img
                    src="./fashionfinal3.jpg" // Replace this with your actual fashion photo URL or path
                    alt="Fashion"
                    style={{
                        clipPath: 'url(#spiralClipFashion)',
                        width: '80%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
            </motion.div>

            {/* Right Section - Fashion and Modelling Information */}
            <motion.div
                className="w-3/6 flex flex-col justify-center items-center p-12 space-y-6 cloud"
                variants={fadeIn("left",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport = {{once:false,amount: 0.1}}
            >
                <h1 className="text-4xl font-bold pt-10 text-gray-800 mb-4 text-center">Fashion & Modelling</h1>

                {/* Single Box with Passion Description */}
                <div
                    className={`relative bg-white p-8 rounded-lg border border-gray-200 transition-all duration-300 h-75 max-w-3xl shadow-2xl`} // Increased height of the box
                    style={{ padding: '2rem' }}
                >
                    <p className="text-gray-700 text-lg leading-relaxed poppins_font">
                        Fashion has always been my passion, driving me to explore the vibrant world of modeling. With experience
                        walking in events such as the <span className="font-semibold text-gray-900">Westside-sponsored fashion walk </span>
                        and participating in multiple fashion shows, I am eager to collaborate on new projects. If you're looking for a
                        versatile model for your upcoming shoots, feel free to reach out, and I'll be happy to share my portfolio!
                    </p>
                    <button
                        className="mt-4 text-blue-600 hover:underline"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Know More
                    </button>
                </div>
            </motion.div>

            {/* Modal for detailed information */}
            <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4  text-white">Passion for Fashion</h2>
                <p className="text-white text-lg leading-relaxed poppins_font">
                    From a young age, I have been captivated by the dynamic realm of fashion and modeling. My journey began with
                    various local fashion shows, and I had the incredible opportunity to walk for the <span className="font-bold text-red-600">Westside-sponsored fashion walk</span>, where I gained invaluable experience on the runway. My passion for this art form drives me to continuously
                    seek new challenges and opportunities to express creativity through modeling.
                    <br /><br />
                    I have participated in multiple fashion walks, showcasing a range of styles and themes, which has helped me
                    develop a versatile modeling skill set. My experiences have not only enhanced my confidence but also deepened
                    my understanding of the fashion industry and its trends.
                    <br /><br />
                    If you're in search of a model for photoshoots, events, or campaigns, please don’t hesitate to reach out. I would
                    love to discuss potential collaborations and share my portfolio, which showcases my work and versatility in various
                    styles. Let’s create something beautiful together!
                </p>
            </Modal>
        </div>
    );
};

export default Fashion;
    