import { motion } from "framer-motion";
import React from "react";

// Define the type for project data
interface ProjectData {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string; // Tambahan untuk URL project
}

interface ScrollRevealProps {
  children: React.ReactNode;
}

const Project: React.FC = () => {
  const projectData: ProjectData[] = [
      {
      image: "https://i.imgur.com/l8LahrF.png",
      title: "ONE IDENTITY ",
      description:
        " solusi perangkat lunak yang menyediakan layanan manajemen identitas dan akses (IAM) untuk menyederhanakan dan mengamankan identitas digital organisasi, termasuk tata kelola identitas (IGA), manajemen akses (AM), dan manajemen akses istimewa (PAM)",
      technologies: ["Active Directory", "IGA"],
      link: "#", // Ganti dengan link aslimu
    },
    {
      image: "https://i.imgur.com/iWqkmYh.png",
      title: "Pub Tes Potensi Akademik",
      description:
        "Platform TPA (Tes Potensi Akademik) berbasis web yang membantu pengguna mengukur kemampuan logika, numerik, dan verbal mereka. / A web-based academic potential test (TPA) platform to help users evaluate their logical, numerical, and verbal reasoning skills.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "PostgreSQL"],
      link: "https://new.pubpasim.org/id", // Ganti dengan link aslimu
    },
    {
      image: "https://i.imgur.com/vEoK9II.png",
      title: "Library API",
      description:
        "RESTful API yang dibangun menggunakan Java dan Spring Boot, dilengkapi dokumentasi Swagger dan koneksi ke database MySQL. / A RESTful API developed with Java and Spring Boot, featuring Swagger documentation and MySQL database integration.",
      technologies: ["Java", "Spring Boot", "REST API", "SWAGGER", "MYSQL"],
      link: "https://github.com/Anggi125/LIBRARY", // Ganti dengan link project
    },
    {
      image: "https://i.imgur.com/is5W4Lj.png",
      title: "Shopie Clone",
      description:
        "Platform e-commerce sederhana terinspirasi Shopee dengan fitur penelusuran produk dan keranjang belanja. / A simple e-commerce platform inspired by Shopee with product browsing and shopping cart features.",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "MYSQL"],
      link: "https://github.com/Anggi125/Shopie_clone_java", // Ganti dengan link project
    },
    {
      image: "https://i.imgur.com/vPVoqYt.png",
      title: "Spotify Clone",
      description:
        "Antarmuka streaming musik ringan menyerupai Spotify, dibangun dengan HTML, CSS, dan JavaScript. / A lightweight music streaming UI resembling Spotify, built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://spotify-clone-delta-amber.vercel.app/", // Ganti dengan link project
    },
    {
      image: "https://i.imgur.com/jp9YoXI.png",
      title: "Pasim Tes Potensi Akademik",
      description:
        "Aplikasi TPA berbasis terminal menggunakan bahasa C untuk mengukur kemampuan logika dan verbal. / A terminal-based TPA application built with C language to assess logical and verbal skills.",
      technologies: ["C", "Notepad"],
      link: "https://github.com/Anggi125/TPA-PASIM", // Ganti dengan link project
    },
  ];

  const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
    return (
      <ScrollReveal>
        <div className="project-card flex flex-col items-center gap-8 p-4 md:flex-row md:gap-24">
          <img
            src={project.image}
            alt={project.title}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">{project.title}</div>
              <p className="mt-2 text-sm text-gray-400">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-5">
              {project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-300 transition-all duration-300"
            >
              Lihat Project
            </a>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
