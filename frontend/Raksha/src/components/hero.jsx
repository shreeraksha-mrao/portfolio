import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [subheading, setSubheading] = useState('');
  const fullSubheading = "In a relationship with tech - But It's Complicated";
  const typingSpeed = 50; // Speed of typing
  const pauseTime = 1000; // Pause time after displaying the full text

  useEffect(() => {
    let index = 0;
    let typing = true;

    const typingInterval = setInterval(() => {
      if (typing) {
        if (index < fullSubheading.length) {
          setSubheading(fullSubheading.slice(0, index + 1));
          index++;
        } else {
          // Pause after full text is typed
          setTimeout(() => {
            // Start disappearing
            setSubheading('I know it’s funny; your laughter is the proof!');
            index = 0; // Reset index for the next typing cycle
            typing = false; // Switch to typing again
          }, pauseTime);
        }
      } else {
        // Wait a bit before typing again
        typing = true; // Switch back to typing mode
      }
    }, typing ? typingSpeed : 0); // Set interval speed for typing

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="h-screen flex majorSection">
      {/* Left Section with Content */}
      <div className="w-3/5 flex bg-gradient-to-l from-[#201615] to-[#390808] flex-col justify-center items-start text-white p-10">
        <h1 className="text-9xl font-bold mb-6 put_font ml-10">
          <span className="text-shadow">R</span>aksha <span className="text-shadow">R</span>ao
        </h1>
        <p className="pl-[100px] mb-8 poppins_font text-center opacity-100 transition-opacity duration-500 ease-in-out text-xl">
          {subheading}
        </p>

        <div className="flex ml-60 space-x-6 justify-center mt-4">
          <a href="https://www.linkedin.com/in/shreeraksha-mrao/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#880c0c] transition-colors duration-300">
            <i className="fa-brands fa-linkedin-in text-3xl"></i>
          </a>
          <a href="https://github.com/shreeraksha-mrao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#880c0c] transition-colors duration-300">
            <i className="fa-brands fa-github text-3xl"></i>
          </a>
          {/* <a href="mailto:shreeraksha.mrao@gmail.com" className="text-white hover:text-[#880c0c] transition-colors duration-300">
            <i className="fa-solid fa-envelope text-3xl"></i>
          </a> */}
          
          <a href="https://www.instagram.com/raksha.raoz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#880c0c] transition-colors duration-300">
            <i className="fa-brands fa-instagram text-3xl"></i>
          </a>
        </div>
        
      </div>

      {/* Right Section with Image */}
      <div className="w-2/5">
        <img
          src="./bg2.png" // Replace with your image URL
          alt="Landing Page Visual"
          className="object-cover h-full w-full"
        />
      </div>

      
    </div>
  );
}
