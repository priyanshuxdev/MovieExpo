import React from "react";

const Carousel = ({ movie: { backdrop_path } }) => {
  const settings = {
    infiniteLoop: true,
    autoPlay: true,
    showThumbs: false,
    showStatus: false,
    transitionTime: 3,
    stopOnHover: true,
  };

  return (
    <div>
      <Carousel {...settings}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="movie"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel;
