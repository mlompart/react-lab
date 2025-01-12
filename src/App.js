import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "milligram";
function App() {

  const [title, setTitle] = useState('Wall-E');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  let messege;
  if (title.length < 5) {
    messege = "Tytuł filmu jest za krótki";
  }
  else if (title.length < 15) {
    messege = "Tytuł filmu jest extra!";
  }
  else {
    messege = "Tytuł filmu jest za długi";
  }

  const movies = [
    { title: "Wall-E" },
    { title: "Pulp Fiction" },
    { title: "Matrix" },
    { title: "1670" },
  ];

  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>Titles</h2>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
      </ul>
      <h2>My favourite movies for today is {title}</h2>
      {title.length > 0 && <div>{messege}</div>}
      <input type="text" value={title} onChange={handleChange} />
      <button type="button" onClick={() => alert(title)}>
        Pokaż tytuł filmu
      </button>
    </div>
  );
}

export default App;
