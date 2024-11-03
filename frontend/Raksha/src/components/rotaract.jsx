import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
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

const Rotaract = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const rotaractRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Disconnect once the component is visible
                }
            });
        });

        if (rotaractRef.current) {
            observer.observe(rotaractRef.current); // Observe the component for intersection
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex h-screen bg-[#eedada] majorSection" ref={rotaractRef} >
            {/* Left Section - Rotaract Information */}
            <motion.div
            variants={fadeIn("right",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport = {{once:false,amount: 0.1}}
            className="w-1/2 flex flex-col justify-center items-center p-12 space-y-6  mt-14">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-10">
                    Working with Non-Profit Organization - Rotaract
                </h1>

                <div className="relative bg-white p-10 rounded-lg shadow-2xl border border-gray-200 w-full max-w-3xl transition-all duration-300">
                    <p className="text-gray-700 text-sm leading-relaxed poppins_font">
                        My journey with Rotaract began as the <span className="font-semibold text-gray-900">Community Service Director</span> at 
                        <span className="font-semibold text-gray-900"> Rotaract CMRIT</span>, where I led various initiatives aimed at improving the lives of underprivileged communities. Through hands-on experience, I cultivated strong leadership and project management skills while organizing events focused on health, education, and environmental sustainability. 
                        <br /><br />
                        Currently, I am proud to be a member of <span className="font-semibold text-gray-900">Rotaract Club of Bengaluru Avyanna under District 3191</span>, the first and only all-female Rotaract Club, where I continue to support social causes and contribute to projects that empower women and promote social welfare. Rotaract has given me the platform to drive meaningful change and strengthen my commitment to community service.
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
            variants={fadeIn("left",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport = {{once:false,amount: 0.1}}
            className="w-1/2 flex justify-end items-center overflow-hidden">
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="spiralClipRotaract" clipPathUnits="objectBoundingBox">
                            <path
                                d="M0,0 H0.8 Q1,0.3 0.8,0.6 T0.8,1 H0 V0"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>

                <img
                    src="./rotaract_final.jpg" // Replace this with your actual photo URL or path
                    alt="Rotaract Image"
                    className={`shadow-lg transition-transform duration-1000 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{
                        clipPath: 'url(#spiralClipRotaract)',
                        height: 'auto',
                        width: '80%',
                        objectFit: 'cover',
                        transform: 'scaleX(-1)', // Mirroring the image
                    }}
                />
            </motion.div>

            {/* Modal for detailed information */}
            <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-2  text-white">My Rotaract Journey</h2>
                <p className=" text-white text-sm leading-relaxed poppins_font">
                    My journey with Rotaract, a distinguished non-profit organization dedicated to community service and social impact, began as the <span className="font-bold text-red-600"> Community Service Director at Rotaract CMRIT.</span> In this role, I had the privilege of leading transformative initiatives that improved the lives of underprivileged communities. This experience not only sharpened my leadership and project management skills but also enriched my understanding of organizing events centered around health, education, and environmental sustainability.
                    <br /><br />
                    Rotaract encompasses four dynamic avenues: Community Service, Club Service, Professional Development, and International Service. Each avenue offers unique opportunities for engagement and growth. Under Community Service, we organized heartwarming visits to old age homes and orphanages, fostering connections with those in need. In Club Service, we nurtured camaraderie through enjoyable outings, such as visits to Cubbon Park, enhancing our club interactions. Our Professional Development avenue provided invaluable workshops and inspiring talks from industry leaders, enriching our professional skills. Meanwhile, the International Service initiatives allowed us to collaborate with clubs across different districts, broadening our horizons and strengthening our network.
                    <br /><br />
                    Currently, I am honored to serve as a PR Personnel with <span className="font-bold text-red-600">Rotaract Club of Bengaluru Avyanna under District 3191 </span>, the first all-female Rotaract Club, where I passionately support social causes and engage in empowering projects that uplift women and promote social welfare. My role in public relations allows me to amplify our initiatives and connect with a wider audience, furthering our mission to make a meaningful impact. Rotaract has been a transformative platform, enabling me to drive significant change and deepening my commitment to community service.
                </p>
            </Modal>
        </div>
    );
};

export default Rotaract;
