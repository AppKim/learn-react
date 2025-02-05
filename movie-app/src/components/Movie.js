import { Link } from 'react-router-dom';
import PropsType from 'prop-types';

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt=""></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propsType = {
  id: PropsType.number.isRequired,
  coverImage: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  summary: PropsType.string.isRequired,
  genres: PropsType.arrayOf(PropsType.string).isRequired,
};
export default Movie;
