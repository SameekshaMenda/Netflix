import React, { useMemo, useState } from 'react';
import MovieCard from './MovieCard';
import SearchFilter from './SearchFliter'
import LoadingSpinner from './LoadingSpinner';
import '../style/Moviegrid.css'
export default function MovieGrid({ movies, favorites, toggleFavorite, loading = false }) {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');

  const genres = useMemo(
    () => ['All', ...new Set(movies.flatMap(m => m.genres))],
    [movies]
  );

  const filteredMovies = movies.filter((m) => {
    const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = genre === 'All' || m.genres.includes(genre);
    return matchesQuery && matchesGenre;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SearchFilter
        query={query}
        setQuery={setQuery}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
      />

      {filteredMovies.length === 0 ? (
        <p>No movies found matching your search.</p>
      ) : (
        <div className="movie-grid">
          {filteredMovies.map((m) => (
            <div key={m.id} className="col-4 col-sm-3 col-md-2">
              <MovieCard
                movie={m}
                onFavoriteToggle={toggleFavorite}
                isFavorite={favorites.some(f => f.id === m.id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
