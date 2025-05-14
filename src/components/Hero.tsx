import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex px-16 min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
<div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl shadow-indigo-600">
  <img
    src="https://imgur.com/S7YKqZA.jpg"
    alt=""
    className="w-full h-full object-cover object-center"
  />
</div>

        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center ">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">Anggi Nouval Tanjung</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl">FullStack Web Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
       Hi, I'm Anggi Nouval Tanjung, a full-stack web developer passionate about building modern and efficient applications. I specialize in creating responsive front-ends using Next.js and React.js, and robust back-ends with Java Spring Boot and Node.js, leveraging databases like PostgreSQL and MySQL. My projects range from academic potential test platforms, API development, e-commerce clones, to media streaming interfaces — all designed to deliver seamless and user-friendly experiences.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero