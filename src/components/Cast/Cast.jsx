import { fetchMovieCast } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [castDetails, setCastDetails] = useState([]);
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCastDetails(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    getCastDetails();
  }, [movieId]);

  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.castList}>
          {castDetails.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`
                  }
                  alt={name}
                />
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Cast;
