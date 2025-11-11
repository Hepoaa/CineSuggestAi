import { motion } from "framer-motion";
import CardMedia from "../ui/CardMedia";

export default function SecaoRecomendacoes() {
    const letters = "Recomendaciones".split("");

  return(<>
  <div className="bg-black gap-5 justify-center py-10">
    <h2 id="recomendaciones" className="text-amber-50 text-7xl font-bold text-center">
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
              viewport={{ once: true }}
            >
              {letter}
            </motion.span>
          ))}
    </h2>

    <div className="flex flex-wrap gap-8 justify-center py-20">
    <CardMedia
      titulo="Inception"
      descripcion="Un ladrón que roba secretos corporativos mediante el uso de la tecnología de compartir sueños."
      posterUrl="/poster01.jpg"
      generos={["Sci-Fi", "Acción", "Thriller"]}
    />
    <CardMedia
      titulo="The Matrix"
      descripcion="Un hacker informático aprende de misteriosos rebeldes sobre la verdadera naturaleza de su realidad."
      posterUrl="/poster02.jpg"
      generos={["Sci-Fi", "Acción"]}
    />
    <CardMedia
      titulo="Parasite"
      descripcion="La codicia y la discriminación de clases amenazan la relación simbiótica recién formada."
      posterUrl="/poster03.jpg"
      generos={["Thriller", "Comedia", "Drama"]}
    />
    </div>

  </div>
  </>)
}
