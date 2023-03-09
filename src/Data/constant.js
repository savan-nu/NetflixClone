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
    fetchRandom : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchPopular : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomming : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

