// Navbar.jsx
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate, Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { FaMoon, FaSun, FaHeart } from 'react-icons/fa';
import icon from '/icons/icon.png';
import moviesData from '../data/movies.json';

function Navbar() {
  const { dark, toggle } = useContext(ThemeContext);
  const { favorites } = useContext(FavoritesContext);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const navigate = useNavigate();

  // Get unique genres from moviesData
  const genres = Array.from(
    new Set(
      moviesData.flatMap(m => m.genres) // flatten all genre arrays
    )
  );
  const submit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleGenreChange = (e) => {
    const selected = e.target.value;
    setGenre(selected);
    if (selected) {
      navigate(`/search?genre=${encodeURIComponent(selected)}`);
    }
    else {
      navigate('/search'); // show all if cleared
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${dark ? `navbar-dark `: 'navbar-light'} bg-black px-3`}>
      <Link className="navbar-brand text-white" to="/">
        <img src={icon} alt="logo" style={{ height: "80px" }} />
      </Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navMenu">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/favorites">
              Favorites 
            </Link>
          </li>
        </ul>

        {/* Genre Dropdown */}
        <select className="form-select me-3" style={{ width: '150px' }} value={genre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))}
        </select>

        {/* Search form */}
        <form className="d-flex me-3" onSubmit={submit}>
          <input
            className="form-control me-2"
            placeholder="Search movies..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>

        {/* Theme toggle */}
        <button className="btn btn-outline-light" onClick={toggle} title="Toggle theme">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
