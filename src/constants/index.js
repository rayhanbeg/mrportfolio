import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Junior MERN Stack Developer with 1 year of hands-on experience in building dynamic, responsive web applications using MongoDB, Express.js, React.js, and Node.js. My passion for coding and problem-solving drives me to create efficient and scalable solutions, ensuring a seamless user experience. 
My experience includes working on real-time applications, implementing user authentication, and managing databases with MongoDB. I am also familiar with using Git for version control, collaborating with teams, and following best practices in coding.`;

export const ABOUT_TEXT = `I am a Junior MERN Stack Developer with 1 year of experience in building dynamic web applications using MongoDB, Express, React, and Node. I focus on creating scalable, efficient solutions and delivering seamless user experiences.

My skills include full-stack development, RESTful API design, real-time apps, user authentication, and database management with MongoDB. I also have experience in version control with Git and team collaboration.

I'm eager to keep learning, work on meaningful projects, and make an impact in a forward-thinking company.`;


export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior MERN Stack Developer",
    company: "Self-employed / Freelance",
    description: `Developed full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). Created and deployed responsive, user-friendly web applications with a focus on performance and scalability. Implemented REST APIs for data retrieval and integrated MongoDB for database management. Managed version control and collaboration using Git.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    year: "2023 - 2024",
    role: "MERN Stack Developer (Personal Projects)",
    company: "Self-learning",
    description: `Built several personal projects utilizing the MERN stack. Designed and developed dynamic web applications with React for the frontend and Node.js/Express for the backend. Implemented authentication and authorization, integrated third-party APIs, and optimized application performance. Continuously learning new technologies and improving coding skills through hands-on projects.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce platform that includes product listing, shopping cart, payment integration, and user authentication. The project is responsive and provides a seamless shopping experience.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "redis"],
    liveLink: "https://nextbuy.onrender.com",
    codeLink: "https://github.com/rayhanbeg/nextbuy"
  },
  {
    title: "Assets Management System",
    image: project2,
    description:
      "A comprehensive system for managing assets like electronics and gadgets. Users can add, track, and categorize assets, providing real-time insights into asset utilization.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Firebase"],
    liveLink: "https://assign12-12.web.app/",
    codeLink: "https://github.com/rayhanbeg/returnTrack"
  },

  {
    title: "ideoHub",
    image: project3,
    description:
      "A platform designed for job applications in fields such as graphics design and web development. It facilitates job seekers in showcasing their portfolios and connecting with potential employers.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
    liveLink: "https://ideohub-i9098.web.app/",
    codeLink: "https://github.com/rayhanbeg/IdeoHub",
  },

  {
    title: "Residential Property Website",
    image: project4,
    description:
      "A residential property listing website where users can view properties for sale and update profiles. The platform is fully responsive and user-friendly.",
    technologies: ["HTML", "CSS", "React","Firebase"],
    liveLink: "https://homenest-9.web.app/",
    codeLink: "https://github.com/rayhanbeg/HomeNest"
  },
];

export const CONTACT = {
  address: "Uttara, dhaka-1230, bangladesh",
  phoneNo: "+8801746982658",
  email: "mdrayhan40301@gmail.com",
};
