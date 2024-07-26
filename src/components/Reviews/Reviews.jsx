import { fetchMovieReviews } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './Reviews.module.css';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getReviewsDetails = async () => {
      setLoader(true);
      try {
        const { results } = await fetchMovieReviews(movieId);
        setMovieReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    getReviewsDetails();
  }, [movieId]);

  if (movieReviews.length === 0) {
    return <p>NO REVIEWS</p>;
  }

  return (
    <>
      <ul className={css.wrapper}>
        {movieReviews.map(({ author, content }) => {
          return (
            <li key={nanoid()}>
              <h2 className={css.author}>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
      {loader && <Loader />}
    </>
  );
};
export default Reviews;
