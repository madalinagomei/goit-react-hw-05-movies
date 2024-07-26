import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '71ee338e8e849b09eba67632ac17254e';

export const fetchTrending = async () => {
  const rest = await axios.get('trending/all/day?api_key=${API_KEY}');
  return rest.data;
};

export const fetchMovieDetails = async movieId => {
  const res = await axios.get('movie/${movieId}?api_key=${API_KEY}');
  return res.data;
};

export const fetchMovieCast = async movieId => {
  const res = await axios.get('movie/${movieId}/credits?api_key=${API_KEY}');
  return res.data;
};

export const fetchMovieReviews = async movieId => {
  const res = await axios.get('movie/${movieId}/reviews?api_key=${API_KEY}');
  return res.data;
};

export const fetchSearchMovies = async query => {
  const res = await axios.get(
    'search/movie?api_key=${API_KEY}&language=en-US&page=1&include+adult=false&query=${query}'
  );
  return res.data;
};
