import { requests } from "./constant";
export const Movies = [
    {
      tittle: "Upcomming",
      fetchDetails: requests.fetchUpcomming,
      heightImage: true,
    },
    {
      tittle: "NETFLIX ORIGINALS",
      fetchDetails: requests.fetchNetflixOriginals,
      heightImage: true,
    },
    {
      tittle: "Trending",
      fetchDetails: requests.fetchTrending,
      heightImage: false,
    },
    {
      tittle: "Popular",
      fetchDetails: requests.fetchPopular,
      heightImage: false,
    },
    {
      tittle: "Top Rated",
      fetchDetails: requests.fetchTopRated,
      heightImage: false,
    },
    {
      tittle: "Romance Movies",
      fetchDetails: requests.fetchRomanceMovies,
      heightImage: false,
    },
    {
      tittle: "Action Movies",
      fetchDetails: requests.fetchActionMovies,
      heightImage: false,
    },
    {
      tittle: "Documantaries",
      fetchDetails: requests.fetchDocumantaries,
      heightImage: false,
    },
    {
      tittle: "Comedy Movies",
      fetchDetails: requests.fetchComedyMovies,
      heightImage: false,
    },
  ];
  
  