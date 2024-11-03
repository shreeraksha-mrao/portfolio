import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BlogsSection = () => {
  const [blogData, setBlogData] = useState([])

  const fetching  = async () => {
    const data = await axios.get('http://localhost:3000/blogs');
    console.log(data);
    setBlogData(data.data.data);

  }
  fetching();
  
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(blogs.png)' }} // Replace with your image URL
      >
        <div className="absolute bottom-0 left-0 p-8 text-white poppins_font ">
          <h1 className="text-6xl font-bold poppins_font pb-4">BLOGS</h1>
          <h2 className="text-xl poppins_font">Exploring Ideas Across Technology, Lifestyle, and Beyond</h2>
        </div>
      </div>
      <div className="left-0 p-8 flex flex-wrap gap-4 justify-center items-center custom-linear1">
        {blogData.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="bg-white text-black p-4 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300 ease-in-out poppins_font"
          >
            <div className="w-80 h-40 m-10 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p>{blog.summary}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
