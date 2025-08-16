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
    <div className={`container-fluid min-vh-100 p-4 ${dark ? 'bg-black text-white' : 'bg-light text-dark'}`}>
      <h4 className=' text pt-5 mt-5'>
        {q && `Search results for: ${q}`}
        {genre && `Genre: ${genre}`}
      </h4>

      <div className='d-flex flex-wrap' style={{ gap: "18px" }}>
        {filtered.length === 0
            ? <p className='text-muted'>No matches found...</p>
            : filtered.map(m => <MovieCard key={m.id} movie={m} dark={dark} />)
        }
      </div>
    </div>
  );
}

export default SearchFilter;
