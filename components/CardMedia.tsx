import React from 'react';
import { TMDbResult } from '../types.ts';
import { TMDB_IMAGE_BASE_URL } from '../constants.ts';

interface CardMediaProps {
  item: TMDbResult;
  onToggleFavorite: (item: TMDbResult) => void;
  onViewDetails: (item: TMDbResult) => void;
}

const HeartIcon: React.FC<{className: string, isFavorite: boolean}> = ({className, isFavorite}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

export const CardMedia: React.FC<CardMediaProps> = ({ item, onToggleFavorite, onViewDetails }) => {
  const titulo = item.title || item.name;
  const descripcion = item.overview;
  const posterUrl = item.poster_path ? `${TMDB_IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/500x750/0b0b0b/ff6a00?text=No+Image';
  const generos = item.genres?.map(g => g.name) || [];

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(item);
  }

  return (
    <div 
        className="bg-base-200 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group cursor-pointer relative"
        style={{ boxShadow: "inset 0 -10px 15px -5px rgba(100, 22, 245, 0.6)" }}
        onClick={() => onViewDetails(item)}
    >
      <div className="relative">
        <img src={posterUrl} alt={titulo} className="w-full h-auto object-cover aspect-[2/3]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
        <button onClick={handleFavoriteClick} className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm p-2 rounded-full text-brand-accent transition-all duration-300 hover:scale-110 hover:text-red-500">
            <HeartIcon className="w-6 h-6" isFavorite={!!item.isFavorite} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold text-text-primary truncate" title={titulo}>{titulo}</h3>
        <p className="text-sm text-text-secondary mt-1 h-10 overflow-hidden text-ellipsis">
            {descripcion}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
            {generos.slice(0, 2).map((genre, index) => (
                <span key={index} className="text-xs font-semibold uppercase bg-white/10 text-text-secondary px-2 py-1 rounded-full">
                    {genre}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};
