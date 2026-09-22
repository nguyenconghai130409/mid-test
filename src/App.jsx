import { useState } from "react";

import movies from "./data/movies";

import Explore from "./components/Explore";
import MovieList from "./components/MovieList";

import "./App.css";

function App() {

    // State lưu phim đang được chọn
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    // Khi click vào phim
    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="app">

            {/* HEADER */}
            <header className="header">

                <h1>Anonime</h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">List anime</a>
                </nav>

                <input
                    type="text"
                    placeholder="Search anime or movie"
                />

            </header>


            {/* MAIN */}
            <main>

                <h2 className="title">
                    Explore
                </h2>

                <p className="subtitle">
                    What are you gonna watch today?
                </p>


                {/* EXPLORE */}
                <Explore movie={selectedMovie} />


                {/* NEW RELEASE */}
                <h2 className="release-title">
                    New Release
                </h2>


                <MovieList
                    movies={movies}
                    onSelectMovie={handleSelectMovie}
                />

            </main>

        </div>
    );
}

export default App;