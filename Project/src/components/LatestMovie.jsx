import { Link } from "react-router-dom";
import moviesData from "../data/movies.json";

function LatestMovie() {

    const latest = moviesData.reduce((a, b) =>
        a.year > b.year ? a : b
    );
    console.log(latest);

    return (
        <div className="position-relative">

            <img
                src={latest.poster[0]}
                alt={latest.title}
                style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />

            <div className="hero-overlay p-5 pb-5" style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                color: "#fff",
                background:
                    "linear-gradient(to top, rgba(0,0,0,9) 0%, rgba(0,0,0,0.4) 50%,  rgba(0,0,0,0.0) 100%)",
            }}>
                <h1 className="fw-bold " style={{ fontSize: "90px" }}>{latest.title}</h1>
                <p className="fs-5">Released: {latest.year}</p>
                <p className="fs-5">{latest.caption}</p>
                <Link to={`/movie/${latest.id}`} className="btn btn-outline-light">Watch Now</Link>
            </div>

        </div>
    );
}

export default LatestMovie;
