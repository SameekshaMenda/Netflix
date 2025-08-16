import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bannerData from "../data/banner.json";

function HeroBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bannerData.map((b, i) => (
        <Carousel.Item key={i}>
          <div style={{ position: "relative" }}>
        
            {b.video ? (
              b.video.includes("youtube.com") ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(b.video)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYouTubeId(b.video)}`}
                  title={b.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <video
                  src={b.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                />
              )
            ) : (
              <img
                src={b.image}
                alt={b.title}
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
            )}

            <div
              className="hero-overlay p-5"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                color: "#fff",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
              }}
            />
            <Carousel.Caption
              style={{
                textAlign: "left",
                left: 0,
                paddingLeft: "3%",
                margin: "0",
              }}
            >
              <div className="container mb-5 p-0">
                <h1 style={{ fontSize: "50px" }}>{b.title}</h1>
                <p className="m-2" style={{ maxWidth: "60%" }}>
                  {b.description}
                </p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroBanner;
