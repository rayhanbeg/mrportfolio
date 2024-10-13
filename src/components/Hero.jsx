import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mrPhoto.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Title and Description */}
            <h1 className="pb-12 pt-12 lg:pt-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Md Rayhan
            </h1>

            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Mern Stack Developer
            </span>

            <p className="my-2 mx-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>

            {/* Action Buttons: Download Resume and GitHub */}
            <div className="flex flex-row gap-4 mt-6">
              {/* Resume Download Button */}
              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="relative inline-flex items-center justify-center px-6 py-2 text-sm lg:px-8 lg:py-3 lg:text-base text-white font-semibold rounded-lg overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 border-transparent transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-border"></span>
                <span className="relative z-10">Download CV</span>
                <style>{`
                  @keyframes gradient-border {
                    0% {
                      background-position: 0% 50%;
                    }
                    50% {
                      background-position: 100% 50%;
                    }
                    100% {
                      background-position: 0% 50%;
                    }
                  }

                  .animate-gradient-border {
                    background: linear-gradient(to right, #4ade80, #22d3ee, #9333ea, #f472b6);
                    background-size: 400% 100%;
                    animation: gradient-border 4s linear infinite;
                  }
                `}</style>
              </a>

              {/* GitHub Redirect Button */}
              <a
                href="https://github.com/rayhanbeg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm lg:px-6 lg:py-3 lg:text-base bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="shadow-lg rounded"
              src={profilePic}
              alt="Md Rayhan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
