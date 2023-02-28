import React from "react";
// count up
import CountUp from "react-countup";
// interaction observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[480px] bg-top backdrop-blur-2xl"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent font-semibold">About Me</h2>
            <h3 className="h3 mb-4 text-[#dfdcc3]">
              Graduate of informatics engineering with an interest in web design
              and development
            </h3>
            <p className="mb-6 text-[#dfdcc3] font-medium">
              Junior achievers with expertise in planning, designing,
              prototyping, and implementing high-quality websites. Skilled in
              Figma, Photoshop, Tailwindcss, ReactJs, NodeJs, MongoDB and MySQL.
              Proven ability to quickly understand requirements, create
              innovative solutions, and complete projects within a tight
              deadline.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#dfdcc3]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#dfdcc3]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#dfdcc3]">
                  Companies <br />
                  Worked
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
              <a download="" href="../assets/CV Sukma Giri Pratama.pdf">Download CV</a>
              </button>
              <a download="" href="../assets/Portfolio Sukma Giri Pratama.pdf" className="text-gradient btn-link">
                Download <br/> Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
