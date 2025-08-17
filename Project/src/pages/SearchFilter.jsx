import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import moviesData from '../data/movies.json';
import MovieCard from '../components/MovieCard';
import { ThemeContext } from '../context/ThemeContext';

function SearchFilter() {
  const { dark } = useContext(ThemeContext);
  const useQuery = () => new URLSearchParams(useLocation().search);

  const q = useQuery().get('q') || '';
  const genre = useQuery().get('genre') || '';

  let filtered = moviesData;

  if (q) {
    filtered = filtered.filter(m => m.title.toLowerCase().includes(q.toLowerCase()));
  }
  if (genre) {
    filtered = filtered.filter(m =>
      Array.isArray(m.genres) &&
      m.genres.some(g => g.toLowerCase() === genre.toLowerCase())
    );
  }

  return (
    <div className="row g-3 px-3">
  {filtered.length === 0 ? (
    <p className="text-muted">No matches found...</p>
  ) : (
    filtered.map((m) => (
      <div key={m.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
        <MovieCard movie={m} dark={dark} />
      </div>
    ))
  )}
</div>


  );
}

export default SearchFilter;
