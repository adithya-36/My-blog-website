import React from 'react';
const About = () => {
  return (
    <div className="min-h-screen px-6 py-12  flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="max-w-xs md:max-w-sm rounded-r-full shadow-lg"
          src='../assets/profile.jpg'
          alt="Profile"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          About Me
        </h1>
        <p className="text-justify text-lg leading-relaxed text-gray-700 mb-6">
          I’m currently a final-year BTech student in Information Technology at the School of Engineering, CUSAT, with a strong passion for software development. Originally a biology student in school, I had no coding experience before joining IT, but my determination to learn led me to master languages like C++, JavaScript, and React, and I’m now expanding into Node.js and MongoDB for full-stack development. This journey taught me how to quickly adapt to new challenges, a skill I’ve applied in projects like building a portfolio website and a blog platform using React, where I implemented features like user authentication and dynamic content rendering. I also contributed to a team project on a University Attendance Management system using RDBMS, which improved my database design and collaboration skills.
        </p>
        <p className="text-justify text-lg leading-relaxed text-gray-700">
          Academically, I’ve maintained strong grades, scoring 96% in 10th and 95.8% in 12th, and outside academics, I’m passionate about table tennis, having won an inter-college event, which reflects my competitive spirit and ability to perform under pressure.
        </p>
      </div>
    </div>
  );
};

export default About;
