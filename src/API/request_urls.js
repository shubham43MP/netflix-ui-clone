const languageIndia = "en-IN"
const languageUS = "en-US"
const fetch_requests = {
  trendingIndia: `/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}`,
  netflixOriginalsTV: `/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=${languageUS}&sort_by=popularity.desc&with_networks=213`,
  netflixOriginalsMovie: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}`,
  popularOnNetflix: `/tv/popular?api_key=${process.env.REACT_APP_APIKEY}&language=${languageUS}&page=1`,
  topRated: `/tv/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=${languageUS}&page=1`,
  actionMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
  scienceFiction: `/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=${languageIndia}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=878&with_networks=213`,
}

export default fetch_requests
