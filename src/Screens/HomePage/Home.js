import React, { useEffect  } from "react";
import "../../App.css";
import classes from "./Home.module.css";
import MoviesFetch from "../../Components/MovieRender/MoviesFetch";
import Nav from "../../Components/Navbar/Nav";
import Banner from "../../Components/Banner/Banner";
import { Movies } from "../../Data/movies";



function Home() {
  useEffect(() => {
   
    const handleBeforeUnload = (event) => {
      
      event.preventDefault();
      event.stopImmediatePropagation();
      
      event.returnValue = ' ';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
 
  
  return (
    <div className={classes.movies}>
      <Nav />
      <div className="movieRoot">
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
