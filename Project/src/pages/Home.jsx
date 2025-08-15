import React, { useContext, useEffect, useState } from 'react';
import moviesData from '../data/movies';
import bannerData from '../data/banner.json';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState([])
  const {dark} = useContext(ThemeContext);

  //stimulates network fetch in 600ms delay
  useEffect(() => {
    setTimeout(() => {
      setMovies(moviesData);
      setBanner(bannerData);
      setLoading(false);
    }, 600);
  }, []);

  const latest = movies[1];   //release logic
  const bannerDetails = banner[0];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`container-fluid p-0 ${dark ? `bg-black text-white` : `bg-light text-white`}`}>
      {/* Hero */}
      {latest && (
        <div className="hero  position-relative" style={{ overflow: 'hidden' }}>
          <img
            src={bannerDetails.image}
            alt={bannerDetails.title}
            style={{
              width: '100%',
              height: '580px',      
              objectFit: 'cover',                  
            }}
          />
          <div className="hero-overlay p-4 " style={{ position: 'absolute', bottom: 0, left: 0, right: 0, color: '#fff', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 40%)' }}>
            <div className='container mb-5 p-0'>

            <h1>{bannerDetails.title}</h1>
            <p style={{ maxWidth: '60%'}}>{bannerDetails.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <h4 className="text mt-4 p-2" style={{
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    paddingBottom: '10px',
    scrollSnapType: 'x mandatory'
  }}>{dark ? "Trending now" : <h4 style={{color: "black"}}>Trending Now</h4>}</h4>
      <div className="d-flex flex-wrap" style={{ gap: '18px' }}>
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}

export default Home