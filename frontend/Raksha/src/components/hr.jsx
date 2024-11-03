import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { fadeIn } from '../utils/variants';

// Modal component similar to Rotaract
const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="absolute inset-0 bg-white-500 bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-[#000000] p-6 rounded-lg shadow-lg max-w-5xl w-full relative z-10 shadow-custom">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-800 focus:outline-none">
                    &times;
                </button>
                <div className="text-white">{children}</div>
            </div>
        </div>
    );
};

const HRAndMarketing = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const hrRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        if (hrRef.current) {
            observer.observe(hrRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex h-screen bg-[#eedada] majorSection " ref={hrRef}>
            {/* Left Section - Text Information */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.1}}

            
            className="w-1/2 flex flex-col justify-center items-center p-12 space-y-6 mt-14">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-10">HR and Social Media Marketing Expertise</h1>

                <div className="relative bg-white p-10 rounded-lg shadow-2xl border border-gray-200 w-full max-w-3xl transition-all duration-300">
                <p className="text-gray-700 text-sm leading-relaxed poppins_font">
    I am a dynamic professional with expertise in both HR and social media marketing. My communication skills and strong emotional intelligence have contributed to successful talent acquisition and interview processes. As a marketing intern, I developed impactful social media strategies, created engaging content, and boosted online visibility for brands. Proficient in tools like Canva and photo editing software, I have led campaigns that strengthened brand identity and audience engagement, showcasing my ability to connect with and inspire audiences effectively.
</p>

                    <button 
                        className="mt-4 text-blue-600 hover:underline"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Know More
                    </button>
                </div>
            </motion.div>

            {/* Right Section - Photo with Spiral Edge */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.1}}
            className="w-1/2 flex justify-end items-center overflow-hidden">
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="spiralClipHR" clipPathUnits="objectBoundingBox">
                            <path
                                d="M0,0 H0.8 Q1,0.3 0.8,0.6 T0.8,1 H0 V0"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>

                <img
                    src="./hr.jpg" // Replace this with your actual photo URL or path
                    alt="HR and Social Media Marketing Image"
                    className={`shadow-lg transition-transform duration-1000 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{
                        clipPath: 'url(#spiralClipHR)',
                        height: '100%',
                        width: '80%',
                        objectFit: 'cover',
                        transform: 'scaleX(-1)', // Mirroring the image
                    }}
                />
            </motion.div>

            {/* Modal for detailed information */}
            <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4 text-white">HR and Marketing Expertise</h2>
                <p className="text-white text-lg leading-relaxed poppins_font">
                    With a natural talent for communication and emotional intelligence, I bring a powerful combination of HR and social media marketing expertise. Throughout my HR internships, I took on the responsibilities of conducting interviews, talent acquisition, and building strong connections with candidates, solidifying my passion for people management. I’ve always thrived in roles where I could leverage my communication skills to create positive outcomes in recruitment and team-building processes.
                </p>
                <p className="text-white text-lg leading-relaxed poppins_font mt-4">
                    As a marketing intern, I’ve honed my social media marketing skills, becoming proficient in platforms like Canva and various photo editing tools to craft engaging content that resonates with audiences. My work has included managing social media platforms, executing successful campaigns, and promoting events such as fundraisers. These experiences have allowed me to effectively drive brand awareness and engagement, using creative strategies that align with the goals of the organizations I’ve worked with. My passion for both HR and social media marketing makes me a versatile professional capable of connecting people and brands in meaningful ways.
                </p>
            </Modal>
        </div>
    );
};

export default HRAndMarketing;
