import "./App.css";
import { requests } from "./Data/constant";
import MoviesFetch from "./Components/MoviesFetch";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import { MovieIdProvider } from "./Components/context";
function App() {
  return (
    <MovieIdProvider>
      <div>
        <Nav />
        <div className="movieRoot theam">
          <Banner />
        </div>
        <div>
          <MoviesFetch
            title="Upcomming"
            fetchDetails={requests.fetchUpcomming}
            heightImage={true}
          />
          <MoviesFetch
            title="NETFLIX ORIGINALS"
            fetchDetails={requests.fetchNetflixOriginals}
            heightImage={true}
          />
          <MoviesFetch title="Trending" fetchDetails={requests.fetchTrending} />
          <MoviesFetch title="Popular" fetchDetails={requests.fetchPopular} />
          <MoviesFetch
            title="Top Rated"
            fetchDetails={requests.fetchTopRated}
          />
          <MoviesFetch
            title="Romance Movies"
            fetchDetails={requests.fetchRomanceMovies}
          />
          <MoviesFetch
            title="Action Movies"
            fetchDetails={requests.fetchActionMovies}
          />
          <MoviesFetch
            title="Horror Movies"
            fetchDetails={requests.fetchHorrorMovies}
          />
          <MoviesFetch
            title="Documantaries"
            fetchDetails={requests.fetchDocumantaries}
          />
          <MoviesFetch
            title="Comedy Movies"
            fetchDetails={requests.fetchComedyMovies}
          />
        </div>
      </div>
      </MovieIdProvider>
   
  );
}

export default App;
