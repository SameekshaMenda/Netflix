import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moviesData from '../data/movies.json';
import { FavoritesContext } from '../context/FavoritesContext';
import { ThemeContext } from '../context/ThemeContext';

function MovieDetails() {
  const { add, remove, isFav } = useContext(FavoritesContext);
  const { dark } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesData.find(m => String(m.id) === String(id));
  if (!movie) return <div className={`p-4 ${dark ? 'text-white' : 'text-dark'}`}>Movie not found.</div>;

  const fav = isFav(movie.id);

  return (
    <div className={`container-fluid min-vh-100 mt-5 p-5 ${dark ? 'bg-black text-white' : 'bg-light text-dark'}`}>
      <button 
        className={`btn mb-3  ${dark ? 'btn-outline-light' : 'btn-outline-dark'}`} 
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="row">
        <div className="col-md-4">
          <img src={movie.poster[1]} alt={movie.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <small>{movie.genres.join(', ')} • {movie.year?.slice(0,4) || "N/A"}</small>
          <div className="mt-3">
            <button
              className={`btn me-2 ${fav ? 'btn-danger' : (dark ? 'btn-outline-light' : 'btn-outline-dark')}`}
              onClick={() => fav ? remove(movie.id) : add(movie)}
            >
              {fav ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
