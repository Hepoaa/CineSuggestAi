"use client";
import { motion } from "framer-motion";

export default function Banner() {
  const letters = "CineSuggest AI".split("");

  return (
    <div className="flex-1 relative h-full overflow-hidden flex flex-col justify-center items-center">
      {/* Gradiente de fundo escuro para a imagem */}
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-2" />

      {/* Animação da imagem */}
      <motion.img
        src="/cinema-hero.png"
        className="absolute w-[40%] bottom-0 left-[50%] scale-150 z-1"
        initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.4, // Duração de 1 segundo
          delay: 1, // Começa com um atraso de 0.5 segundos
          type: "spring",
          stiffness: 20,
        }}
      />

      {/* Animação do texto */}
      <h1 className="flex text-[15rem] h-[60%] font-bold text-white text-shadow-black relative">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1, // atraso progressivo
              type: "spring",
              stiffness: 10,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h1>

      

      <div
       className="h-full text-amber-50 w-full flex justify-center px-45 ">
        <motion.div 
        initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay:  0.2, // atraso progressivo
              type: "spring",
              stiffness: 25,
            }}
        className="w-1/3 text-lg h-fit rounded-4xl backdrop-blur-md p-4 text-center"
        >
          <span className="font-bold">Tu próxima película favorita está a solo una descripción de distancia.</span>
           Usa inteligencia artificial para encontrar recomendaciones de películas y series basadas en tus ideas.
        </motion.div>
      </div>
    </div>
  );
}
