"use client";

import { 
  BiLogoDocker, 
  BiLogoJavascript, 
  BiLogoNodejs, 
  BiLogoPostgresql, 
  BiLogoTailwindCss, 
  BiLogoTypescript 
} from "react-icons/bi";

import { 
  SiNextdotjs, 
  SiSpringboot, 
  SiMysql, 
  SiApachemaven, 
  SiC 
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const techIcons = [
    { Icon: SiNextdotjs, color: "text-white" },
    { Icon: BiLogoTypescript, color: "text-sky-500" },
    { Icon: BiLogoJavascript, color: "text-yellow-500" },
    { Icon: BiLogoNodejs, color: "text-green-400" },
    { Icon: BiLogoTailwindCss, color: "text-sky-400" },
    { Icon: BiLogoPostgresql, color: "text-blue-500" },
    { Icon: BiLogoDocker, color: "text-blue-600" },
    { Icon: SiSpringboot, color: "text-green-600" },
    { Icon: MdApi, color: "text-purple-600" },
    { Icon: SiMysql, color: "text-blue-700" },
    { Icon: SiApachemaven, color: "text-indigo-600" },
    { Icon: AiFillHtml5, color: "text-orange-600" },
    { Icon: FaCss3Alt, color: "text-blue-600" },
    { Icon: SiC, color: "text-cyan-600" },
    { Icon: FaJava, color: "text-red-600" } // Pengganti SiJava
  ];

  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32" id="tech">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techIcons.map(({ Icon, color }, i) => (
          <motion.div
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Icon className={`cursor-pointer text-[80px] ${color} transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
