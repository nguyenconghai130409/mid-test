function Explore({ movie }) {
  return (
      <section className="explore">

          <img
              src={movie.image}
              alt={movie.movieName}
              className="explore-image"
          />

          <div className="explore-content">

              <h2>{movie.movieName}</h2>

              <p>{movie.description}</p>

          </div>

      </section>
  );
}

export default Explore;