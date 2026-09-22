function MovieCard({ movie, onClick }) {
  return (
      <div className="movie-card" onClick={onClick}>

          <img
              src={movie.image}
              alt={movie.movieName}
          />

          <div className="movie-info">
              <p className="movie-name">
                  {movie.movieName}
              </p>

              <p className="episode">
                  Episode {movie.episode}
              </p>
          </div>

      </div>
  );
}

export default MovieCard;