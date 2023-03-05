import React from "react";
// Icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";

// services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "Develop the user interface/experience design with design thinking method",
    link: "View More",
  },
  {
    name: "Web Development",
    description:
      "Front-end Web Development with ReactJs, Tailwindcss & Bootstrap",
    link: "View More",
  },
  {
    name: "Design Graphic",
    description:
      "Creating design with tools Photoshop, Figma, Canva, etc.",
    link: "View More",
  },
];

const Services = () => {
  return (
    <div className="section-center pt-24" id="services">
      <div className="container mx-auto">
        <div
          className="flex flex-col
         lg:flex-row"
        >
          {/* text & image */}
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6 font-semibold">What I Do?</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-[#dfdcc3]">What i offer to best quality web design and development</h3>
            <button className="btn btn-sm">
            <a download="" href="Portfolio Sukma Giri Pratama.pdf">See my work</a>
            </button>
          </motion.div>
          {/* services content */}
          <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            {/* service list */}
            <div>
              {services.map((services, index) => {
                // destructure service
                const { name, description, link } = services;
                return (
                  <div className="border-b border-[#dfdcc3]/20 h-[128px] mb-[24px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] text-[#dfdcc3] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="text-[#dfdcc3] font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a download="" href="Portfolio Sukma Giri Pratama.pdf" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                      <a download="" href="Portfolio Sukma Giri Pratama.pdf" className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
