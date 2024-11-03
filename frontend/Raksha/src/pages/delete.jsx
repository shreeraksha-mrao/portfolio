import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const Delete = () => {
  const [blogData, setBlogData] = useState([]);

  const fetching = async () => {
    const data = await axios.get('http://localhost:3000/blogs');
    console.log(data);
    setBlogData(data.data.data);
  }
  fetching();

  const deleteme = async (e, id) => {
    e.preventDefault(); // Prevent the Link navigation
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      console.log("deleted successfully");
      // Update the UI by removing the deleted blog
      setBlogData(blogData.filter(blog => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  }

  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(blogs.png)' }}
      >
        <div className="absolute bottom-0 left-0 p-8 text-white poppins_font">
          <h1 className="text-6xl font-bold poppins_font pb-4">BLOGS</h1>
          <h2 className="text-xl poppins_font">Exploring Ideas Across Technology, Lifestyle, and Beyond</h2>
        </div>
      </div>
      <div className="left-0 p-8 flex flex-wrap gap-4 justify-center items-center custom-linear1">
        {blogData.map((blog) => (
          <Link
            to={`/blog/${blog._id}`}
            key={blog._id}
            className="relative bg-white text-black p-4 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300 ease-in-out poppins_font group"
          >
            <div className="w-80 h-40 m-10 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p>{blog.summary}</p>
              <button
                onClick={(e) => deleteme(e, blog._id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-red-50 hover:bg-red-100 transition-colors duration-200 group-hover:bg-red-500 group-hover:text-white"
                aria-label="Delete blog"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Delete;