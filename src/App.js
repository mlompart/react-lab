
import './App.css';
import { useState } from 'react';
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";
import "milligram";

function App() {
  const [movies, setMovies] = useState([]);

  return (
       <div>
          <h1>My favourite movies to watch</h1>
          <MoviesList movies={movies}/>
          <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} buttonLabel="Add a movie"/>
       </div>
  );
}

export default App;
