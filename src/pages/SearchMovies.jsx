import { fetchSearchMovies } from 'API/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/searchForm/searchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const moviesName = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;
    const getMovies = async () => {
      setLoader(true);
      try {
        const { results } = await fetchSearchMovies(moviesName);
        setMovies(results);
        if (results.length === 0) {
          alert('No movies are matching your query!');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, [moviesName]);

  return (
    <>
      <SearchForm value={moviesName} onSearch={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loader && <Loader />}
    </>
  );
};

export default SearchMovies;
