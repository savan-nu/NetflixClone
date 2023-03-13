export const API_KEY = "1b5e7b2c1a9491b52fbc9b4f8b15e074";
export const baseUrl = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
export const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchRandom: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcomming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export const quetions = [
  {
    tittle: "What is Netflix ?",
    description:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    subdesc:
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    tittle: "How much Netflix cost ?",
    description:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    subdesc: "",
  },
  {
    tittle: "Where can I watch ? ",
    description:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    subdesc:
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere",
  },
  {
    tittle: "How do I cancel",
    description:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    subdesc: "",
  },
  {
    tittle: "What I can watch on Netflix",
    description:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    subdesc: "",
  },
  {
    tittle: "Is Netflix Good for Kids",
    description:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    subdesc:
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

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
    tittle : "Trending",
    fetchDetails : requests.fetchTrending,
    heightImage : false
  },
  {
    tittle : "Popular",
    fetchDetails : requests.fetchPopular,
    heightImage : false
  },
  {
    tittle : "Top Rated",
    fetchDetails : requests.fetchTopRated,
    heightImage : false
  },
  {
    tittle : "Romance Movies",
    fetchDetails : requests.fetchRomanceMovies,
    heightImage : false
  },
  {
    tittle : "Action Movies",
    fetchDetails : requests.fetchActionMovies,
    heightImage : false
  },
  {
    tittle : "Documantaries",
    fetchDetails : requests.fetchDocumantaries,
    heightImage : false
  },
  {
    tittle : "Comedy Movies",
    fetchDetails : requests.fetchComedyMovies,
    heightImage : false
  }
];
