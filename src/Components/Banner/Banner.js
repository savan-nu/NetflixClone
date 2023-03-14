import React, { useState, useEffect } from "react";
import classes from "./Banner.module.css";
import { baseUrl, requests, imageBaseUrl } from "../../Data/constant";

export default function Banner() {
  const [randomMovie, setrandomMovie] = useState();

  useEffect(() => {
    const getRandomMovie = async () => {
      const url = `${baseUrl}${requests.fetchRandom}`;
      const res = await fetch(url);
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * (data.results.length - 1));

      setrandomMovie(data.results[randomIndex]);
      console.log(randomIndex);
    };
    getRandomMovie();
  }, []);

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `url(${imageBaseUrl}${randomMovie?.backdrop_path})`,
        backgroundSize: "cover",
        objectFit: "contain",
      }}
    >
      <div className={classes.banner_contents}>
        <h1 className={classes.banner_tittle}>
          {" "}
          {randomMovie?.name ||
            randomMovie?.original_title ||
            randomMovie?.original_title}
        </h1>
        <div>
          <button className={classes.banner_button}>Play</button>
         
        </div>
        <h4 className={classes.bannner_desc}>{randomMovie?.overview}</h4>
      </div>
     
    </div>
  );
}
