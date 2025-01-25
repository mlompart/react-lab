import React from "react";

function MoviesList( movies ) {
    return (
        <div>
            <h2>Movies List</h2>
            {
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            {movie.title} ({movie.year})
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default MoviesList;
