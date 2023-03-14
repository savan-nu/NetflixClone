import React from "react";
import "../../App.css"
import "./Home.module.css"
import MoviesFetch from "../MovieRender/MoviesFetch";
import Nav from "../Navbar/Nav";
import Banner from "../Banner/Banner";
import { Movies } from "../../Data/movies";
function Home() {
  return (
    <div>
      <Nav />
      <div className="movieRoot theam">
        <Banner />
      </div>
      <div>
        {Movies.map((movie) => (
          <MoviesFetch
            title={movie.tittle}
            fetchDetails={movie.fetchDetails}
            heightImage={movie.heightImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
