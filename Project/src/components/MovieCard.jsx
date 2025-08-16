import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FavoritesContext } from '../context/FavoritesContext';
import '../style/Moviecard.css';

export default function MovieCard({ movie }) {
  const { add, remove, isFav } = useContext(FavoritesContext);
  const fav = isFav(movie.id);

  return (
    <div className="movie-card">
      <div className="poster-wrap">
        <img src={movie.poster[1]} alt={movie.title} className="poster" />

        <div className="overlay">
         
          <div className="overlay-bottom">
            <h6 className="movie-title fs-3">{movie.title}</h6>
            <div className="movie-info">
              <small className="text-white">
                {Array.isArray(movie.genres)
                  ? movie.genres.join(" ")
                  : movie.genres}
              </small>
              <small className="text-white m-1">
                {movie.year ? movie.year.slice(0, 4) : "N/A"}
              </small>
            </div>

            <div className="movie-actions">
              <Link to={`/movie/${movie.id}`} className="btn btn-sm btn-light">
                View
              </Link>

              <button
                className="btn btn-sm btn-outline-light"
                onClick={() => fav ? remove(movie.id) : add(movie)}
                aria-label="toggle favorite"
              >
                {fav ? <FaHeart /> : <FaRegHeart />}
              </button>

              <button className="btn btn-sm btn-outline-light text-white rating-btn" style={{ backgroundColor: "transparent" }}>
                {movie.rating}
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
