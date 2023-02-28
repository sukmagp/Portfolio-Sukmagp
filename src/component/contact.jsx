import React from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";

const Contact = () => {
  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-2xl uppercase text-accent font-semibold mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] text-[#dfdcc3] leading-none mb-12">
                Let's work
                <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-16 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#dfdcc3] focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#dfdcc3] focus:border-accent transition-all"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-[#dfdcc3] focus:border-accent transition-all resize-none mb-12"
              type="text"
              placeholder="Text me here"
            />
            <button className="btn btn-sm w-full">Send message</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
