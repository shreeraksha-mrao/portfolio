import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { fadeIn } from '../utils/variants';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const fetchInDetail = async() =>{
    const data = await axios.get(`http://localhost:3000/blogs/${id}`)
    console.log(data);
    setBlog(data.data.data);
  }
  fetchInDetail();
  
  return (
    <div className="flex bg-[#eedada] poppins_font">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="w-1/2 flex flex-col justify-center items-center p-12 space-y-6 mt-14"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{blog.title}</h1>
        <div className="relative bg-white p-10 rounded-lg shadow-2xl border border-gray-200 w-full max-w-3xl transition-all duration-300">
          <p className="text-gray-700 text-lg leading-relaxed">
            {blog.description}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView = {"show"}
        className="w-1/2 flex justify-center items-center overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="shadow-lg transition-transform duration-1000 ease-out"
          style={{
            height: '100%',
            width: '80%',
            objectFit: 'cover',
          }}
        />
      </motion.div>
    </div>
  );
};

export default BlogDetail;