import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { motion } from 'framer-motion';
import { projectsArray } from '../utils/project.js';

const Projects = () => {
  const [project, setProject] = useState(projectsArray[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectsArray[currentIndex]);
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center py-8 xl:px-0 linear-grad text-white"
    >
      <div className="container mx-auto pt-16 px-4 lg:px-8 max-w-7xl">
        <div className="poppins_font flex flex-col xl:flex-row xl:gap-8 items-start">
          {/* Left Content */}
          <div className="w-full xl:w-[45%] flex flex-col gap-6 mb-8 xl:mb-0">
            <div>
              <div className="text-6xl xl:text-7xl leading-none font-extrabold text-transparent text-outline" data-text={project.num}>
                {project.num}
              </div> 
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold group-hover:text-cyan-500 transition-all duration-500 capitalize">
              {project.category}
            </h2>
            <p className="text-white/60 text-lg xl:text-xl">{project.description}</p>
            <ul className="flex flex-wrap gap-4">
              {project.stack.map((item, index) => (
                <li className="text-cyan-200" key={index}>{item.name}</li>
              ))}
            </ul>
            <div className="border-t border-white/20 my-4"></div>
            {/* GitHub and demo links */}
            <div className="flex gap-6">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-cyan-200 hover:text-cyan-500 transition"
              >
                <i className="fa-brands fa-github mr-2 text-xl"></i>
                <span className="font-bold">GitHub</span>
              </a>
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center cursor-pointer text-cyan-200 hover:text-cyan-500 transition"
                >
                  <i className="fa-solid fa-arrow-right mr-2 text-xl"></i>
                  <span className="font-bold">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Content - Swiper */}
          <div className="w-full xl:w-[55%] relative">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              className="h-[400px] lg:h-[450px] xl:h-[480px]"
              onSlideChange={handleSlideChange}
            >
              {projectsArray.map((p, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full relative group flex justify-center items-center cloud2">
                    <img 
                      className="rounded-2xl object-contain w-full h-full" 
                      src={p.image} 
                      alt={p.category} 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev} 
              className="absolute left-2 z-10 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition"
            >
              <span className="text-2xl">&#10094;</span>
            </button>
            <button 
              onClick={handleNext} 
              className="absolute right-2 z-10 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition"
            >
              <span className="text-2xl">&#10095;</span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;