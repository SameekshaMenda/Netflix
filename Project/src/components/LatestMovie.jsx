import { Link } from "react-router-dom";
import moviesData from "../data/movies.json";

function LatestMovie() {
  const latest = moviesData.reduce((a, b) => (a.year > b.year ? a : b));
  console.log(latest);

  return (
    <div className="position-relative">

      <img
        src={latest.poster[0]}
        alt={latest.title}
        className="w-100 latest-movie-img"
      />

      <div
        className="hero-overlay p-0 p-md-5"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          color: "#fff",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.0) 100%)",
        }}
      >
        <h1 className="fw-bold latest-movie-title">{latest.title}</h1>
        <p className="fs-6 fs-md-5">Released: {latest.year}</p>
        <p className="fs-6 fs-md-5">{latest.caption}</p>
        <Link to={`/movie/${latest.id}`} className="btn btn-outline-light mt-2">
          Watch Now
        </Link>
      </div>

      <style jsx>{`
        .latest-movie-img {
          width: 100%;
          height: auto;         
          max-height: 60vh;    
          object-fit: contain;  
        }

        @media (min-width: 768px) {
          .latest-movie-img {
            height: 80vh;        
            object-fit: cover; 
          }
          .latest-movie-title {
            font-size: 90px;
          }
        }

        @media (max-width: 767px) {
          .latest-movie-title {
            font-size: 36px;
          }
        }
      `}</style>

    </div>
  );
}

export default LatestMovie;
