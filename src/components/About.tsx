import React from "react";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black text-gray-300 font-space-grotesk">
      <div className="px-4 sm:px-[5%] mt-0 py-6">
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I'm a Full Stack Developer and UI/UX Designer based in India. Graduated in
          Electrical & Electronics Engineering from College of Engineering Cherthala (2019-2023).
          With 2+ years of experience in JavaScript, React, HTML, and modern web technologies,
          I create intuitive and responsive digital experiences.
        </p>

        <p className="mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I blend design thinking with technical expertise to transform ideas into
          reality. From wireframe designs to fully functional websites, I focus on
          user-centered design principles and clean, maintainable code.
          <br />
          <br />
          <span className="font-semibold text-white">
          Motto:
          "Trying to be a little bit better than yesterday everyday."
          </span>
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">
          <a
            href="https://github.com/anoobsuresh0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/anoob-suresh-5a48971b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
