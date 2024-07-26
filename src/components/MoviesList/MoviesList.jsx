import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.list}>
          {movies.map(({ id, poster_path, title }) => {
            return (
              <li className={css.item} key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200${poster_path}`
                        : `https://placehold.co/200x300?text=Missing+Movie+Poster&font=roboto`
                    }
                    alt={title}
                  ></img>
                </Link>
                <h4 className={css.title}>{title}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
