import { fetchMovieDetails } from 'API/API';
import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  Wrapper,
  Img,
  MovieInfo,
  ExtraInfo,
  Link,
  LinksWrapper,
} from './MoviesDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMoviesDetails = async () => {
      setLoader(true);
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMoviesDetails(movieDetails);
        // console.log(movieDetails);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    getMoviesDetails();
  }, [movieId]);

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <Wrapper>
        <div>
          <Img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
          />
        </div>
        <MovieInfo>
          <h1>
            {title} ({release_date ? release_date.substring(0, 4) : ''})
          </h1>
          <p>Rating: {Math.round(vote_average * 100) / 100}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </MovieInfo>
      </Wrapper>
      <ExtraInfo>
        <h3>Additional information</h3>
        <LinksWrapper>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </LinksWrapper>
      </ExtraInfo>
      {loader && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
