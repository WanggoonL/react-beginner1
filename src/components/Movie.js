import PropTypes from "prop-types";

function Movie({ coverImg, title, year, runtime, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <h4>
        Year : {year}, Runtime : {runtime}
      </h4>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
