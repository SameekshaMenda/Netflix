import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { ThemeContext } from '../context/ThemeContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`container-fluid min-vh-100 p-3 pt-5 ${dark ? 'bg-black text-white' : 'bg-light text-dark'}`}>
      <h3 className=' container pt-5 m-0'>Your Favorites</h3>
      {favorites.length === 0 ? (
        <p className='text-muted'> No favorites yet - add some movies!</p> 
      ) : (
        <div className='d-flex ml-4 flex-wrap'  style={{ gap: '18px' }}>
          {favorites.map(m => <MovieCard key={m.id} movie={m} dark={dark} />)}
        </div>
      )}
    </div>
  )
}

export default Favorites;
