
interface CardMediaProps {
  titulo: string;
  descripcion: string;
  posterUrl: string;
  generos?: string[];
}

export default function CardMedia({
  titulo,
  descripcion,
  posterUrl,
  generos = [],
}: CardMediaProps) {
  return (
    <div className="max-w-xs">
      <div
        className="relative bg-black border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
        style={{
          boxShadow: "inset 0 -10px 15px -5px rgba(100, 22, 245, 0.6)",
        }}
      >
        <img
          src={posterUrl}
          alt={`Póster de ${titulo}`}
          className="w-full h-96 object-cover rounded-t-xl"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold text-white">{titulo}</h2>
          <p className="text-white mt-1 text-sm h-16 overflow-hidden">
            {descripcion}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {generos.map((genero, index) => (
              <span key={index} className="text-xs bg-white/80 text-black backdrop-blur-sm px-2 py-1 rounded-full border border-gray-200">
                {genero}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
