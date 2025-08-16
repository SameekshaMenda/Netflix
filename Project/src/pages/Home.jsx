import React, { useContext, useEffect, useState } from 'react';
import moviesData from '../data/movies';
import bannerData from '../data/banner.json';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { ThemeContext } from '../context/ThemeContext';
import HeroBanner from '../components/HeroBanner';
import LatestMovie from '../components/LatestMovie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState([])
  const { dark } = useContext(ThemeContext);

  //stimulates network fetch in 600ms delay
  useEffect(() => {
    setTimeout(() => {
      setMovies(moviesData);
      setBanner(bannerData);
      setLoading(false);
    }, 600);
  }, []);


  if (loading) return <LoadingSpinner />;

  return (
    <div className={`container-fluid p-0 ${dark ? `bg-black text-white` : `bg-light text-white`}`}>


      <HeroBanner />

      <LatestMovie />

      {/* Grid */}
      <h4 className="m-2 pt-5 p-1 fw-bold" style={{ color: dark ? 'white' : 'black' }}>
  Trending Now
</h4>
<div
  className="d-flex"
  style={{
    gap: '10px',
    overflowX: 'auto',
    padding: '0 12px',
    scrollSnapType: 'x mandatory',
  }}
>
  {movies
    .filter(m => m.isTrending)
    .map(m => (
      <div key={m.id} style={{ flex: '0 0 auto', scrollSnapAlign: 'start' }}>
        <MovieCard movie={m} small />
      </div>
    ))}
</div>


      {/* movies */}
      <h4 className=" m-2 pt-5 p-1 fw-bold" style={{ color: dark ? 'white' : 'black' }}>
        Top Rated on ImDb
      </h4>
      <div
        className="d-flex"
        style={{
          gap: '10px',
          overflowX: 'auto',
          padding: '0 12px',
          scrollSnapType: 'x mandatory',
        }}
      >
        {movies.map(m => (
          <div
            key={m.id}
            style={{
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
            }}
          >
            <MovieCard movie={m} small />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home