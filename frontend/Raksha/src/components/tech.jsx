import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

// Modal component
const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
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

const Tech = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredStack, setHoveredStack] = useState(null);
    const [isModalOpenAI, setIsModalOpenAI] = useState(false);
    const [isModalOpenFS, setIsModalOpenFS] = useState(false);
    const techRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    setHoveredStack(null);
                    setIsModalOpenAI(false);
                    setIsModalOpenFS(false);
                }
            });
        });

        if (techRef.current) {
            observer.observe(techRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate the image transform based on scroll position

    return (
        <div className="flex h-screen bg-[#eedada] majorSection" ref={techRef}>
            {/* Left Section - Photo with Spiral Edge */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.1}}
            className="w-3/6 overflow-hidden flex items-center">
                
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="spiralClip" clipPathUnits="objectBoundingBox">
                                <path d="M0,0 H0.8 Q1,0.3 0.8,0.6 T0.8,1 H0 V0" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <img
                        src="./main.jpg" // Replace this with your actual photo URL or path
                        alt="Your Name"
                        className={`shadow-lg transition-transform duration-300`} // Add transition class
                        style={{
                            clipPath: 'url(#spiralClip)',
                            width: '80%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                    />
            </motion.div>

            {/* Right Section - Tech Information */}
            <div className="w-3/6 flex flex-col justify-center items-center p-12 space-y-6 cloud">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-4">Technology Expertise</h1>

                <motion.div 
                variants={fadeIn("left",0.2)}
                whileInView={"show"}
                initial = "hidden"
                
                className="grid grid-cols-1 gap-6 justify-items-center">
                    {/* AI and Machine Learning Box */}
                    <div
                        className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300"
                        onMouseEnter={() => setHoveredStack('ml')}
                        onMouseLeave={() => setHoveredStack(null)}
                    >
                        <h2 className="text-xl font-semibold text-gray-800 poppins_font">AI and Machine Learning</h2>
                        <p className="text-gray-600 mt-2 poppins_font text-sm">
                            I’m a Machine Learning and Computer Vision enthusiast who transforms data into insights while juggling coffee cups! With expertise in Python, TensorFlow, Keras, OpenCV, YOLO, Scikit-learn, and 3D vision techniques, I tackle complex challenges.
                        </p>
                        <button 
                            className="mt-2 text-blue-600 hover:underline"
                            onClick={() => setIsModalOpenAI(true)}
                        >
                            Know More
                        </button>
                    </div>

                    {/* Full Stack Development Box */}
                    <div
                        className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300"
                        onMouseEnter={() => setHoveredStack('fsd')}
                        onMouseLeave={() => setHoveredStack(null)}
                    >
                        <h2 className="text-xl font-semibold text-gray-800 poppins_font">Full Stack Development</h2>
                        <p className="text-gray-600 mt-2 poppins_font text-sm">
                            I'm also a passionate Full Stack Developer who builds dynamic web applications. With my expertise in React.js, Node.js, Express, MongoDB, and FastAPI, I create seamless solutions that even your grandma could navigate. Let’s turn your ideas into reality—coffee and a few dad jokes included!
                        </p>
                        <button 
                            className="mt-2 text-blue-600 hover:underline"
                            onClick={() => setIsModalOpenFS(true)}
                        >
                            Know More
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Modal for AI and Machine Learning */}
            <Modal isVisible={isModalOpenAI} onClose={() => setIsModalOpenAI(false)}>
                <h2 className="text-2xl font-bold mb-4 text-white poppins_font">AI and Machine Learning</h2>
                <p className="text-white text-lg leading-relaxed poppins_font">
                    As a dedicated professional in Machine Learning and Computer Vision, I have worked on numerous projects,
                    developing a deep understanding of neural networks, convolutional neural networks (CNNs), and advanced 
                    AI techniques. I am extremely passionate about leveraging the latest technologies to create intelligent 
                    systems that deliver real-world impact.
                </p>
                <h3 className="text-lg font-bold mt-4 poppins_font">Key Areas of Expertise:</h3>
                <ul className="list-disc pl-5 text-white poppins_font">
                    <li><strong>Machine Learning & Deep Learning:</strong> Proficient in Python, TensorFlow, Keras, Scikit-learn, and YOLO for object detection and deep learning tasks. Expertise in building, training, and deploying machine learning models for a wide range of applications.</li>
                    <li><strong>Computer Vision:</strong> Hands-on experience with OpenCV for image processing, data augmentation techniques to enhance model performance, and real-time object detection and recognition.</li>
                    <li><strong>Research:</strong> Involved in various research projects focusing on the development of novel AI solutions, with a strong interest in advancing the field of machine learning.</li>
                </ul>
                <h3 className="text-lg font-bold mt-4 poppins_font">Passion:</h3>
                <p className="text-white text-lg leading-relaxed poppins_font">
                    I am passionate about using technology to solve real-world problems, and I am continually exploring new 
                    advancements in AI and machine learning to stay at the forefront of this rapidly evolving field.
                </p>
            </Modal>

            {/* Modal for Full Stack Development */}
            <Modal isVisible={isModalOpenFS} onClose={() => setIsModalOpenFS(false)}>
                <h2 className="text-2xl font-bold mb-4 text-white poppins_font">Full Stack Development</h2>
                <p className="text-white text-lg leading-relaxed poppins_font">
                    With a solid foundation in both front-end and back-end technologies, I am adept at developing
                    scalable and user-friendly web applications. My experience includes working with various frameworks and
                    tools to create seamless user experiences and efficient server-side solutions.
                </p>
                <h3 className="text-lg font-bold mt-4 poppins_font">Key Areas of Expertise:</h3>
                <ul className="list-disc pl-5 text-white poppins_font">
                    <li><strong>Frontend Development:</strong> Proficient in HTML, CSS, JavaScript, and React.js for building responsive and interactive user interfaces.</li>
                    <li><strong>Backend Development:</strong> Experience with Node.js, Express, and FastAPI for creating RESTful APIs and handling server-side logic.</li>
                    <li><strong>Database Management:</strong> Knowledgeable in MongoDB for database design and management, ensuring data integrity and efficient access.</li>
                </ul>
                <h3 className="text-lg font-bold mt-4 poppins_font">Passion:</h3>
                <p className="text-white text-lg leading-relaxed poppins_font">
                    I thrive on turning ideas into functional web applications, and I enjoy collaborating with teams to 
                    bring projects from conception to completion. My goal is to create applications that not only meet user needs 
                    but also deliver an exceptional experience.
                </p>
            </Modal>
        </div>
    );
};

export default Tech;
