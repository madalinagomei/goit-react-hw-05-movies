import { fetchTrending } from 'API/API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/Title/Title';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setLoader(true);
      try {
        const { results } = await fetchTrending();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    getImages();
  }, []);
  return (
    <>
      <Title />
      <MoviesList movies={movies} />
      {loader && <Loader />}
    </>
  );
};

export default Home;
