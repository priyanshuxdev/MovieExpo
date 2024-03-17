import React from "react";
import "./cast.css";

const Cast = ({ cast: { cast } }) => {
  return (
    <>
      <h1 className="text-[30px] pl-7 mb-14">Cast</h1>
      {cast?.length > 0 && (
        <div className="media-scroller gap-10">
          {cast.slice(0, 20).map((actor) => (
            <div key={actor.id}>
              <div className="w-[130px] h-[180px] sm:w-[160px] sm:h-[220px] overflow-hidden transition duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                      : "https://www.movienewz.com/img/films/poster-holder.jpg"
                  }
                  alt={actor.name}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-lg mt-2">{actor.name}</p>
                <p className="text-gray-300 text-[14px]">{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cast;
