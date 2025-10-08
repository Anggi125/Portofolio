
import React from "react";
import { motion } from "framer-motion";

interface CertificateData {
  image: string;
  title: string;
  isPortrait?: boolean; // opsional: gambar yang perlu diputar ke kiri
}

const CertificateGallery: React.FC = () => {
  const certificates: CertificateData[] = [
    {
      image: "https://i.imgur.com/UALN3Rj.jpg",
      title: "C Language Logic and Algorithm Instructor",
      isPortrait: true,
    },
    {
      image: "https://i.imgur.com/jXgX9Ii.jpg",
      title: "Data Structure Instructor",
      isPortrait: true,
    },
    { image: "https://i.imgur.com/IEMpGxW.jpg", title: "GitHub Instructor", isPortrait: true, },
    { image: "https://i.imgur.com/1oUuDFK.jpg", title: "GitHub Training", isPortrait: true, },
    { image: "https://i.imgur.com/WA8ri2d.jpg", title: "Java Training", isPortrait: true, },
    {
      image: "https://i.imgur.com/WA8ri2d.jpg",
      title: "Java Spring Boot Training",
       isPortrait: true,
    },
    {
      image: "https://i.imgur.com/IXjfhyn.jpg",
      title: "C Training",
      isPortrait: true,
    },
    {
      image: "https://i.imgur.com/8JMjQ5K.jpg",
      title: "Database Training",
      isPortrait: true,
    },
    {
      image: "https://i.imgur.com/dxBcxAZ.jpg",
      title: "Web Programming Training",
       isPortrait: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-light mb-16 text-center">
        My Certificates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-purple-500/40 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-video overflow-hidden flex justify-center items-center">
              <img
                src={cert.image}
                alt={cert.title}
                className={`transition-transform duration-500 ${
                  cert.isPortrait
                    ? "h-[130%] rotate-[-90deg] scale-110"
                    : "w-full h-full object-cover hover:scale-105"
                }`}
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-[#63e]">
                {cert.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;

