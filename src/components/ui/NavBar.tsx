"use client";
import {motion} from "framer-motion";

export default function NavBar() {
  // Define a animação para o fundo arredondado
  const navBarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 2 } },
  };

  // Define a animação para os itens da lista (logo e links)
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <nav className="relative w-full flex flex-row items-center justify-center py-4">
      <motion.ul
        className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-5 px-8 py-2 rounded-full backdrop-blur-xs bg-white/40 shadow-xl font-medium text-white items-center border border-white/50"
        variants={navBarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="logo_cine.webp"
          className="h-10 cursor-pointer"
          variants={itemVariants}
        />
        <motion.li
          className="px-4 py-1 rounded-full cursor-pointer hover:bg-white/20 transition"
          variants={itemVariants}
          transition={{delay: 2}}
        >
          <a href="#">Início</a>
        </motion.li>
        <motion.li
          className="px-4 py-1 rounded-full cursor-pointer hover:bg-white/20 transition"
          variants={itemVariants}
        transition={{delay: 2.5}}

        >
          <a href="#posters">Galería de Posters</a>
        </motion.li>
        <motion.li
          className="px-4 py-1 rounded-full cursor-pointer hover:bg-white/20 transition"
          variants={itemVariants}
        transition={{delay: 3}}

        >
          <a href="#recomendaciones">Recomendaciones</a>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
