import { motion } from "framer-motion";
import CardPersonagem from "../ui/CardPersonagem";

export default function SecaoPersonagens() {
    const letters = "Personagens".split("");

  return(<>
  <div className="bg-black gap-5 justify-center py-10">
    <h2 id="personagens" className="text-amber-50 text-7xl font-bold text-center">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.1,
                delay: i * 0.1, // atraso progressivo
                type: "spring",
                stiffness: 20,
              }}
              viewport={{ once: false }}
            >
              {letter}
            </motion.span>
          ))}
    </h2>

    <div className="flex gap-3 justify-center py-20">
    <CardPersonagem
      nome="Frieren"
      descricao="Uma elfa maga que explora o mundo com calma e sabedoria."
      imagem="/Frierenfoto.jpeg"
      tags={["Mago", "Elfa", "Aventureira"]}
    />
    <CardPersonagem
      nome="Fern"
      descricao="Uma elfa maga que explora o mundo com calma e sabedoria."
      imagem="/Fern.jpeg"
      tags={["Mago", "Humano", "Aventureira"]}
    />
    <CardPersonagem
      nome="Frieren"
      descricao="Uma elfa maga que explora o mundo com calma e sabedoria."
      imagem="/Stark.jpeg"
      tags={["Guerreiro", "Humano", "Aventureiro"]}
    />
    </div>

  </div>
  </>)
}