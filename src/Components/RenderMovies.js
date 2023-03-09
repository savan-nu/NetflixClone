import React from "react";
import { imageBaseUrl } from "../Data/constant";
import classes from "./Render.module.css";
function RenderMovies({ movie, heightImage, handleOnclick }) {
  //   console.log(movie);
  const url = imageBaseUrl;
  //   // console.log(url);
  //   console.log(heightImage);
  return (
    <>
      <img
        style={{ height: heightImage ? "300px" : "200px" }}
        className={`${classes.movie_poster} ${
          heightImage ? classes.biggerImage : ""
        }`}
        src={`${url}${heightImage ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
        key={movie.id}
        onClick={() => {
          handleOnclick(movie);
        }}
      />
    </>
  );
}

export default RenderMovies;
