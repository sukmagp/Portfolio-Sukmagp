import React from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";
// img
import img1 from "../assets/p1.png";
// import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import img4 from "../assets/p4.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-1 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent font-semibold">
                My Latest <br />
                Projects
              </h2>
              <h3 className="h3 max-w-sm mb-8 font-normal text-[#dfdcc3]">
                Current web design and developmet projects
              </h3>
              <button className="btn btn-sm">
              <a href="https://dribbble.com/sukmagp">View all projects</a>
              </button>
            </div>
            {/* image 1 */}
            <div className="group relative overflow-hidden border-2 border-[#dfdcc3]/50 rounded-xl mb-8">
              {/* overlay */}
              <div className="group-hover:bg-[#1a1a1a]/90 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-30">
                <span className="text-gradient">
                  UI UX Design
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-30">
                <span className="text-3xl text-[dfdcc3] font-medium">
                  SIAKAD UHAMKA
                </span>
              </div>
            </div>
            
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
            {/* image 2 */}
            <div className="group relative overflow-hidden border-2 border-[#dfdcc3]/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-[#1a1a1a]/90 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-30">
                <span className="text-gradient">
                  Web UI Design and Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-30">
                <span className="text-3xl text-[dfdcc3] font-medium">
                  Hungry Joy
                </span>
              </div>
            </div>
            {/* image 3 */}
            <div className="group relative overflow-hidden border-2 border-[#dfdcc3]/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-[#1a1a1a]/90 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img4}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-30">
                <span className="text-gradient">
                  UI UX Design 
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-30">
                <span className="text-3xl text-[dfdcc3] font-medium">
                  Aqadnica
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
