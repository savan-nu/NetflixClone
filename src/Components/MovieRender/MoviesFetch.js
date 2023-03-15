import React from "react";
import { baseUrl } from "../../Data/constant";
import { useEffect, useState } from "react";
import RenderMovies from "./RenderMovies";
import YouTube from "react-youtube";
import classes from "./MoviesFetch.module.css";
import movieTrailer from "movie-trailer";
import { FaWindowClose } from "react-icons/fa";

export default function MoviesFetch({
  title,
  fetchDetails,
  heightImage = false,
}) {
  const [movieNames, setmovieNames] = useState([]);
  const [movieID, setmovieID] = useState();
  const [isNullUrl, setIsNullUrl] = useState(false);

  // console.log(useMovieContext.movieID);
  // console.log(useMovieContext.setmovieID)
  // const [movieID,setmovieID] = useMovieContext;
  const opts = {
    height: "800",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `${baseUrl}${fetchDetails}`;
      const res = await fetch(url);
      const data = await res.json();

      setmovieNames(data.results);
    };
    fetchMovieDetails();
  }, [fetchDetails]);

  const handleOnclick = async (movie) => {
    setIsNullUrl(false);
    //  if(movieID){
    //     console.log("savan");
    //     setmovieID(null);
    //     // useMovieContext.setIsOpen(false);
    //  }
    //  else{
    // console.log(movie);

    const url = await movieTrailer(
      movie?.name || "" || movie?.original_title || movie?.original_name
    );
    // console.log(url);
    if (url === null) {
      setIsNullUrl(true);
      // useMovieContext.setIsOpen(true);
    }
    const urlParams = new URLSearchParams(new URL(url).search).get("v");
    setmovieID(urlParams);
    // useMovieContext.setIsOpen(true);
    //  }
  };
  console.log(movieID);
  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.moviePosters}>
        {movieNames.map((movie) => (
          <RenderMovies
            movie={movie}
            heightImage={heightImage}
            handleOnclick={handleOnclick}
          />
        ))}
      </div>
      {movieID && (
        <div>
          {" "}
          <button
            className={classes.movieButton}
            onClick={() => {
              setmovieID("");
            }}
          >
            <FaWindowClose size={25} style={{ color: "rgb(176,53,55)" }} />
          </button>
          <YouTube videoId={movieID} opts={opts} />{" "}
        </div>
      )}
      {isNullUrl && (
        <div className={classes.trailer}>
          <button
            className={classes.movieButton}
            onClick={() => {
              setIsNullUrl("");
            }}
          >
            <FaWindowClose size={25} style={{ color: "rgb(176,53,55)" }} />
          </button>
          <h1>Movie Trailer is Not avalible</h1>
        </div>
      )}
    </div>
  );
}
